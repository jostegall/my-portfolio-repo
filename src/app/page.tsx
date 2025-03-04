import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="flex flex-col ">
      {/* page header */}
      {/* REMEBER TO REMFORMAT HEADER FOR LARGER SCREENS */}
      <div className="bg-header h-72 flex flex-col sm:flex-row justify-center text-background shadow-xl">
        <div className="mx-auto sm:mx-6 sm:my-10 h-28 w-28 sm:h-52 sm:w-52 border-2 border-background rounded-full overflow-hidden shadow-md">
          <Image 
            src="/images/me.jpg"
            width={500}
            height={500}
            alt="picture of developer"
          />
        </div>
        <div className="mt-2 sm:mx-2 sm:my-auto">
          <span className="mx-auto sm:my-auto flex flex-row w-72 pb-4 justify-center border-b-2 text-3xl">Joseph Stegall</span>
          <div className="mt-6 flex flex-row justify-center">
            <Link className="mx-1" href="https://www.linkedin.com/in/josteg/">
              <Image 
                src="/svgs/linkedin-brands.svg"
                width={30}
                height={30}
                alt="picture of developer"
              />
            </Link>
            <Link className="mx-1" href="https://github.com/jostegall">
              <Image 
                src="/svgs/square-github-brands.svg"
                width={30}
                height={30}
                alt="picture of developer"
              />
            </Link>
            <Link className="mx-1" href="https://www.instagram.com/stegalljoseph/">
              <Image 
                src="/svgs/square-envelope-solid.svg"
                width={30}
                height={30}
                alt="picture of developer"
              />
            </Link>
            <Link className="mx-1"href="https://www.instagram.com/stegalljoseph/">
              <Image 
                src="/svgs/square-instagram-brands.svg"
                width={30}
                height={30}
                alt="picture of developer"
              />
            </Link>
            <Link className="mx-1" href="https://www.facebook.com/joseph.stegall.716/">
              <Image 
                src="/svgs/square-facebook-brands.svg"
                width={30}
                height={30}
                alt="picture of developer"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 bg-banner flex flex-col justify-center text-background rounded-b-xl shadow-xl">
          <div className="sm:mx-20 grid grid-row-2 sm:grid-row-0 sm:grid-cols-2">
            <span className="my-2 sm:mx-auto text-xl sm:w-6/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas accusantium impedit illum modi nulla quos aliquam iusto ratione itaque eos quod ea rem asperiores suscipit cupiditate, facere molestiae adipisci dicta!</span>
            <span className="my-2 sm:mx-auto text-xl sm:w-6/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas accusantium impedit illum modi nulla quos aliquam iusto ratione itaque eos quod ea rem asperiores suscipit cupiditate, facere molestiae adipisci dicta!</span>
          </div>
      </div>

      {/* page content */}
      <div className="sm:mx-20 mb-12">
        <div className=" px-6 h-screen">
          
          {/* education card */}
          <div className="bg-card my-6 p-4 flex flex-col rounded-md shadow-md sm:text-lg">
            <span className="mb-2 border-b-2 border-foreground font-bold text-center sm:text-left text-xl sm:text-2xl">Education</span>
            <div className="mt-2 p-2 sm:hover:bg-sky-200 sm:hover:shadow-xl rounded-md">
              <div className="mx-auto mb-2 sm:mx-4 grid grid-cols-2 font-bold">
                <span className="text-center sm:text-left">Indiana State University</span>
                <span className="text-center sm:text-right">Expected: 12/2025</span>
              </div>
              <div className="mx-auto sm:mx-8 flex flex-col sm:px-4 sm:border-l-2 sm:border-foreground">
              <span className="">
                  BS in Computer Science
                  <br />
                  Security and Risk Minor
                </span>
              </div>
            </div>
          </div>

          {/* experience card */}
          <div className="bg-card my-6 p-4 flex flex-col rounded-md shadow-md sm:text-lg">

            <span className="border-b-2 border-foreground font-bold text-center sm:text-left text-xl sm:text-2xl">Experience</span>
            
            {/* lead tech */}
            <div className="mt-2 p-2 sm:hover:bg-sky-200 sm:hover:shadow-xl rounded-md">
              <div className="mx-auto mt-2 mb-2 sm:mx-4 grid grid-row-2 gap-1 sm:grid-row-0 sm:grid-cols-2 font-bold">
                <span className="text-center sm:text-left">Lead Building Technician & Programmer</span>
                <span className="text-center sm:text-right hidden sm:grid">Hulman Memorial Student Union | ISU</span>
              </div>
              <div className="sm:mx-8 sm:px-4 sm:border-l-2 sm:border-foreground text-center sm:text-left max-w-5xl">
                <span>
                  Handled building security, software development, and audiovisual support while training and managing building technicians.
                  <br />
                  Collaboratated with building operations and other technicians to plan and develope custom applications, replacing outdated versions for improved efficiency.
                </span>
              </div>
            </div>

            {/* norm tech */}
            <div className="mt-2 p-2 sm:hover:bg-sky-200 sm:hover:shadow-xl rounded-md">
              <div className="mx-auto mt-2 mb-2 sm:mx-4 grid grid-row-2 gap-1 sm:grid-row-0 sm:grid-cols-2 font-bold">
                <span className="text-center sm:text-left">Building Technician & Programmer</span>
                <span className="text-center sm:text-right hidden sm:grid">Hulman Memorial Student Union | ISU</span>
              </div>
              <div className="sm:mx-8 sm:px-4 sm:border-l-2 sm:border-foreground text-center sm:text-left max-w-5xl">
                <span>
                  Ensured the phyiscal security of the building, maintained audiovisual systems, and support events. 
                  <br />
                  Built and maintained critical componemts used in the HMSU's customer applications.
                </span>
              </div>
            </div>
          </div>

          {/* project cards */}
          <div className="bg-card p-4 flex flex-col rounded-md shadow-md sm:text-lg">
            <span className="border-b-2 border-foreground font-bold text-center sm:text-left text-xl sm:text-2xl">Projects</span>

            {/* card for legacy ic software */}
            <div className="mt-2 p-2 sm:hover:bg-sky-200 sm:hover:shadow-xl rounded-md">

              <div className="mx-auto mb-2 p-2 sm:p-0 sm:mx-4 grid grid-row-2 gap-1 sm:grid-row-0 sm:grid-cols-2 font-bold">
                <span className="text-center sm:text-left">Inventory Checkout & Management Software (Legacy)</span>
              </div>

              <div className="sm:mx-8 sm:px-4 sm:border-l-2 sm:border-foreground text-center sm:text-left max-w-5xl">
                <span>An inventory management and checkout systems for the Hulman Memorial Student Union Information Center at Indiana State University. Allows the student union to keep track of items checked in and out by students and staff.
                <br /><br />
                Preformed routine maintance on the legacy system and database while the application was still in use.
                </span>
              </div>
            </div>

            {/* card for 2025 ic software */}
            <div className="mt-2 p-2 sm:hover:bg-sky-200 sm:hover:shadow-xl rounded-md">

              <div className="mx-auto mb-2 p-2 sm:p-0 sm:mx-4 grid grid-row-2 gap-1 sm:grid-row-0 sm:grid-cols-2 font-bold">
                <span className="text-center sm:text-left">Inventory Checkout & Management App (2025) </span>
              </div>

              <div className="sm:mx-8 sm:px-4 sm:border-l-2 sm:border-foreground text-center sm:text-left max-w-5xl">
                <span>The Inventory Checkout & Management App for Hulman Memorial Student. Developed after the original application reached it's end of life. 
                <br /><br />
                Lead a team develop a new application and update and port Hulman Memorial Student Union's Database to a new server.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}