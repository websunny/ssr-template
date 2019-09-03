import { UserDataAction, SET_USER_INFO } from '../actions/admin'


const initialState = {
    userInfo: {}
}

export default (state = initialState, action: UserDataAction) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.data
            }
        default:
            return state
    }
}
