interface WindowSize {
  windowSize: number;
}

export const useWindowSize = (): WindowSize => {
  return { windowSize: window.innerWidth };
};
