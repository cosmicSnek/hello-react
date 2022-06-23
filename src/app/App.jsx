import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    console.log('increment');
    setCount(count + 1);
  }
  return (
    <div>
      <form action="{addTask}">
        <button type="submit" placeholder="Add some task.." />
        {' '}
        Add
      </form>
    </div>
  );
}

export default App;
