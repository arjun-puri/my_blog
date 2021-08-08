import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Arjun Puri – Developer, writer',
    description: `Front-end developer`,
    type: 'website',
    ...customMeta,
  };

  // handling hamburger button functionality
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const hamburgerBtnHandler = () =>{
    setHamburgerClicked(!hamburgerClicked);
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
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      {/* outer div is to keep it in a fixed width on mobiles */}
      <div className='sticky z-10 top-0 flex flex-col justify-center px-4 md:p-0 md:mx-4 bg-secondary-100'>
        <nav className='flex items-center justify-between w-full max-w-4xl p-0 mx-auto my-0 bg-paperback sticky-nav md:mt-8'>
          {/* skip to content navigation link */}
          <a href='#mainContent' className='skip-nav sr-only'>
            Skip to content
          </a>
          {/* Logo / site title */}
          <div className='flex p-4 pl-8 md:pl-24 rounded-br-full bg-primary-0 w-full'>
            <h1 className='font-bold text-3xl md:text-5xl text-paperback tracking-tighter'>
              Arjun Puri
            </h1>
          </div>
          {/* hamburger button */}
          <button className='md:hidden px-8' onClick={hamburgerBtnHandler} aria-label='menu button'>
            <FontAwesomeIcon size={'2x'} className="text-tertiary-0 fa-fw transition-all duration-300" icon={hamburgerClicked ? faTimes :faBars}/>
          </button>
          <div className={`bg-primary-100 fixed overflow-hidden top-16 py-4 right-4 flex flex-col w-32  rounded-l-full ${hamburgerClicked ? 'visible' : 'w-0 invisible'} md:p-2 md:w-full md:static md:visible md:bg-paperback items-center justify-center md:flex-row transition-all duration-500 `}> 
            <Link href='/'>
            <a className='pr-4 pl-8 py-2 md:px-8 text-paperback md:text-tertiary-100 font-bold md:text-xl '>
                Home
              </a>
            </Link>
            <Link href='https://arjunpuri.me'>
            <a className='pr-4 pl-8 py-2 md:px-8 text-paperback md:text-tertiary-100 font-bold md:text-xl '>
                About
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
        <Footer />
      </main>
    </section>
  );
}
