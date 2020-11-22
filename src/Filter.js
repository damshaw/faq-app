import React, { useState } from "react";
import useFetch from "./hooks/useFetch";

function Filter() {
  const PAGES_API = "https://staging.rokebyfarms.com.au/wp-json/wp/v2/pages/";

  const pages = useFetch(PAGES_API);
  console.log(pages);
  return (
    <div id="faq-list">
      <div className="faq-wrapper flex-grid" id="faq-list">
        {pages &&
          pages.map((page) => (
            <div key={page.id} className="card">
              <h4>{page.title.rendered}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Filter;
