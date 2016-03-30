import React from 'react';
import { IndexLink } from 'react-router';

const App = React.createClass({
    render(){
        return (
            <div className="root">
                <div className="ui pointing menu">
                    <IndexLink className="item" to={'/'} activeClassName="active">
                        首页
                    </IndexLink>
                    <IndexLink className="item" to={'/comments'} activeClassName="active">
                        留言
                    </IndexLink>
                    <IndexLink className="item" to={'/about'} activeClassName="active">
                        关于我们
                    </IndexLink>
                </div>
                {this.props.children}
            </div>
        );
    }
});
module.exports = App;