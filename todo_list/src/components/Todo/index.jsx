import * as React from "react";
import './todo.css'

class todo extends React.Component {

    constructor(props) {
        super(props);
    }

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
            console.log("markDone")
            this.props.markDone(this.props.id)
        } else {
            console.log('markCancel')
            this.props.markCancel(this.props.id)
        }
    }
}

export default todo