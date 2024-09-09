import { useContext, useEffect, useState } from "react"
import { getPosts } from "../../controllers/postsController"
import {PostsContext} from '../../contexts/PostsContexts'
import Post from '../../Components/Post'

const Home = ()=>{

    const { posts, setPosts} = useContext(PostsContext)

    //Loading state

    const [ loading, setLoading] = useState(true);

    useEffect(()=>{

        setTimeout(async () =>{
            //grab all posts
            const data = await getPosts()
            //Update posts state
            setPosts(data.posts)
            //remove the loading
            setLoading(false)
        },1000)

    }, [])

    console.log(posts)

    return(
        <section className='card'>
            <h1 className='title'>Latest Posts</h1>
            {loading && (<i className= 'fa-solid fa-spinner animate-spin text-3xl text-center text-indigo-300 block'/>)}
           {posts && posts.map(post=><div key={post.id}>
            <Post post={post}/>
           </div>)}
        </section>
    )
}

export default Home
