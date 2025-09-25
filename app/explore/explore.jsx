 "use client";
import React, { useEffect, useState } from 'react'
import { collection, getDocs,  doc, deleteDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import Link from 'next/link';
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";


const Explore = ({session}) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true)
    
    

    const fetchBlogs = async () => {
        const blogArray = []
        const querySnapshot = await getDocs(collection(db, "Blogs"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const blogsObject = {
                id: doc.id,
                ...doc.data()
            }
            blogArray.push(blogsObject)
        });

        setBlogs(blogArray)
        setLoading(false)
        // console.log(poems);

    }

    useEffect(() => { fetchBlogs() }, [blogs])

    const handleDelete = async (id)=>{
        await deleteDoc(doc(db, "Blogs", id));
    }

    return (
        <main className='min-h-dvh p-3'>
            <h1 className='text-center m-5 font-bold text-2xl text-gray-800 w-3/4 mx-auto'>
                Explore our catalogue of wonderfully crafted Poems and interact with our Renowned authors.
            </h1>

            {
                loading ? <div className='h-[80vh] flex items-center justify-center'><BiLoaderCircle 
                className='text-4xl animate-spin'/></div> :
                 <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blogs.map((blog, i) => (
                        <div key={i} className='shadow-md p-3 rounded-md flex flex-col justify-between'>
                            <div className='flex items-center justify-between'>
                               <div className='flex items-center gap-2'>
                                 <img src={blog.img} alt={blog.author} className='rounded-full h-8 w-8' />
                                <p>{blog.author}</p>
                               </div>

                               {
                                    blog.authorId == session.user.email ?
                                    <button onClick={()=> handleDelete(blog.id)}>
                                    <FaRegTrashCan/>
                                    </button> : null
                               }
                               
                            </div>

                            <div className='mt-3'>
                                <p className='font-semibold'>
                                    Title: <span>{blog.title}</span>
                                </p>

                                <div className='line-clamp-2 text-sm mt-2'>
                                   <div dangerouslySetInnerHTML={{ __html: blog.content }}/>
                                </div>
                            </div>

                            <div className='flex items-center justify-between mt-4'>

                                <p className='text-xs'>
                                    Posted on <span>{blog.timestamp}</span>
                                </p>


                                <Link href={`/explore/${blog.id}`} className='text-xs underline'>Read More</Link>
                            </div>
                        </div>
                    ))
                }
            </section>


            }

           
        </main>
    )
}

export default Explore