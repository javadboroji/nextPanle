import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

type TinyEditoreProps = {
    editorRef: any
}
const TinyEditore: React.FC<TinyEditoreProps> = ({ editorRef }) => {

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                apiKey='wsntphmr8e2ki1sfhg8mr9pojwmpng64egw5t57af1uk4jdc'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                    height: 500,
                    directionality: "rtl",
                    menubar: true,
                    language: "fa",
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                        "emoticons autosave hr pagebreak"
                    ],
                    toolbar:
                        "undo redo | styleselect fontselect fontsizeselect | " +
                        "bold italic underline strikethrough forecolor backcolor | " +
                        "alignleft aligncenter alignright alignjustify | " +
                        "ltr rtl | bullist numlist outdent indent | " +
                        "link image media table template codesample | " +
                        "charmap emoticons hr pagebreak nonbreaking | " +
                        "removeformat subscript superscript | " +
                        "blockquote code fullscreen preview print save help",
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    )
}

export default TinyEditore