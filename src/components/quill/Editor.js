import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar'
import 'react-quill/dist/quill.snow.css';
// const formats = [
//    "header",
//    "font",
//    "size",
//    "bold",
//    "italic",
//    "underline",
//    "align",
//    "strike",
//    "script",
//    "blockquote",
//    "background",
//    "list",
//    "bullet",
//    "indent",
//    "link",
//    "image",
//    "video",
//    "color",
//    "code-block"
// ]

// const modules = {
//    toolbar: [
//       [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//       [{ size: [] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' },
//       { 'indent': '-1' }, { 'indent': '+1' }],
//       ['link', 'image', 'video'],
//       ['clean', 'color']
//    ],
//    clipboard: {
//       // toggle to add extra line breaks when pasting HTML:
//       matchVisual: false,
//    }
// }
export const Editor = () => {
   const [post, setPost] = useState({
      text: ''
   })
   const handleChange = (value) => {
      setPost({ ...post, text: value })
      console.log(post);
   }
   return (
      <>
         <EditorToolbar toolbarId={'t1'} />
         <ReactQuill formats={formats} modules={modules('t1')} value={post.text} onChange={handleChange} />
      </>
   )
}
