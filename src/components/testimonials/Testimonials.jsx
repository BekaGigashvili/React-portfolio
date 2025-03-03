import './testimonials.scss'

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Einstein",
      title: "Einstain the Physicist",
      img: "assets/testimonials/1.jpg",
      icon: "assets/testimonials/instagram.png",
      desc: "Lorem ipsum dolor sit amet. hbeoqna sdljkile kbduwb jhbdf ijwek kjnsder jkndfhjkb jnjdfi jnhjeri ijndfm, hbdfjhb. uhfuerhjfd jhbdf bdfj jher.",
    },
    {
      id: 2,
      name: "Oppenheimer",
      title: "Oppenheimer the Physicist",
      img: "assets/testimonials/2.jpg",
      icon: "assets/testimonials/instagram.png",
      desc: "Lorem ipsum dolor sit amet. hbeoqna sdljkile kbduwb jhbdf ijwek kjnsder jkndfhjkb jnjdfi jnhjeri ijndfm, hbdfjhb. uhfuerhjfd jhbdf bdfj jher.",
      featured: true
    },
    {
      id: 3,
      name: "Feynman",
      title: "Feynman the Physicist",
      img: "assets/testimonials/3.jpg",
      icon: "assets/testimonials/instagram.png",
      desc: "Lorem ipsum dolor sit amet. hbeoqna sdljkile kbduwb jhbdf ijwek kjnsder jkndfhjkb jnjdfi jnhjeri ijndfm, hbdfjhb. uhfuerhjfd jhbdf bdfj jher.",
    }
  ]

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/testimonials/right-arrow.png" className='left' alt="" />
            <img src={d.img} className='photo' alt="" />
            <img src={d.icon} className='right' alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
