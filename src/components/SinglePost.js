import React,{ useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePost() {
    const [singlePost,setSinglePost] = useState(null);
    const [author,setAuthor] = useState(null);
    const {slug} = useParams();

    const query = `*[slug.current == "${slug}"]`;

    useEffect(()=>{
        sanityClient.fetch(query).then((data)=> setSinglePost(data[0]))
            .catch(console.error);
        sanityClient.fetch(`*[_type =="author"]`).then((data)=> setAuthor(data[0]));
    },[]);


    console.log(author);
    console.log(singlePost);


    return <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative display-flex justify-between">
                    <div className="absolute h-full w-full flex items-center p-8">
                        <div className="bg-white ml-auto mt-80  bg-opacity-50 rounded p-12">
                            <h1 className="cursive text-2xl lg:text-4xl mb-4">{singlePost && singlePost.title}</h1>
                            <div className="flex justify-center text-gray-800"><img src={author && urlFor(author.image).url()}
                            alt={author && author.name}
                            className="w-20 h-20 rounded-full ml-auto"/>
                            <p className="cursive flex items-center pl-2 text-2xl">By {author && author.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={urlFor(singlePost && singlePost.mainImage.asset).url()}
                    alt={singlePost && singlePost.title}
                    className=" object-contain rounded-t"
                    style={{height:"500px",width:"1000px",margin:"auto"}}/>
                </header>
            <div className="px-16 mt-10 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                <BlockContent blocks={singlePost && singlePost.body}
                projectId="9koi9uuf"
                dataset="production" />
            </div>
    </article>
</main>

    
}