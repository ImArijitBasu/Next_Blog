import React from "react";

const Details = async ({ params }) => {
  const { details } =await params;
  console.log(details);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${details}`
  );
  const post = await res.json();

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold text-center border-b-4 py-2 my-4 uppercase">
        Post Details
      </h1>
      <h2 className="text-xl font-semibold">TITLE: {post.title}</h2>
      <p className="text-xs pt-5 text-orange-400 text-left">details</p>
      <p className="text-justify pb-5">{post.body}</p>
    </div>
  );
};

export default Details;
