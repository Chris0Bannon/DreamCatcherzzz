import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

class SelectedDateReview extends Component {
    state = {

    }

render(){
  let id = this.props.reduxStore.viewOnceItem.daily_entry_id; 
    return(
        <div>
            <h1>Hello From Selected Date Review</h1>
           <Paper
            className="prettyTable"
            component="div"
            overflow="scroll"
           
          >
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>
                              Prompt
                          </TableCell>
                          <TableCell>
                              Your Response
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.reduxStore.userEntriesReducer.map((item, i) => {
                        console.log('id is', id);
                        
                            if(item.daily_entry_id == id){
                                return (
                                    <TableRow key = {i}>
                                        <TableCell>
                                            {item.habit_prompt_text}
                                        </TableCell>
                                        <TableCell>
                                            {JSON.stringify(item.user_response)}
                                        </TableCell>

                                    </TableRow>
                                )
                            }
                    })}
                  </TableBody>
              </Table>
          </Paper>
            <Button onClick ={() => {this.props.history.push("/totalHistory")}} variant = "contained" color = "secondary">Return to History</Button>
        </div>
    )
}
}
const mapStoreToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStoreToProps)(SelectedDateReview);