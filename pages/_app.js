// _app.js
import React, { useEffect, useState } from "react";
import App from "next/app";
import axios from "axios";
import "@/styles/globals.css";
import Navbar from "@/components/containers/Navbar";
import Footer from "@/components/containers/Footer";

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
      const parsedData = JSON.parse(response.data.data[0].value);
      setData(parsedData);
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
        }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"nav_menu"}`
      );
      const parsedData = JSON.parse(response.data.data[0].value);
      setNavData(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <DataContext.Provider value={data}>
      <Navbar menu_list={navData} />
      <Component {...pageProps} />
      <Footer />
    </DataContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
