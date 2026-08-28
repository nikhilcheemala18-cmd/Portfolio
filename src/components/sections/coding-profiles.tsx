import { CodingProfileCard } from "@/components/profiles/coding-profile-card";
import { SectionContainer } from "@/components/sections/section-container";
import { codingProfiles } from "@/data/profiles";

export function CodingProfiles() {
  return (
    <SectionContainer
      id="profiles"
      eyebrow="Profiles"
      title="Coding Profiles"
      description="Technical profiles, competitive programming milestones, and code platform identity."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {codingProfiles.map((profile) => (
          <CodingProfileCard key={profile.platform} profile={profile} />
        ))}
      </div>
    </SectionContainer>
  );
}
