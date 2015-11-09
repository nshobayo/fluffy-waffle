import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardActions from 'material-ui/lib/card/card-actions'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';
import DashCard from './dashcard'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class Dashboard extends React.Component {
    render () {
        return <div>
            <TopBar title="Dashboard" />

            <div className="row">
                <div className="col-3 pad">
                    <Link to={"/schedule"}><DashCard color="green" text="Schedule" /></Link>
                </div>
                <div className="col-3 pad">
                    <DashCard color="orange" text="Assignment" />
                </div>
            </div>

            <div className="row">
                <div className="col-3 pad no-pad-top">
                    <DashCard color="red" text="Task" />
                </div>
                <div className="col-3 pad no-pad-top">
                    <DashCard color="blue" text="?" />
                </div>
            </div>
        </div>
    }
}

export default Dashboard;
