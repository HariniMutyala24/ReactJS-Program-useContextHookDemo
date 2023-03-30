import React,{useContext} from "react";
import { BlogContext} from "./App";
function BlogContextDemo(){
    const bInfo=useContext(BlogContext);
    return(
        <div>
            <p>Topic:{bInfo["Node JS"].post}</p>
            <p>Authoe:{bInfo["Node JS"].author}</p>
        </div>
    )
}
export default BlogContextDemo;