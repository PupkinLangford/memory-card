import './App.css';
import {useState} from 'react'
import Card from './Components/Card'
import img1 from './Images/1.png'
import img2 from './Images/2.png'
import img3 from './Images/3.png'
import img4 from './Images/4.png'
import img5 from './Images/5.png'
import img6 from './Images/6.png'
import img7 from './Images/7.png'
import img8 from './Images/8.png'
import img9 from './Images/9.png'
import img10 from './Images/10.png'
import img11 from './Images/11.png'
import img12 from './Images/12.png'

const imagesdir = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function App() {

  const [images, setImages] = useState([...imagesdir])

  return (
    <div className="App">
      <div className="board">
        {images.map((img, index) => {
          return <Card key={index} imgsrc={img}/>
        })}
      </div>
    </div>
  );
}

export default App;

//"../Images/" + props.imgnum + ".png"
/*          <Card imgsrc={images[0]}/>
          <Card imgsrc={images[1]}/>
          <Card imgsrc={images[2]}/>
          <Card imgsrc={images[3]}/>
          <Card imgsrc={images[4]}/>
          <Card imgsrc={images[5]}/>
          <Card imgsrc={images[6]}/>
          <Card imgsrc={images[7]}/>
          <Card imgsrc={images[8]}/>
          <Card imgsrc={images[9]}/>
          <Card imgsrc={images[10]}/>
          <Card imgsrc={images[11]}/>*/