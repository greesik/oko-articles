import React from 'react'
import "./Article.scss";


const Article = ({thumb, title, excerpt, url}) => {
    return (
        <article className="articles-wrapper">
            <article className="article-wrapper">
                <a href={url} target="_blank" rel="noreferrer">
                    <div className="title-wrapper">
                        <h2>{title}</h2>
                    </div>
                    <div className="image-wrapper">
                        <img src={thumb} alt={title}/>
                    </div>
                    <div className="description-wrapper">
                        <div className="excerpt-wrapper">{excerpt}</div>
                    </div>
                </a>
            </article>
        </article> 
    )
}

export default Article
