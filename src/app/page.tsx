import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="flex flex-col ">
      {/* page header */}
      {/* REMEBER TO REMFORMAT HEADER FOR LARGER SCREENS */}
      <div className="bg-header h-72 flex flex-col justify-center text-background shadow-xl">
        <div className="mx-auto h-28 w-28 border-2 border-background rounded-full overflow-hidden shadow-md">
          <Image 
            src="/images/me.jpg"
            width={500}
            height={500}
            alt="picture of developer"
          />
        </div>
        <span className="mx-auto py-4 border-b-2 text-3xl">Joseph Stegall</span>
        <div className="mx-auto mt-2 p-2 grid grid-cols-4 gap-4">
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
          <Link href="https://www.instagram.com/stegalljoseph/">
            <Image 
              src="/instagram-brands.svg"
              width={24}
              height={24}
              alt="picture of developer"
            />
          </Link>
          <Link href="https://www.facebook.com/joseph.stegall.716/">
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
      <div>
        <div className="h-12 bg-banner flex flex-col justify-center text-background rounded-b-xl shadow-xl">
          <span className="mx-auto">about me</span>
        </div>
        <div className="mx-6 px-6 h-screen">
          {/* education */}
          <div className="bg-card my-6 p-4 flex flex-col rounded-md shadow-md sm:text-lg">
            <span className="mb-2 border-b-2 border-foreground font-bold text-center sm:text-left text-xl sm:text-2xl">Education</span>
            <div className="mx-auto mb-2 sm:mx-4 grid grid-cols-2 font-bold">
              <span className="text-center sm:text-left">Indiana State University</span>
              <span className="text-center sm:text-right">Expected: 12/2025</span>
            </div>
            <div className="mx-auto sm:mx-8 flex flex-col sm:px-4 sm:border-l-2 sm:border-foreground">
              <span className="">BS in Computer Science</span>
              <span className="">Security and Risk Minor</span>
            </div>
          </div>

          {/* projects */}
          <div className="bg-card my-6">
            <span>projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Change Log:
// ==================================================================
// 3/3/2025: 
//    - Added updated social links
//    - Formatted Education card for both mobile and largers screens