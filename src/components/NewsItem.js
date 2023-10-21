import React from 'react'

const NewsItem = (props)=> {

  let defaultImage = "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png";
  
    let {title,description,imageUrl,newsUrl,author,dateTime,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style = {{display : "flex",justifyContent : "flex-end",position : "absolute",right : 0}}>
        <span className="badge rounded-pill bg-success" >
          {source}
        </span>
        </div>
          <img src={imageUrl ? imageUrl : defaultImage} className="card-img-top" alt="a news pic" height = "160px"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "unknown" } at {new Date(dateTime).toGMTString()}</small></p>
            <a href={newsUrl} target = "_blank" rel="noreferrer" className="btn btn-dark  btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
}
export default NewsItem