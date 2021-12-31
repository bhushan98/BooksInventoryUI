import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

const BookDetails = () => {

    const { id } = useParams();
    const {data: book, isPending, error} = useFetch('http://localhost:8080/api/book/' + id)
    const [isUpdated, setIsUpdated] = useState(false)
    const [message, setMessage] = useState('')

    const updateBook = () => {
        console.log(book)

        fetch(`http://localhost:8080/api/book/${book.id}`,{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(book)})
        .then(r=>r.json())
        .then(
            res=>{
                if(res){
                    setIsUpdated(true)
                    setMessage("Book Details Modified Successfully")
                }
        });

    }

    const updatePrice = (value) => {
        book.price = Number(value)
    }

    const updateQuantity = (value) => {
        book.quantity = Number(value)
    }



    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div> {error}</div>}
            { book && (
                <article>
                    <img src={book.image}></img>
                    <h2>{book.title}</h2>
                    <p>Written by: {book.authors.join(', ')}</p>
                    <div>{book.description}</div>
                    <form>
                        <label>Quantity</label>
                        <input type="text" defaultValue={book.quantity} onChange={(e) => updateQuantity(e.target.value)}></input>
                        <label>Price</label>
                        <input type="text" defaultValue={book.price} onChange={(e) => updatePrice(e.target.value)}></input>
                        <input type="button" value={"Update"} onClick={updateBook}></input>
                    </form>
                </article>
            )}
            <div hidden={!isUpdated}>{message}</div>
        </div>
     );
}
 
export default BookDetails;