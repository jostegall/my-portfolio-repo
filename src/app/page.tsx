import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-sm h-screen flex flex-row flex-wrap">

      {/* col #1 */}
      <div className="bg-header flex flex-col flex-shrink-0 flex-grow-0 w-96 text-white">

        {/* picture of me */}
        <div className="mx-auto mt-10 border-4 rounded-full overflow-hidden">
          <Image 
              src={"/images/me.jpg"}
              width={250}
              height={250}
              alt="Picture of the Site's Developer, Joseph Stegall."
            />
          
        </div>

        {/* name/about/socials */}
        <div className="mx-auto my-4">
          <span className="text-3xl">Joseph Stegall</span>
        </div>
        <div className="mx-4 flex flex-col border-y-2">
          <span className="mx-auto my-5 p-2 ">
            Hello! I am a junior computer science major at Indiana State University and the current Lead Building Technician and Software Developer for Hulman Memorial Student Union on campus.
            <br />
            <br />
            I enjoy leveraging technology to solve problems and help people!
            </span>
        </div>
        <div className=" p-6 flex flex-row mx-auto border-b-2">
            <Image 
              src={"/envelope-solid.svg"}
              width={28}
              height={28}
              alt="Link to LinkedIn"
            />
          <span className="ml-2"><a href="stegalljoseph09@gmail.com">stegalljoseph09@gmail.com</a></span>
        </div>
        <div className="mx-auto my-6 grid grid-cols-4 gap-4">
          <Link href="https://www.linkedin.com/in/josteg/">
            <Image 
              src={"/linkedin-brands.svg"}
              width={28}
              height={28}
              alt="Link to LinkedIn"
            />
          </Link>
          <Link href="https://github.com/jostegall">
            <Image 
              src={"/square-github-brands.svg"}
              width={28}
              height={28}
              alt="Link to Github"
            />
          </Link>
          <Link href="https://github.com/jostegall">
            <Image 
              src={"/square-facebook-brands.svg"}
              width={28}
              height={28}
              alt="Link to Facebook"
            />
          </Link>
          <Link href="https://github.com/jostegall">
            <Image 
              src={"/instagram-brands.svg"}
              width={28}
              height={28}
              alt="Link to Instagram"
            />
          </Link>
        </div>
      </div>

      {/* col #2 */}
      <div className="bg-content flex-grow">
        <div className="bg-banner">banner</div>
        <div className="bg-project">Education + Projects</div>  
      </div>
    </div>
  );
}
