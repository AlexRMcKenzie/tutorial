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
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="./images/book-1.jpg" alt="Bored of Lunch: The Healthy Air Fryer Book" />
const Title = () => <h2>Bored of Lunch: The Healthy Air Fryer Book</h2>
const Author = () => {
  return <h4>Nathan Anthony</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
