import React, {Component} from 'react';
import {connect} from 'react-redux';

class EntryItem extends Component {
 
 
componentDidMount = () => {
    this.getHabitPrompts();
};

getHabitPrompts = id => {
    let action = {
        type:'FETCH_HABIT_PROMPTS',
        payload: this.props.match.params.id
    };
    this.props.dispatch(action);
}


render(){


        return(
            <h1>Hello to Entry Item</h1>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(EntryItem);