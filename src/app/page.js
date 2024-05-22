import WidgetBlocks from "@/utilities/WidgetBlock";
import {data} from "src/api/staticData/db";

// const fsp = require('fs').promises

export async function generateMetadata({ params }) {
  // const data = await nextFetch(`api/general/homepage`);

  return {
    title: data?.homepage?.data?.seo?.metaTitle,
    description: data?.homepage?.data?.seo?.metaDescription,
    openGraph: {
      images: data?.homepage?.data?.seo?.metaImage?.url?.url,
    },
  };
}

const HomePage = async() => {
  return (
    <>
     <main className="isHome ">
      {data && (
          <WidgetBlocks widgets={data?.homepage?.data?.widgets}></WidgetBlocks>
      )}
    </main>
    </>
  );
};

export default HomePage;
