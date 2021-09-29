const userReducer = (state = {}, action) => {
    switch(action.type){
        case "setUser":
            return action.data;
    }
    return state;
};

export default userReducer;