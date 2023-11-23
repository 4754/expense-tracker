import { useState, useEffect } from "react";
import "./App.css";
import HistoryCardList from "./components/HistoryCardList";
import InputForm from "./components/InputForm";
import AmountContainer from "./components/AmountContainer";

function App() {
  //  Before setting local storage
  // const [historyList, setHistoryList] = useState([]);
  // After setting local storage
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);

  useEffect( ()=>{
    
    setItems(JSON.parse(localStorage.getItem("items")));
    
  },[]);

  useEffect(() => {
    
    localStorage.setItem("items", JSON.stringify(items));
    
  }, [items]);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="container">
        <AmountContainer historyList={items} />
        <HistoryCardList historyList={items} />
        {/* Here goes form */}
        <InputForm
          setItems={setItems}
          items={items}
        />
      </div>
    </div>
  );
}

export default App;
