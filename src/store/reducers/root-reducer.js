//@ts-check

const initialState = {
  page: 1,
  pages: 1,
  perpage: 12,
  photo: [],
  result: [],
  status: 200,
  date: "2019-02-22T10:36:05",
  title: "Recent photos",
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
        page: action.payload.page,
        pages: action.payload.pages
      };
    case "RESULT":
      return {
        ...state,
        photo: action.payload.photo,
        connectionError: 0,
        page: action.payload.page,
        pages: action.payload.pages
      };

    case "CONNECTION_ERROR":
      return { ...state, connectionError: 1 };
    default:
      return state;
  }
};

export default rootReducer;
