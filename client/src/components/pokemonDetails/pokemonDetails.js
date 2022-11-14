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
                      src={pokemonByID[0].image}
                      alt={pokemonByID[0].name}
                      className="pokemonImg"
                    />
                  </div>
                  <div className="stats">
                    <div className="statsCard">
                      <FaHeart className="iconDetail"/>
                      <h4>Health</h4>
                      <p>{pokemonByID[0].hp}</p>
                    <div className="statsCard">
                      <AiFillThunderbolt className="iconDetail" />
                      <h4>Speed</h4>
                      <p>{pokemonByID[0].speed}</p>
                    </div>
                    <div className="statsCard">
                      <AiFillFire className="iconDetail" />
                      <h4>Attack</h4>
                      <p>{pokemonByID[0].attack}</p>
                    </div>
                    <div className="statsCard">
                      <BsShieldFillPlus className="iconDetail" />
                      <h4>Defense</h4>
                      <p>{pokemonByID[0].defense}</p>
                    </div>
                    <div className="statsCard">
                      <FaRulerVertical className="iconDetail"/>
                      <h4>Height</h4>
                      <p>{pokemonByID[0].height}</p>
                    </div>
                    <div className="statsCard">
                      <GiWeight className="iconDetail" />
                      <h4>Weight</h4>
                      <p>{pokemonByID[0].weight}</p>
                    </div>
                  </div>
                </div>
                <div className="cardGradient">
                  <p className="pokemonName">{pokemonByID[0].name}</p>
                  <div className="typeDetails">
                    {pokemonByID[0].types &&
                      pokemonByID[0].types.map((type) => <p>{type.name}</p>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="goBackDetail">
              <Link to="/home" style={{ textDecoration: "none", color: "blue" }}>
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