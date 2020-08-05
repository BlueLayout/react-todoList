import {connect} from "react-redux"
import TodoList from "../components/TodoList"

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todo => todo.hitStatus === 'DONE')
});

export default connect(mapStateToProps)(TodoList)