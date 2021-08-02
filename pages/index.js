import Link from 'next/link';
// components
// import { Header } from '../components/Header/Header';
import Container from '@/components/Container/Container';
import BlogPost from '@/components/BlogPost/BlogPost';

export default function Home() {
  return (
    <Container>
      {/* <h1 className='text-6xl font-bold text-primary mb-8'>Hello world!</h1>
      <p  className="text-xl text-gray-600">This is some sample text to test out the site colors.</p> */}
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-4xl md:text-6xl mb-4 text-gray-900'>
          Arjun Puri
        </h1>
        <h2 className='prose md:text-xl text-gray-800 mb-16'>
          I am a developer and writer. I work as a Junior Associate at Publicis
          Sapient.
        </h2>
        <h3 className='font-bold mb-2 text-2xl md:text-4xl text-gray-900'>
          Most Popular
        </h3>
        {/* example blogposts */}
        <BlogPost
          title='Everything I Know About Style Guides, Design Systems, and Component Libraries'
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug='style-guides-component-libraries-design-systems'
        />
        <BlogPost
          title='How Stripe Designs Beautiful Websites'
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug='how-stripe-designs-beautiful-websites'
        />
        <BlogPost
          title='Creating a Monorepo with Lerna & Yarn Workspaces'
          summary='In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
          slug='monorepo-lerna-yarn-workspaces'
        />
      </div>
    </Container>
  );
}
