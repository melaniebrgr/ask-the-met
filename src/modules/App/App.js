import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import QACapture from '../QACapture/QACapture'
import { qaSubmitted } from '../../store/slices/qa'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(qaSubmitted(    { 
      id: uuid(),
      q: "How to add a question?",
      a: "Just use the form!"
    }))
  }, [])

  return (
    <div>
      <h1>Ask the Met</h1>
      <QACapture />
    </div>
  );
}

export default App
