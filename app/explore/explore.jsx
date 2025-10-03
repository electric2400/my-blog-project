 "use client";
import React, { useEffect, useState } from 'react'
import { collection, getDocs,  doc, deleteDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import Link from 'next/link';
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';


const Explore = ({session}) => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true)


    // Search and filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('all'); // 'all', 'title', 'author', 'content'
    
    
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
        setFilteredBlogs(blogArray) // Initially show all poems
        setLoading(false)
        // console.log(poems);
    }

       // Search function - filters poems based on search term and filter type
    const handleSearch = (searchValue, filterType) => {
        if (!searchValue.trim()) {
            // If search is empty, show all poems
            setFilteredBlogs(blogs);
            return;
        }

        const filtered = blogs.filter(blog => {
            const searchLower = searchValue.toLowerCase();
            
            switch (filterType) {
                case 'title':
                    return blog.title?.toLowerCase().includes(searchLower);
                case 'author':
                    return blog.author?.toLowerCase().includes(searchLower);
                case 'content':
                    return blog.content?.toLowerCase().includes(searchLower);
                case 'all':
                default:
                    // Search in title, author, and content
                    return (
                        blog.title?.toLowerCase().includes(searchLower) ||
                        blog.author?.toLowerCase().includes(searchLower) ||
                        blog.poem?.toLowerCase().includes(searchLower)
                    );
            }
        });

        setFilteredBlogs(filtered);
    };

      // Handle search input change
    const onSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value, filterBy);
    };

    // Handle filter dropdown change
    const onFilterChange = (e) => {
        const value = e.target.value;
        setFilterBy(value);
        handleSearch(searchTerm, value);
    };

    // Clear search function
    const clearSearch = () => {
        setSearchTerm('');
        setFilterBy('all');
        setFilteredBlogs(blogs);
    };

    useEffect(() => { fetchBlogs() }, [])

    // Re-run search when poems data changes
    useEffect(() => {
        if (searchTerm) {
            handleSearch(searchTerm, filterBy);
        } else {
            setFilteredBlogs(blogs);
        }
    }, [blogs]);

    const handleDelete = async (id)=>{
        await deleteDoc(doc(db, "Blogs", id));
        // Remove deleted poem from both arrays
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        setFilteredBlogs(filteredBlogs.filter(blog => blog.id !== id));
    }

    return (
        <main className='min-h-dvh p-3'>
            <h1 className='text-center m-5 max-md:text-xl font-bold text-2xl text-gray-800 w-3/4 mx-auto'>
                Explore our catalogue of wonderfully crafted Blog posts and interact with our Renowned authors.
            </h1>

             {/* Search and Filter Section */}
            <div className='max-w-4xl mx-auto mb-8'>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                    {/* Search Input */}
                    <div className='relative flex-1 max-w-md'>
                        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={onSearchChange}
                            className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className='flex items-center gap-2'>
                        <label htmlFor="filter" className='text-sm font-medium text-gray-700'>
                            Search in:
                        </label>
                        <select
                            id="filter"
                            value={filterBy}
                            onChange={onFilterChange}
                            className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                            <option value="all">All Fields</option>
                            <option value="title">Title Only</option>
                            <option value="author">Author Only</option>
                            <option value="content">Content Only</option>
                        </select>
                    </div>

                    {/* Clear Button */}
                    {(searchTerm || filterBy !== 'all') && (
                        <button
                            onClick={clearSearch}
                            className='px-4 py-2 text-sm bg-gray-500 text-white rounded-lg 
                            hover:bg-gray-600 transition-colors'
                        >
                            Clear
                        </button>
                    )}
                </div>

                {/* Search Results Info */}
                <div className='text-center mt-4 text-sm text-gray-600'>
                    {searchTerm ? (
                        <p>
                            Found {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''} 
                            {searchTerm && ` matching "${searchTerm}"`}
                        </p>
                    ) : (
                        <p>Showing all {blogs.length} blog{blogs.length !== 1 ? 's' : ''}</p>
                    )}
                </div>
            </div>

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