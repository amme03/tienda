const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CARD':
            var existe = false;
            state.forEach(element => {
                if (element._id === action.payload._id) {
                    existe = true;
                }
            });
            return existe ? state : [...state, action.payload]


        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem._id !== action.payload._id)
    }
    return state;
}

export default cartItems;