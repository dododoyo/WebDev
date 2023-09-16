import { useState } from "react";
import menu from "./data";
import MenuItems from "./MenuItems";
import Categories from "./Categories";

const App = () => {
  const [menuList,setMenuList] = useState(menu);

  const showCategory = (category) => {
    if (category == 'all'){
        setMenuList(menu);
        return;
    }
    setMenuList(menu.filter((eachFood) => eachFood.category === category));
  }
  const distinctCategories = [
    "all",
    ...new Set(menu.map((eachFood) => eachFood.category)),
  ];

  return (
    <main>
      <div className="title">
        <h1>Our Menu</h1>
        <div className="title-underline"></div>
      </div>

      <Categories   showCategory={showCategory} distinctCategories={distinctCategories}/>

      <div className="section-center">
        <MenuItems menuList={menuList} />
      </div>
    </main>
  );
};
export default App;
