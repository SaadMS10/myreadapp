import React from "react"
import { Link } from "react-router-dom"
import escapeRegExp from 'escape-string-regexp'
import ListBooks from "./ListBooks"
import sortBy from 'sort-by'
class SearchTab extends React.Component{
    state={
        query: '',
        tab: ''
    }
    search=(query)=>{
        this.setState({
            query:query.trim()
        })

    }

    
    
    render(){
      console.log(this.state.tab)
      
        
        const {book}=this.props
        let showingbooks
        if (this.state.query) {
          const match = new RegExp(escapeRegExp(this.state.query), 'i')
          showingbooks = book.filter((books) => 
          match.test(books.title),
          match.test(book.authors)
          )
          console.log(showingbooks)
        } else {
            showingbooks = book
            console.log(showingbooks)
          }
      
          showingbooks.sort(sortBy('name'))      
        return(
            
            
            <div className="search-books">
                {JSON.stringify(this.state)}
            <div className="search-books-bar">
                <Link to="/">
              <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input  placeholder="Search by title"
                 value={this.state.query}
                 type="text"
                 onChange={(event)=>{this.search(event.target.value)     }}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showingbooks.map((books,index)=>(
                      <li key={index}>
                         <ListBooks 
                      books={books} 
                      updateShelf={this.props.updateShelf}
                      />
                      </li>
                      ))}
              </ol>
            </div>
          </div>

        )

    }
}
export default SearchTab