export const clearAllTiles = () => {
  return {
    type: "clear",
  };
};

export const eatDot = (top: number, left: number) => {
  return {
    type: "eat",
    payload: {
      top,
      left,
    },
  };
};
