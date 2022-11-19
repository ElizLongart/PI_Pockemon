import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail, clearPokemonById } from '../../redux/actions/index'
import { Link, useParams } from "react-router-dom";
import { AiFillThunderbolt, AiFillFire } from "react-icons/ai";
import { BsShieldFillPlus } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { FaHeart, FaRulerVertical, FaChevronCircleRight } from "react-icons/fa";
import Footer from '../footer/footer.js'

import './pokemonDetails.css'
import NavBarSearch from "../NavBarSearch/navBarSearch";


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
              <div className="loadingContainer">
					          <img src="https://i.pinimg.com/originals/0c/4b/61/0c4b61db17a53de6ba0f4ffa3b842c2b.gif" alt="Loading" />
                    <h1>Loading... Please wait</h1> 
              </div>
        );
    } else {
        console.log(pokemonByID); 
        return(
            <div>
                <NavBarSearch/>
            <div className="bigContainer">
              <div className="containerDetail">
              <div className="imgDet">
                  <div>
                    <img
                      src={pokemonByID[0].image}
                      alt={pokemonByID[0].name}
                      className="pokemonImg"
                    />
                  </div>
                <div className="cardDetail">
                  <div className="stats">
                    <div className="statsCard">
                      <FaHeart className="iconHealth"/>
                      <h4>Health</h4>
                      <p>{pokemonByID[0].hp}</p>
                    </div>
                    <div className="statsCard">
                      <AiFillThunderbolt className="iconSpeed" />
                      <h4>Speed</h4>
                      <p>{pokemonByID[0].speed}</p>
                    </div>
                    <div className="statsCard">
                      <AiFillFire className="iconAttack" />
                      <h4>Attack</h4>
                      <p>{pokemonByID[0].attack}</p>
                    </div>
                    <div className="statsCard">
                      <BsShieldFillPlus className="iconDefense" />
                      <h4>Defense</h4>
                      <p>{pokemonByID[0].defense}</p>
                    </div>
                    <div className="statsCard">
                      <FaRulerVertical className="iconHeight"/>
                      <h4>Height</h4>
                      <p>{pokemonByID[0].height}</p>
                    </div>
                    <div className="statsCard">
                      <GiWeight className="iconWeight" />
                      <h4>Weight</h4>
                      <p>{pokemonByID[0].weight}</p>
                    </div>
                  </div>
                </div>
                <div className="cardGradient">
                  <p className="pokemonName">{pokemonByID[0].name}</p>
                  <div className="typeDetails">
                    {pokemonByID[0].types &&
                      pokemonByID[0].types.map((type) =>  <span> <FaChevronCircleRight className="iconType"/>  {type.name}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="goBackDetail">
            <Link className='reload' to= '/home'>
                 Return
            </Link>
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}