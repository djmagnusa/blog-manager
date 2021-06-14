import uuid from 'uuid';
import database from '../firebase/firebase';

// CREATE_POST
export const createPost = (post) => ({
    type: 'CREATE_POST',
    post
})

export const startAddPost = (postData = {}) => {
    
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
           title = '',
           description = '',
        } = postData

        const post = { title, description }
        
        return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
            dispatch(createPost({
                id: ref.key,
                ...post
            }));
        });

    };
};



// REMOVE_POST
export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const startRemovePost = ({ id } = {}) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removePost({ id }));
        })
    };
};

// EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});
