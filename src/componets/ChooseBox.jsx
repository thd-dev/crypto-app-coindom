import React from 'react'
{/* <ChooseBox chooseClass = '' heading = '' para = '' /> */}
const ChooseBox = (props) => {
  return (
    <div className='choose--container-box'>
        <i className={`${props.chooseClass} icon`}></i> 
        <div className="choose-us__meta">
          <h2>{props.heading}</h2>
          <p>{props.para}</p>
        </div>
      
    </div>
  )
}

export default ChooseBox
