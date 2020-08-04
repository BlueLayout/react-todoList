import {connect} from "react-redux";
import Todo from "../Todo"
import {markDone} from "../../actions"

const mapStateToProps = state => ({
    id: state.todoList.key()
})

const mapDispatchToProps = dispatch => ({
    markDone: (id) => dispatch(markDone(id))
});

export default connect(null, mapDispatchToProps)(Todo)