import { PrismaClient } from "@prisma/client";
import { GrLike, GrLikeFill, GrStar } from "react-icons/gr";
const prisma = new PrismaClient();

const page = async () => {
  const getPosts = async () => {
    "use server";
    const blogPosts = await prisma.blogPost.findMany();
    return blogPosts;
  };

  const posts = await getPosts();

  return (
    <main className="pt-40 px-10 lg:px-40">
      <h1 className="text-2xl mb-3">Worst Reads</h1>
      <section className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#333] rounded-md shadow-md p-5 duration-200 hover:translate-y-2 cursor-pointer relative w-full h-full"
          >
            <a href={`/blog/post/${post.id}`}>
              {post.featured && (
                <div className="absolute top-1 left-1 text-yellow-300">
                  <GrStar />
                </div>
              )}
              <img
                className="w-full rounded-sm h-[150px] object-cover"
                src={post.headerImg}
                alt="header"
              />
              <div className="flex justify-between items-start mt-2">
                <h2 className="text-lg font-semibold border-b border-b-slate-400">
                  {post.title}
                </h2>
                <p className="text-sm">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <p className="mt-1">{post.desc}</p>
              <div className="flex justify-between items-center mt-4 text-sm">
                <p>Likes {post.likes}</p>
                <GrLike />
              </div>
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
