import React from "react"
class ListBooks extends React.Component{
  
    render(){
        const{books,updateShelf}=this.props
        
        
        
    return(
        <div className="list-books">
            
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${books.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select   
                              onClick={(event) => updateShelf(books, event.target.value)}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{books.title}</div>
                          <div className="book-authors">{books.authors}</div>
                        </div>
                    </div>
         
    )
                      }

    
}
export default ListBooks;