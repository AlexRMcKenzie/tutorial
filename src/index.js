import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const author = "Nathan Anthony";
const title = "Bored of Lunch: The Healthy Air Fryer Book";
const img = "./images/book-1.jpg"

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  )
}


const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
