import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

class DailyEntryReview extends Component {


 state = {

 }   
 
 
componentDidMount = () => {
    this.setState({
        habits: this.props.reduxStore.habitResponses,
        reports: this.props.reduxStore.selfReportResponses
    })
}
  sendIt = () => {
    // this.props.dispatch({
    //   type: "ADD_HABIT_RESPONSES",
    //   payload: this.state.habits
    // });
    this.props.dispatch({
        type: "ADD_SELF_REPORT_RESPONSES",
        payload: {
          reports: this.state.reports,
          habits: this.state.habits
  }})
    this.props.dispatch({
        type: 'RESET_HABIT_RESPONSES'
    })
    this.props.dispatch({
        type: 'RESET_SELF_REPORT_RESPONSES'
    })
    this.props.history.push('/home')
  };

  render() {
    return (
      <div>
        <h1>Hello From Daily Review</h1>
        <Box overflow = "scroll">
          <Paper
            className="prettyTable"
            component="div"
            overflow="scroll"
           
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Poop</TableCell>
                  <TableCell>Pee</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.reduxStore.allHabitPrompts.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.habit_prompt_text}</TableCell>
                    <TableCell>
                      {this.props.reduxStore.habitResponses[item.id - 1]}
                    </TableCell>
                  </TableRow>
                ))}
                {this.props.reduxStore.allSelfReportPrompts.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.self_report_prompt_text}</TableCell>
                    <TableCell>
                      {this.props.reduxStore.selfReportResponses[item.id - 1]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
        <Button onClick={this.sendIt} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStoreToProps)(DailyEntryReview);
