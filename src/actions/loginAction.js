
export function userLogin(data) {
    console.log('Action Call---->', data)
    return async (dispatch, getState) => {
        dispatch({
            type: 'userData',
            subtype: 'loading',
        });
        const response = {
            data
        };
        if (response.error) {
            dispatch({
                type: 'userData',
                error: response.error,
            });
        } else {
            dispatch({
                type: 'userData',
                subtype: 'success',
                UserData: response
            });
        }

    };
}

export function userRegister(data) {
    console.log('Action Call---->', data)
    return async (dispatch, getState) => {
        dispatch({
            type: 'registerData',
            subtype: 'loading',
        });
        const response = {
            data
        };
        if (response.error) {
            dispatch({
                type: 'registerData',
                error: response.error,
            });
        } else {
            dispatch({
                type: 'registerData',
                subtype: 'success',
                registerData: response
            });
        }

    };
}