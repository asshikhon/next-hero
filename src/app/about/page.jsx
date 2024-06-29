import { getServerSession } from "next-auth";
import { Open_Sans } from "next/font/google";
import { authOptions } from "../api/auth/[...nextauth]/route";

const playwright = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: {
    absolute: "About Us",
  },
  description: "Learn more about our team and mission.",
  keywords: ["about", "us", "team", "mission"],
};

const getTime = async () => {
  const response = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await response.json();
  console.log(data);
  return data.currentTime;
};

const Page = async () => {
//   const currentTime = await getTime();
// const session = await getSession();
const session = await getServerSession(authOptions);
console.log({session});
  return (
    <>
      {/* <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(', ')} />
            </Head> */}
      <div className={`${playwright.className} min-h-screen px-12 py-24`}>
        <h4 className="text-5xl text-center text-red-400">About Page</h4>
        <h4 className="text-4xl"> Time :  </h4>
      </div>
    </>
  );
};

export default Page;
