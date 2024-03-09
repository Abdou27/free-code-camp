const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    // Change code below this line
    return {
        ...state,
        login: action?.type === 'LOGIN' ? true : state.login,
    }
    // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};