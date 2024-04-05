import { PrismaClient } from "@prisma/client";
import { GrStar } from "react-icons/gr";
const prisma = new PrismaClient();

const page = async () => {
  const getPosts = async () => {
    "use server";
    const blogPosts = await prisma.blogPost.findMany();
    return blogPosts;
  };

  const posts = await getPosts();

  return (
    // <main className="pt-40 px-10 lg:px-40">
    <main className="cinzel">
      <section className="grid grid-cols-1 md:grid-cols-2">
        {posts.map((post, index) => (
          <a key={post.id} href={`/blog/post/${post.id}`}>
            <div
              className={`bg-[#333] cursor-pointer relative w-full h-full flex flex-col justify-center items-center duration-200 hover:scale-95 ${
                index % 4 === 0 || (index - 1) % 4 === 0
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              {post.featured && (
                <div className="absolute top-1 left-1 text-yellow-300">
                  <GrStar />
                </div>
              )}
              <img
                className="w-full md:w-[50%] rounded-sm h-[50vh] object-cover"
                src={post.headerImg}
                alt="header"
                loading="lazy"
              />
              <div className="flex flex-col justify-center items-center px-10 my-5 md:my-0">
                <h2 className="text-4xl text-center border-b-slate-400">
                  {post.title}
                </h2>
                <p className="mt-5 text-sm text-center md:text-left">
                  {post.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
};

export default page;
