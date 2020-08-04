import {connect} from "react-redux";
import TodoForm from "../TodoForm"
import {addTodo} from "../../actions"

const mapDispatchToProps = dispatch => ({
    addTodo: (data) => dispatch(addTodo(data))
});

export default connect(null, mapDispatchToProps)(TodoForm)