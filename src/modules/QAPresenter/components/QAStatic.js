function QAStatic({ q, a, answerDisplayed, setAnswerDisplay }) {
  const handleAnswerDisplay = () => {
    setAnswerDisplay(!answerDisplayed)
  }
  
  return (
    <>
      <p onClick={handleAnswerDisplay} class="text-red-600">{q}</p>
      { answerDisplayed && (<p class="text-red-600">{a}</p>) }
    </>
  )
}

export default QAStatic