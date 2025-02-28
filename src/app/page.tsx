import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto flex items-center gap-x-4 rounded-x1 bg-header p-8 shadow">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-8 ring-foreground ring-opacity-80 ring-offset-8 ring-offset-header">
          <Image 
              src={"/images/me.jpg"}
              width={500}
              height={500}
              alt="Picture of the Site's Developer, Joseph Stegall."
            />
        </div>
        <div className="mx-5">
          <span className="mx-auto uppercase text-3xl border-b-2 border-foreground">Hi! I'm Joseph!!!</span>
          <div className="my-2 flex flex-row gap-2">
            <Link href="https://www.linkedin.com/in/josteg/">
              <Image 
                src={"/linkedin.svg"}
                width={28}
                height={28}
                alt="Link to LinkedIn"
              />
            </Link>
            <Link href="https://github.com/jostegall">
              <Image 
                src={"/github.svg"}
                width={28}
                height={28}
                alt="Link to Github"
              />
            </Link>
            <Link href="https://github.com/jostegall">
              <Image 
                src={"/facebook.svg"}
                width={28}
                height={28}
                alt="Link to Facebook"
              />
            </Link>
            <Link href="https://github.com/jostegall">
              <Image 
                src={"/instagram.svg"}
                width={28}
                height={28}
                alt="Link to Instagram"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-about">
        <span className="">I make things!!!</span>
      </div>
      <div className="grid grid-cols-2 gap-10 mx-5">
        <div className="bg-green-500">Education</div>
        <div className="bg-red-500">Projects</div>
      </div>
    </div>
  );
}
