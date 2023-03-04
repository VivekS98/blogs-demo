import { getPosts } from "@/api";
import { Post } from "@/utils/types";
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./components/pagination";

interface Props {
  posts: Post[];
  page: number;
}

export default function Home({ posts, page }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading className="heading">Blog</Heading>
        {posts.map((post) => (
          <Link key={post.id} href={`post/${post.id}`}>
            <Card className="post">
              <CardHeader>
                <Text pt="2" fontSize="2xl">
                  {post.title}
                </Text>
              </CardHeader>
              <CardBody>
                <Text pt="2" fontSize="sm">
                  {post.body}
                </Text>
              </CardBody>
            </Card>
          </Link>
        ))}
        <Pagination page={page} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts(undefined, context.query.page?.toString());
  return {
    props: {
      posts,
      page: context.query.page ? Number(context.query.page) : 1,
    }, // will be passed to the page component as props
  };
};
