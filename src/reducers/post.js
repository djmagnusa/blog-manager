const postDefaultState = [];

export default (state = postDefaultState, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            return [
                ...state, 
                action.post
            ]

        case 'REMOVE_POST':
            return state.filter

        case 'EDIT_POST':
            return

        case 'UPDATE_POST':
            return
    }
}