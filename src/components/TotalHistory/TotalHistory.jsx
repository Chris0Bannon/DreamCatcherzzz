import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from 'react-moment';


class TotalHistory extends Component {
  fetchUserEntries = event => {
    console.log("you clicked a fetcher");
    let action = {
      type: "FETCH_ALL_USER_ENTRIES"
    };
    this.props.dispatch(action);
  };

  componentDidMount() {
    this.fetchUserEntries();
  }

viewHandler = (item) => {
    console.log('clicked view', item.daily_entry_id);
    
}


  render() {
    let id = 0;

    return (
      <div>
        <h1 className="Component-header">View your history!</h1>
        <Paper className="prettyTable" component="div" overflow="scroll">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Entry Date</TableCell>
                <TableCell>View Complete Submission</TableCell>
                <TableCell>DELETE SUBMISSION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxStore.userEntriesReducer.map((item, i) => {
                if (item.daily_entry_id !== id) {
                  id = item.daily_entry_id;
                  console.log(id);
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <Moment format="YYYY/MM/DD">{item.date}</Moment>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            console.log(i);
                            this.props.dispatch({
                              type: "VIEW_THIS_ITEM",
                              payload: i
                            });
                            this.props.history.push("/selectedDate");
                          }}
                          variant="contained"
                          color="secondary"
                        >
                          View
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            console.log(
                              this.props.reduxStore.userEntriesReducer[i]
                            );
                            this.props.dispatch({
                              type: "DELETE_IT",
                              payload: this.props.reduxStore.userEntriesReducer[
                                i
                              ].daily_entry_id
                            });
                            this.fetchUserEntries();
                            this.props.history.push("/totalHistory");
                          }}
                          variant="contained"
                          color="secondary"
                        >
                          DELETE
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </Paper>
        <div className="HomeButton">
          <Button variant = "contained" color = "secondary" onClick ={() => {this.props.history.push('/review')}}>
            Back
          </Button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(TotalHistory);