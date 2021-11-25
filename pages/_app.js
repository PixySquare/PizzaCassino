/* eslint-disable react/prop-types */
import '../styles/globals.css';
import React from 'react';
import LoadingScreen from '../components/loadingScreen';


function MyApp({Component, pageProps}) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
export default MyApp;
