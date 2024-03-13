import React from 'react';
import './App.css';
import Header from './Header';
import Like from './Like';
import List from './List';

function App() {
  const [likes, setLikes] = React.useState(0);
  const list = ['1', '2'];

  const setLike = () => {
    console.log('Setlikes called');
    setLikes(likes + 1);
  }

  return (
    <div className="App">
      <Header text="Hello world" />
      <List list={list} />
      {likes}
      <Like likes={likes} setLikes={setLike} />
      <Like likes={likes} setLikes={setLike} />
    </div>
  );
}

export default App;
