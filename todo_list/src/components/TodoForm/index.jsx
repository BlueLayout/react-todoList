import * as React from "react";

class todoForm extends React.Component {

    addTodo = () => {
        let text = document.getElementById("inputBox").value;
        this.props.addTodo({text: text, hitStatus: 'DOING'});
    }

    render() {
        return <div>
            <input type="text" id="inputBox"/>
            <button onClick={this.addTodo}>add</button>
        </div>
    }


}

export default todoForm;