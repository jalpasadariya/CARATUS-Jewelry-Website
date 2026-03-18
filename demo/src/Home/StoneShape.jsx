import React from "react";
import { Link } from "react-router-dom";



const StoneShape = () =>{
    return(
        <>
        <div className="stone-main">
            <div className="container">
                <div className="title">
                    Shop Stone by Shape
                </div>
                <div className="stone-main-inner">
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container_1.webp" alt="" />
                       </Link>
                       <div className="name">Round</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-1_34.webp" alt="" />
                       </Link>
                       <div className="name">Ovel</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-2.webp" alt="" />
                       </Link>
                       <div className="name">Emerald</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-3.webp" alt="" />
                       </Link>
                       <div className="name">Princess</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-4.webp" alt="" />
                       </Link>
                       <div className="name">Pear</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-5.webp" alt="" />
                       </Link>
                       <div className="name">Rediant</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-6.webp" alt="" />
                       </Link>
                       <div className="name">Marquise</div>
                    </div>
                    <div className="stone-item">
                       <Link>
                       <img src="./Images/container-7.webp" alt="" />
                       </Link>
                       <div className="name">Heart</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default StoneShape;