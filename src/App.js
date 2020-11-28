import React, { useState } from "react";
import "./App.scss";
import Filter from "./Filter";
import useFetch from "./hooks/useFetch";
import Modal from "./components/Modal";

function App({ faqData }) {
  const ROKEBY_CAT_ID = "107,176,108";
  // const COCOBELLA_CAT_ID = "107,176,108";
  // const IMPRESSED_CAT_ID = "107,176,108";
  // const APP_CAT_ID = "107,176,108";
  const PER_PAGE = "per_page=100";
  const CAT = "categories";
  // const TAG = "tags";
  // const POST = "posts";
  // const [postsData, setPostsData] = useState("");
  // const [filter, setFilter] = useState("");

  // menuOpen
  //    setPostsData(`${CAT}=${APP_CAT_ID}&${PER_PAGE}`)
  //   //&tags=169
  //   : setPostsData(`${CAT}=${ROKEBY_CAT_ID}=${TAG}=${APP_CAT_ID}&${PER_PAGE}`);
  const [isModalOpen, toggleModal] = useState(false);

  const API_URL = "https://faqs.madegroup.com/wp-json/wp/v2/posts/?" + PER_PAGE + "&" + CAT + "=" + ROKEBY_CAT_ID;
  const faqIds = faqData;
  const faqIdsArray = faqIds.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const posts = useFetch(API_URL);

  console.log("faqData", faqData);
  console.log("faqIdsArray", faqIdsArray);
  console.log("posts", posts);

  return (
    <div className="App">
      <button onClick={() => setMenuOpen(!menuOpen)}>Click me</button>
      <div className="faq-wrapper flex-grid" id="faq-list">
        {posts &&
          posts

            // .filter((post) => {
            //   // return post.categories.includes(faqIdsArray);
            //   const res = post.categories.filter((f) => faqData.includes(f));
            //   console.log(res);
            // })
            .map((post) => (
              <div key={post.id} className="card">
                <div className="inner">
                  <h3 className="title">{post.title.rendered}</h3>
                  <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                  <button onClick={() => toggleModal(!isModalOpen)}>Read more</button>

                </div>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                  <h3 className="title">{post.title.rendered}</h3>
                  <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                  <button onClick={() => toggleModal(false)}>Close</button>
                </Modal>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
