 "use client"
import React, { useState } from 'react'
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';

const UpdateProfile = ({ session }) => {
    const userName = session?.user.name
    const [name, setName] = useState(userName)

    console.log(session);
    
 

    return (
        <main className='md:w-3xl mx-auto'>
            <div>
                <input type="text" className='border border-gray-200 p-2 rounded-md w-full 
                shadow-md outline-none' value={name} onChange={(e) => setName(e.target.value)} />

               
            </div>
        </main>
    )
}

export default UpdateProfile