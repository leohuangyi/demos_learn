import React from 'react';
import {connect} from 'react-redux';

const About = React.createClass({
    render(){
        return (
            <div className="margin1rem">
                <div className="ui segment">
                    <h2>关于我们</h2>
                    <div dangerouslySetInnerHTML={(function(){return {__html: this.props.about}}).bind(this)()}>
                    </div>
                </div>
            </div>
        );
    }
});
function mapStateToProps(state) {
    return {
        about: state.about
    }
}

module.exports = connect(mapStateToProps)( About);