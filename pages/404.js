import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
    return (
        <Container title="404 - Arjun Puri">
            <div className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full bg-paperback p-8 md:px-24">
                <h1 className="font-bold text-3xl md:text-6xl mb-4 text-secondary-0 tracking-tight">
                    404 - Not found
                </h1>
                <p className="text-gray-600 mb-8">
                    This page does not exist, please check the URL.
                </p>
                <Link href="/">
                    <a className="text-primary-0 hover:text-tertiary-100 underline text-lg">
                        Return Home
                    </a>
                </Link>
            </div>
        </Container>
    )
}