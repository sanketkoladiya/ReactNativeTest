
const initialState = {
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {
        case 'userData': {
            return {
                ...state,
                UserData: action.subtype === 'success' ? action.UserData : state.UserData,
            }
        };
        case 'registerData': {
            return {
                ...state,
                UserData: action.subtype === 'success' ? action.registerData : state.registerData,
            }
        };
        default:
            return state;
    }
}
