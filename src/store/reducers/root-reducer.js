//@ts-check

const initialState = {
  page: 1,
  pages: 0,
  perpage: 12,
  photo: [],
  result: [],
  status: 200,
  date: "2019-02-22T10:36:05",
  resultsPerPage: 10,
  title: "Recent photos",
  numberOfResults: 4,
  connectionError: 0,
  errorMessage: "error connecting to server",
  loadingMessage: "Searching for recent photos..."
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        photo: [...state.photo, ...action.payload.photo],
        connectionError: 0,
        page: action.payload.page
      };
    case "RESULT":
      return {
        ...state,
        photo: action.payload.photo,
        connectionError: 0,
        page: action.payload.page
      };
    case "CONNECTION_ERROR":
      return { ...state, connectionError: 1 };
    default:
      return state;
  }
};

export default rootReducer;
