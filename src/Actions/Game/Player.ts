export const setNextDirection = (degree: number) => {
  return {
    type: "set",
    payload: {
      degree,
    },
  };
};
