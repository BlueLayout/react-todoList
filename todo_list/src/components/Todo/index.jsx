import * as React from "react";
import './todo.css'
import {updateTODOs, deleteTODOs} from "../../api/TodoListApi"
import {Card, Button} from 'antd';

class todo extends React.Component {

    render() {
        return <div className={"todo-card"}>
            <Card
                extra={<div>
                    <Button onClick={this.handleMark}>Done</Button>
                    <Button onClick={this.handleDelete}>Del</Button>
                </div>}
                size="small"
            >
                <div className={`${this.props.status ? 'is-done' : ''}`}>
                    <span className={"todo-content"}>
                        {this.props.content}
                    </span>
                </div>
            </Card>
        </div>
    }


    handleDelete = (e) => {
        e.stopPropagation();
        deleteTODOs(this.props.id).then(
            this.props.deleteTodo(this.props.id)
        ).catch(err => console.log(err))

    };

    handleMark = () => {
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