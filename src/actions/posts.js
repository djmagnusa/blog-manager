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
           createdAt = 0
        } = postData

        const post = { title, description, createdAt }
        
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
        return database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
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

export const startEditPost = (id, updates) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${id}`).update(updates).then(() => {
            dispatch(editPost(id, updates));
        })
    }
}

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {  //for fetching the data from firebase in app.js so that we dont lose data on refresh
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
            const posts = [];

            snapshot.forEach((childSnapshot) => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPosts(posts))
        });
    };
;}
