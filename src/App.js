import React, { useState } from "react";
import "./App.scss";
import Filter from "./Filter";
import useFetch from "./hooks/useFetch";

function App() {
  // const ROKEBY_CAT_ID = "107,176,108";
  // const COCOBELLA_CAT_ID = "107,176,108";
  // const IMPRESSED_CAT_ID = "107,176,108";
  // const APP_CAT_ID = "107,176,108";
  const API_URL = "https://faqs.madegroup.com/wp-json/wp/v2/posts/";
  // const PER_PAGE = "per_page=100";
  // const CAT = "categories";
  // const TAG = "tags";
  // const POST = "posts";

  const [menuOpen, setMenuOpen] = useState(false);
  // const [postsData, setPostsData] = useState("");
  // const [filter, setFilter] = useState("");

  // menuOpen
  //    setPostsData(`${CAT}=${APP_CAT_ID}&${PER_PAGE}`)
  //   //&tags=169
  //   : setPostsData(`${CAT}=${ROKEBY_CAT_ID}=${TAG}=${APP_CAT_ID}&${PER_PAGE}`);
  const posts = useFetch(API_URL);
  console.log("posts", posts);
  return (
    <div className="App">
      <Filter />
      <button onClick={() => setMenuOpen(!menuOpen)}>Click me</button>
      <div className="faq-wrapper flex-grid" id="faq-list">
        {posts &&
          posts
            .filter((post) => {
              return post.categories.includes(221);
            })
            .map((post) => (
              <div className="card">
                <h4>{post.title.rendered}</h4>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
