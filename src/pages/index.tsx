import { getPosts, getUsers } from "@/api";
import { Post, User } from "@/utils/types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./components/pagination";

interface Props {
  posts: Post[];
  users: User[];
  page: number;
}

export default function Home({ posts, users, page }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <aside className="users">
          <Text pt="2" fontSize="3xl">
            Users
          </Text>
          {users.map((user) => (
            <Link
              key={user.id}
              href={{ pathname: "/", query: { userId: user.id, page: 1 } }}
            >
              <Button colorScheme="teal" variant="ghost">
                <Text pt="2" fontSize="lg">
                  {user.name}
                </Text>
              </Button>
            </Link>
          ))}
        </aside>
        <section>
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
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts(
    undefined,
    context.query.page?.toString() || "1",
    context.query.userId?.toString()
  );
  const users = await getUsers();
  return {
    props: {
      posts,
      users,
      page: context.query.page ? Number(context.query.page) : 1,
    }, // will be passed to the page component as props
  };
};
