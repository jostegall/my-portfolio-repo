import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex items-center gap-x-4 rounded-x1 bg-sky-500 p-6 shadow">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-8 ring-white ring-opacity-80 ring-offset-8 ring-offset-sky-500">
          <Image 
              src={"/images/me.jpg"}
              width={500}
              height={500}
              alt="Picture of the Site's Developer"
            />
        </div>
        <div className="mx-5">
          <span className="mx-auto uppercase text-3xl">Hi! I'm Joseph Stegall</span>
          <div>
            <span>ln</span>
            <span>git</span>
            <span>insta</span>
            <span>facebook</span>
          </div>
        </div>
      </div>
      <div className="bg-purple-500">
        <span>I make things!!!</span>
      </div>
      <div className="grid grid-cols-2 gap-10 mx-5">
        <div className="bg-green-500">Education</div>
        <div className="bg-red-500">Projects</div>
      </div>
    </div>
  );
}
