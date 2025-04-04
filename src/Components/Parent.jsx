import React from "react";
import DestC from "./Child";
import '../index.css'

function Parent(){
    const destinations=[{
        id: 1,
        name: "Bali",
        location: "Indonesia",
        image: "https://i.pinimg.com/originals/ab/ee/ae/abeeae0da2302ce9bab8d1b298fb5e39.jpg",
        description: "Tropical paradise with beautiful beaches and vibrant culture",
        price: "$1,200"
      },
      {
        id: 2,
        name: "Paris",
        location: "France",
        image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg",
        description: "City of love, art, and exquisite cuisine",
        price: "$1,500"
      },
      {
        id: 3,
        name: "Santorini",
        location: "Greece",
        image: "https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3",
        description: "Stunning sunsets and white-washed architecture",
        price: "$1,800"
      },
      {
        id: 4,
        name: "Tokyo",
        location: "Japan",
        image: "https://www.jluggage.com/blog/wp-content/uploads/2020/05/Askusa-and-Tokyo-Skytree-1024x683.jpg",
        description: "Modern city with rich traditions and amazing food",
        price: "$2,000"
      }];
      return(
        <div>
            {
                destinations.map((dest)=>
                (
                    <DestC key={dest.id}{...dest}/>
                )
                )
            }
        </div>
      )
}
export default Parent;