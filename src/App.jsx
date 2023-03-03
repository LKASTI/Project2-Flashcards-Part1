import './App.css'
import Flashcard from './components/Flashcard'
import { useState } from 'react';

function App() {
  const dictionary = [
    {q: "With great power comes _____ ________?", a : "great responsibility"},
    {q: "test1 q", a: "test1 a"},
    {q: "test2 q", a: "test2 a"},
    {q: "test3 q", a: "test3 a"},
  ];

  const numCards = dictionary.length;

  return (
    <div className="app">
        <h1>Do You Know Spider-man Trivia?</h1>
        <div className='description'>
          <p>How good is your knowledge on all types of Spider-man trivia?<br/>Test your knowledge to find out if you're a real web-head fan!<br/>Lets get started True Believers!</p>
          <p>Total number of cards: {numCards}</p>
        </div>
        <Flashcard dictionary={dictionary}/>
    </div>
  )
}

export default App
