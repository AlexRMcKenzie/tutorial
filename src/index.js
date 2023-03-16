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

const author = "Nathan Anthony";
const Book = () => {
  const title = "Bored of Lunch: The Healthy Air Fryer Boooooooook";
  return (
    <article className='book'>
      <img src="./images/book-1.jpg" alt="Bored of Lunch: The Healthy Air Fryer Book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
