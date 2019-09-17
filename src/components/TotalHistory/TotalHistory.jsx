import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class TotalHistory extends Component {

render (){

let date = 2;

    return (
      <div>
        <h1>Hello from TotalHistory!!</h1>
        <Paper
          className="prettyTable"
          component="div"
          overflow="scroll"
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Entry Date
                        </TableCell>
                        <TableCell>
                            View Complete Submission
                        </TableCell>
                        <TableCell>
                            DELETE SUBMISSION
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {this.props.reduxStore.userEntriesReducer.map((item, i) => {
                        if(item.date !== date){
                            date = item.date;
                            console.log(date);       
                        return (
                        <TableRow key = {i}>
                            <TableCell>
                                {item.date}
                            </TableCell>
                            <TableCell>
                                <Button variant = "contained" color="secondary">
                                    View
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant = "contained" color="secondary">
                                    DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                        )}                    
                    })}

                </TableBody>
            </Table>
        </Paper>
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