import { redirect } from "next/navigation";
import React from "react";

const getDetails = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const generateMetadata = async ({params}) => {


  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const data = await response.json();

  return {
    title: data.title,
    description: data.body,
    keywords: data.body.split(' ')

  };
}

const page = async ({ params }) => {
  const { title, body, id } = await getDetails(params.id);

  console.log(params.id);
  return (
    <div>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default page;
