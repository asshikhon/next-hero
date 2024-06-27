import { redirect } from "next/navigation";

export const getPosts = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    // if(data){
    //     redirect(`/post/${data[0].id}`);
    //   }
    return data;
    
    }