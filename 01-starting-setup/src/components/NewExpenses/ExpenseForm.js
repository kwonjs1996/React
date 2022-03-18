import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /*   const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleCangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    /*     setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });*/
    /*     setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    }); */
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    /*     setUserInput({
      ...userInput,
      enteredAmount: e.target.value,///과거의 스냅샷에 의존하여 최신상태 업데이트가 보장되지 않을 수 있다.
    }); */
    /*     setUserInput((prevState) => {
      ///항상 이 함수 폼을 사용하여 업데이트 한다*암기*
      return { ...prevState, enteredAmount: e.target.value }; ///최신상태를 보장하여 업데이트 해준다
    }); */
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    /*     setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    }); */
    /*     setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    }); */
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleCangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="nember"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-ecpense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
