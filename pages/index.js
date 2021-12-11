import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-4xl mx-auto w-full bg-paperback p-8 md:px-24'>
        <h1 className='font-bold text-3xl md:text-6xl mb-4 text-secondary-0 tracking-tight'>
          Hello!
        </h1>
        <h2 className='prose md:text-xl mb-16 text-tertiary-0'>
          I am a front end developer and a video game enthusiast.
          Currently working as a Associate Technology L1 at Publicis Sapient.
        </h2>
        <h3 className='font-bold mb-2 text-xl md:text-4xl text-secondary-0'>
          Recent Posts
        </h3>
        <BlogPost
          title='Making tables accessible with ARIA attributes'
          summary="Everything I've learned through trial and error to make tables accessible in various screen readers."
          slug='making-tables-accessible-with-aria-attributes'
        />
      </div>
    </Container>
  );
}
