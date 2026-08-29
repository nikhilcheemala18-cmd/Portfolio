"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  opacity: number;
  phase: number;
};

const NODE_COLORS = ["#4fd1ff", "#88aaff", "#b388ff", "#e5e7ff"];
const LINK_DISTANCE = 122;
const HIT_RADIUS = 18;

function seededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function getNodeCount(width: number) {
  if (width < 640) {
    return 46;
  }

  if (width < 1024) {
    return 76;
  }

  return 112;
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element
    ? Boolean(target.closest("a, button, input, textarea, select, [role='button']"))
    : false;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getCanvasPoint(canvas: HTMLCanvasElement, clientX: number, clientY: number) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
    inside:
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom,
  };
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes: NodePoint[] = [];
    const pointer = {
      active: false,
      draggingId: null as number | null,
      x: -9999,
      y: -9999,
      offsetX: 0,
      offsetY: 0,
    };
    let animationFrame = 0;
    let cssWidth = 0;
    let cssHeight = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.max(1, Math.round(rect.width));
      const nextHeight = Math.max(1, Math.round(rect.height));
      const nextPixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      cssWidth = nextWidth;
      cssHeight = nextHeight;
      canvas.width = Math.round(nextWidth * nextPixelRatio);
      canvas.height = Math.round(nextHeight * nextPixelRatio);
      context.setTransform(nextPixelRatio, 0, 0, nextPixelRatio, 0, 0);

      const random = seededRandom(nextWidth * 17 + nextHeight * 29);
      const targetCount = reducedMotion.matches
        ? Math.round(getNodeCount(nextWidth) * 0.55)
        : getNodeCount(nextWidth);

      nodes.length = 0;

      for (let index = 0; index < targetCount; index += 1) {
        const x = random() * nextWidth;
        const y = random() * nextHeight;

        nodes.push({
          id: index,
          x,
          y,
          baseX: x,
          baseY: y,
          radius: 1.45 + random() * 1.45,
          color: NODE_COLORS[Math.floor(random() * NODE_COLORS.length)],
          opacity: 0.42 + random() * 0.38,
          phase: random() * Math.PI * 2,
        });
      }

      canvas.dataset.nodeCount = String(nodes.length);
    };

    const findNearestNode = (x: number, y: number) => {
      let nearest: NodePoint | null = null;
      let nearestDistance = HIT_RADIUS;

      for (const node of nodes) {
        const distance = Math.hypot(node.x - x, node.y - y);

        if (distance < nearestDistance) {
          nearest = node;
          nearestDistance = distance;
        }
      }

      return nearest;
    };

    const drawNode = (node: NodePoint, time: number) => {
      const isDragging = pointer.draggingId === node.id;
      const twinkle = reducedMotion.matches ? 0 : Math.sin(time * 0.00045 + node.phase) * 0.12;
      const opacity = clamp(node.opacity + twinkle + (isDragging ? 0.24 : 0), 0.2, 1);
      const radius = node.radius + (isDragging ? 1.6 : 0);

      context.save();
      context.shadowBlur = isDragging ? 18 : 10;
      context.shadowColor = node.color;
      context.fillStyle = node.color;
      context.globalAlpha = opacity;
      context.beginPath();
      context.arc(node.x, node.y, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const drawLinks = () => {
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const source = nodes[i];
          const target = nodes[j];
          const distance = Math.hypot(source.x - target.x, source.y - target.y);

          if (distance > LINK_DISTANCE) {
            continue;
          }

          const strength = 1 - distance / LINK_DISTANCE;
          const draggedBoost =
            pointer.draggingId === source.id || pointer.draggingId === target.id ? 0.08 : 0;

          context.save();
          context.strokeStyle = source.color;
          context.globalAlpha = clamp(0.04 + strength * 0.18 + draggedBoost, 0, 0.28);
          context.lineWidth = 0.55 + strength * 0.45;
          context.beginPath();
          context.moveTo(source.x, source.y);
          context.lineTo(target.x, target.y);
          context.stroke();
          context.restore();
        }
      }
    };

    const settleNodes = () => {
      if (pointer.draggingId !== null || reducedMotion.matches) {
        return;
      }

      for (const node of nodes) {
        const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);

        if (pointer.active && distance < 118) {
          const force = (1 - distance / 118) * 2.2;
          const angle = Math.atan2(node.y - pointer.y, node.x - pointer.x);
          node.x = clamp(node.x + Math.cos(angle) * force, 0, cssWidth);
          node.y = clamp(node.y + Math.sin(angle) * force, 0, cssHeight);
          continue;
        }

        node.x += (node.baseX - node.x) * 0.045;
        node.y += (node.baseY - node.y) * 0.045;
      }
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, cssWidth, cssHeight);
      settleNodes();
      drawLinks();

      for (const node of nodes) {
        drawNode(node, time);
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const point = getCanvasPoint(canvas, event.clientX, event.clientY);
      pointer.active = point.inside;
      pointer.x = point.x;
      pointer.y = point.y;

      if (pointer.draggingId === null) {
        return;
      }

      const dragged = nodes.find((node) => node.id === pointer.draggingId);

      if (!dragged) {
        return;
      }

      dragged.x = clamp(point.x - pointer.offsetX, 0, cssWidth);
      dragged.y = clamp(point.y - pointer.offsetY, 0, cssHeight);
      dragged.baseX = dragged.x;
      dragged.baseY = dragged.y;
      canvas.dataset.dragCurrent = `${Math.round(dragged.x)},${Math.round(dragged.y)}`;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (reducedMotion.matches || isInteractiveTarget(event.target)) {
        return;
      }

      const point = getCanvasPoint(canvas, event.clientX, event.clientY);

      if (!point.inside) {
        return;
      }

      const nearest = findNearestNode(point.x, point.y);

      if (!nearest) {
        return;
      }

      pointer.draggingId = nearest.id;
      pointer.x = point.x;
      pointer.y = point.y;
      pointer.offsetX = point.x - nearest.x;
      pointer.offsetY = point.y - nearest.y;
      canvas.dataset.draggingNode = String(nearest.id);
      canvas.dataset.dragStart = `${Math.round(nearest.x)},${Math.round(nearest.y)}`;
      canvas.dataset.dragCurrent = `${Math.round(nearest.x)},${Math.round(nearest.y)}`;
      canvas.style.cursor = "grabbing";
      event.preventDefault();
    };

    const handlePointerUp = () => {
      if (pointer.draggingId !== null) {
        canvas.dataset.lastDraggedNode = String(pointer.draggingId);
        canvas.dataset.lastDragEnd = canvas.dataset.dragCurrent || "";
      }

      pointer.draggingId = null;
      canvas.dataset.draggingNode = "";
      canvas.style.cursor = pointer.active ? "grab" : "default";
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.draggingId = null;
      pointer.x = -9999;
      pointer.y = -9999;
      canvas.dataset.draggingNode = "";
      canvas.style.cursor = "default";
    };

    const handleCursor = (event: PointerEvent) => {
      if (pointer.draggingId !== null) {
        canvas.style.cursor = "grabbing";
        return;
      }

      const point = getCanvasPoint(canvas, event.clientX, event.clientY);
      pointer.active = point.inside;
      pointer.x = point.x;
      pointer.y = point.y;
      canvas.style.cursor = point.inside && findNearestNode(point.x, point.y) ? "grab" : "default";
    };

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointermove", handleCursor);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("blur", handlePointerLeave);
    reducedMotion.addEventListener("change", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointermove", handleCursor);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("blur", handlePointerLeave);
      reducedMotion.removeEventListener("change", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_48%,rgba(79,209,255,0.18),transparent_22rem),radial-gradient(circle_at_18%_80%,rgba(136,170,255,0.11),transparent_20rem),radial-gradient(circle_at_64%_18%,rgba(179,136,255,0.13),transparent_18rem),linear-gradient(135deg,rgba(5,11,24,0.86),rgba(8,15,29,0.52)_45%,rgba(3,7,18,0.9))]" />
      <canvas
        ref={canvasRef}
        id="hero-particle-network"
        className="pointer-events-auto absolute inset-0 h-full w-full opacity-95"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(8,15,29,0.52),transparent_23rem),radial-gradient(circle_at_72%_46%,rgba(8,15,29,0.38),transparent_20rem),linear-gradient(90deg,rgba(8,15,29,0.66),rgba(8,15,29,0.16)_50%,rgba(8,15,29,0.52))]" />
    </div>
  );
}
