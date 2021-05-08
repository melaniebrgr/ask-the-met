import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { qaDeleted } from '../../../store/slices/qas'

function QAToggle({ id, q, a }) {
  const [detailsDisplayed, setDetailsDisplayed] = useState(false)
  const dispatch = useDispatch()
  const onDeleteButtonClick = () => {
    dispatch(qaDeleted(id))
  }

  return (
    <>
      <p onClick={() => setDetailsDisplayed(!detailsDisplayed)}>{q}</p>
      { detailsDisplayed && (
        <>
          <p>{a}</p>
          <button onClick={onDeleteButtonClick}>Remove</button>
        </>
      )}
    </>
  )
}

export default QAToggle