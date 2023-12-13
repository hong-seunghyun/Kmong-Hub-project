import Component from "/src/containers/contents/index";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import NavigationSide from "/src/components/navigations/navigation_side";
const Page = ({ ...props }) => (
  <>
    <NavigationTopLogin />
    <NavigationSide navigationNumber={0} />
    <Component {...props} />
  </>
);

export default Page;
