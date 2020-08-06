import {connect} from "react-redux";
import TodoForm from "../components/TodoForm"
import {addTodo} from "../actions"
//TODO API REQUEST
const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoForm)