import {connect} from "react-redux";
import Todo from "../components/Todo"
import {deleteTodo, markCancel, markDone} from "../actions"


const mapDispatchToProps = dispatch => ({
    markDone: (id) => dispatch(markDone(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    markCancel: (id) => dispatch(markCancel(id))
});

export default connect(null, mapDispatchToProps)(Todo)