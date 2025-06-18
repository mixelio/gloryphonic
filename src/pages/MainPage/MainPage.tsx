import { JoinSection } from '../../components/JoinSection/JoinSection';
import { useEffect, useState } from 'react';

export const MainPage = () => {
  const [checkingFont, setCheckingFont] = useState<
    'Montserrat' | 'Days' | 'Russo' | 'Prosto' | 'Raleway' | ''
  >('');

  useEffect(() => {
    if (checkingFont) {
      document.body.className = 'body';
      document.body.classList.add(checkingFont);
    }
  }, [checkingFont]);

  return (
    <>
      <h1 className="pageTitle">Gloryphonic main page</h1>
      <JoinSection />
      <div className="" style={{ display: 'flex', gap: '20px', fontSize: '32px' }}>
        <button
          onClick={() => {
            setCheckingFont('Montserrat');
          }}
          style={{
            fontFamily: 'Montserrat',
            fontSize: '32px',
          }}
          className="MontserratBtn"
        >
          Montserrat
        </button>
        <button
          onClick={() => {
            setCheckingFont('Days');
          }}
          style={{
            fontFamily: 'Days One',
            fontSize: '32px',
          }}
          className={'DaysBtn'}
        >
          Days One
        </button>
        <button
          onClick={() => {
            setCheckingFont('Prosto');
          }}
          style={{
            fontFamily: 'Prosto One',
            fontSize: '32px',
          }}
          className={'ProstoBtn'}
        >
          Prosto One
        </button>
        <button
          onClick={() => {
            setCheckingFont('Russo');
          }}
          style={{
            fontFamily: 'Russo',
            fontSize: '32px',
          }}
          className={'RussoBtn'}
        >
          Russo One
        </button>
        <button
          onClick={() => {
            setCheckingFont('Raleway');
          }}
          style={{
            fontFamily: 'Raleway',
            fontSize: '32px',
          }}
          className={'RalewayBtn'}
        >
          Raleway
        </button>
      </div>
    </>
  );
};
