import React from 'react';
import { keys, getLocalItem, setLocalItem, removeLocalItem } from '../services/storage';

class Home extends React.Component {
    constructor(props) {
        super(props);

        let count = JSON.parse(getLocalItem(keys.count));
        if (!count) {
            count = 0;
        }
        
        this.state = {
            count: count
        };
    }

    onAddClick() {
        let count = this.state.count + 1;
        this.setState({
            count: count
        });
        setLocalItem(keys.count, count);
    }

    onRemoveClick() {
        this.setState({ count: 0 });
        removeLocalItem(keys.count);
    }

    render() {
        return (
            <div>
                Count: {this.state.count} <br />
                <button onClick={this.onAddClick.bind(this)}>Add</button>
                <button onClick={this.onRemoveClick.bind(this)}>Remove</button>
            </div>
        );
    }
}
export default Home;