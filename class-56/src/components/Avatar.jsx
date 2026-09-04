import {getImgUrl} from './utils'

export default function Avatar({size,person}) {
  return (
    <>
    <img 
      className='avatar'
      src={getImgUrl(person)}
      alt={person.name} 
      width={size}
      height={size}
    />
    </>
  )
}
