import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Actions from './redux/actions';

const Comment = React.createClass({
    getInitialState(){
        return {
            user: '小A',
            content: ''
        }
    },
    render(){
        return (
            <div className="margin1rem">
                <div className="ui segment">
                    <div className="ui comments">
                        <h3 className="ui dividing header">留言</h3>
                        {this.props.comments.map((comment) => {
                            return (
                                <div key={comment.id} className="comment">
                                    <a className="avatar">
                                        <img src={comment.thumb}/>
                                    </a>
                                    <div className="content">
                                        <a className="author">{comment.user}</a>
                                        <div className="metadata">
                                            <span className="date">{comment.date}</span>
                                        </div>
                                        <div className="text">
                                            {comment.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <form id="goComment" className="ui reply form">
                            <div className="field">
                                <label>昵称：</label>
                                <input value={this.state.user} onChange={this._onUserChange} />
                            </div>
                            <div className="field">
                                <label>内容：</label>
                                <textarea onChange={this._onContentChange} value={this.state.content}></textarea>
                            </div>
                            <div onClick={this.props.onSubmitComment.bind(this)}  className="ui blue labeled submit icon button">
                                <i className="icon edit"></i> 留言
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    },
    _onUserChange(event){
        this.setState(
            {
                user: event.target.value
            }
        );
    },
    _onContentChange(event){
        this.setState(
            {
                content: event.target.value
            }
        );
    },

});
function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}
function mapDispatchToProps(dispatch){
    return {
        onSubmitComment(){
            var date = new Date();
            var dateStr = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
                + ' ' + date.getHours() + ':' + date.getMinutes();

            var newComment = {
                id: date.getTime(),
                date: dateStr,
                user: this.state.user,
                content: this.state.content,
                thumb: '/react-redux-router/assets/img/thumb1.jpeg'
            };
            dispatch(Actions.add_comments(this.props.comments.concat(newComment)));
            this.setState({
                'content': ''
            });
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Comment);
