"use client";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const { data: session, status } = useSession();

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Posts",
      path: "/post",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
  ];

  if (pathName.includes("dashboard")) {
    return <div className="bg-green-500">Dashboard Navbar</div>;
  }

  return (
    <nav className="bg-cyan-600 px-6 py-4 flex justify-between items-center ">
      <h6 className="text-3xl">
        Next<span className="text-orange-500">Hero</span>
      </h6>

      <ul className="flex justify-between items-center space-x-5">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path ? "text-orange-500" : ""}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        {status === "authenticated" ? (
          <>
            <button onClick={() => signOut()} className="btn">
              Logout
            </button>
            <div className="flex items-center gap-4 flex-row-reverse">
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h6>
                {session?.user?.name}
              
                {session?.user?.type}
              </h6>
            </div>
          </>
        ) : (
          <>
            <button onClick={() => signIn()} className="btn">
              Login
            </button>
            <Link href="api/auth/signup">
              <button className="btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
