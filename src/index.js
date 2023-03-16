import React from 'react';
import ReactDOM from 'react-dom/client';

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81VYd5toxXL._AC_UL450_SR450,320_.jpg" alt="Bored of Lunch: The Healthy Air Fryer Book" />
const Title = () => <h2>Bored of Lunch: The Healthy Air Fryer Book</h2>
const Author = () => {
  return <h4>Nathan Anthony</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
