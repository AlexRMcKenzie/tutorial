import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Nathan Anthony',
  title: 'Bored of Lunch: The Healthy Air Fryer Book',
  img: './images/book-1.jpg',
}

const secondBook = {
  author: 'Dr Louise Newson',
  title: 'The Definitive Guide to the Perimenopause and Menopause',
  img: 'https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PAMyPZn6L._AC_UL450_SR450,320_.jpg',
}

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}


const Book = ({ img, title, author }) => {
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
