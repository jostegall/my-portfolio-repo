import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* page header */}
      <div className="bg-header h-64 flex flex-col justify-center content-center text-center text-background drop-shadow-2xl">
        <div className="mx-auto h-28 w-28 border-2 border-background rounded-full overflow-hidden drop-shadow-2xl">
          <Image 
            src="/images/me.jpg"
            width={500}
            height={500}
            alt="picture of developer"
          />
        </div>
        <span className="mx-auto py-4 border-b-2 text-3xl drop-shadow-2xl">Joseph Stegall</span>
        <div className="mx-auto mt-2 p-2 grid grid-cols-4 gap-4 drop-shadow-2xl">
          <Link href="https://www.linkedin.com/in/josteg/">
            <Image 
              src="/linkedin-brands.svg"
              width={24}
              height={24}
              alt="picture of developer"
            />
          </Link>
          <Link href="https://github.com/jostegall">
            <Image 
              src="/square-github-brands.svg"
              width={24}
              height={24}
              alt="picture of developer"
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/">
            <Image 
              src="/instagram-brands.svg"
              width={24}
              height={24}
              alt="picture of developer"
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/">
            <Image 
              src="/square-facebook-brands.svg"
              width={24}
              height={24}
              alt="picture of developer"
            />
          </Link>
        </div>
      </div>

      {/* page content */}
      <div className="h-screen">
        <div className="h-12 bg-banner text-background">
        <span className="mx-auto">world1</span>
        </div>
        <div>
          <span>world2</span>
        </div>
      </div>
    </div>
  );
}
