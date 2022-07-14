import "styles/globals.scss";
import { wrapper } from "store/store";

if (process.env.NEXT_PUBLIC_API_MOCKING === "development") {
  require("mocks");
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
