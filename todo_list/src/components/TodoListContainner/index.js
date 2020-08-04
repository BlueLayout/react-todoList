import {connect} from "react-redux";
import TodoList from "../TodoList"

const mapStateToProps = state => ({
    todoList: state.todoList,
});

export default connect(mapStateToProps)(TodoList)