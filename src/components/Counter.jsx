import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/counterSlice";
import { useState } from "react";
import { getData } from "../state/usersSlice";

import styles from "./counter.module.css";

export default function Counter() {
  const { count } = useSelector((state) => state.counterSlice);
  const { isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    dispatch(increment(value || 1));
  };
  const handleDecrement = () => {
    dispatch(decrement(value || 1));
  };
  const handleInputChange = (e) => {
    setValue(+e.target.value);
  };

  const handleGetData = () => {
    dispatch(getData());
  };

  return (
    <section className={styles.section}>
      <h2>Counter Component</h2>
      <div>
        Count: <strong>{count}</strong>
      </div>
      <input
        type="number"
        name="number"
        value={value}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleGetData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get data from an API"}
      </button>
    </section>
  );
}
