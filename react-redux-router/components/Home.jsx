import React from 'react';

const Home = React.createClass({
    render(){
        return (
            <div className="container">
                    <div className="s-word-box">
                        <div className="s-words">
                            <div className="s-words-float">
                                <span className="s-word">A</span>
                                <span className="s-word">B</span>
                                <span className="s-word">C</span>
                                <span className="s-word">D</span>
                                <span className="s-word">E</span>
                                <span className="s-word">F</span>
                                <span className="s-word">G</span>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
});

module.exports = Home;