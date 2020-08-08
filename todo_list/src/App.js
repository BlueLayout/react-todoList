import React from 'react';
import TodoListContainer from './container/TodoListContainer'
import TodoFormContainer from './container/TodoFormContainer'
import DoneTodoListContainer from "./container/DoneTodoListContainer";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import DoingTodoListContainer from "./container/DoingTodoListContainer";
import {Layout, Space} from "antd";
import "./App.css"

const {Header, Content} = Layout;

function App() {
    return (
        <div>
            <Router>
                <Header style={{background: "#3eb5de"}}>
                    <span className={"app-header-title"}>TodoList</span>
                </Header>
                <Content style={{background: "#36aed8", height: "1000px"}}>
                    <div className={"router-link"}>
                        <Space>
                            <span>
                                <Link to="/" style={{color: "white"}}>HomePage</Link>
                            </span>
                            <span>
                                <Link to="/doneTodoList" style={{color: "white"}}>DoneTodoList</Link>
                            </span>
                            <span>
                                <Link to="/doingTodoList" style={{color: "white"}}>TodoList</Link>
                            </span>
                        </Space>
                    </div>
                    <div>
                        <TodoFormContainer/>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/" component={TodoListContainer}/>
                            <Route exact path="/doneTodoList" component={DoneTodoListContainer}/>
                            <Route exact path="/doingTodoList" component={DoingTodoListContainer}/>
                        </Switch>
                    </div>
                </Content>
            </Router>
        </div>
    );
}

export default App;
