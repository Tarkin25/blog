import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react'
import { Post } from '../lib/Post'
import Link from "../components/Link"

export type PostListProps = {
    posts: Post[];
}

const PostList = (props: PostListProps) => {

    const {posts} = props;

    return (
        <List>
            {posts.map(post => (
                <ListItem key={post.id} >
                    <Link href={`/${post.id}`}>
                        <ListItemText primary={post.title} />
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default PostList
