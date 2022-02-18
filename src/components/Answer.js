import React from "react";
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'

export const Answer = ({books, deleteBook}) => {
	return books.map(book=>(
		<tr key={book.isbn}>
		<td>{book.isbn}</td>
		<td>{book.title}</td>
		<td>{book.category}</td>
		<td>{book.author}</td>
		<td className="delete-btn" onClick={()=>deleteBook(book.isbn)}>
			<Icon icon={trash}/>
		</td>
		</tr>
	))


}
