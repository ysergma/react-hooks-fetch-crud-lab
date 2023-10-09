import React, { useState } from "react";

function QuestionItem({ question,Fetcher,Deleter,Patcher }) {
  const { id, prompt, answers, correctIndex } = question;
  const[indexer,setIndexer]=useState(correctIndex)
  const options = answers.map((answer, index) => (
    <option key={index} value={index} >
      {answer}
    </option>
  ));

  const updateQuestion = (id,indexer) => {
        Patcher(id,indexer)
        // Update the question in state.
        setIndexer(correctIndex);
  };


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={()=>{updateQuestion(question.id)}} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={(id)=>{Deleter(question.id)}}>Delete Question</button >
    </li>
  );
}

export default QuestionItem;
