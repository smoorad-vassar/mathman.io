import tiles from "../../../Components/Game/Tiles/Tiles";

const tilesReducer = (state = tiles, action: any) => {
  var newState;
  switch (action.type) {
    case "eat":
      newState = [...state];
      newState[action.payload.top][action.payload.left].state = 0;
      return newState;
    case "clear":
      newState = [...state];
      for (var i = 0; i < newState.length; i++) {
        for (var j = 0; j < newState[0].length; j++) {
          newState[i][j].cleanTile();
        }
      }
      return newState;
    default:
      return state;
  }
};

export default tilesReducer;
