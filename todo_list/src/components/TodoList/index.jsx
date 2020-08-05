import React from "react";
import TodoContainer from "../../container/TodoContainer"
import {getTODOs} from "../../api/TodoListApi";

class todoList extends React.Component {

    componentDidMount() {
        getTODOs().then(res => {
            console.log(res.data)
            this.props.initTODOs(res.data)
        }).catch(err => console.log(err))
    }

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