import questions from "./questions";
import Question from "./Question"

// question = {id,title,info}

const Questions = () => {
  return (
    <>
      {questions.map((eachQuestion) => (
        <Question key={eachQuestion.id} eachQuestion={eachQuestion} />
      ))}
    </>
  );
};
export default Questions