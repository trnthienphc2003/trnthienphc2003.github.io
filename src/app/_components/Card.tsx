// src/components/Card.tsx
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  href: string;
  thumbnail?: string;
  children?: ReactNode; // e.g. tags
}

export default function Card({ title, description, href, thumbnail, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {thumbnail && <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-6">
        <h3 className="font-heading text-xl text-text">{title}</h3>
        <p className="font-body text-secondary mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          {children}
          <a
            href={href}
            target="_blank"
            rel="noopener"
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-link-hover"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
