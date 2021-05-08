import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import QAToggle from './components/QAToggle'
import { qasDeleted } from '../../store/slices/qas'

function QAPresenter() {
  const qas = useSelector((state) => state.qas)
  const qasCreated = useSelector((state) => Boolean(state.qas.length))
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(qasDeleted())
  }
  const handleSort = () => {
    console.log("sort");
  }

  return (
    <>
      <h2>Created questions</h2>
      { qasCreated
        ? qas.map(({ id, q, a }) => <QAToggle key={id} id={id} q={q} a={a} />)
        : <p>No questions yet!</p>
      }
      <div>
        <button onClick={handleSort}>Sort questions</button>
        <button onClick={handleDelete}>Remove questions</button>
      </div>
    </>
  )
}

export default QAPresenter