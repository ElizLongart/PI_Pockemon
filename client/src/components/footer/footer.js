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
        <ul className="listaFooter">
            <li>
              <a href="" target="_blank">
                <img
                  className="imgFooter"
                  src={linkendin}
                  alt="linkedin icono"
                />
                &nbsp;Eliz Longart
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img
                  className="imgFooter"
                  src={github}
                  alt="github icono"
                />
                &nbsp;Eliz Longart
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}
 