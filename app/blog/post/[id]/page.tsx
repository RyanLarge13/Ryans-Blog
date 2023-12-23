import { PrismaClient } from "@prisma/client";
import { GrNotes } from "react-icons/gr";
const prisma = new PrismaClient();

const page = async ({ params }) => {
  const getPost = async () => {
    "use server";
    const post = await prisma.blogPost.findUnique({
      where: {
        id: params.id,
      },
    });
    return post;
  };

  const getPrevPosts = async () => {
    return [];
  };

  const post = await getPost();
  const relatedPosts = await getPrevPosts();

  return (
    <main className="flex justify-center items-center flex-col lg:flex-row">
      <section className="w-full h-screen relative">
        <img
          src={post?.headerImg}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="bg-opacity-75 bg-black absolute bottom-0 right-0 left-0 p-5">
          <h1 className="text-6xl text-center border-b border-b-slate-400 pb-3 mb-10">
            {post?.title}
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="text-xs italic">
              Posted by{" "}
              <span className="font-semibold text-sm">Ryan Large</span>
            </h2>
            <p>
              {new Date(post?.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-screen lg:overflow-y-auto flex flex-col justify-start items-center pt-40 text-black bg-slate-100">
        <div className="border-b border-b-black flex justify-center items-center w-[80%]">
          <div className="translate-y-[50%] bg-purple-400 rounded-full p-2">
            <GrNotes />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post?.markup }}
          className="mt-20 px-5 md:px-10 lg:px-20 pb-10 markup"
        ></div>
        <div className="bg-[#222] py-5 px-20 w-full">
          {relatedPosts.map((relPost) => (
            <div key={relPost.id}></div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
