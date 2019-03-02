import React, {Component} from 'react';

import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./containers/Home/Home";
import ContactAdd from "./containers/ContactAdd/ContactAdd";
import ContactEdit from "./containers/ContactEdit/ContactEdit";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/contacts/add" exact component={ContactAdd}/>
                        <Route path="/contacts/:id/edit" component={ContactEdit}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;

