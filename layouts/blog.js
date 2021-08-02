import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container/Container';
import ViewCounter from '@/components/ViewCounter/ViewCounter';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} - Arjun Puri`}
      description={frontMatter.summary}
      image={`https://arjunpuri.me${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type='article'
    >
      <article className='flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full bg-paperback px-8 md:px-24'>
        {/* title */}
        <h1 className='font-bold text-3xl md:text-6xl mb-4 text-secondary-0'>
          {frontMatter.title}
        </h1>
        {/* Author name, image, views and reading time */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-2 md:mb-8'>
          {/* author name and image */}
          <div className='flex items-center'>
            <Image
              alt='Arjun Puri'
              height={32}
              width={32}
              src='/avatar.jpeg'
              className='rounded-full'
            ></Image>
            <p className='text-gray-600 ml-4 flex flex-col md:flex-row '>
              {/* {frontMatter.by} */}
              <span>Arjun Puri /&nbsp;</span>
              <span>
                {format(parseISO(frontMatter.publishedAt), 'dd MMMM, yyyy')}
              </span>
            </p>
          </div>
          {/* reading time and views */}
          <p className='text-gray-500 min-w-32'>
            {frontMatter.readingTime.text}
            {/* placeholder */}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        {/* blog content */}
        <div className='prose prose-xl max-w-none w-full'>{children}</div>
      </article>
    </Container>
  );
}
