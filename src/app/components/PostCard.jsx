"use client";

import Link from "next/link";

const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div className="card bg-base-100 w-full shadow-xl relative border border-red-300">
        <div className="card-body">
          <h2 className="card-title py-5">{title}</h2>
          {/* <p>{body}</p> */}
          <div className="card-actions justify-end absolute bottom-1 right-1 ">
            <Link href={`/blogs/${id}`}>
              <button className="btn border-t-red-400 bg-orange-300 hover:bg-orange-500 uppercase">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
