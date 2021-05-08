function QAStatic({ q, a, answerDisplayed, setAnswerDisplay }) {
  const handleAnswerDisplay = () => {
    setAnswerDisplay(!answerDisplayed)
  }
  
  return (
    <>
      <p onClick={handleAnswerDisplay}>{q}</p>
      { answerDisplayed && (<p>{a}</p>) }
    </>
  )
}

export default QAStatic