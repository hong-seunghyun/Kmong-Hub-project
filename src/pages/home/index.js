import Component from "/src/containers/home/index";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import NavigationSide from "/src/components/navigations/navigation_side";
const Page = () => (
  <>
    <NavigationTopLogin />
    <NavigationSide />
    <Component />
  </>
);

export default Page;
