import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 justify-between max-w-4xl mx-auto w-full p-8 md:px-24 bg-paperback border-t-2 border-dashed border-gray-500 ">
        <div className="flex justify-start">
            <Link href="https://github.com/arjun-puri">
                <a aria-label="github" rel="github">
                    <FontAwesomeIcon aria-hidden="true" className="mr-4 text-secondary-0" icon={ faGithubAlt } size="2x" />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/arjun-puri-8ab9b916a/">
                <a aria-label="linkedin" rel="linkedin">
                    <FontAwesomeIcon aria-hidden="true" className="mr-4 text-secondary-0" icon={ faLinkedinIn } size="2x" />
                </a>
            </Link>
            <Link href="mailto:arjunpuri@arjunpuri.me">
                <a aria-label="email" rel="email">
                    <FontAwesomeIcon aria-hidden="true" className="mr-4 text-secondary-0" icon={ faEnvelope } size="2x" />
                </a>
            </Link>
        </div>
      <div>
          <Link href="http://creativecommons.org/licenses/by-nc/4.0/">
          <a rel="license">
          <Image
            alt="Creative Commons License"
            height={31}
            width={88}
            src="/images/cc_license.png"
          />
          <p className="text-xs">This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License</p>
          </a>
          </Link>
        
      </div>
    </footer>
  );
}
