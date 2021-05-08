function QAStatic({ q, a, answerDisplayed, setAnswerDisplay }) {
  return (
    <>
      <p onClick={() => setAnswerDisplay(!answerDisplayed)}>{q}</p>
      { answerDisplayed && (<p>{a}</p>) }
    </>
  )
}

export default QAStatic