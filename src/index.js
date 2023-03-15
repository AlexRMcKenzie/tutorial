import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <h2>Hello World</h2>
      <ul>
        <li>
          <a href="#">Hello people</a>
        </li>
      </ul>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   )
// }

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world')
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
