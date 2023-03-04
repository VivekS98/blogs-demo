import { getPosts } from "@/api";
import { Post } from "@/utils/types";
import { Heading, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

interface Props {
  post: Post;
}

export default function BlogPost({ post }: Props) {
  return (
    <main className="post">
      <Heading>{post.title}</Heading>
      <br />
      <p>{post.body}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts(context?.params?.id?.toString());
  return {
    props: {
      post: posts[0],
    }, // will be passed to the page component as props
  };
};
