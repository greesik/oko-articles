import React, {useState, useEffect} from 'react'
import Article from '../Article/Article';

import "./Feed.scss";

const Feed = () => {

    const [posts, setPosts] = useState([]);

    const fetchFeed = () => {
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then(posts => setPosts(posts))
    }

    useEffect(() => {
        fetchFeed();
    }, [])

    console.log(posts);

    return (
        
        <section className="articles-container">
            {posts.map(post => 
                <div key={post.date}>  
                    <Article {...post}/>
                </div>   
            )}   
        </section>
    )
}

export default Feed
