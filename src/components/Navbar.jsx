"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
const pathName = usePathname();

console.log(pathName);
const router = useRouter();
    const links = [
        {
            title : 'About',
            path : '/about'
        },
        {
            title : 'Services',
            path : '/services'
        },
        {
            title : 'Contacts',
            path : '/contacts'
        },
        {
            title : 'Blogs',
            path : '/blogs'
        },
        {
            title : 'Dashboard',
            path : '/dashboard'
        },
        {
            title : 'Posts',
            path : '/post'
        },
        {
            title : 'Meals',
            path : '/meals'
        },
        {
            title : 'Gallery',
            path : '/gallery'
        },
    ]

    const handler = () => {
        router.push('/about');
    }

    if(pathName.includes("dashboard")) return <div className="bg-green-500">Dashboard Navbar</div>

    return (
       <nav className='bg-cyan-600 px-6 py-4 flex justify-between items-center '>
        <h6 className='text-3xl'>Next<span className='text-orange-500'>Hero</span></h6>

<ul className='flex justify-between items-center space-x-5'>

    {
    
    links?.map((link) => <Link className={`${pathName === link.path && "text-orange-500"}`} key={link.path} href={link.path}>
    {link.title}
    </Link>)

    }
 
</ul>

<button onClick={handler} className="btn ">Login</button>

       </nav>
    );
};

export default Navbar;