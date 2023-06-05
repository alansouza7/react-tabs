import React from 'react'

import Duties from './Duties'

const Jobs = ({data, current}) => {

    const {title, company, dates, duties} = data[current]

  return (
    <article className='job-info'>
        <h3>{title}</h3>
        <span className='job-company'>{company}</span>
        <p className='job-date'>{dates}</p>
       {duties && <Duties data={duties}/> }
    </article>
  )
}

export default Jobs