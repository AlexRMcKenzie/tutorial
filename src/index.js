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
  return <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>Nathan Anthony</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
