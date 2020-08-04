import React from "react";
import TodoContainer from "../TodoContainer"

class todoList extends React.Component {

    render() {
        return new Array(this.props.todoList.length).fill(0).map(((value, index) =>
                <TodoContainer key={index} todoData={this.props.todoList[index]} id={index}/>
        ))
    }
}

export default todoList