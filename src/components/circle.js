import React, {Component} from "react";

class Circle extends Component {
    render() {
        return (
            <div className='number'>
                <p className='showNumber'>{this.props.number}</p>
            </div>
        )
    }
};

export default Circle;