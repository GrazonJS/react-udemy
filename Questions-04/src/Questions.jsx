import React from "react";
import questions from "./data";
import Question from "./Question";

export const Questions = () => {
  return (
    <section>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </section>
  );
};
