import React, {Component} from 'react';
import {connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class RecentSubmissionReview extends Component {


    render(){
        return (
          <div>
            <h1>Hello from RecentSubmissionReview</h1>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>This is</TableCell>
                  <TableCell>THe BEst</TableCell>
                  <TableCell>I can do</TableCell>
                  <TableCell>right Now</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.reduxStore.mostRecentUserEntry.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.habit_prompt_text}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
    }

}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(RecentSubmissionReview)