import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {

    const [value, setValue] = useState('Text in input')

    // console.log(count)
    // console.log(setCount)

  return (
    <div className="App">
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  );
}

export default App;

// 26:25




// import React, {useState} from "react";
//
// function App() {
//
//     const [likes, setLikes] = useState(2)
//     const [value, setValue] = useState('Text in input')
//
//     // console.log(count)
//     // console.log(setCount)
//
//
//   function increment() {
//       setLikes( likes + 1)
//   }
//
//   function decrement() {
//       setLikes( likes - 1)
//   }
//
//   return (
//     <div className="App">
//       <h1>{likes}</h1>
//       <h1>{value}</h1>
//           <input
//               type={'text'}
//               value={value}
//               onChange={event => setValue(event.target.value)}
//           />
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }
//
// export default App;
