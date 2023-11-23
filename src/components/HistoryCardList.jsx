import React from 'react'
import HistoryCard from './HistoryCard';
const HistoryCardList = ({historyList}) => {
  return (
    <div className="history">
      <h2>History</h2>
        <div className="h-line"></div>
        {historyList?.map( (data) =>
          <HistoryCard data = {data}/>
         )}
      </div>
  )
}

export default HistoryCardList;