import loginService from "../services/login";

const initialState = () => {
    if (localStorage.login) {
        const data = JSON.parse(localStorage.login);
        return { data, online: true };
    } else {
        return { online: false };
    }
};

const loginReducer = (state = initialState(), action) => {
    switch (action.type) {
        case "LOGIN":
            return action;
        case "LOGOUT":
            return action;
        case "ERROR":
            return { ...action, online: state.online };
        default:
            return state;
    }
};

export const login = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await loginService.login(credentials);
            dispatch({
                type: "LOGIN",
                online: true,
                data: { ...response },
            });
        } catch (error) {
            dispatch({
                type: "ERROR",
                data: { ...error },
            });
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "LOGOUT",
                online: false,
            });
        } catch (error) {
            dispatch({
                type: "ERROR",
                data: { ...error },
            });
        }
    };
};

export default loginReducer;
