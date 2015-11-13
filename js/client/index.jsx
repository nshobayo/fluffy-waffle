import React from 'react'
import ReactDOM from 'react-dom'

import { RouteHandler, Router, Route } from 'react-router'

import Dashboard from './dashboard'
import Schedule from './schedule'
import AddClass from './add-class'

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
    <Route path="dashboard" component={Dashboard}/>
    <Route path="schedule" component={Schedule}/>
    <Route path="add-class" component={AddClass}/>
  </Route>
);

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById("top-frame"))
