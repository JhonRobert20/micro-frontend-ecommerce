import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
  { id: 3, title: "post3" },
  { id: 4, title: "post4" },
  { id: 5, title: "post5" },
  { id: 6, title: "post6" },
  { id: 7, title: "post7" },
  { id: 8, title: "post8" },
];

const fetchPosts = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts.slice((page - 1) * 2, page * 2);
};

export const LoadMoreProducts = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchPosts(pageParam);
      return response;
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    initialData: {
      pages: [posts.slice(0, 2)],
      pageParams: [1],
    },
  });

  return (
    <div>
      posts:
      {data?.pages.map((page, i) => {
        return (
          <div key={i}>
            {page.map((post) => {
              return <div key={post.id}>{post.title}</div>;
            })}
          </div>
        );
      })}
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : data?.pages.length < 4
          ? "Load more"
          : "NOthing to load"}
      </button>
    </div>
  );
};
