import * as React from "react";

class todoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addTodo = () => {
        this.props.addTodo({text: this.state.text, hitStatus: 'DOING'});
        this.setState({
            text: ''
        })
    };

    render() {
        return <div>
            <input type="text" id="inputBox" value={this.state.text} onChange={this.handleChange}/>
            <button onClick={this.addTodo}>add</button>
        </div>
    }


    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
}

export default todoForm;