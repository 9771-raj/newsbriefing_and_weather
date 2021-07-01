import React from "react";
import {useEffect,useState} from "react"
import Card from "./Card";
const Newsfeed=()=>{
        const [article, setarticle] = useState([])
      useEffect(()=>{

            const fetchNewsapi=async ()=>{
                  
                  const url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ecdf903e12c64ef0ae67911661dd6362"
                  const news_response=await fetch(url);
                  const news_json=await news_response.json();
                  
                  setarticle(news_json.articles)
                  
            }
            fetchNewsapi();
      },[])

      return(
            <>
               <div>
               {
                     article.map((val)=>{
                       return <Card title={val.title} img={val.urlToImage} pub={val.publishedAt} content={val.description}
                             src={val.source.name} link={val.url}
                       />
                     })
               }
                
               </div>
            </>
      );
}

export default Newsfeed;