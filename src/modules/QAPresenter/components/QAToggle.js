import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { qaDeleted } from '../../../store/slices/qas'
import QAStatic from './QAStatic'
import QAEditor from '../../QAEditor/QAEditor'

function QAToggle({ id, q, a }) {
  const [detailsDisplayed, setDetailsDisplayed] = useState(false)
  const [editorDisplayed, setEditorDisplayed] = useState(false)
  const dispatch = useDispatch()
  const onDeleteButtonClick = () => {
    dispatch(qaDeleted(id))
  }

  return (
    <>
      { editorDisplayed
        ? <QAEditor id={id} q={q} a={a} setEditorDisplay={setEditorDisplayed} />
        : (
          <>
            <QAStatic q={q} a={a} answerDisplayed={detailsDisplayed} setAnswerDisplay={setDetailsDisplayed} />
            { detailsDisplayed && (
                <>
                  <button onClick={() => setEditorDisplayed(!editorDisplayed)}>Edit</button>
                  <button onClick={onDeleteButtonClick}>Remove</button>
                </>
            )}
          </>
        )
      }
    </>
  )
}

export default QAToggle