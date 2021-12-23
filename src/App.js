import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: "Description"},
        {id: 2, title: 'JavaScript 2', body: "Description"},
        {id: 3, title: 'JavaScript 3', body: "Description"},
    ])

    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: 'Python', body: "Description"},
    //     {id: 2, title: 'Python 2', body: "Description"},
    //     {id: 3, title: 'Python 3', body: "Description"},
    // ])

  return (
    <div className="App">
        <form>
            <input type="text" placeholder="Название поста"/>
            <input type="text" placeholder="Описание поста"/>
            <button>Создать пост</button>
        </form>
        <PostList posts={posts} title="Посты про JS"/>
        {/*<PostList posts={posts2} title="Посты про Python"/>*/}
    </div>
  );
}

export default App;





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
