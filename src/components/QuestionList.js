import React,{useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,Fetcher}) {
  useEffect(()=>{
    Fetcher()  
  },[questions])

  const Deleter = async(id)=> {
    const resp = await fetch(`http://localhost:4000/questions/${id}`,{
      method: 'DELETE',
      headers:
      { "Content-Type": "application/json" },
    });
    const quest= await resp.json();
}

const Patcher = async(id,indexer)=> {
  const resp = await fetch(`http://localhost:4000/questions/${id}`,{
    method: 'PATCH',
    headers:
    { "Content-Type": "application/json" },
    body: JSON.stringify({
      correctIndex: indexer,
    }),
  });
  const quest= await resp.json();
}
  return (

    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(
          <QuestionItem Deleter={Deleter} Patcher={Patcher} key={question.id} question={question}/>
          ))}</ul>
    </section>
  );
}

export default QuestionList;
