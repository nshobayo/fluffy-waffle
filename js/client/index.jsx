import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Schedule from './schedule'
import AddClass from './add-class'

var frame = document.getElementById("top-frame")

let routes = (
  <Route name="app" path="/" handler={Schedule}>
    <Route name="add-class" path="/add-class" handler={AddClass}/>
  </Route>
);

Router.run(routes, function (Handler) {
  ReactDOM.render(<Handler/>, frame);
});