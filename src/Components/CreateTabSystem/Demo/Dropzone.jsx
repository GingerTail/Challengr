import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import "./demo.css";

const uploadPdf = async file => {
  var formData = new FormData();
  formData.append("demo_pdf", file);
  return formData;
};

function MyDropzone() {
  const dispatch = useDispatch();
  const onDrop = useCallback(async acceptedFiles => {
    // Do something with the files
    if (acceptedFiles[0].type !== "application/pdf") {
      acceptedFiles.splice(0, 1);
      validateFile = false;
      dispatch({ type: "VALIDATE_FILE", payload: validateFile });
    } else {
      Pdf = acceptedFiles[0];
      validateFile = true;
      const formData = await uploadPdf(Pdf);
      dispatch({ type: "UPLOAD_PDF_FORMDATA", payload: formData });
      dispatch({ type: "UPLOAD_PDF_RAW", payload: Pdf });
      dispatch({ type: "VALIDATE_FILE", payload: validateFile });
    }
  }, []);

  let Pdf = [];
  let validateFile = false;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className="dropzone-container">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
}

export default MyDropzone;
