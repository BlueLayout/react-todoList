import * as React from "react";
import {createTODOs} from "../../api/TodoListApi";
import {Input, Button, Space} from "antd";
import "./todoForm.css"

class todoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addTodo = () => {
        let todoData = {
            id: null,
            content: '',
            status: false
        };
        createTODOs({content: this.state.text, status: false}).then(res => {
            todoData = res.data;
            this.props.addTodo(todoData);
            this.setState({
                text: ''
            })
        }).catch(err => console.log(err));
    };

    render() {
        return <div className={"todo-form"}>
            <Space>
                <Input type="text" id="inputBox" value={this.state.text}
                       onChange={this.handleChange}
                       placeholder="Please Input Todo Content"
                       style={{width: "300px"}}/>
                <Button onClick={this.addTodo}>add</Button>
            </Space>
        </div>
    }


    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
}

export default todoForm;