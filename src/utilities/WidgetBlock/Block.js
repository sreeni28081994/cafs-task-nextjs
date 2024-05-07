import HomeBanner from "@/widgets/HomeBanner";
import HomeAbout from "@/widgets/HomeAbout";
import HomeWhoWeCare from "@/widgets/HomeWhoWeCare";
import HomeServe from "@/widgets/HomeServe";
import HomeFeatures from "@/widgets/HomeFeatures/HomeFeatures";
import HomeClients from "@/widgets/HomeClients";
import HomeTestimonials from "@/widgets/HomeTestimonials/HomeTestimonials";
import HomeLocations from "@/widgets/HomeLocations";
import HomeInsights from "@/widgets/HomeInsights/HomeInsights";



const setComponent = (widget) => {
  const components = {
    HomeBanner: HomeBanner,
    HomeAbout: HomeAbout,
    HomeWhoWeCare:HomeWhoWeCare,
    HomeServe: HomeServe,
    HomeFeatures:HomeFeatures,
    HomeClients:HomeClients,
    HomeTestimonials:HomeTestimonials,
    HomeLocations: HomeLocations,
    HomeInsights:HomeInsights

  };
  return components[widget.widget_type] || components["default"];
};
const Block = ({
  widget,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
    />
  );
};

export default Block;
