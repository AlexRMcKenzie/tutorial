import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
      <img src="./images/book-1.jpg" alt="Bored of Lunch: The Healthy Air Fryer Book" />
      <h2>Bored of Lunch: The Healthy Air Fryer Book</h2>
      <h4>Nathan Anthony</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
