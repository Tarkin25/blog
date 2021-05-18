import { Post } from "./Post";

const posts: Post[] = [
    {
        id: "first-post",
        title: "First post",
        content: "Hello, this is my first post."
    },
    {
        id: "second-post",
        title: "Second post",
        content: "Hello again, this is my second post."
    }
]

export const findAll = async () => posts;

export const findById = async (id: string) => posts.find(post => post.id === id);

const PostService = {
    findAll,
    findById
}

export default PostService;
