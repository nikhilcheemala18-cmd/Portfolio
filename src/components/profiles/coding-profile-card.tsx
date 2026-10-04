import { ExternalLink, GraduationCap } from "lucide-react";
import type { CSSProperties, ElementType } from "react";
import { SiChessdotcom, SiCodechef, SiLeetcode } from "react-icons/si";

import { Card, CardContent } from "@/components/ui/card";
import type { CodingProfile } from "@/types/profile";

type CodingProfileCardProps = {
  profile: CodingProfile;
};

type ProfileStat = {
  label: string;
  value?: string;
};

const platformMeta = {
  leetcode: {
    icon: SiLeetcode,
    accent: "#f5a623",
    surface: "rgba(245, 166, 35, 0.12)",
    label: "Algorithm practice",
  },
  codechef: {
    icon: SiCodechef,
    accent: "#c8a27a",
    surface: "rgba(200, 162, 122, 0.12)",
    label: "Competitive programming",
  },
  "smart-interviews": {
    icon: GraduationCap,
    accent: "#38bdf8",
    surface: "rgba(56, 189, 248, 0.12)",
    label: "Interview preparation",
  },
  chess: {
    icon: SiChessdotcom,
    accent: "#7fa650",
    surface: "rgba(127, 166, 80, 0.13)",
    label: "Strategic problem solving",
  },
} satisfies Record<
  CodingProfile["platform"],
  {
    icon: ElementType<{ className?: string }>;
    accent: string;
    surface: string;
    label: string;
  }
>;

export function CodingProfileCard({ profile }: CodingProfileCardProps) {
  const meta = platformMeta[profile.platform];
  const Icon = meta.icon;
  const stats: ProfileStat[] = [
    { label: "Problems Solved", value: profile.problemsSolved },
    { label: "Rating", value: profile.rating },
    { label: "Rapid Rating", value: profile.rapidRating },
    { label: "Blitz Rating", value: profile.blitzRating },
    { label: "Contests Attended", value: profile.contestsAttended },
    { label: "Rank", value: profile.rank },
    { label: "Badge", value: profile.badge },
  ].filter((stat) => stat.value);

  return (
    <Card
      className="relative rounded-xl border-white/[0.08] bg-[linear-gradient(145deg,var(--profile-surface),rgba(18,18,19,0.9)_42%,rgba(6,6,7,0.96))] p-0 shadow-lg shadow-black/28 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--profile-accent)] hover:shadow-xl hover:shadow-black/36"
      style={
        {
          "--profile-accent": meta.accent,
          "--profile-surface": meta.surface,
        } as CSSProperties
      }
    >
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--profile-accent),transparent)] opacity-65" />
      <CardContent className="space-y-6 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-background/55 shadow-md shadow-black/16">
              <Icon
                className="size-5"
                style={{ color: meta.accent }}
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold leading-tight text-foreground">
                {profile.name}
              </h3>
              <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                {profile.username}
              </p>
            </div>
          </div>
          {profile.profileUrl ? (
            <a
              href={profile.profileUrl}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-background/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
              aria-label={`${profile.name} profile link`}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {profile.gauge ? (
          <div className="grid items-end gap-5 sm:grid-cols-[11rem_1fr]">
            <SpeedometerGauge
              value={profile.gauge.value}
              label={profile.gauge.label}
              primaryValue={profile.problemsSolved}
              accent={meta.accent}
            />
            <ProfileStats stats={stats} />
          </div>
        ) : (
          <ProfileStats stats={stats} />
        )}

        <p className="border-t border-white/[0.08] pt-4 text-xs font-semibold uppercase text-muted-foreground">
          {meta.label}
        </p>
        {profile.note ? (
          <p className="-mt-3 text-sm leading-6 text-muted-foreground">
            {profile.note}
          </p>
        ) : null}
        {profile.tags?.length ? (
          <div className="-mt-3 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-background/35 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

function SpeedometerGauge({
  value,
  label,
  primaryValue,
  accent,
}: {
  value: number;
  label: string;
  primaryValue?: string;
  accent: string;
}) {
  const clampedValue = Math.max(0, Math.min(value, 100));

  return (
    <div
      className="mx-auto w-44 text-center sm:mx-0"
      aria-label={`${label}: ${primaryValue ?? clampedValue}`}
    >
      <div className="relative h-24">
        <svg viewBox="0 0 180 104" className="h-full w-full overflow-visible">
          <path
            d="M 18 90 A 72 72 0 0 1 162 90"
            pathLength="100"
            fill="none"
            stroke="rgba(148, 163, 184, 0.2)"
            strokeLinecap="round"
            strokeWidth="14"
          />
          <path
            d="M 18 90 A 72 72 0 0 1 162 90"
            pathLength="100"
            fill="none"
            stroke={accent}
            strokeDasharray="100"
            strokeDashoffset={100 - clampedValue}
            strokeLinecap="round"
            strokeWidth="14"
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0">
          <p className="font-mono text-3xl font-semibold tabular-nums text-foreground">
            {primaryValue}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
}

function ProfileStats({ stats }: { stats: ProfileStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-white/[0.07] bg-background/30 p-3"
        >
          <p className="text-xs text-muted-foreground">{stat.label}</p>
          <p className="mt-1 break-words font-mono text-base font-semibold tabular-nums text-foreground sm:text-lg">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
