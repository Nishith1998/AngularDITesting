export const ALL_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

export const getRandomChar = (): string => {
  let min = 0;
  let max = ALL_CHARS.length;
  return ALL_CHARS[Math.floor(Math.random() * (max - min) + min)];
};
