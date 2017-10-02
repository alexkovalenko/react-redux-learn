import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POST = 'FETCH_POST',
    CREATE_POST = 'CREATE_POST',
    DELETE_POST = 'DELETE_POST';

const POSTS_API_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY_PARAM = '?key=HOLYM0DER';

export function fetchPosts() {
    const request = axios.get(`${POSTS_API_URL}${API_KEY_PARAM}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(post, callback) {
    const request = axios.post(`${POSTS_API_URL}${API_KEY_PARAM}`, post)
        .then(callback);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPostById(id) {
    const request = axios.get(`${POSTS_API_URL}/${id}${API_KEY_PARAM}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePostById(id, callback) {
    axios.delete(`${POSTS_API_URL}/${id}${API_KEY_PARAM}`)
        .then(callback);
    return {
        type: DELETE_POST,
        payload: id
    }
}