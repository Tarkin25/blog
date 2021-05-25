import { Box, Container, CssBaseline, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { Post } from '../lib/Post'
import PostService from '../lib/PostService'
import Grid from '../components/Grid';
import styles from '../styles/index.module.css';

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
            <Grid gap={2} itemProps={{width: "1fr", minWidth: "240px"}}>
                {Array(20).fill(undefined).map((_, index) => (
                    <Box key={index} bgcolor="pink" borderRadius="16px" padding="48px" />
                ))}
            </Grid>
            <Box margin="48px" bgcolor="lightgreen" height="300px" width="400px" borderRadius="8px" className={styles.enter} />
            <Container>
                <Typography variant="h4" gutterBottom>Posts</Typography>
                <PostList posts={posts} />
            </Container>
        </div>
    )
}

export default Index
