 import { db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";


 export const fetchSingleBlog = async (id)=>{
    if (!id) {
        return null;
    }

    const docRef = doc(db, "", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }


}

export default async function exploreDynamic ({params}){
    const blog = await fetchSingleBlog(params.id)
    console.log(blog);
    
    return (
        <main className="min-h-dvh border md:w-4xl mx-auto p-3 md:p-6 shadow-sm md:space-y-5">
            <Link href={"/explore"} className="">
               <button className="p-2 text-xl rounded-full mb-5 hover:bg-gray-100 transition-all duration-200
                 cursor-pointer
               "><GoArrowLeft/></button>
            </Link>
            <div className="flex items-center gap-3">
                <img src={blog.img} alt={blog.author.slice(0,1).toUpperCase()}  className="w-8 h-8 rounded-full"/>
                <h1>{blog.author}</h1>
            </div>

            <div>
                <h1 className="my-5 font-semibold text-2xl text-gray-800 uppercase">{blog.title}</h1>
                <p className="leading-8">{blog.content}</p>
            </div>

            <p>{blog.timestamp}</p>
        </main>
    )
}