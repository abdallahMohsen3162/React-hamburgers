import React, {useEffect, useState } from 'react';
import Bread from './bread';
import Cheeze from './cheese';
import Meat from './meat';
import Capo from './capo';
import Tomato from './tomato';
let deletion_map = new Map();
let price_map = new Map();


function Sand() {
  const [cheese, setcheese] = useState(0);
  const [tomato, settomato] = useState(0);
  const [len, setlen] = useState(0);
  const [meat, setmeat] = useState(0);
  const [capo, setcapo] = useState(0);
  const [grid, setGrid] = useState([]);
  const [price, setprice] = useState(0);


  

  useEffect(()=>{
    price_map["cheese"] = 1;
    price_map["capo"] = 1;
    price_map["meat"] = 80;
    price_map["tomato"] = 1;

    
    for(let i in price_map){
      deletion_map[i] = `set${i}(${i} - 1)`;
    }

  },[])

  let addChese = () => {
    setprice(price + price_map["cheese"])
    setlen(len + 1);
    setcheese(cheese + 1);
    let arr = grid;
    arr.push("cheese");
    setGrid(arr);
  } 

  let addMeat = () => {
    setprice(price + price_map["meat"])
    setlen(len + 1);
    setmeat(meat + 1);
    let arr = grid;
    arr.push("meat");
    setGrid(arr);
  }

  let addCapo = () => {
    setprice(price + price_map["capo"])
    setlen(len + 1);
    setcapo(capo + 1);
    let arr = grid;
    arr.push("capo");
    setGrid(arr);
  }

  let addtomato = () => {
    setprice(price + price_map["tomato"])
    setlen(len + 1);
    settomato(tomato + 1);
    let arr = grid;
    arr.push("tomato");
    setGrid(arr);
  }

  let remmove = () => {
    if(grid.length === 0) 
      return;
    let x = grid[grid.length - 1];
    setprice(price - price_map[x])
    eval(deletion_map[x]);
    setlen(len - 1);
    let arr = grid;
    arr.splice(arr.length - 1,1);
    setGrid(arr);
  }


 
 
 

  return (
    <div>



    <div className='container'> 
        <Bread top={true} price={price}/>

        <div className='scroll-bar'>
        <div className='inner-grid'>
          {
            (grid)?(
              grid.map((i,idx)=>{
                let x = grid[grid.length-1-idx];
                if(x === "cheese"){
                    return (< Cheeze />)
                }else if(x === "capo"){
                    return (< Capo />)
                }else if(x === "meat"){
                    return (< Meat />)
                }else if(x === "tomato"){
                    return (< Tomato />)
                }
              })
            ):(
              ""
            )
          }

        </div>
        </div>
        <Bread top={false}/>
    </div>
          
    <div className='control-panel control-panel-show'>
        <button onClick={()=>addChese()} className='add-cheese'> +cheese {cheese}</button>
        <button onClick={()=>addMeat()} className='add-meat'> +meat {meat}</button>
        <button onClick={()=>addCapo()} className='add-capo'> +capo {capo}</button>
        <button onClick={()=>addtomato()} className='add-tomato'> +tomato {tomato}</button>
        <button onClick={()=>remmove()} className='remove'> remove </button>
    </div>

    </div>
  );
}

export default Sand;
