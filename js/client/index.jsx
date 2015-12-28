import React from 'react'
import ReactDOM from 'react-dom'

import { IndexRoute, RouteHandler, Router, Route } from 'react-router'

import Dashboard from './dashboard'
import Schedule from './schedule'
import Class from './class'
import Search from './search'
import SearchResult from './search-result'
import AddClass from './add-class'
import Calendar from './calendar'
import Login from './login';

// Empty shell of App
const App = React.createClass({
    render () {
        return <div>
            {this.props.children}
        </div>
    }
})

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="login" component={Login}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="schedule" component={Schedule}/>
    <Route path="class" component={Class}/>
    <Route path="add-class" component={AddClass}/>
    <Route path="search" component={Search}/>
    <Route path="calendar" component={Calendar}/>
    <Route path="search-result" component={SearchResult}/>
  </Route>
);

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById("top-frame"))
