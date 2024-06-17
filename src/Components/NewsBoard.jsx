import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

export default function NewsBoard({category}) {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url= ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=02b08661b0134c20ac64c002a9a0808c`;
        fetch(url).then(response => response.json()).then(data =>setArticles(data.articles));
    },[category])


  return (
    <div>
        <h2 className='text-center'>Latest<span className='badge bg-danger'>News</span></h2>
         {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })} 
          <NewsItem />  
    
    </div>
  )
}
