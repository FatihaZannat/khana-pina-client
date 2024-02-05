import Cover from "../Sheard/Cover";
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MenuData } from "../../hooks/DataLoad";

import ShopDetails from "./ShopDetails";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";


const OurShop = () => {
    const [offered,salad,pizza,soups,desserts,drinks] = MenuData()
    const category = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks']
    const {name} = useParams()
   let indexOfName = category.indexOf(name)
//    const indexOfName = category.findIndex(name)
    const [tabIndex, setTabIndex] = useState(indexOfName = 0)
    // console.log(indexOfName , name);

    return (
        <div>
               <Helmet>
                <title>Khana pina|our shop</title>
            </Helmet>
            <Cover img={shopImg} name='our shop'></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)} >
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>

                </TabList>

                <TabPanel>
               <ShopDetails items={salad}></ShopDetails>
                </TabPanel>
                <TabPanel>
                <ShopDetails items={pizza}></ShopDetails>
                 
                </TabPanel>
                <TabPanel>
                <ShopDetails items={soups}></ShopDetails>
                </TabPanel>
                <TabPanel>
                <ShopDetails items={desserts}></ShopDetails>
                </TabPanel>
                <TabPanel>
                <ShopDetails items={drinks}></ShopDetails>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;