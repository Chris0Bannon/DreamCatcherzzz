import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Review extends Component {

    render() {
        return (
          <div>
            <h1>Hello From Review</h1>
            <Button onClick = {() => {this.props.history.push('/home')}} className = "App">Back</Button>
          </div>
        );
    }

}


export default Review;