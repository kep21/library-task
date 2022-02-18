import React,{useState, useEffect} from "react";
import { Answer } from "./components/Answer";

const getDatafromLS=()=>{
	const data = localStorage.getItem('books')
	if(data){
		return JSON.parse(data)
	}
	else{
		return[]
	}
}



export const App = () => {

const [books,setbooks] = useState(getDatafromLS());

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [category, setCategory] = useState('');
const [isbn, setIsbn] = useState('');


const handleAddBooksSubmit=(e)=> {
	e.preventDefault();
	let book={
		title,
		author,
		category,
		isbn
	}
	setbooks([...books,book]);
	setTitle('');
	setAuthor('');
	setCategory('');
	setIsbn('');
}

const deleteBook = (isbn)=>{
	const filteredBooks=books.filter((element,index)=>{
		return element.isbn !== isbn
	})
	setbooks(filteredBooks);
}



useEffect(()=>{
  localStorage.setItem('books', JSON.stringify(books))
},[books])

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
			<p>Add and view your books </p>
			<div className='main'>

				<div className='form-container'>
        <form autoComplete="off" className='form-group'
				onSubmit={handleAddBooksSubmit}>

					<label>Book title</label>
					<input type="text" className='form-control' required
					onChange={(e)=>setTitle(e.target.value)} value={title}></input>
					<br></br>

					<label>Author</label>
					<input type="text" className='form-control' required
					onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
					<br></br>

					<label>Category</label>
					<input type="text" className='form-control' required
				onChange={(e)=>setCategory(e.target.value)} value={category}	></input>
					<br></br>

					<label>ISBN</label>
					<input type="text" className='form-control' required
				onChange={(e)=>setIsbn(e.target.value)} value={isbn}	></input>
					<br></br>
          <button type="submit" className='btn btn-success btn-md'>
						Add a book
					</button>

				</form>
				</div>

				<div className='view-container'>
					{books.length>0&&<>
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th>ISBN</th>
									<th>Book Title</th>
									<th>Category</th>
									<th>Author</th>
									<th>Delete</th>

								</tr>
							</thead>
							<tbody>
               <Answer books={books} deleteBook={deleteBook}/>

							</tbody>
						</table>
					</div>
					</>}
       {books.length < 1 && <div>No books are added</div>}
				</div>

			</div>
    </div>
  );
}

export default App;
