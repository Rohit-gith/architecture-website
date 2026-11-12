import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageBox from "../common/ImageBox";
import { formatDate } from "../../data/blog";

// Blog article ka card (Blog page aur Home ke "Latest Insights" me)
const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col">
    <div className="relative aspect-[16/10] overflow-hidden">
      <ImageBox src={post.image} alt={post.title} className="transition duration-700 ease-out group-hover:scale-105" />
      <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
        {post.category}
      </span>
    </div>
    <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
      {formatDate(post.date)} · {post.readTime}
    </p>
    <h3 className="mt-2 font-heading text-xl leading-snug transition group-hover:text-accent">{post.title}</h3>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
    <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
      Read Article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
    </span>
  </Link>
);

export default BlogCard;
