export const SET_USER_INFO = 'SET_USER_INFO'


export interface UserDataAction {
    type: string
    data: object
}

export const setUserInfo= (data:object):UserDataAction  => {
    return {
        type: SET_USER_INFO,
        data
    }
}
