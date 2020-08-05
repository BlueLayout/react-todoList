import * as React from "react";
import './todo.css'

class todo extends React.Component {

    render() {
        return <div className={`${this.props.hitStatus === 'DONE' ? 'is-done' : ''}`}
                    onClick={this.handleMark}>
            <span>{this.props.text}</span>
            <span><button onClick={this.handleDelete}>x</button></span>
        </div>
    }

    handleDelete = (e) => {
        e.stopPropagation();
        this.props.deleteTodo(this.props.id)
    };

    handleMark = () => {
        if (this.props.hitStatus === 'DOING') {
            this.props.markDone(this.props.id)
        } else {
            this.props.markCancel(this.props.id)
        }
    }
}

export default todo