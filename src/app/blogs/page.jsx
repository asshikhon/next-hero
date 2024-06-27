import Link from "next/link";


const blogs = [
  {
    slug: "how-to-learn-javascript",
    title: "How to Learn JavaScript",
    description: "A comprehensive guide to learning JavaScript, including resources and tips for beginners."
  },
  {
    slug: "benefits-of-meditation",
    title: "The Benefits of Meditation",
    description: "Explore the mental and physical benefits of meditation, and how to start your practice."
  },
  {
    slug: "ultimate-guide-to-vegan-cooking",
    title: "The Ultimate Guide to Vegan Cooking",
    description: "A complete guide to vegan cooking, including recipes, tips, and nutritional information."
  },
  {
    slug: "traveling-on-a-budget",
    title: "Traveling on a Budget",
    description: "Tips and tricks for traveling the world without breaking the bank. Learn how to save on flights, accommodation, and more."
  },
  {
    slug: "seo-strategies-for-beginners",
    title: "SEO Strategies for Beginners",
    description: "An introduction to SEO strategies to help beginners improve their website's search engine rankings."
  },
  {
    slug: "home-workout-routines",
    title: "Effective Home Workout Routines",
    description: "Discover effective workout routines you can do at home without any special equipment."
  }
];

const page = () => {



    return (
        <div>
           {
           
           blogs?.map((blog) => (
             <div key={blog.slug} className="border-2 p-10">
                 <h2>{blog.title}</h2>
                 <p>{blog.description}</p>
             <button className="mt-8">
             <Link className="btn  bg-orange-500 p-3 rounded-xl border-0" href={`/blogs/${blog.slug}`}>Read More</Link>
             </button>
             </div>
 
           ) )

           }
        </div>
    );
};


  

export default page;