import PageGenerator from "@/components/generator/PageGenerator";
import axios from "axios";

export default function Home({ pageData }) {
  return <PageGenerator pageData={pageData} />;
}

export async function getStaticProps() {
  try {
    const pageResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_SITE_MANAGER}/public/industry_template_data/${
        process.env.NEXT_PUBLIC_INDUSTRY_ID
      }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"home_page"}`
    );
    const pageData = pageResponse.data.data[0].value;

    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        error: "Failed to fetch data",
      },
    };
  }
}
