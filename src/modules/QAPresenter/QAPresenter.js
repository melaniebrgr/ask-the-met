import { useSelector } from 'react-redux'
import QAToggle from './components/QAToggle'

function QAPresenter() {
  const qas = useSelector((state) => state.qas)

  return (
    <>
      <h2>Created questions</h2>
      { qas.map(({ id, q, a }) => <QAToggle key={id} id={id} q={q} a={a} />) }
    </>
  )
}

export default QAPresenter