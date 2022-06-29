import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CoreLayout from '../components/CoreLayout/CoreLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return <CoreLayout content={<Component {...pageProps} />} />;
}

export default MyApp;
