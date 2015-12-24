import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import SearchBar from './searchbar'
import CourseInfo from './courseinfo'
import SearchSuggestions from './searchsuggestions'

class Search extends React.Component {
    render () {
        return <div>
          <TopBar title={"What to Add"} />
          <SearchBar />
          <SearchSuggestions items=
            {
               [
                  {
                     text:"CS 3110",
                     subtext:"Data Structures and Functional Programming",
                     type:"Course"
                  },
                  {
                     text:"CS 3300",
                     subtext:"Data-driven Web Pages",
                     type:"Course"
                  },
                  {
                     text:"CS 3410",
                     subtext:"Computer System Organization and Programming",
                     type:"Course"
                  }
               ]
            } />
        </div>
    }
}

export default Search;
