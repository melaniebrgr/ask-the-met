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
      <div className="bg-white-50 p-4 my-2">
        <p className="mb-3">
          <input id="edittedQuestion" defaultValue={q} {...register("edittedQuestion", { required: true })} className="block w-full" />
          {errors.question && <span>This field is required</span>}
        </p>
        <p>
          <input id="edittedAnswer" defaultValue={a} {...register("edittedAnswer", { required: true })} className="block w-full" />
          {errors.answer && <span>This field is required</span>}
        </p>
        <input type="submit" className="mt-2 rounded border border-gray-300 bg-white-50 hover:bg-gray-100 text-gray-500" />
      </div>
    </form>
  )
}

export default QAEditor