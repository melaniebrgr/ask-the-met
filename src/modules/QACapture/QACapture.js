import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { qasSubmitted } from '../../store/slices/qas'

function QACapture() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(qasSubmitted({ id: uuid(), q: data.question, a: data.answer }))
  };

  return (
    <>
      <h2>Create a new question</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor="question">Question </label>
          <input id="question" autoFocus placeholder="What's your question?" {...register("question", { required: true })} />
          {errors.question && <span>This field is required</span>}
        </p>
        <p>
          <label htmlFor="answer">Answer </label>
          <input id="answer" placeholder="What's your answer?" {...register("answer", { required: true })} />
          {errors.answer && <span>This field is required</span>}
        </p>
        <input type="submit" />
      </form>
    </>
  )
}

export default QACapture