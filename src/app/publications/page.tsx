import pubs from '../../../data/publications.json';

export default function Publications() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Publications</h1>
      <ul className="list-disc list-inside">
        {pubs.map((pub, i) => (
          <li key={i}>
            <a href={pub.link} className="link link-secondary">
              {pub.citation}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
