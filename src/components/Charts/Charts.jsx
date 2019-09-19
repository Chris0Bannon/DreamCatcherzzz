import React, {Component} from "react";
import {connect} from "react-redux";

class Charts extends Component {
    render(){
        return (
            <div>
                <h1>Hello from Charts</h1>
                <p> hopefully chart.js goes here!</p>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Charts);