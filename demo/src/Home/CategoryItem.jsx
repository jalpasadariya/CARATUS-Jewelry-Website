import React from "react"


const CategoryItrm = (Props) => {
    return(
       <>
<div className="category-list">
                    <img src={Props.image} alt="Rings" />
                    <div className="text">
                        {Props.name}
                    </div>
                  </div>
       </>
    )

}
export default CategoryItrm;


