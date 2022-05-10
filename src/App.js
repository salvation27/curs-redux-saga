// import React, { useState } from "react";
import { useSelector,useDispatch} from 'react-redux'
import { incrace_count, decrace_count } from "./redux/actions/actionCreator";

const App = () => {
  const store = useSelector(store=>store)
  console.log(store)

  const dispatch = useDispatch()

// ======================================================
  // const [count, setCount] = useState(0);

  // const handelChangeCount = (str) => {
  //   str === "d" ? setCount(count - 1) : setCount(count + 1);
  // };
// ============================================================

  const handelChangeCount = (str) => {
    str === "d" ? dispatch(decrace_count()) : dispatch(incrace_count());
  };




  return (
    <div>
      <button
        disabled={store.counter.count <= 0}
        onClick={() => handelChangeCount("d")}
      >
        -
      </button>
      {store.counter.count}
      <button onClick={() => handelChangeCount("i")}>+</button>
    </div>
  );
};

export default App;
