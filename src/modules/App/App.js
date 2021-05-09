import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ArtPresenter from '../ArtPresenter/ArtPresenter'
import QACapture from '../QACapture/QACapture'
import QAPresenter from '../QAPresenter/QAPresenter'
import { qasHydrated } from '../../store/slices/qas'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(qasHydrated())
  }, [])

  return (
    <>
      <h1>Ask the Met</h1>
      <div className="px-6 pb-6">
        <ArtPresenter />
        <QACapture />
        <QAPresenter />
      </div>
    </>
  );
}

export default App
