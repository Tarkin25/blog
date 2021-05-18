import { Container, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { Post } from '../lib/Post'
import PostService from '../lib/PostService'

export type PostPageProps = {
    post: Post;
}

type Query = ParsedUrlQuery & {
    id: string;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Query> = async (context) => {
    const { id } = context.query;

    const post = await PostService.findById(id as string);

    return {
        props: {
            post
        }
    }
}

const PostPage = (props: PostPageProps) => {

    const {post} = props;

    return (
        <div>
           <Head>
                <title>
                    {post.title}
                </title>    
            </Head> 
            <Container>
                <Typography variant="h2" gutterBottom>
                    {post.title}
                </Typography>
                <Typography>
                    {post.content}
                </Typography>
            </Container>
        </div>
    )
}

export default PostPage
