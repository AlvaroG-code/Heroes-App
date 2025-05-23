import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//     logged: false,
// };

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: !!user,
        user: user,
    };
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = "") => {
        const user = { id: "ABC", name: name };

        const action = {
            type: types.login,
            payload: user,
        };

        localStorage.setItem("user", JSON.stringify(user));

        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem("user"); // remove user from local storage
        const action = {
            // remove user from state
            type: types.logout,
        };

        dispatch(action); // dispatch action to remove user from state
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
