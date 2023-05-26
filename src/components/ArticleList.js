import React from "react";
import Article from "./Article.js"

function ArticleList({posts}) {

    const articleComponents = posts.map( (article) => <Article title= {article.title} date= {article.date} preview={article.preview} key={article.id} /> ) 
    return (
      <main>
       {articleComponents}
      </main>
    )

}

export default ArticleList