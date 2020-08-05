import {connect} from "react-redux";
import TodoList from "../components/TodoList"
import {initTODOs} from "../actions";

const mapStateToProps = state => ({
    todoList: state.todoList,
});

const mapDispatchToProps = dispatch => ({
    initTODOs: (todos) => dispatch(initTODOs(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)