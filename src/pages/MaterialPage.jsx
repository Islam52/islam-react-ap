import { CardContent, Typography } from "@mui/material";
import Button  from "@mui/material/Button";
import { useState } from 'react';
import { useEffect } from 'react';
import Card from "../components/Tabs/Card/Card";

export default function MaterialPage() {
    const [posts, setPost] = useState([])

    const fethPosts = async () => {
        const response = await fetch
        const result = await response.json()
        setPost(result)
    }
    //kjjjjjjjjjjjjjjjjjjjjjjjjjjjl
    useEffect(() =>{
        fethPosts()
    }, [])

    return(
        <div style={{padding: '1rem'}}>
            {posts.map((post) => 
                <Card key={post.id} style={{ margin: '0.5rem 0', padding: '0 0.5rem'}}>
                    <CardContent>
                        <Typography variant="body1">{post.title}</Typography>
                    </CardContent>
                </Card>)}

        </div>
    )
}
