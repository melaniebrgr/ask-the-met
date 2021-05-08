import { useForm } from "react-hook-form";

function QACapture() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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