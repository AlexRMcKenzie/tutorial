import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

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
