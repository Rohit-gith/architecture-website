import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ChevronRight, Link2, Share2 } from "lucide-react";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import Button from "../../components/common/Button";
import Reveal from "../../components/common/Reveal";
import WhatsAppIcon from "../../components/common/WhatsAppIcon";
import BlogCard from "../../components/ui/BlogCard";
import ContactCTA from "../home/ContactCTA";
import blog, { formatDate } from "../../data/blog";
import siteConfig from "../../config/siteConfig";

// Article ke andar ke blocks (paragraph, heading, list, quote)
const renderBlock = (b, i) => {
  switch (b.type) {
    case "h2":
      return <h2 key={i} className="mt-10 text-2xl font-medium md:text-3xl">{b.text}</h2>;
    case "list":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {b.items.map((item) => (
            <li key={item} className="flex gap-3">
              <Check size={18} className="mt-1 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-10 border-l-2 border-accent pl-6 font-heading text-xl italic leading-relaxed text-ink md:text-2xl">
          {b.text}
        </blockquote>
      );
    default:
      return <p key={i} className="mt-5">{b.text}</p>;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blog.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (post) document.title = `${post.title} | ${siteConfig.name}`;
    setCopied(false);
  }, [post]);

  if (!post) {
    return (
      <Container className="py-28 text-center">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Blog</p>
        <h1 className="text-4xl font-medium">Article Not Found</h1>
        <div className="mt-8"><Button to="/blog" arrow>Back to Blog</Button></div>
      </Container>
    );
  }

  const related = [
    ...blog.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blog.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  const url = window.location.href;
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // clipboard band ho to kuch nahi
    }
  };
  const shareBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-accent hover:text-accent";

  return (
    <>
      <article>
        {/* Header */}
        <header className="bg-[#efebe4] pt-12 pb-10 md:pt-16 md:pb-14">
          <Container className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              <Link to="/" className="transition hover:text-accent">Home</Link>
              <ChevronRight size={12} />
              <Link to="/blog" className="transition hover:text-accent">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-[#8a6a2f]">{post.category}</span>
            </nav>
            <h1 className="text-3xl font-medium leading-tight text-ink md:text-5xl">{post.title}</h1>
            <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {post.author} · {formatDate(post.date)} · {post.readTime}
            </p>
          </Container>
        </header>

        <Container className="max-w-4xl">
          <div className="-mt-px aspect-[16/9] overflow-hidden">
            <ImageBox src={post.image} alt={post.title} />
          </div>
        </Container>

        <Container className="max-w-3xl py-12 md:py-16">
          <p className="font-heading text-xl leading-relaxed text-neutral-700 md:text-2xl">{post.excerpt}</p>
          <div className="text-base leading-relaxed text-neutral-700 md:text-[17px]">{post.content.map(renderBlock)}</div>

          {/* Share */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-200 pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 transition hover:text-accent">
              <ArrowLeft size={14} /> All Articles
            </Link>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <Share2 size={14} /> Share
              </span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className={shareBtn}
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <button type="button" onClick={copyLink} aria-label="Copy link" className={shareBtn}>
                {copied ? <Check size={16} className="text-accent" /> : <Link2 size={16} />}
              </button>
              {copied && <span className="text-xs text-accent">Link copied</span>}
            </div>
          </div>
        </Container>
      </article>

      {/* More articles */}
      {related.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <Container>
            <h2 className="mb-10 text-3xl font-medium">More Articles</h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100} className="h-full">
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ContactCTA />
    </>
  );
};

export default BlogPost;
