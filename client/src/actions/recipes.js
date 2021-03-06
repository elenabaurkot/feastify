import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_RECIPES,
    GET_MY_RECIPES,
    RECIPES_ERROR,
    GET_RECIPES_BY_USER
} from './types';

// Get recipes
export const getRecipes = () => async dispatch => {
    try {
        const res = await axios.get('/api/recipes');

        dispatch({
            type: GET_RECIPES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: RECIPES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Get current user's recipes
export const getMyRecipeBook = () => async dispatch => {
    try {
        const res = await axios.get('/api/recipes/me');

        dispatch({
            type: GET_MY_RECIPES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: RECIPES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get recipes by User ID
export const getRecipesByUserId = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/recipes/user/${userId}`);

        dispatch({
            type: GET_RECIPES_BY_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: RECIPES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};



// Add recipe
export const addRecipe = (
    formData, 
    history, 
    edit = false
) => async dispatch => {   
    const config = {
        headers: {
            'Content-Type': 'application/json'
            }
        };
    const res = await axios.post('/api/recipes', formData, config)
    try {
        dispatch(setAlert('Recipe Added!', 'success'));
            if(!edit) {
            history.push('/dashboard');
        }
    } catch (err) {
        dispatch({
            type: RECIPES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
