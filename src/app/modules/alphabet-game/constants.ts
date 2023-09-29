export const ALL_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

export type Alphabet = {
  char: any;
  margin: number;
};

export type Difficulty = { level: number; time: number };

export const getRandomChar = (): string => {
  let min = 0;
  let max = ALL_CHARS.length;
  return ALL_CHARS[Math.floor(Math.random() * (max - min) + min)];
};
