"use client"
import React, { useState } from 'react'
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { BiLoaderCircle } from "react-icons/bi";
import TiptapFormik from '@/components/TiptapFormik'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #D3D3D3',
  boxShadow: 24,
  p: 4,
};


const NewPost = ({session}) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   console.log(session);
   

   const [processing, setProcessing] = useState(false)
   console.log(session);
   

   const initialValues = {
        title: '',
        content: ''
    };

    const formValidation = Yup.object({
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required').min(30, 'Poem must be at least 30 characters long'),
    })

    const handleSubmit = async (values, {resetForm}) => {
          try {
            setProcessing(true)
            const BlogDetails = {
              author: session.user.name || "",
              image: session.user.image,
              timestamp: new Date().toLocaleDateString(),
              authorId: session?.user?.email,
              email: session?.user?.email,
              ...values
            }


            console.log(BlogDetails);
            const docRef = await addDoc(collection(db, "Blogs"), BlogDetails);
            console.log("Document written with ID: ", docRef.id);
            resetForm()
            handleOpen()
            
            if (editor) {
              editor.commands.clearContent();
            }
            
          } catch (error) {
            console.error("Error adding document", error)
            alert("Oops, an error occured. Try again later!")
          }finally{
          setProcessing(false)
        }
    }

  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    content: "Insert your blog post in here...",
    immediatelyRender: false
  });
  

  
  

  return (
    <main className='min-h-dvh flex items-center justify-center'>
      <div className='lg:w-5xl p-3 mx-4 max-lg:w-full bg-white/90 backdrop-blur-lg rounded-lg shadow-lg'> 
          <h1 className='flex justify-center font-bold text-3xl max-md:text-2xl bg-gradient-to-r from-purple-600 to-pink-600 
          bg-clip-text text-transparent'>Create your Blog</h1>

          <div>
            <Formik initialValues={initialValues} validationSchema={formValidation} onSubmit={handleSubmit}>
              {({ setFieldValue }) => (
                <Form className='space-y-5'>
                {/*  Title Field */}
                <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-xl max-md:text-sm text-gray-800 font-semibold'>Blog Title</label>
                <Field name="title" type="text" className="outline-none border rounded-md border-gray-200 p-2 shadow-sm"/>
                <ErrorMessage name='title' component={"p"} className="text-xs text-red-600"/>
                </div>
                {/*  Tiptap Editor */}
                <div>
                <label htmlFor="" className='text-xl max-md:text-sm text-gray-800 font-semibold'>Content</label>
                <div className='border p-2 rounded min-h-[150px] border-gray-200 outline-none shadow-sm'>
                  <TiptapFormik editor={editor} />
                {editor && <EditorContent editor={editor} 
                  onInput={() => setFieldValue("content", editor.getText())} 
                />}
                </div>
                <ErrorMessage name='content' component="div" className="text-xs text-red-600"/>
                </div>

                {/*  Submit */}
                <button
                  type='submit'
                  className='px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:opacity-80 transition'
                     >      
                      {
                         processing ? <BiLoaderCircle className='animate-spin text-2xl
                          text-white text-center'/> : "Post your blog"
                      }
                </button>
              </Form>  
              )}
            </Formik>
            </div>
        </div>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post Successful
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for sharing your thoughts with the community
          </Typography>
        </Box>
      </Modal>
    </main>
  )
}

export default NewPost
