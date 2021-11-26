import usersService from "../services/users";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return action.data;
        case "NEW_USER":
            return [...state, action.data];
        case "UPDATE_USER":
            return state.map((user) => {
                return user.id === action.data.id ? action.data : user;
            });
        case "DELETE_USER":
            return state.reduce((sum, user) => {
                if (user.id === action.data.id) {
                    return sum;
                } else {
                    return sum.concat(user);
                }
            }, []);
        default:
            return state;
    }
};

export const loadUsers = () => {
    return async (dispatch) => {
        const users = await usersService.getAllUsers();
        dispatch({
            type: "LOAD_USERS",
            data: users,
        });
    };
};

export const updateUser = (user) => {
    return async (dispatch) => {
        const updatedUser = await usersService.updateUser(user);
        dispatch({
            type: "UPDATE_USER",
            data: updatedUser,
        });
    };
};

export const createUser = (user) => {
    return async (dispatch) => {
        const response = await usersService.createUser(user);
        const newUser = response[0];
        dispatch({
            type: "NEW_USER",
            data: newUser,
        });
    };
};

export const deleteUser = (user, token) => {
    return async (dispatch) => {
        const response = await usersService.deleteUser(user, token);
        dispatch({
            type: "DELETE_USER",
            data: { user, response },
        });
    };
};

export default usersReducer;
