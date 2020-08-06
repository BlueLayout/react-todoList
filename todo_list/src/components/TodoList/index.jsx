import React from "react";
import TodoContainer from "../../container/TodoContainer"
import {getTODOs} from "../../api/TodoListApi";

class todoList extends React.Component {

    componentDidMount() {
        getTODOs().then(res => {
            this.props.initTODOs(res.data)
        }).catch(err => console.log(err))
    }

    render() {
        return this.props.todoList.map(((value, index) =>
                <TodoContainer key={index}
                               status={value.status}
                               content={this.props.todoList[index].content}
                               id={this.props.todoList[index].id}
                />
        ))
    }
}

export default todoList