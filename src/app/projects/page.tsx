import projects from '../../../data/projects.json';

export default function Projects() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map(p => (
        <div key={p.slug} className="card shadow-lg p-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p>{p.description}</p>
          <a href={p.github} className="link link-primary">GitHub</a>
        </div>
      ))}
    </main>
  );
}
