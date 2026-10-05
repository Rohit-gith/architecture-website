import Container from "../../components/common/Container";
import { categories } from "../../data/projects";

const ProjectFilter = ({ active, onChange }) => (
  <Container className="pt-12">
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-5 py-2 text-xs uppercase tracking-widest border transition ${
            active === c ? "bg-ink text-white border-ink" : "border-neutral-300 hover:border-accent hover:text-accent"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  </Container>
);

export default ProjectFilter;
