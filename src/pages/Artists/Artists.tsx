import {Link, Outlet, useLocation} from 'react-router-dom'

export const Artists = () => {
  const location = useLocation()
  const isArtistPage = location.pathname.startsWith('/artists/')

  return (
    <>
      {isArtistPage ? 
        <Outlet /> : 
        <>
          <h1>Artists Page</h1>
          <br />
          <br />
          <Link to={'2'} >Artists 2</Link>
        </>
      }
    </>
  );
}