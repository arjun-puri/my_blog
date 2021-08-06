import { useEffect } from 'react';
import swr from 'swr';

import fetcher from '@/lib/fetcher';

export default function ViewCounter({ slug }) {
  const { data } = swr(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  // increases view count when the slug is changed
  // slug changes when the blog page changes
  useEffect(() => {
    const registerView = () =>
      fetcher(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return `${views > 0 ? views.toLocaleString() : '---'} views`;
}
