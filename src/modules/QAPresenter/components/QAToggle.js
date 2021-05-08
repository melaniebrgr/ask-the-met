import { useState } from 'react';

function QAToggle({ q, a }) {
  const [isAnswerDisplayed, setIsAnswerDisplayed] = useState(false)

  return (
    <div onClick={() => setIsAnswerDisplayed(!isAnswerDisplayed)}>
      <p>{q}</p>
      { isAnswerDisplayed && (<p>{a}</p>) }
    </div>
  )
}

export default QAToggle