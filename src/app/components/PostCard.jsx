"use client";

import Link from "next/link";

const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>{body}</p> */}
          <div className="card-actions justify-end">
            <Link href={`/blogs/${id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
