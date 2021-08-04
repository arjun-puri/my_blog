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
    // image: 'https://leerob.io/static/images/banner.png', //change this
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
        {/* <meta property='og:image' content={meta.image} /> */}
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      {/* outer div is to keep it in a fixed width on mobiles */}
      <div className='flex flex-col justify-center px-4 md:p-0  bg-secondary-100'>
        <nav className='flex items-center justify-between w-full max-w-4xl p-0 mx-auto my-0 bg-paperback sticky-nav md:mt-8'>
          {/* skip to content navigation link */}
          <a href='#mainContent' className='skip-nav sr-only'>
            Skip to content
          </a>
          {/* Logo / site title */}
          <div className='flex p-4 pl-8 md:pl-24 rounded-br-full bg-primary-0 w-full'>
            <h1 className='font-bold text-3xl md:text-5xl text-paperback tracking-tighter'>
              Arjun Puri.
            </h1>
          </div>
          {/* hamburger button */}
          <button id='hamburgerBtn' className='md:hidden'>
            X
          </button>
          <div className='p-2 w-full flex items-center justify-center sm:hidden md:flex'>
            <Link href='/blog'>
              <a className='px-4 md:px-8 text-tertiary-100 font-bold md:text-xl '>
                Blog
              </a>
            </Link>
            <Link href='/about'>
              <a className='px-4 md:px-8 text-tertiary-100 font-bold md:text-xl '>
                About
              </a>
            </Link>
            <Link href='/'>
              <a className='px-4 md:px-8 text-tertiary-100 font-bold md:text-xl '>
                Home
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <main
        id='mainContent'
        className='flex flex-col justify-center px-4 bg-secondary-100'
      >
        {children}
        {/* <Footer /> */}
      </main>
    </section>
  );
}
