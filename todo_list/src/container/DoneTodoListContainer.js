import {connect} from "react-redux"
import TodoList from "../components/TodoList"

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todo => todo.status)
});

export default connect(mapStateToProps)(TodoList)