import Link from 'next/link';
import swr from 'swr';

import fetcher from '@/lib/fetcher';

const BlogPost = ({ title, summary, slug }) => {
  const { data } = swr(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className='w-full'>
        <div className='mb-8 w-full'>
          <div className='flex flex-col md:flex-row justify-between'>
            <h4 className='md:text-xl font-medium mb-2 w-full text-gray-900'>
              {title}
            </h4>
            {/* not using ViewCounter here as to not increase the counter when the user is just on the landing page and is just viewing the summary */}
            <p className='text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0'>
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p>
          </div>
          <p className='text-gray-600'>{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
