export interface Level {
  listen: number;
  speak: number;
  read: number;
  write: number;
}

export interface Language {
  language: string;
  level: Level;
}