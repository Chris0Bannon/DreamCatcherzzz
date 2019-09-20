import React, { Component } from "react";
import { connect } from "react-redux";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";




class EntryItem extends Component {
  state = {
    value: 0
  };


  componentDidMount = () => {
    console.log("in component did componentDidMount");

    this.getCurrentHabitPrompts();
    // if(this.props.reduxStore.habitPrompt == ""){
    //     this.props.history.push('/transition')
    // }
  };

  getCurrentHabitPrompts = id => {
    let action = {
      type: "FETCH_HABIT_PROMPTS",
      payload: this.props.match.params.id
    };
    this.props.dispatch(action);
  };

  getPreviousHabitPrompts = id => {
    let action = {
      type: "FETCH_HABIT_PROMPTS",
      payload: --this.props.match.params.id
    };
    this.props.dispatch(action);
  }

  getNextHabitPrompts = id => {
    console.log("in NEXT habit getter");

    let action = {
      type: "FETCH_HABIT_PROMPTS",
      payload: ++this.props.match.params.id
    };
    this.props.dispatch(action);
  };

backHandler = event => {
console.log('you clicked back');
this.getPreviousHabitPrompts();
let action = {
  type: "REMOVE_RECENT_HABIT",
};
this.props.dispatch(action);
this.setState({
  value: 0,
})
};

  nextHandler = event => {
    event.preventDefault();
    console.log("youclicked a button");

    if (this.state.value === 0) {
      return alert("You must select either true or false to continue");
    } else {
      this.props.dispatch({
        type: "ADD_HABIT_RESPONSE",
        payload: this.state.value
      });
      this.getNextHabitPrompts();
      this.setState({
        value: 0,
      })
    }
  };

  handleChange = event => {
    console.log("you changed it in the form too ", event.target.value);
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.reduxStore.habitPrompt == "" &&
          this.props.history.push("/transition")}
        <h1 className = "Component-header">Behaviour Report</h1>
        <p>{this.props.reduxStore.habitPrompt.habit_prompt_text}</p>
        <form onSubmit={this.nextHandler}>
          <RadioGroup
            name="trueOrFalse"
            value= {this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="TRUE"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="primary" />}
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
          <Button variant="contained"color="primary" type="submit">
            NEXT
          </Button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStoreToProps)(EntryItem);
