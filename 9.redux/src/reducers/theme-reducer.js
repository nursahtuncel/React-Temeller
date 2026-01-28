const initialState = {
  theme: "açık",
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE_THEME":
      return {
        ...state,
        theme: state.theme === "açık" ? "koyu" : "açık",
      };

    default:
      return state;
  }
};

export default ThemeReducer;
