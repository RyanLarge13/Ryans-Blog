import Link from "next/link";
import Footer from "@/components/Footer";
import { PrismaClient } from "@prisma/client";
import { ArrowUpRight, Star } from "lucide-react";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

const Page = async () => {
  const posts = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="cinzel min-h-screen bg-[#FEFEFE] text-neutral-900">
      {/* Page introduction */}
      <section className="border-b border-neutral-200 px-6 pb-16 pt-28 md:px-12 md:pb-24 md:pt-36 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-neutral-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              The Development Journal
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl leading-[1.15] tracking-tight sm:text-6xl md:text-7xl">
            Ideas, experiments
            <span className="block text-neutral-400">
              & everything between.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-sans text-sm leading-8 text-neutral-500 md:text-base">
            A collection of software experiments, engineering challenges,
            lessons learned, and stories from the process of building things.
          </p>

          <div className="mt-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            <span>{posts.length} Articles</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>Always Exploring</span>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:px-16">
        {posts.length === 0 ? (
          <div className="py-28 text-center">
            <h2 className="text-2xl">Stories are on their way.</h2>
            <p className="mt-4 font-sans text-sm text-neutral-500">
              New experiments and insights will appear here soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {posts.map((post, index) => {
              const reverse = index % 4 === 0 || index % 4 === 1;

              return (
                <Link
                  key={post.id}
                  href={`/blog/post/${post.id}`}
                  className="group block"
                >
                  <article
                    className={`relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/40 ${
                      reverse ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden bg-neutral-100 sm:h-80 md:h-[340px] md:w-1/2 lg:h-[400px]">
                      <img
                        src={post.headerImg}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      {post.featured && (
                        <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/70 bg-white/90 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-neutral-800 backdrop-blur-sm">
                          <Star
                            size={12}
                            strokeWidth={1.5}
                            className="fill-neutral-800"
                          />
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex w-full flex-col justify-center px-7 py-10 sm:px-9 md:w-1/2 md:px-6 lg:px-10">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-6 bg-neutral-300" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                          Journal Entry
                        </span>
                      </div>

                      <h2 className="text-2xl leading-snug tracking-tight transition-colors duration-300 group-hover:text-neutral-500 lg:text-3xl">
                        {post.title}
                      </h2>

                      <p className="mt-5 line-clamp-4 font-sans text-sm leading-7 text-neutral-500">
                        {post.desc}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-neutral-800">
                        Read Article
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Closing statement */}
      <section className="border-t border-neutral-200 bg-[#F8F8F7] px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            A Work In Progress
          </span>

          <h2 className="mt-6 text-3xl leading-snug tracking-tight md:text-4xl">
            Curiosity is part of the process.
          </h2>

          <p className="mx-auto mt-6 max-w-lg font-sans text-sm leading-8 text-neutral-500">
            Not every experiment becomes a finished product. Sometimes the most
            valuable part is discovering what doesn't work, and understanding
            why.
          </p>

          <Link
            href="/"
            className="mt-9 inline-flex items-center gap-2 border-b border-neutral-400 pb-2 text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-neutral-900"
          >
            Back to Home
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
