import { useEffect } from "react";
import { getUserPosts } from "../../controllers/postsController";

const DashBoard = () => {
    useEffect(() => {
        setTimeout(async () => {
                const { userPosts, email } = await getUserPosts();
                console.log(userPosts, email);
        }, 500); 
    }, []); 

    return (
        <section className='card'>
            <h1 className='title'>User Dashboard</h1>
        </section>
    );
}

export default DashBoard;