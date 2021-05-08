import { useSelector } from 'react-redux'

function QAPresenter() {
  const qas = useSelector((state) => state.qas)

  return (
    <>
      <h2>Created questions</h2>
      { qas.map(qa => <p>{qa.q}</p>) }
    </>
  )
}

export default QAPresenter