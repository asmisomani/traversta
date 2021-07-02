import {Fragment}from "react"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"
import img6 from "../img/img6.png"
import img7 from "../img/img7.png"
import img8 from "../img/img8.png"
import "./ourteam.css"
function OurTeam(){
const data=[
    
    {
        id:"one",
        img:img2,
        name:"Diane Bennet",
        desig:"associate designer",
        height:"386",
        width:"311",
        top:"188",
        left:"104"
    },
    {
        id:"two",
        img:img1,
        name:"Clarissa Day",
        desig:"travel sales manager",
        height:"297",
        width:"222",
        top:"38",
        left:"25"
    },
    {
        id:"three",
        img:img3,
        name:"Kate Carr",
        desig:"tourism marketing agent",
        height:"359",
        width:"273",
        top:"13",
        left:"391"
    },
    {
        id:"four",
        img:img4,
        name:"Lara Hale",
        desig:"travel agent",
        height:"256",
        width:"393",
        top:"460",
        left:"284"
    },
    {
        id:"five",
        img:img5,
        name:"Ray Cannon",
        desig:"travel consultant",
        height:"316",
        width:"292",
        top:"298",
        left:"602"
    },
    {
        id:"six",
        img:img6,
        name:"Eva Saunders",
        desig:"web developer",
        height:"314",
        width:"224",
        top:"105",
        left:"820"
    },
    {
        id:"seven",
        img:img7,
        name:"Lucy Palmer",
        desig:"tour guide",
        height:"295",
        width:"262",
        top:"372",
        left:"971"
        
    },
    {
        id:"eight",
        img:img8,
        name:"Andrew Nelson",
        desig:"writer",
        height:"212",
        width:"243",
        top:"38",
        left:"1024"
        
    },
]
    const IMG_STYLES={
        width: "300px",
        height: "400px",
        margin: "auto",
        alignSelf: "center",
    }
    return (<div id="abtus">
        {data.map(data=>{return <Fragment>
            <div className={`${data.id} cmn`} style={IMG_STYLES}>
                <img src={data.img} alt={data.name}/>
            <div className={`hov ${data.id}`} style={IMG_STYLES}>
                <h className="text-big-b ">{data.name}</h>
                <h className="para-b ">{data.desig}</h>
            </div>
            </div>
        </Fragment>})}
    </div>)
}
export default OurTeam;