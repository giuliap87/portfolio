import React from "react"
import berlin from "../../data/images/berlin.jpg"
import {Link} from "gatsby"

function FourOFour() {
  return (
    <div
      style={{
        color: "rgb(71, 173, 144)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: `linear-gradient(0deg, rgba(71,173,144, 0.4), rgba(39,94,79, 0.8)), url(${berlin})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          padding: "50px 10px",
          backgroundColor: "rgba(255, 255, 255, .8)",
          borderRadius: "3px",
        }}
      >
        <h2>Ooops... 404</h2>
        <h1 style={{textTransform: "uppercase"}}>The page was not found</h1>
        <button
          style={{
            padding: "8px",
            backgroundColor: "rgb(71, 173, 144)",
            border: "none",
            color: "white",
            textTransform: "uppercase",
            marginTop: 15,
          }}
        >
        <Link to="/" style={{color: "white", textDecoration: "none"}}>Back to home page</Link>  
        </button>
      </div>
    </div>
  )
}

export default FourOFour
