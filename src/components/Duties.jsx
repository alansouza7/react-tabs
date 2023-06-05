import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import {v4 as uuidv4} from 'uuid'

const Duties = ({data}) => {

  return (
    <div>
      {data.map((e)=>{
        return <div key={uuidv4()} className='job-desc'>  <MdKeyboardDoubleArrowRight className='job-icon' />   {e}</div>
      })}
    </div>
  )
}

export default Duties