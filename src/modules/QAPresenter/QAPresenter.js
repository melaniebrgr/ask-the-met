import { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QAToggle from './components/QAToggle'
import { compareByQuestion } from './utils/compareByQuestion'
import { qasDeleted } from '../../store/slices/qas'

function QAPresenter() {
  const dispatch = useDispatch()
  const qas = useSelector((state) => state.qas.data)
  const qasCreated = useSelector((state) => Boolean(state.qas.data.length))
  const [qasSorted, setQasSorted] = useState(false)
  const memoizedQas = useMemo(() => qasSorted ? qas.slice().sort(compareByQuestion) : qas, [qasSorted, qas])
  const handleSort = () => {
    setQasSorted(true)
  }
  const handleDelete = () => {
    dispatch(qasDeleted())
  }

  return (
    <>
      <header className="has-tooltip">
        <p className='tooltip rounded shadow-lg p-1 bg-red-50 text-red-600 -mt-4 py-2 px-4'>Here you can find the created questions and their answers</p>
        <h2>Created questions</h2>
      </header>
      { qasCreated
        ? (
          <>
            { memoizedQas.map(({ id, q, a }) => <QAToggle key={id} id={id} q={q} a={a} />) }
            <div>
              <button onClick={handleSort} className="mt-2 mr-3 rounded border border-gray-300 bg-white-50 hover:bg-gray-100 text-gray-500">Sort questions</button>
              <button onClick={handleDelete} className="mt-2 rounded border border-gray-300 bg-white-50 hover:bg-gray-100 text-gray-500">Remove questions</button>
            </div>
          </>
        ): <p className="text-red-400">No questions!</p>
      }
    </>
  )
}

export default QAPresenter