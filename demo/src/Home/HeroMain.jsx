import React from "react";
import { Link } from "react-router-dom";



const HeroMain = () =>{
    return(
        <>
        <div className="main-hero">
    <div className="main-hero-inner">
        <img src="./images/Gold_Necklaces.webp" alt="necklace" />
        <div className="text">
            <span>luxury redefined</span>
            <h2>Stunning Necklace  <br/>
              That Speak  Elegance
            </h2>
            <p>
                    Bring your love to life with a handcrafted design that perfectly <br/>
                     suits your relationship and style.
            </p>
            <Link>SHOP NECKLACE</Link>
        </div>
    </div>
        </div>
        </>
    )
}
export default HeroMain;