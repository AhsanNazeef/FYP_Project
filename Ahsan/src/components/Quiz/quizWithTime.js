import { useState } from "react";
import "../../App.css";
import Quiz from "./quiz";
import CountdownApp from "./timer";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";

function QuizWithTime() {
  const [loading, setLoading] = useState(true);
  const ques = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.marks);

  const setLoader = () => {
    setLoading(false);
  };
  return (
    <Layout className="App">
      <div>
        {loading ? (
          <>
            <CountdownApp setLoad={setLoader} />
            <Quiz setLoad={setLoader} />
          </>
        ) : (
          <>
            Correct Answers: {answers} out of {ques.length}
          </>
        )}
      </div>
    </Layout>
  );
}

export default QuizWithTime;
