import { useEffect, useState } from 'react';

const Video = (props) => {
    // let rate = 0; // => state (estado)
    const [rate, setRate] = useState(0);    // => HOOK!!!
    const [logued, setLogued] = useState(false)

    const rateVideo = () => {
        setRate(rate+1)
    }

    // componentDidUpdate
    useEffect(() => {
      console.log('El Componente se actualizó')
    }, [rate])

    return (
      <div className="video-container">
          <div className="video-image">
          <img src={props.thumbnail} alt="Same alt value" />
          </div>
          <div className="video-info">
          <h3>{props.title}</h3>
          <span>This video has {rate} stars</span>
          <button onClick={rateVideo}>Rate</button>
          <p>Upload date: {props.dateAdded}</p>
          <h4>Channel's Title: {props.channel}</h4>
          <p>{props.description}</p>
          </div>
      </div>
    )
  }
  
  export default Video