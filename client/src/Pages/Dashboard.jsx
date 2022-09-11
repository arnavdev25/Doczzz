// /* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import React, { useState } from "react";
// const Dashboard = () => {
//   const [files, setFiles] = useState([]);
//   const uploadHandler = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;
//     file.isUploading = true;
//     setFiles([...files, file]);
//     console.log(files);
//     // const formData = new FormData();
//     // formData.append("newFile", file, file.name);

//     // axios.post("http://localhost:8080/upload", formData).then((res) => {
//     //   file.isUploading = false;
//     //   setFiles([...files, file]);
//     // });
//   };
//   return (
//     <div>
//     
//       <div className=" flex flex-col p-5 justify-center items-center w-80 m-auto mt-9 border border-black border-dashed">
//         <div className="file-inputs">
//           <input
//             onChange={uploadHandler}
//             type="file"
//             
//           />
//           <button 
//          
//             Upload
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core"; // install this library

export const Dashboard = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  return (
    <div className="pt-2">
      <h1 className="pt-36 text-xl text-center font-bold ">
         Upload Your documents here...
</h1>
      <form className="flex flex-col p-5 justify-center items-center w-80 m-auto mt-9 border border-black border-dashed" onSubmit={handlePdfFileSubmit}>
        <input
          type="file"
          className="ml-2 z-10 cursor-pointer text-right"
          required
          onChange={handlePdfFileChange}
        />
        <br/>
        {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
        <br></br>
        <button type="submit" className=" -mt-6 bg-red-500 cursor-pointer ml-1 mb-3 text-white p-4 flex justify-between">
        <i className="mr-2">
               <FontAwesomeIcon icon={faPlus} />
             </i>
          UPLOAD
        </button>
      </form>
      <br></br>
      <h4 className="text-center" >View PDF</h4>
      <div className=" m-auto text-center">
        {viewPdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}
        {!viewPdf && <>No pdf file selected</>}
      </div>
    </div>
  );
};

export default Dashboard;
