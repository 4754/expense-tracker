import React from "react";

const AmountContainer = ({historyList}) => {
    const data = historyList.reduce(
        (sum, current) => {
          sum.total = sum.total + current.amount;
          if (current.amount > 0) {
            sum.income = sum.income + current.amount;
          } else {
            sum.expense = sum.expense + current.amount;
          }
          return sum;
        },
        { total: 0, income: 0, expense: 0 }
      );
  return (
    <>
      <h2>YOUR BALANCE</h2>
      <h2>$ {data.total}</h2>
      <div className="total-expense">
        <div className="income">
          <h2>INCOME</h2>
          <h3>${data.income}</h3>
        </div>
        <div className="line"></div>
        <div className="expense">
          <h2>EXPENSE</h2>
          <h3>${data.expense}</h3>
        </div>
      </div>
    </>
  );
};

export default AmountContainer;
