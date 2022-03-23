import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        {/* 함수를 실행 하는 것이 아니라 point 하는 것이다. clickHandler()로 사용할 경우 
      처음 로드 될 때 바로 실행이 된다 자바스크립트가 실행되기때문에 point 한다는건
      저 함수를 기억 하고 있다가 point 되었을 때 실행시킨다는 것 */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
