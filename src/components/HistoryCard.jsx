import React, {useState} from "react";

const HistoryCard = ({ data }) => {
    let color = '#2ecc71';
    let SetColor = () =>{
      if(data.amount < 0){
        return '#c0392b';
      }
      return '#2ecc71';
    }
    color = SetColor();
    
    return (
      <>
        <div className="history-card" key={data.id} style={{"--afterColor":color}}>
          <div className="history-title">{data.name}</div>
          <div className="history-price" >{data.amount}</div>
        </div>
      </>
    );
  
};

export default HistoryCard;
