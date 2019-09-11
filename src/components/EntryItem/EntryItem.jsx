import React, {Component} from 'react';
import {connect} from 'react-redux';
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";



class EntryItem extends Component {
 
    state = {
        value: 0,
    }
 
componentDidMount = () => {  
    console.log('in component did componentDidMount');
    
    this.getCurrentHabitPrompts();
    // if(this.props.reduxStore.habitPrompt == ""){
    //     this.props.history.push('/transition')
    // }
};

getCurrentHabitPrompts = id => {
    let action = {
        type:'FETCH_HABIT_PROMPTS',
        payload: this.props.match.params.id
    };
    this.props.dispatch(action);
}
getNextHabitPrompts = id => {
    console.log('in NEXT habit getter');
    
    let action = {
        type: 'FETCH_HABIT_PROMPTS',
        payload: ++ this.props.match.params.id
    };
    this.props.dispatch(action)
}

nextHandler = event => {
   event.preventDefault();
    console.log('youclicked a button');
    
    if (this.state.value === 0){
        return alert('you gotta do something');
    }else {
        this.props.dispatch({
            type: 'ADD_HABIT_RESPONSE',
            payload: this.state
        });
        this.getNextHabitPrompts()
      
    }
    
}

handleChange = event => {
    console.log( 'you changed it in the form too ', event.target.value);
    this.setState({
        value: event.target.value
    })
    
}

render(){


        return (  
          <div>
              {this.props.reduxStore.habitPrompt == ""  && 
            
            
          this.props.history.push("/transition")
        }
            <h1>Hello to Entry Item</h1>
            <p>{this.props.reduxStore.habitPrompt.habit_prompt_text}</p>
            <form onSubmit={this.nextHandler}>
              <RadioGroup
                aria-label="Rating"
                name="Rating"
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value= "true"
                  control={<Radio color ="primary"/>}
                  label="TRUE"
                />
                <FormControlLabel
                  value = "false"
                  control={<Radio color = "primary"/>}
                  label="FALSE"
                />
              </RadioGroup>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.backHandler}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" type="submit">
                NEXT
              </Button>
            </form>
          </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(EntryItem);