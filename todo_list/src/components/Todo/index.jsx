import * as React from "react";
import './todo.css'
import {updateTODOs, deleteTODOs} from "../../api/TodoListApi"

class todo extends React.Component {

    render() {
        return <div className={`${this.props.status ? 'is-done' : ''}`}
                    onClick={this.handleMark}>
            <span>{this.props.content}</span>
            <span><button onClick={this.handleDelete}>x</button></span>
        </div>
    }


    handleDelete = (e) => {
        e.stopPropagation();
        deleteTODOs(this.props.id).then(
            this.props.deleteTodo(this.props.id)
        ).catch(err => console.log(err))

    };

    handleMark = () => {
        console.log(this.props.status)
        if (!this.props.status) {
            updateTODOs(this.props.id, {id: this.props.id, content: this.props.content, status: true})
                .then(this.props.markDone(this.props.id))
                .catch(err => console.log(err));
        } else {
            updateTODOs(this.props.id, {id: this.props.id, content: this.props.content, status: false})
                .then(this.props.markCancel(this.props.id))
                .catch(err => console.log(err))
        }
    }
}

export default todo