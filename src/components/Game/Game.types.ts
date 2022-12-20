export interface ExpiryTimestamp {
  minutes: number;
  seconds: number;
}

export enum QuizTypes {
  MAP = 1,
  FLAG,
}

export interface LeaderboardEntry {
  id: number;
  quizId: number;
  userId: number;
  username: string;
  countryCode: string;
  score: number;
  time: number;
  added: Date;
  rank: number;
}
