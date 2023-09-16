import React from "react";

function Categories({ showCategory,distinctCategories }) { 
  return (
    <div className="btn-container">
      {distinctCategories.map((eachCategory,index) => {
        // console.log(eachCategory);
        return (
          <button key={index} type="button"
            onClick={() => {
              showCategory(eachCategory);
            }}
            className="btn btn-hipster"
          >
            {eachCategory.charAt(0).toUpperCase() + eachCategory.slice(1)}
          </button>
        );

      })}
    </div>
  );
}

export default Categories;