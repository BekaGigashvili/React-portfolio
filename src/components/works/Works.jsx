import { useState } from "react"
import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      icon: "assets/works/mobile.png",
      title: "Tiger",
      desc: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
      img: "assets/works/1.jpg"
    },
    {
      id: "2",
      icon: "assets/works/globe.png",
      title: "Leopard",
      desc: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
      img: "assets/works/2.jpg"
    },
    {
      id: "3",
      icon: "assets/works/writing.png",
      title: "Peacock",
      desc: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
      img: "assets/works/3.jpg"
    }
  ]

  const handleClick = (way) => {
    way === "Left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw` }}>
        {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/works/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("Left")}/>
      <img src="assets/works/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />

    </div>
  )
}
