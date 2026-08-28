export type CodingProfilePlatform =
  | "leetcode"
  | "codechef"
  | "smart-interviews"
  | "github";

export type CodingProfile = {
  platform: CodingProfilePlatform;
  name: string;
  username: string;
  profileUrl?: string;
  problemsSolved?: string;
  rating?: string;
  contestsAttended?: string;
  rank?: string;
  badge?: string;
  note?: string;
  gauge?: {
    value: number;
    label: string;
  };
};
