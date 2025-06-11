import {Link, Outlet, useLocation} from 'react-router-dom'

export const Artists = () => {
  const location = useLocation()
  const isArtistPage = location.pathname.startsWith('/artists/')

  return (
    <div className='artistsPage'>
      {isArtistPage ? 
        <Outlet /> : 
        <>
          <h1 className='pageTitle'>Artists Page</h1>

          <Link to={'2'} >Artists 2</Link>
        </>
      }
    </div>
  );
}