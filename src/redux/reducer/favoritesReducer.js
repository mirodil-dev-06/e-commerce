const loadFavorites = () => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadFavorites(),
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_TO_FAVORITES": {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (exists) return state;

      const updatedItems = [...state.items, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    }

    case "REMOVE_FROM_FAVORITES": {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    }

    case "LOAD_FAVORITES": {
      return { ...state, items: loadFavorites() };
    }

    default:
      return state;
  }
};
