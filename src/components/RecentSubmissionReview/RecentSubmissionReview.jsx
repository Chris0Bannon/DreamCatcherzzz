import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


class RecentSubmissionReview extends Component {
  backHandler = () => {
    this.props.history.push("/review");
  };

  componentDidMount(){
    this.fetchMostRecentUserEntry();
  };

  fetchMostRecentUserEntry = () => {
    let action = {
      type: "FETCH_MOST_RECENT_USER_ENTRY"
    };
    this.props.dispatch(action);
    this.props.history.push("/recentSubmissionReview");
  };


  render() {

    return (
      <div>
        <h1>Review your most recent submission in the table below!</h1>
        <Paper className="prettyTable" component="div" overflow="scroll">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Prompt</TableCell>
                <TableCell>YourResponse</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {this.props.reduxStore.mostRecentUserEntry.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{item.habit_prompt_text}</TableCell>
                    <TableCell>{JSON.stringify(item.user_response)}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          console.log(i);
                          this.props.dispatch({
                            type: "CHANGE_MOST_RECENT",
                            payload: i
                          });
                          this.props.history.push("/edit");
                        }}
                      >
                        Change
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Button
          onClick={this.backHandler}
          color="secondary"
          variant="contained"
        >
          Return to History
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

export default connect(mapStoreToProps)(RecentSubmissionReview);
