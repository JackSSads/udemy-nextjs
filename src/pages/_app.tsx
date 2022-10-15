import '../styles/globals.css';
import { AppProvider } from "../data/context/AppContext";
import { AuthProvider } from "../data/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
};

export default MyApp;
