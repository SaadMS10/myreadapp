import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookTab from './components/BookTabs'
import {Route} from "react-router-dom"
import SearchTab from './components/SearchTab'

class App extends React.Component {
  state={
    book:[],
    isloading: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({ 
        book:res ,
        isloading:true
      })
    })
  }
  updateShelf=(updatebook,shelf)=>{
  BooksAPI.update(updatebook,shelf).then(res=>
    updatebook.shelf=shelf

    )
    let addedBooks = this.state.book.filter( book => book.id !== updatebook.id )
    console.log("Added")
    console.log(addedBooks)
    console.log(updatebook)
    addedBooks.push(updatebook);
    this.setState({ books: addedBooks })
    this.componentDidMount()

  }


  render() {
    
    if(this.state.isloading){
    
    return (
      

      <div className="app">
        
        <Route path="/" exact render={()=>(
          <BookTab 
          books={this.state.book}
          updateShelf={this.updateShelf}
          
          />
        ) }></Route>
     
     <Route path="/create"  render={()=>(
          <SearchTab book={this.state.book}
          updateShelf={this.updateShelf}
          />
        ) }></Route>
          
        
           
        
      </div>
    )
     }
     return(
       <div>

         <h1>Loading</h1>
       </div>
     )
  }
}

export default App
