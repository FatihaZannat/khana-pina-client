import { useEffect, useState } from "react";

export function MenuData(){
const [menuData, setMenuData] = useState([])

useEffect(()=>{
    // fetch('menu.json')
    fetch(`http://localhost:5000/menu`)
    .then(res => res.json())
    .then(data => {
        setMenuData(data)})
},[])
console.log(menuData);

 
const offered = menuData.filter(menu => menu.category === 'offered')
const salad = menuData.filter(menu => menu.category === 'salad')
const pizza = menuData.filter(menu => menu.category === 'pizza')
const soups = menuData.filter(menu => menu.category === 'soup')
const desserts = menuData.filter(menu => menu.category === 'dessert')
const drinks = menuData.filter(menu => menu.category === 'drinks')
const popular = menuData.filter(menu => menu.category === 'popular')


return [offered,salad,pizza,soups,desserts,drinks,popular]
}
