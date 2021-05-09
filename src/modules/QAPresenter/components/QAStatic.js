function QAStatic({ q, a, answerDisplayed, setAnswerDisplay }) {
  const handleAnswerDisplay = () => {
    setAnswerDisplay(!answerDisplayed)
  }
  
  return (
    <>
      <p onClick={handleAnswerDisplay} className="text-gray-600">{q}</p>
      { answerDisplayed && (<p className="text-gray-600">{a}</p>) }
    </>
  )
}

export default QAStatic