import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Your Name</h1>
      <p>Short bio, research interests, contact links.</p>
      <nav className="flex gap-4">
        <a href="/projects" className="btn btn-primary">Projects</a>
        <a href="/publications" className="btn btn-secondary">Publications</a>
        <a href="/math-demo" className="btn">Math Demo</a>
      </nav>
    </main>
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
