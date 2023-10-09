import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const[questions,setQuestions]=useState([])
  const Fetcher = async()=> {
       const resp = await fetch("http://localhost:4000/questions");
       const quest= await resp.json();
       setQuestions(quest)
  }
  const Setter = async()=> {
    const resp = await fetch("http://localhost:4000/questions",{
      method: 'POST',
      headers:
      { "Content-Type": "application/json" },
      body:
      {
        "prompt": string,
        "answers": array,
        "correctIndex": integer
      },
    });
    const quest= await resp.json();
    setQuestions(quest)
}
  
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm Setter={Setter}/> : <QuestionList questions={questions} Fetcher={Fetcher} />}
    </main>
  );
}

export default App;
