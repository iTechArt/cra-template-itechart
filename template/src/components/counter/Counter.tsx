import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAmount, increment, decrement, addAmoutAsync, incrementAsync} from '../../ducks/counter/actions';
import {selectValue} from '../../ducks/counter/selectors';
import styles from './Counter.module.css';

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectValue);
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(addAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(addAmoutAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync())}
        >
          Inc Async
        </button>
      </div>
    </div>
    )
}