import { PrismaClient } from "@prisma/client";
import { GrNotes } from "react-icons/gr";
const prisma = new PrismaClient();

type Post = {
  id: string;
  title: string;
  desc: string;
  featured: boolean;
  headerImg: string;
  likes: number;
  markup: string;
  createdAt: Date;
  updatedAt: Date;
  categoryid: string | null;
};

const page = async ({ params }: { params: { id: string } }) => {
  const getPost = async () => {
    "use server";
    const post: Post | null = await prisma.blogPost.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!post) {
      const defaultPost = {
        id: "1i30hr403u09eu",
        title: "No posts to show you. Sorry",
        desc: "So sorry. Come back later",
        featured: false,
        headerImg: "",
        likes: 0,
        markup: `<p>: (</p>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryid: null,
      };
      return defaultPost;
    }
    return post;
  };

  const post: Post = await getPost();

  const getTimeDuration = () => {
    const lengthOfMarkup = post.markup.length;
    const minutes = Math.floor(Math.floor(lengthOfMarkup / 210) / 8);
    if (minutes >= 60) {
      return `${minutes / 60} hour read`;
    }
    if (minutes < 1) {
      return "1 minute read";
    }
    return `${minutes} minute read`;
  };

  const duration = getTimeDuration();

  return (
    <>
      <head>
        <title>{"Ryan's Dev Blog " + post.title}</title>
        <meta name="description" content={post.desc} />
        <link rel="shortcut icon" href={post.headerImg} type="image/x-icon" />
      </head>
      <body>
        <main className="flex lg:flex-row flex-col justify-center items-center">
          <section className="relative w-full h-screen cinzel">
            <img
              src={post?.headerImg}
              alt="header"
              className="z-[-1] fixed lg:relative inset-0 w-full h-full object-cover"
            />
            <div className="right-0 bottom-0 left-0 absolute bg-black bg-opacity-75 p-5">
              <h1 className="mb-10 pb-3 border-b border-b-slate-400 text-3xl md:text-4xl lg:text-6xl text-center">
                {post?.title}
              </h1>
              <p>{duration}</p>
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
          <section className="flex flex-col justify-start items-center bg-slate-100 pt-40 w-full lg:h-screen lg:overflow-y-auto text-black">
            <div className="flex justify-center items-center border-b border-b-black w-[80%]">
              <div className="bg-gray-400-400 p-2 rounded-full translate-y-[50%]">
                <GrNotes />
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post?.markup }}
              className="mt-20 px-5 md:px-10 lg:px-20 pb-10 markup"
            ></div>
            <div className="bg-[#FEFEFE] px-20 py-5 w-full"></div>
          </section>
        </main>
      </body>
    </>
  );
};

export default page;
