import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from 'next/link';
import Avatar from "@/app/_components/MyAvatar";


export default function HomePage() {
  return (
    <section className="prose mx-auto px-6 py-16 text-center">
      <div className="p-6">
        <Avatar />
      </div>
      <h1 className="font-heading text-5xl text-text mb-4">
        Thien-Phuc Tran
      </h1>
      <p className="font-body text-secondary text-lg max-w-2xl mx-auto">
        I’m a 3D computer vision researcher—working on Gaussian Splatting, scene generation, and dynamic understanding. Here you’ll find my projects, papers, and interactive demos.
      </p>
      <div className="mt-8 flex justify-center gap-4">
    <Link
      href="/projects"
      className="
        px-6 py-4 
        bg-accent text-white 
        rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        transition-transform duration-200 ease-in-out
        hover:scale-105 hover:bg-accent/90
      "
    >
      View Projects
    </Link>
    <Link
      href="/posts"
      className="
        px-6 py-4 
        border-2 border-accent text-accent 
        rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        transition-transform duration-200 ease-in-out
        hover:scale-105 hover:bg-accent hover:text-white
      "
    >
      Read Blog
    </Link>
  </div>

    </section>
  );
}

// export default function Index() {
//   const allPosts = getAllPosts();

//   const heroPost = allPosts[0];

//   const morePosts = allPosts.slice(1);

//   return (
//     <main>
//       <Container>
//         <Intro />
//         <HeroPost
//           title={heroPost.title}
//           coverImage={heroPost.coverImage}
//           date={heroPost.date}
//           author={heroPost.author}
//           slug={heroPost.slug}
//           excerpt={heroPost.excerpt}
//         />
//         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//       </Container>
//     </main>
//   );
// }
