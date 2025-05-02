'use client';
import Link from 'next/link';

export default function NavBar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <Link href="/" className="text-2xl font-heading text-accent">
          Thien-Phuc Tran
        </Link>
        <div className="space-x-6 font-body text-secondary">
          <Link href="/projects" className="hover:text-accent">Projects</Link>
          <Link href="/publications" className="hover:text-accent">Publications</Link>
          <Link href="/math-demo" className="hover:text-accent">Math Demo</Link>
        </div>
      </nav>
    );
  }