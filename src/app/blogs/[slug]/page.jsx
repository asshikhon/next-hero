

const page = ({params}) => {
    console.log(params.slug);

    const {title, description} = blogs.find((blog) => blog.slug === params.slug);
    return (
        <div>
            <h5>{title}</h5>
            <h6>{description}</h6>
        </div>
    );
};

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

export default page;