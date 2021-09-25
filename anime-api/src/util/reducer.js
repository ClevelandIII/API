export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_HITS":
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        last_page: action.payload.last_page,
      };
    case "SET_USER":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "PAGE_UP": {
      let newPage = state.page;
      if (newPage > state.last_page) {
        newPage = 0;
      }
      return {
        ...state,
        page: newPage,
      };
    }
    case "PAGE_DOWN": {
      let newPage = state.page;
      if (newPage === 0) {
        newPage = 20;
      }
      return {
        ...state,
        page: newPage,
      };
    }
    default:
      throw new Error(`No Matching ${action.type} action type`);
  }
};
