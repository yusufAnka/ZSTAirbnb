import React, {useState} from "react"
import './card.css';
import data from '../../data.json'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'


export default function Card() {

    const [color, setColor] = useState(false);

    const handleChange =(index)=> {
          setColor(prevState => ({
            ...color,
            [index] : !color[index]
          }))
    }

    return (
        <div className="cards">
            {data.map((item, index) => (
            <div className="card" key={index}>
                <img src={`../../images/${item.img}`} className="card--image" />
                <div className="like"><AiFillHeart  onClick={()=>{handleChange(index)}} style={{color: color[index] ? 'red' : '#3d3d3f'}}/></div>
                <div className="card--stats">
                    <p className="bold">{item.location}</p>
                        <div className="rating">
                            <AiFillStar className="card--star" />
                            <div>{item.rating}</div>
                        </div>
                    
                </div>
                <span className="gray">{item.address}</span>
                <p className="gray">{item.date}</p>
                <p><span className="bold"> ${item.price}</span> night</p>
            </div>
        ))}
    </div>
)
}


