import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import AddForm from './addform'

var frame = document.getElementById("top-frame")
var header = document.getElementById("header")
var subheader = document.getElementById("subheader")
var sec1 = document.getElementById("section1")

export default function render () {
    ReactDOM.render(<TopBar />, header)
    ReactDOM.render(<AddForm />, sec1)
}
