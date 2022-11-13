import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail, clearPokemonById } from '../../redux/actions/index'
import Loading from '../../assets/loading.gif'
import { Link, useParams } from "react-router-dom";
import { AiFillThunderbolt, AiFillFire } from "react-icons/ai";
import { BsShieldFillPlus } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { FaHeart, FaRulerVertical } from "react-icons/fa";

import './pokemonDetails.css'


export default function PokemonDetails(){
    const dispatch = useDispatch();
    const pokemonByID = useSelector((state) => state.pokemonById)
    let { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id));
        dispatch (clearPokemonById());
    }, []);

    if(pokemonByID.length === 0){
        return (
            <div>
              {/*   <Header/> */}
                <div className="loadingContainer">
                    <img src={Loading} alt="Loading" />
                    <h1 className="loadingText">Loading... Please wait</h1>
                </div>
                {/* <Footer style={{ backgroundColor: "#f1f1f1" }} /> */}
            </div>
        );
    } else {
        console.log(pokemonByID);
        return(
            <div className="bigContainer">
            {/* <Header /> */}
            <div className="containerDetail">
              <div className="cardDetail">
                <div className="upper">
                  <div>
                    <img
                      src={pokemonByID.image}
                      alt={pokemonByID.name}
                      className="pokemonImg"
                    />
                  </div>
                  <div className="stats">
                    <div className="statsCard">
                      <FaHeart className="icon"/>
                      <h4>Health</h4>
                      <p>{pokemonByID.hp}</p>
                    <div className="statsCard">
                      <AiFillThunderbolt className="icon" />
                      <h4>Speed</h4>
                      <p>{pokemonByID.speed}</p>
                    </div>
                    <div className="statsCard">
                      <AiFillFire className="icon" />
                      <h4>Attack</h4>
                      <p>{pokemonByID.attack}</p>
                    </div>
                    <div className="statsCard">
                      <BsShieldFillPlus className="icon" />
                      <h4>Defense</h4>
                      <p>{pokemonByID.defense}</p>
                    </div>
                    <div className="statsCard">
                      <FaRulerVertical className="icon"/>
                      <h4>Height</h4>
                      <p>{pokemonByID.height}</p>
                    </div>
                    <div className="statsCard">
                      <GiWeight className="icon" />
                      <h4>Weight</h4>
                      <p>{pokemonByID.weight}</p>
                    </div>
                  </div>
                </div>
                <div className="cardGradient">
                  <p className="pokemonName">{pokemonByID.name}</p>
                  <div className="typeDetails">
                    {pokemonByID.types &&
                      pokemonByID.types.map((type) => <p>{type.name}</p>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="goBack">
              <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
                <a>Go Back</a>
              </Link>
            </div>
            <div className="empty"></div>
            </div>
{/*             <Footer />
 */}
         </div>
        )
    }
}