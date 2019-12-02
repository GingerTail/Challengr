import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import "./demo.css";

function MyDropzone() {
  const dispatch = useDispatch();
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    if (acceptedFiles[0].type !== "application/pdf") {
      acceptedFiles.splice(0, 1);
      console.log("invalid file");
      validateFile = false;
      dispatch({ type: "VALIDATE_FILE", payload: validateFile });
    } else {
      Pdf = acceptedFiles[0];
      validateFile = true;
      console.log(Pdf);
      dispatch({ type: "UPLOAD_PDF", payload: Pdf });
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
