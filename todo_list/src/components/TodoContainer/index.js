import {connect} from "react-redux";
import Todo from "../Todo"
import {deleteTodo, markDone} from "../../actions"


const mapDispatchToProps = dispatch => ({
    markDone: (id) => dispatch(markDone(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(null, mapDispatchToProps)(Todo)