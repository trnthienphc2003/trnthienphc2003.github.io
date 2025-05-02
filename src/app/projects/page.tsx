import projects from '../../../data/projects.json';
import Card from '../_components/Card';

export default function Projects() {
  return (
    <section className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(p => (
        <Card
          key={p.slug}
          title={p.title}
          description={p.description}
          href={p.github}
          thumbnail={p.image}
        >
          {p.tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-secondary text-white px-2 py-1 rounded mr-2"
            >
              {tag}
            </span>
          ))}
        </Card>
      ))}
    </section>
  );
}