// src/app/projects/page.tsx
import projects from '../../../data/projects.json'
import Card from '@/app/_components/Card'

export default function Projects() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-3xl text-text mb-8">
          My Projects
        </h2>
        <div
          className="
            grid gap-8 
            grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
            auto-rows-fr
          "
        >
          {projects.map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              description={p.description}
              href={p.github}
              thumbnail={p.image}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-secondary text-white px-2 py-1 rounded mr-2"
                >
                  {t}
                </span>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
