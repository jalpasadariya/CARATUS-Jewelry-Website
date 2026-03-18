import React from "react";
import CategoryItem from "./CategoryItem";




const Category = () => {
    return(
        <>
         <div className="category-main">
            <div className="container">
                <div className="category-main-inner">
                  <div className="title">
                    <span>Explore By Category</span>
                  </div>
              <CategoryItem image="/Images/caratus-rings-collection.webp"  name="Rings" />
              <CategoryItem image="/Images/caratus-earring-collection.webp"  name="Earrings" />
              <CategoryItem image="/Images/caratus-pendant-collection.webp"  name="Necklace" />
              <CategoryItem image="/Images/caratus-bracelets-collection.webp"  name="Bracelets" /> 

                  {/* <div className="category-list">
                    <img src="/Images/caratus-rings-collection.webp" alt="Rings" />
                    <div className="text">
                        Rings
                    </div>
                  </div>
                  <div className="category-list">
                    <img src="/Images/caratus-earring-collection.webp" alt="Rings" />
                    <div className="text">
                        Earrings
                    </div>
                  </div>
                  <div className="category-list">
                    <img src="/Images/caratus-pendant-collection.webp" alt="Rings" />
                    <div className="text">
                        Necklace
                    </div>
                  </div>
                  <div className="category-list">
                    <img src="/Images/caratus-bracelets-collection.webp" alt="Rings" />
                    <div className="text">
                        Bracelets
                    </div>
                  </div> */}
                  </div>
            </div>
         </div>
        </>
    )
}
export default Category;