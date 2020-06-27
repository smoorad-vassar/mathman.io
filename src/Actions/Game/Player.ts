export const setNextDirection = (degree: number) => {
  return {
    type: "setDegree",
    payload: {
      degree,
    },
  };
};
