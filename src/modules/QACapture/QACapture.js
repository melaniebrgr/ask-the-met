import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { qaSubmitted } from '../../store/slices/qas'

function QACapture() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(qaSubmitted({ id: uuid(), q: data.question, a: data.answer }))
  };
  const pending = useSelector((state) => state.qas.requestStatus === 'pending')

  return (
    <>
      <header className="has-tooltip">
        <p className='tooltip rounded shadow-lg p-1 bg-red-50 text-red-600 -mt-5 py-2 px-4'>Here you can create new questions and their answers.</p>
        <h2>Create a new question</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-3">
          <label htmlFor="question">Question </label>
          <input id="question" autoFocus placeholder="What's your question?" {...register("question", { required: true, pattern: /[^\s\\]/ })} />
          {errors.question && errors.question.type === 'required' && <span className="text-red-400"> This field is required</span>}
          {errors.question && errors.question.type === 'pattern' && <span className="text-red-400"> Please enter text</span>}
        </p>
        <p>
          <label htmlFor="answer">Answer </label>
          <input id="answer" placeholder="What's your answer?" {...register("answer", { required: true, pattern: /[^\s\\]/ })} />
          {errors.answer && <span className="text-red-400"> This field is required</span>}
        </p>
        <input type="submit" disabled={pending} className={`mt-3 rounded border border-gray-300 text-gray-500 cursor-pointer ${pending ? 'bg-red-500 hover:bg-red-50' : 'bg-white-50'}`} />
      </form>
    </>
  )
}

export default QACapture