import React from "react";
import TodoContainer from "../TodoContainer"

class todoList extends React.Component {

    render() {
        return this.props.todoList.map(((value, index) =>
                <TodoContainer key={index}
                               hitStatus={value.hitStatus}
                               text={this.props.todoList[index].text}
                               id={this.props.todoList[index].id}
                />
        ))
    }
}

export default todoList