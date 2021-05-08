import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { qasSubmitted } from '../../store/slices/qas'
import QACapture from '../QACapture/QACapture'
import QAPresenter from '../QAPresenter/QAPresenter'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(qasSubmitted({ 
      id: uuid(),
      q: "How to add a question?",
      a: "Just use the form!"
    }))
  }, [])

  return (
    <div>
      <h1>Ask the Met</h1>
      <QACapture />
      <QAPresenter />
    </div>
  );
}

export default App
