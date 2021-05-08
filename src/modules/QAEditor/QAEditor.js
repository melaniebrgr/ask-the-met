import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { qaEditted } from '../../store/slices/qas'

function QAEditor({ id, q, a, setEditorDisplay }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(qaEditted({ id, q: data.edittedQuestion, a: data.edittedAnswer }))
    setEditorDisplay()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input id="edittedQuestion" defaultValue={q} {...register("edittedQuestion", { required: true })} />
        {errors.question && <span>This field is required</span>}
      </p>
      <p>
        <input id="edittedAnswer" defaultValue={a} {...register("edittedAnswer", { required: true })} />
        {errors.answer && <span>This field is required</span>}
      </p>
      <input type="submit" />
    </form>
  )
}

export default QAEditor