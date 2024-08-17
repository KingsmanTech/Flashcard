import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ClerkProvider publishableKey="pk_test_Z29yZ2VvdXMtZ3JpenpseS0xNC5jbGVyay5hY2NvdW50cy5kZXYk">
    <Component {...pageProps} />
  </ClerkProvider>
);

export default MyApp;
