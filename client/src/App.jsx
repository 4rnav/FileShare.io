import { useState, useRef, useEffect } from 'react'
import './App.css'
import { uploadFile } from './services/api';
import QRCode from "react-qr-code";

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();
  const onUploadClick = () => {
    //link file input to upload button using fileInputRef
    fileInputRef.current.click();
  }


  //get name of file when it is uploaded
  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        //call API
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getFile();
  }, [file])



  return (
    <>
      <div className='container'>

        <div className='wrapper'>
          <h1>FileShare.io</h1>
          <p>Easy file upload and sharing</p>

          <button className="button-27" onClick={() => onUploadClick()}>Upload</button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div style={{ height: "auto", margin: "auto", maxWidth: 64, width: "100%" }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={result}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
