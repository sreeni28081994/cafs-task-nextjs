import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";

const fsp = require('fs').promises

export async function generateMetadata({ params }) {
  // const data = await nextFetch(`api/general/homepage`);

  const file_data = await fsp.readFile('./src/api/staticData/db.json');
  const json_data = JSON.parse(file_data);
  const data = json_data['homepage'];
  return {
    title: data?.data?.seo?.metaTitle,
    description: data?.data?.seo?.metaDescription,
    openGraph: {
      images: data?.data?.seo?.metaImage?.url?.url,
    },
  };
}

const HomePage = async() => {
  // const data = await nextFetch("api/general/homepage"); 
  const file_data = await fsp.readFile('./src/api/staticData/db.json');
  const json_data = JSON.parse(file_data);
  const data = json_data['homepage'];
  return (
    <>
     <main className="isHome">
      {data && (
          <WidgetBlocks widgets={data?.data?.widgets}></WidgetBlocks>
      )}
    </main>
    </>
  );
};

export default HomePage;
