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
import { Button, Form, FormField, FormInput } from 'elemental';
import DashCard from './dashcard'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import SearchBar from './searchbar'

class Dashboard extends React.Component {
  render () {
    return <div>
      <TopBar />
      <SearchBar />
      {/*
      <div className="row pad-medium"></div>
      <div className="row pad-medium">
        <div className="col-1">&nbsp;</div>
        <div className="col-4">
          <Form type="inline">
            <FormField htmlFor="inline-form-input-search" className="col-5">
              <FormInput type="text" placeholder="What is your main focus for today?" name="inline-form-input-search" />
            </FormField>
            <FormField className="col-1 pad-left">
              <Button type="default">Search</Button>
            </FormField>
          </Form>
        </div>
        <div className="col-1">&nbsp;</div>
      </div>
      */}

      <div className="row pad-medium">
        <DashCard
        hint="Welcome • CornelldotSpace"
        title="Swipe to dismiss"
        text="You may customize the dashboard by choosing the cards to
          show up here, and add personalized widgets." />
      </div>

      <div className="row pad-medium">
        <DashCard
        hint="Assignment due very soon • CS 3410"
        title="Today at 11:59pm"
        subtitle="PROJECT #6 - Buffer Overflows"
        text="The goal of this lab is to get intimately familiar with
          the layout and use of call stacks, as well as MIPS machine
          language, assembly and disassembly, debugging, and reverse
          engineering. As a side benefit, we hope to raise your
          awareness of computer security issues. To this end, you will
          write a buffer overrun exploit to break a program that we
          provide to you." />
      </div>

      <div className="row pad-medium">
        <DashCard
        hint="University registrar • Last updated 1 hour ago"
        title="IMPORTANT information on course enrollment."
        text="Dear Students, Please go to Cornell.space to view your
            specific three-day enrollment appointment for Spring 2016.
            Enrollment appointments... " />
      </div>

      <div className="row pad-medium">
        <DashCard
        hint="New announcement • INFO 1300"
        title="Prelim Review Session"
        text="We are happy to hold a review session @ 6pm this Friday in Gates 333." />
      </div>

      <div className="row pad-medium">
        <DashCard
        hint="Today's agenda • CS 4780"
        title="Tree Pruning, Overfitting, Underfitting, Regularization, Model complexity"
        text="In this lecture we're going to take a look at exchange rates
            and practice. We're going to take a look at fixed or often
            referred to as pegged currency regimes, and we're also going
            to take a look at floating. We already talked a little bit
            about this, but remember there's a scale that you can have a
            really hard peg - a fixed exchange rate - or you can, you know,
            go all the way to the other end and be perfectly flexible." />
      </div>


      <div className="row pad-medium">
        <DashCard
        hint="Today's agenda • CS 5300"
        title="Mass Extinctions"
        text="In this lecture we’re going to talk about the Passport for Care.
          This is a clinical decisionsupport tool for care providers and a
          resource site for survivors of childhood cancer. Myname isZoAnnDreyer,
          and I am a pediatric oncologist at Texas Children’s Cancer Center,and
          the Director of the Long-­‐Term Survivor Program." />
      </div>

      <div className="row pad-medium">
        <DashCard
        hint="Campus News • Last updated 23 minutes ago"
        title="A Random Hole in Rand Hall"
        text="One student is left with serious injuries following an early
          Sunday morning vehicle crash into Rand Hall, according to the
          Cornell University Police Department." />
      </div>

    </div>
  }
}

export default Dashboard;
