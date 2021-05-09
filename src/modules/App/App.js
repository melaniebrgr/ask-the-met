import QACapture from '../QACapture/QACapture'
import QAPresenter from '../QAPresenter/QAPresenter'

function App() {
  return (
    <>
      <h1>Ask the Met</h1>
      <div className="px-6">
        <QACapture />
        <QAPresenter />
      </div>
    </>
  );
}

export default App
