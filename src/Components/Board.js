import './Board.css';
import {useState, useEffect} from 'react'
import Card from './Card'
import img1 from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'
import img5 from '../Images/5.png'
import img6 from '../Images/6.png'
import img7 from '../Images/7.png'
import img8 from '../Images/8.png'
import img9 from '../Images/9.png'
import img10 from '../Images/10.png'
import img11 from '../Images/11.png'
import img12 from '../Images/12.png'

const imagesdir = [{photo: img1, id: 1, country: "Suriname"},
{photo: img2, id: 2, country: "Guyana"},
{photo: img3, id: 3, country: "Guatemala"},
{photo: img4, id: 4, country: "El Salvador"},
{photo: img5, id: 5, country: "Honduras"},
{photo: img6, id: 6, country: "Nicaragua"},
{photo: img7, id: 7, country: "Colombia"},
{photo: img8, id: 8, country: "Ecuador"},
{photo: img9, id: 9, country: "Argentina"},
{photo: img10, id: 10, country: "Uruguay"},
{photo: img11, id: 11, country: "Belize"},
{photo: img12, id: 12, country: "Brazil"}]

function shuffle(array) { //https://github.com/Daplie/knuth-shuffle
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const Board = props => {

    const [images, setImages] = useState(shuffle([...imagesdir]));
    const [clicked, setClicked] = useState([]);


    const handleclick = (value) => {
        if (clicked.includes(value)) {
            setClicked([]);
        }
        else {
            setClicked([...clicked, value]);
        }
        setImages(shuffle([...imagesdir]));
    }

    useEffect(() => props.handler(clicked.length));


    return (
        <div className="Board">
            {images.map((img, index) => {
              return <Card key={index} imgsrc={img.photo} country={img.country} handler={() => handleclick(img.id)}/>
            })}
        </div>
      );
}

export default Board;