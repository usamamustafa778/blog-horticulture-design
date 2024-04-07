// _app.js
import React, { useEffect, useState } from "react";
import App from "next/app";
import axios from "axios";
import "@/styles/globals.css";
import Navbar from "@/components/containers/Navbar";
import Footer from "@/components/containers/Footer";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const DataContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(null);
  const [navData, setNavData] = useState(null);

  useEffect(() => {
    fetchData();
    fetchNavData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_SITE_MANAGER
        }/public/industry_template_data/${
          process.env.NEXT_PUBLIC_INDUSTRY_ID
        }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"template_structure"}`
      );
      setData(response.data.data[0].value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchNavData() {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_SITE_MANAGER
        }/public/industry_template_data/${
          process.env.NEXT_PUBLIC_INDUSTRY_ID
        }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"NavMenu"}`
      );
      setNavData(response.data.data[0].value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <DataContext.Provider value={data}>
      <div className={roboto.className}>
        <Navbar menu_list={navData} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </DataContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
