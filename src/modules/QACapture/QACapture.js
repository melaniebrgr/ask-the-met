import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { qaSubmitted } from '../../store/slices/qas'

function QACapture() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(qaSubmitted({ id: uuid(), q: data.question, a: data.answer }))
  };

  return (
    <>
      <header className="has-tooltip">
        <p className='tooltip rounded shadow-lg p-1 bg-red-50 text-red-600 -mt-5 py-2 px-4'>Here you can create new questions and their answers.</p>
        <h2>Create a new question</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-3">
          <label htmlFor="question">Question </label>
          <input id="question" autoFocus placeholder="What's your question?" {...register("question", { required: true })} />
          {errors.question && <span className="text-red-400"> This field is required</span>}
        </p>
        <p>
          <label htmlFor="answer">Answer </label>
          <input id="answer" placeholder="What's your answer?" {...register("answer", { required: true })} />
          {errors.answer && <span className="text-red-400"> This field is required</span>}
        </p>
        <input type="submit" className="mt-3 rounded border border-gray-300 bg-white-50 hover:bg-gray-100 text-gray-500" />
      </form>
    </>
  )
}

export default QACapture