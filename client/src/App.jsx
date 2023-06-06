import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [file, setFile] = useState('');


  const fileInputRef = useRef();
  const onUploadClick = () => {
    //link file input to upload button using fileInputRef
    fileInputRef.current.click();
  }



  return (
    <>
      <div className='container'>

        <div className='wrapper'>
          <h1>FileShare.io</h1>
          <p>Upload and share the download link.</p>

          <button className="button-27" onClick={() => onUploadClick()}>Upload</button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />


        </div>
      </div>
    </>
  )
}

export default App
