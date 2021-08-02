import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

// import Footer from '@/components/Footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Arjun Puri – Developer, writer',
    description: `Front-end developer`,
    image: 'https://leerob.io/static/images/banner.png', //change this
    type: 'website',
    ...customMeta,
  };

  return (
    <section className='w-full'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://arjunpuri.me${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Arjun Puri' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      {/* <div className='flex flex-col justify-center px-8 bg-secondary-100'> */}
      <nav className='flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-paperback sticky-nav md:mt-8 md:pb-20'>
        <a href='#skip' className='skip-nav'>
          Skip to content
        </a>
        <div>
          <Link href='/dashboard'>
            <a className='p-1 text-tertiary-100 font-bold md:text-xl sm:p-4'>
              Dashboard
            </a>
          </Link>
          <Link href='/blog'>
            <a className='p-1 text-tertiary-100 font-bold md:text-xl sm:p-4'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='p-1 text-tertiary-100 font-bold md:text-xl sm:p-4'>
              About
            </a>
          </Link>
          <Link href='/'>
            <a className='p-1 text-tertiary-100 font-bold md:text-xl sm:p-4'>
              Home
            </a>
          </Link>
        </div>
      </nav>
      {/* </div> */}
      <main
        id='skip'
        className='flex flex-col justify-center px-4 bg-secondary-100'
      >
        {children}
        {/* <Footer /> */}
      </main>
    </section>
  );
}
