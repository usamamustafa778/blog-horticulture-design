import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/pages/_app";
import Banner from "../containers/Banner";
import MostRecents from "../containers/MostRecents";
import ExpertInsights from "../containers/ExpertInsights";
import Skeleton from "./Skeleton";
import Story from "../containers/Story";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PageGenerator({ pageData, page }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const routeSegment = pathname === "/" ? "home" : pathname.split("/").pop();
  const page_structure = useContext(DataContext);

  const [sections, setSections] = useState();
  useEffect(() => {
    if (page_structure) {
      const page = page_structure?.find((item) => item.page === routeSegment);
      setSections(page?.sections);
      setLoading(false);
    }
  }, [page_structure]);

  const componentMapping = {
    Banner: Banner,
    RecentPosts: MostRecents,
    ExpertInsights: ExpertInsights,
    Story: Story,
  };

  const renderSection = (section) => {
    const Component = componentMapping[section.componentType];
    return Component ? <Component data={pageData} /> : null;
  };

  return (
    <>
      <Head>
        <title>Sitemanager First Template</title>
      </Head>

      {loading ? (
        <Skeleton />
      ) : (
        sections?.map((section, index) => (
          <div key={index} className="w-full">
            {section?.enabled && renderSection(section)}
          </div>
        ))
      )}
    </>
  );
}
