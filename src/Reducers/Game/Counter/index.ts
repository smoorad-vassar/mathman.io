const counterReducer = (state = 1, action: any) => {
  switch (action.type) {
    case "reset":
      return 0;
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;
