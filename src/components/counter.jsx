import React from 'react';
import MarkdownData from '../data/post.md';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }

    climb = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div onClick={this.climb}>
                <h1>Counting: {this.state.count}</h1>
                <div
                    className={'content'}
                    dangerouslySetInnerHTML={{ __html: MarkdownData }}
                ></div>
            </div>
        );
    }
}
