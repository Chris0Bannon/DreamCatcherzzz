import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class TransitionSlide extends Component {
    render (){
        return(
        <div>
            <h1>WELCOME TO THE TransitionSlide!!</h1>
            <Button onClick={() => this.props.history.push('/reports/1')} variant = "contained" color = "primary">Continue</Button>
        </div>
        )
    }
}

export default TransitionSlide;