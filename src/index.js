import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const author = "Nathan Anthony";
const title = "Bored of Lunch: The Healthy Air Fryer Book";
const img = "./images/book-1.jpg"
const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}


const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
