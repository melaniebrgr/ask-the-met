import { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QAToggle from './components/QAToggle'
import { compareByQuestion } from './utils/compareByQuestion'
import { qasDeleted } from '../../store/slices/qas'

function QAPresenter() {
  const qas = useSelector((state) => state.qas)
  const qasCreated = useSelector((state) => Boolean(state.qas.length))
  const [qasSorted, setQasSorted] = useState(false)
  const memoizedQas = useMemo(() => qasSorted ? qas.slice().sort(compareByQuestion) : qas, [qasSorted, qas])
  const handleSort = () => {
    setQasSorted(true)
  }
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(qasDeleted())
  }

  return (
    <>
      <h2>Created questions</h2>
      { qasCreated
        ? memoizedQas.map(({ id, q, a }) => <QAToggle key={id} id={id} q={q} a={a} />)
        : <p class="text-red-400">No questions!</p>
      }
      <div>
        <button onClick={handleSort} class="mt-2 mr-3 rounded border border-purple-300 bg-white-50 hover:bg-purple-100 text-purple-500">Sort questions</button>
        <button onClick={handleDelete} class="mt-2 rounded border border-purple-300 bg-white-50 hover:bg-purple-100 text-purple-500">Remove questions</button>
      </div>
    </>
  )
}

export default QAPresenter