import react from "react"
import { useState } from 'react'
import "./flashcard.css"
const Flashcard = (props) => {
    const [showFront, setShowFront] = useState(true)
    const [question, setQuestion] = useState(props.dictionary[0].q)
    const [answer, setAnswer] = useState(props.dictionary[0].a)
    
    const handleChangeCard = () => {
        //generate a random integer between 0 and numCards-1
        //if the current card matches the card at that index then repeat
        //set question and answer state to the key and value at that index
        let index = 0;
        while(props.dictionary[index].q === question)
        {
            index = Math.floor(Math.random() * props.dictionary.length);
        }

        setQuestion(props.dictionary[index].q)
        setAnswer(props.dictionary[index].a)
        setShowFront(true)
    }

    const flipCard = () => {
        setShowFront(!showFront)
    }

    return(
        <>
            {/**render front by default
             * if card clicked on, render back and stop rendering front. Or just invert
             */}
            <div onClick={flipCard} className="flashcard">
                <p className="flashcard-info">{(showFront)? question : answer}</p>
            </div>
            <button onClick={handleChangeCard}>new card</button>
        </>
    );
}

export default Flashcard