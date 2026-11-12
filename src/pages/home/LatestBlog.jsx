import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import Button from "../../components/common/Button";
import BlogCard from "../../components/ui/BlogCard";
import blog from "../../data/blog";

// Home page par 3 naye blog articles
const LatestBlog = () => (
  <section className="py-16 md:py-24">
    <Container>
      <Reveal>
        <SectionTitle
          eyebrow="Insights"
          title="From Our Blog"
          subtitle="Practical ideas on planning, designing and building better spaces."
        />
      </Reveal>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {blog.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 120} className={`h-full ${i === 2 ? "md:hidden lg:block" : ""}`}>
            <BlogCard post={p} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button to="/blog" variant="dark" arrow>View All Articles</Button>
      </div>
    </Container>
  </section>
);

export default LatestBlog;
