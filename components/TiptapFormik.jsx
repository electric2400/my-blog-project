import { useFormikContext } from "formik";
import { useEffect } from "react";
import { EditorContent } from "@tiptap/react";

const TiptapFormik = ({ editor }) => {
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (!editor) return;

    editor.on("update", () => {
      setFieldValue("content", editor.getHTML());
    });
  }, [editor, setFieldValue]);
  

  return <EditorContent editor={editor} />;
};

export default TiptapFormik;