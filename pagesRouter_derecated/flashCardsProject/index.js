import styles from "./index.module.css"
import { useState } from "react"
export default function App() {
  return (
    <div className={styles.flashCardBody}>
      <FlashCards></FlashCards>
    </div>
  )
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
]

function FlashCards() {
  const [selected, setSelected] = useState(
    questions.reduce((acc, curr) => {
      // Making one {} that is {id1:false, id2:false} for each question
      acc[curr.id] = false
      return acc
    }, {})
  )
  console.log({ selected })

  function handleClick(event, id) {
    setSelected((s) => {
      return { ...s, [id]: !s[id] }
    })
  }
  function handleReset() {
    setSelected((s) => {
      //Go through the entire state and return a copy where all values are false.
      return Object.keys(s).reduce((acc, e) => {
        acc[e] = false
        return acc
      }, {})
    })
  }
  function handleUp() {
    setSelected((s) => {
      //Go through the entire state and return a copy where all values are true.
      return Object.keys(s).reduce((acc, e) => {
        acc[e] = true
        return acc
      }, {})
    })
  }

  return (
    <>
      <div className={styles.buttonContainer}>
        <button className={styles.flashCardBtn} onClick={handleReset}>
          See questions
        </button>
        <button className={styles.flashCardBtn} onClick={handleUp}>
          See answers
        </button>
      </div>
      <div className={styles.flashCards}>
        {questions.map((e) => {
          return (
            // Because of event bubbling, this click handler will fire after any click happens in the FlashCard
            <div onClick={(event) => handleClick(event, e.id)}>
              <FlashCard key={e.id} keyid={e.id} selected={selected[e.id]}>
                {e}
              </FlashCard>
            </div>
          )
        })}
      </div>
    </>
  )
}

function FlashCard({ children, selected, handleClick, keyid }) {
  // This component has been "controlled" it does not hold state. And state had been lifted up.
  let selectedStyle = ""
  if (selected) {
    selectedStyle = styles.selected
  }
  return (
    <div className={`${styles.flashCard} ${selectedStyle}`} keyid={keyid}>
      {!selected ? ( // Display either the question or the answer
        <p keyid={keyid}>{children.question}</p>
      ) : (
        <p keyid={keyid}>{children.answer}</p>
      )}
    </div>
  )
}
