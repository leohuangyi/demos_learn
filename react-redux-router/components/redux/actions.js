function update_comments(){
    return function(dispatch){
        var comments = JSON.parse(window.localStorage.getItem('comments'));
        console.log(comments);
        if(!comments || comments.length < 1){
            $.ajax({
                'dataType': 'json',
                'url': '/react-redux-router/data/comments.json',

            }).done(function(res){
                window.localStorage.setItem('comments', JSON.stringify(res.data))
                dispatch({
                    type: 'UPDATE_COMMENTS',
                    data: res.data
                });
            });
        }else{
            dispatch({
                type: 'UPDATE_COMMENTS',
                data: comments
            });
        }
    }
};
function add_comments( newComments){
    return function(dispatch){
        window.localStorage.setItem('comments', JSON.stringify(newComments));
        dispatch({
            type: 'ADD_COMMENTS',
            data: newComments
        })
    }
}

function update_about(){
    return function(dispatch){
        $.ajax({
            'dataType': 'json',
            'url': '/react-redux-router/data/about.json'
        }).done(function(res){
            dispatch({
                type:'UPDATE_ABOUT',
                data: res.data.join('')
            });
        });
    }
}

module.exports = {
    update_comments: update_comments,
    add_comments: add_comments,
    update_about: update_about
};