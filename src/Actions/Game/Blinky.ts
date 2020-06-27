export const moveBlinky = () => {
  return {
    type: "moveBlinky",
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
