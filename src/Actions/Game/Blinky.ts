export const moveBlinky = () => {
  return {
    type: "move",
  };
};

export const changeBlinkyDirection = (degree: number) => {
  return {
    type: "changeDirection",
    payload: {
      degree,
    },
  };
};
