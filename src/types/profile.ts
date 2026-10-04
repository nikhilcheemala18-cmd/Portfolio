export type CodingProfilePlatform =
  | "leetcode"
  | "codechef"
  | "smart-interviews"
  | "chess";

export type CodingProfile = {
  platform: CodingProfilePlatform;
  name: string;
  username: string;
  profileUrl?: string;
  problemsSolved?: string;
  rating?: string;
  rapidRating?: string;
  blitzRating?: string;
  contestsAttended?: string;
  rank?: string;
  badge?: string;
  note?: string;
  tags?: string[];
  gauge?: {
    value: number;
    label: string;
  };
};
