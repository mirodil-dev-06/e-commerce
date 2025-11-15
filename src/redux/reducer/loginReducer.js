const initialState = {
  admin: null,
  token: localStorage.getItem("access-admin-token") || "",
  isLogged: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("access-admin-token", action.payload.accessToken);
      return {
        admin: action.payload.user,
        token: action.payload.accessToken,
        isLogged: true,
      };

    case "LOGOUT":
      localStorage.removeItem("access-admin-token");
      return {
        admin: null,
        token: "",
        isLogged: false,
      };

    default:
      return state;
  }
};

export { loginReducer };
