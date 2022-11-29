import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [titleItem, setTitleItem] = useState(false);

  const updateTitle = () => {
    setTitleItem(true);
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{!titleItem ? props.title : 'Updated!'}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button type="button" onClick={updateTitle}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
