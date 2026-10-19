import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PrismaClient } from "@prisma/client";
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Clock3 } from "lucide-react";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

function readingTime(html: string): number {
  const text = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&(?:[a-z]+|#\d+|#x[\da-f]+);/gi, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id },
    select: { title: true, desc: true },
  });

  if (!post) return { title: "Article not found | Ryan Large" };

  return {
    title: `${post.title} | Ryan Large`,
    description: post.desc,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });

  if (!post) notFound();

  const minutes = readingTime(post.markup);

  return (
    <main className="min-h-screen bg-[#FEFEFE] text-neutral-900">
      {/* On desktop, the image remains fixed while the article scrolls. */}
      <div className="lg:grid lg:min-h-screen lg:grid-cols-[minmax(0,46%)_minmax(0,54%)]">
        <aside className="relative min-h-[75svh] overflow-hidden bg-neutral-200 sm:min-h-[85svh] lg:sticky lg:top-0 lg:h-screen lg:min-h-0">
          {post.headerImg ? (
            <img
              src={post.headerImg}
              alt={`Cover artwork for ${post.title}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#F6F5F2] via-[#E9E8E5] to-[#D7D6D2]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-6 text-white sm:p-10">
            <Link
              href="/blog"
              className="cinzel inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
              All Articles
            </Link>
            <span className="cinzel text-[10px] uppercase tracking-[0.2em] text-white/80">
              Ryan Large / Journal
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10 lg:p-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/70" />
              <span className="cinzel text-[10px] uppercase tracking-[0.22em] text-white/80">
                Development Journal
              </span>
            </div>
            <h1 className="cinzel max-w-2xl text-3xl leading-[1.25] tracking-tight sm:text-4xl xl:text-5xl 2xl:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-lg font-sans text-sm leading-7 text-white/80">
              {post.desc}
            </p>
            <div className="mt-8 h-px w-full bg-white/30" />
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 font-sans text-xs text-white/85">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={14} strokeWidth={1.5} />
                {formatDate(post.createdAt)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={14} strokeWidth={1.5} />
                {minutes} min read
              </span>
            </div>
          </div>
        </aside>

        <article className="min-w-0 bg-[#FEFEFE]">
          <div className="mx-auto max-w-[820px] px-6 pb-20 pt-16 sm:px-10 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24 xl:px-16">
            <div className="mb-12 flex items-center gap-3 border-b border-neutral-200 pb-7 text-neutral-500">
              <BookOpen size={17} strokeWidth={1.4} />
              <span className="cinzel text-[10px] uppercase tracking-[0.2em]">
                An Exploration in Software
              </span>
            </div>

            {/* Existing globally styled HTML content. Only render trusted/sanitized markup. */}
            <div
              className="markup min-w-0 max-w-full break-words text-neutral-800 [&_img]:h-auto [&_img]:max-w-full [&_pre]:max-w-full [&_pre]:overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: post.markup }}
            />

            <div className="mt-20 border-t border-neutral-200 pt-10">
              <p className="cinzel text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Thanks for Reading
              </p>
              <h2 className="cinzel mt-5 text-2xl leading-snug sm:text-3xl">
                Every project starts with curiosity.
              </h2>
              <p className="mt-5 max-w-lg font-sans text-sm leading-8 text-neutral-500">
                Explore more experiments, engineering lessons, and stories from the process of building things.
              </p>
              <Link
                href="/blog"
                className="cinzel group mt-8 inline-flex items-center gap-2 border-b border-neutral-400 pb-2 text-[10px] uppercase tracking-[0.15em] transition-colors hover:border-neutral-900"
              >
                Explore More Articles
                <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
