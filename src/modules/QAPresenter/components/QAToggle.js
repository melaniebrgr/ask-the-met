import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { qaDeleted } from '../../../store/slices/qas'
import QAStatic from './QAStatic'
import QAEditor from '../../QAEditor/QAEditor'

function QAToggle({ id, q, a }) {
  const [detailsDisplayed, setDetailsDisplayed] = useState(false)
  const [editorDisplayed, setEditorDisplayed] = useState(false)
  const dispatch = useDispatch()
  const handleDisplayEditor = () => {
    setEditorDisplayed(!editorDisplayed)
  }
  const handleDelete = () => {
    dispatch(qaDeleted(id))
  }

  return (
    <>
      { editorDisplayed
        ? <QAEditor id={id} q={q} a={a} setEditorDisplay={setEditorDisplayed} />
        : (
          <div class="bg-red-50 p-4 my-2">
            <QAStatic q={q} a={a} answerDisplayed={detailsDisplayed} setAnswerDisplay={setDetailsDisplayed} />
            { detailsDisplayed && (
                <>
                  <button onClick={handleDisplayEditor} class="mt-2 mr-3 rounded border border-red-300 bg-red-50 hover:bg-red-100 text-red-500">Edit</button>
                  <button onClick={handleDelete} class="mt-2 rounded border border-red-300 bg-red-50 hover:bg-red-100 text-red-500">Remove</button>
                </>
            )}
          </div>
        )
      }
    </>
  )
}

export default QAToggle