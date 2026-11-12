import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import Reveal from "../../components/common/Reveal";
import BlogCard from "../../components/ui/BlogCard";
import ContactCTA from "../home/ContactCTA";
import blog, { formatDate } from "../../data/blog";

// Blog page: sabse naya article bada (featured), baaki grid me. Upar category filter.
const Blog = () => {
  const [active, setActive] = useState("All");
  const categories = ["All", ...new Set(blog.map((p) => p.category))];
  const list = active === "All" ? blog : blog.filter((p) => p.category === active);
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero title="Blog" subtitle="Ideas, guides and stories on architecture, interiors and sustainable living." />

      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2 md:mb-14">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.15em] transition ${
                  active === c ? "border-ink bg-ink text-white" : "border-neutral-300 text-neutral-600 hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="group grid gap-6 md:grid-cols-2 md:items-center md:gap-12">
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageBox src={featured.image} alt={featured.title} className="transition duration-700 ease-out group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-accent">
                    {active === "All" ? "Latest Article" : featured.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-medium leading-snug transition group-hover:text-accent md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-neutral-600">{featured.excerpt}</p>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {formatDate(featured.date)} · {featured.readTime}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Read Article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-14 grid gap-12 border-t border-neutral-200 pt-14 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default Blog;
