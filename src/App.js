import './App.css';
import React from "react";
import BlogContextDemo from './BlogContextDemo.js'
const blogInfo={
  'React':{
    'post':"learn useContext Hooks",
    'author':"Mani Y"
  },
  'Node JS':{
    'post':'Node Commands',
    'author':'Vani S'
  }
}
export const BlogContext=React.createContext(blogInfo);
function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello Rani!</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo/>
        </BlogContext.Provider>
      </div>
    </div>
  );
}

export default App;
