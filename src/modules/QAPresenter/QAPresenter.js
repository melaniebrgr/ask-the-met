import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import QAToggle from './components/QAToggle'
import { qasDeleted } from '../../store/slices/qas'

function QAPresenter() {
  const qas = useSelector((state) => state.qas)
  const dispatch = useDispatch()
  const onDeleteButtonClick = () => {
    dispatch(qasDeleted())
  }

  return (
    <>
      <h2>Created questions</h2>
      { qas.map(({ id, q, a }) => <QAToggle key={id} id={id} q={q} a={a} />) }
      <div>
        <button onClick={onDeleteButtonClick}>Remove all questions</button>
      </div>
    </>
  )
}

export default QAPresenter