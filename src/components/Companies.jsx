import React from 'react'

const Companies = ({data, filter, current}) => {

  return (
    <div className='btn-container'>{data.map((item, index)=>{
        return <button className={index === current? "active-btn job-btn": "job-btn"} key={item.id} onClick={() => filter(index)}>{item.company}</button>
    })}</div>
  )
}

export default Companies