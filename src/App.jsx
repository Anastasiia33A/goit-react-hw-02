import { useState, useEffect } from 'react';
import Description from "../src/components/Description/Description";
import Feedback from "../src/components/Feedback/Feedback";
import Notification from "../src/components/Notification/Notification";
import Options from "../src/components/Options/Options";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] +1,
    });
  };
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);


  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  //  const handleReset = () => {
  //   setFeedback({
  //     ...feedback,
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  //   });
  // };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description
        name={"Sip Happens Café"}
        description={"Please leave your feedback about our service by selecting one of the options below."} />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback} />
      {totalFeedback === 0 ? <Notification /> :
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />}
     
    </>
  )
}

export default App
