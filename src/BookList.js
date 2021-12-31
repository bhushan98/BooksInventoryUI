import { useHistory } from "react-router";
import {Link} from "react-router-dom"

const BookList = ({books, title}) => {

    const history = useHistory();

    const handleDelete = (id) => {
        fetch('http://localhost:8080/api/book/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {books.map((book) => (
                <div className="blog-preview" key={book.id}>
                    <h2>{book.title}</h2>
                    <p>Author: {book.authors.join(', ')}</p>
                    <p>Quantity: {book.quantity}</p>
                    <img src={book.image}></img>
                    <Link to={`/books/${book.id}`} className="btn btn-primary">Edit</Link>
                    <button className="btn btn-primary" onClick={() => handleDelete(book.id)}>Delete Book</button>
                </div>
            ))}
        </div>
    );
}
 
export default BookList;