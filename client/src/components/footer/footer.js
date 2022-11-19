import React from "react";
import { AiFillHeart } from "react-icons/ai";
import linkendin from '../../assets/linkedin.svg'
import github from '../../assets/github.png'

import './footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <p> Made with <AiFillHeart /> by Eliz Teresa Longart Coll </p>
        <p>
              <a href="https://www.linkedin.com/in/eliz-longart-138791235/" target="_blank">
                <img
                  className="imgFooter"
                  src={linkendin}
                  alt="linkedin icono"
                />
              </a>
              <a href="https://github.com/ElizLongart" target="_blank">
                <img
                  className="imgFooter"
                  src={github}
                  alt="github icono"
                />
              </a>
        </p>
      </div>
    </div>
  )
}
 