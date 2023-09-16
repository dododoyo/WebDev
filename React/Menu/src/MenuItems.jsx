import EachItem from "./EachItem";

const MenuItems = ({menuList}) => {
  // console.log(menuList);
  return (
    <>
    {menuList.map((eachFood) => {
      return <EachItem key={eachFood.id}eachFood={eachFood}/>
    })}
    </>
  )
}
export default MenuItems
