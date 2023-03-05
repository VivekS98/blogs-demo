import { Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  page: number;
}

const Pagination = ({ page }: Props) => {
  return (
    <div className="pagination">
      <Stack direction="row" spacing={4} align="center">
        {page - 2 > 0 && (
          <Link href={{ pathname: "/", query: { page: page - 2 } }}>
            <Button colorScheme="teal" variant="ghost">
              {page - 2}
            </Button>
          </Link>
        )}
        {page - 1 > 0 && (
          <Link href={{ pathname: "/", query: { page: page - 2 } }}>
            <Button colorScheme="teal" variant="ghost">
              {page - 1}
            </Button>
          </Link>
        )}
        <Button colorScheme="teal" variant="outline" disabled>
          {page}
        </Button>

        {page + 1 < 100 && (
          <Link href={{ pathname: "/", query: { page: page + 1 } }}>
            <Button colorScheme="teal" variant="ghost">
              {page + 1}
            </Button>
          </Link>
        )}

        {page + 2 < 100 && (
          <Link href={{ pathname: "/", query: { page: page + 2 } }}>
            <Button colorScheme="teal" variant="ghost">
              {page + 2}
            </Button>
          </Link>
        )}
      </Stack>
    </div>
  );
};

export default Pagination;
