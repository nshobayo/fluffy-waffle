import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import SearchBar from './searchbar'
import SearchSuggestions from './searchsuggestions'

class Search extends React.Component {
    render () {
        return <div>
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
          <SearchSuggestions subheader="Recent searches" items=
            {
               [
                  {
                     text:"David Gries",
                     subtext:"1 result",
                     type:"History"
                  },
                  {
                     text:"Object oriented programming",
                     subtext:"2 results",
                     type:"History"
                  },
                  {
                     text:"2100",
                     subtext:"4 results",
                     type:"History"
                  },
                  {
                     text:"data structure",
                     subtext:"14 results",
                     type:"History"
                  },
                  {
                     text:"cs",
                     subtext:"54 results",
                     type:"History"
                  }
               ]
            } />
        </div>
    }
}

export default Search;
