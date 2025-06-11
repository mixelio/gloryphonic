import {useParams} from 'react-router-dom'

export const Profile = () => {
  const {id} = useParams()
  return (
    <div className='profilePage'>
      <h1 className='pageTitle'>Profile page of {`${id}`}</h1>
    </div>
  )
}