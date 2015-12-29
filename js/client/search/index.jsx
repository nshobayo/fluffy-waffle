import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './searchbar'
import SearchSuggestions from './searchsuggestions'

class Search extends React.Component {
    render () {
        return <div>
          <SearchBar returnTo={this.props.returnTo} />
          <SearchSuggestions style={{marginTop: '-2px', paddingTop: '0'}} items=
            {
               [
                  {
                     text:"CS 3",
                     type:"Any"
                  },
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
          <SearchSuggestions style={{paddingTop: '0'}} subheader="Recent searches" items=
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
