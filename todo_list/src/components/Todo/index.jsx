import * as React from "react";
import './todo.css'

class todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            status: this.props.todoData.isDone
        }
    }

    render() {
        console.log(this.props.todoData)
        return <div className={`${this.props.todoData.isDone === 'Done' ? 'is-done' : ''}`}
                    onClick={this.handleMark}>
            <span>{this.props.todoData.text}</span>
            <span><button onClick={this.handleDelete}>x</button></span>
        </div>
    }

    handleDelete = (e) => {
        e.stopPropagation();
        this.props.deleteTodo(this.props.id)
    };

    handleMark = () => {
        if (this.state.status === 'DOING') {
            this.props.markDone(this.props.id)
        } else {
            console.log('DONE')
            // this.props.markCancel(this.props.id)
        }
    }
}

export default todo