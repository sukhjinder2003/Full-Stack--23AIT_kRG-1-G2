import { useState } from 'react'
import './App.css'

function App() {

  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      body: body,
    };

    console.log("Form Submitted:", data);
    alert("Form Submitted Successfully!");

    
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "30px" }}>
        <h2>Create Post</h2>

        <form onSubmit={handleSubmit}>
          
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter body"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "10px 15px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default App