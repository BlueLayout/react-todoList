import React from 'react';
import './App.css';
import TodoListContainer from './container/TodoListContainer'
import TodoFormContainer from './container/TodoFormContainer'
import DoneTodoListContainer from "./container/DoneTodoListContainer";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import DoingTodoListContainer from "./container/DoingTodoListContainer";

function App() {
    return (
        <div>
            <Router>
                <header className="App-header">
                    <h2>TodoList</h2>
                    <Link to="/">Init</Link>
                    <Link to="/doneTodoList">DoneTodoList</Link>
                    <Link to="/doingTodoList">DoingTodoList</Link>
                    <Switch>
                        <Route exact path="/" component={TodoListContainer}/>
                        <Route exact path="/doneTodoList" component={DoneTodoListContainer}/>
                        <Route exact path="/doingTodoList" component={DoingTodoListContainer}/>
                    </Switch>
                    <TodoFormContainer/>
                </header>
            </Router>
        </div>
    );
}

export default App;
