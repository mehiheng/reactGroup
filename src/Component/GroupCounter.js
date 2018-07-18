import React from "react";
import Counter from "./Counter";

export default class GroupCounter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counterNum: props.counterNum,
            totalCount: 0
        };
    }

    addTotalCount = (props) => {
        this.setState((prevState) => ({
            totalCount: prevState.totalCount + props
        }));
    };

    render() {
        let array = [];
        for (let i = 0; i < this.props.counterNum; i++) {
            array.push(<Counter addTotalCount={this.addTotalCount.bind(this)}/>);
        }
        return (
            <div>
                {array}
                {this.state.totalCount}
            </div>
        )
    }
}