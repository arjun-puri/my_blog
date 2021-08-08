import Link from 'next/link';
import Image from 'next/image';

import CodePenEmbed from '@/components/CodePenEmbed';

const CustomLink = (props) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/')) || href.startsWith('#');

    if(isInternalLink){
        return (
            <Link href={href}>
                <a {...props} aria-label={props.children}>{props.children}</a>
            </Link>
        )
    }
    // if external open in a new tap
    return <a target="_blank" rel="noopener noreferrer" {...props} />
};

const MDXComponents = {
    Image,
    a: CustomLink,
    CodePenEmbed,
};

export default MDXComponents;