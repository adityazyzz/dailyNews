import React, {useState, useEffect }from 'react'
import NewsItem from "./NewsItem"
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


// urlToBeSearched = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d777155ce1994c36851888ab019f8c9e"

// loading gif link = "https://usagif.com/wp-content/uploads/loading-81.gif"
const News =(props)=>{

  const capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }

const [articles, setarticles] = useState([]);
const [page, setpage] = useState(1);
const [totalResults, settotalResults] = useState(0);

  const updateNews = async(pageNo)=>{
    props.changeProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    props.changeProgress(40);

    let parsedData = await data.json();
    props.changeProgress(70);

    settotalResults(parsedData.totalResults);
    setarticles(articles.concat(parsedData.articles))
    
    props.changeProgress(100);
  }

  const fetchMoreData =() => {
    updateNews(page + 1);
    setpage(page + 1);
  }

  useEffect(() => {
    updateNews(page);
    props.changeNavButton(props.category);
    document.title = "News Monkey - "+ capitalize(props.category);
  }, [])

    return (
      <>
      <div className="container">
        <h1  style = {{marginTop : "70px"}}>News Monkey - Top {(props.category==="general")? "Headlines" : capitalize(props.category)+" Headlines" }</h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
          {articles.map((element)=>{
            // div takes the key
            return <div className="col-md-3" key = {element.url}>
            <NewsItem title = {element.title ? element.title.slice(0,80): ""} description = {element.description ? element.description.slice(0,120) : ""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} dateTime = {element.publishedAt} source = {element.source.name}/>
          </div>
          })}
        </div>
        </InfiniteScroll>
      </div>
      </>
    )
  
}
 
News.propTypes = {
  pageSize : PropTypes.number,
  country : PropTypes.string,
  category : PropTypes.string,
}

News.defaultProps = {
  pageSize : 12,
  country : "in",
  category : "general"
}

export default News