import { Container, CssBaseline, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { Post } from '../lib/Post'
import PostService from '../lib/PostService'

type IndexProps = {
    posts: Post[];
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
    const posts = await PostService.findAll();

    return {
        props: {
            posts
        }
    }
}

const Index = (props: IndexProps) => {

    const { posts } = props;

    console.log(posts)

    return (
        <div>
           <CssBaseline />
            <Header />
            <Container>
                <Typography variant="h4" gutterBottom>Posts</Typography>
                <PostList posts={posts} />
            </Container>
        </div>
    )
}

export default Index
