import PostCard from "@/components/PostCard";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      <h1 className="uppercase text-center font-bold my-4 ">homepage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto px-2">
        {data.map((item) => (
          <>
            <PostCard
              key={item.id}
              title={item.title}
              body={item.body}
              id={item.id}
            />
          </>
        ))}
      </div>
    </div>
  );
}
