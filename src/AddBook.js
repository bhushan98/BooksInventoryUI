import { useState } from "react";

const AddBook = () => {

    const [searchText, setSearchText] = useState('')
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const useGoogleSearch = () => {

        const url =  `http://localhost:8080/api/book/googlebooks/${searchText}`

        const abortCont = new AbortController();

            setTimeout(() => {
                fetch(url, { signal: abortCont.signal })
                    .then(res => {
                        if (!res.ok) {
                            throw Error('Could not fetch the data for that resource');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setData(data);
                        setIsPending(false);
                        setError(null);
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            console.log('fetch aborted');
                        }
                        else {
                            setIsPending(false);
                            setError(err.message);
                        }
                    })
            }, 1000);

        console.log(data)
            
    }

    const addBook = (book) => {
        console.log(book)
    } 

    
    return (
        <div>
            <div className="create">
                <h2>Search Book By Title or Authors</h2>
                {error && <div>{error}</div>}
                <form>
                    <label>Title or Author</label>
                    <input type="text" onChange={(e) => setSearchText(e.target.value)}></input>
                    <input type="button" className="btn btn-primary" value={"Update"} onClick={useGoogleSearch}></input>
                </form>
            </div >
            <div>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Authors</th>
                        <th>Action</th>
                    </tr>
                    {data?.map(book => (
                        <tr>
                            <td>{book.volumeInfo?.title}</td>
                            <td><img src={book.volumeInfo.imageLinks?.thumbnail} /></td>
                            <td>{book.volumeInfo?.authors}</td>
                            <td><input className="btn btn-primary" type="button" value={"Add"} onClick={(book) => addBook()} /></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
    
}
 
export default AddBook;