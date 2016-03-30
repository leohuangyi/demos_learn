import {
    combineReducers
} from 'redux';

const initState = {
    comments: [],
    about: ''
};

function comments(comments = initState.comments, action){
    switch (action.type){
        case 'UPDATE_COMMENTS':
            return action.data;
            break;
        case 'ADD_COMMENTS':
            return action.data;
            break;
        default:
            return comments;
    }
};

function about(about = initState.about, action){
    if(action.type == 'UPDATE_ABOUT'){
        return action.data;
    }
    return about;
}

module.exports = combineReducers({
    comments: comments,
    about: about
});

