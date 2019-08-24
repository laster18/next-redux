import React, { FC } from 'react';

interface Props {
  count: number;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
  onClickSetCount: (amount: number) => void;
}

const Counter: FC<Props> = ({ count, onClickDecrement, onClickIncrement, onClickSetCount }) => (
  <>
    <div>カウンター: {count}</div>
    <div>
      <button onClick={onClickIncrement}>increment</button>
      <button onClick={onClickDecrement}>decrement</button>
    </div>
    <div>
      <button onClick={() => onClickSetCount(10)}>10</button>
      <button onClick={() => onClickSetCount(20)}>20</button>
      <button onClick={() => onClickSetCount(30)}>30</button>
      <button onClick={() => onClickSetCount(0)}>reset</button>
    </div>
  </>
);

export default Counter;
