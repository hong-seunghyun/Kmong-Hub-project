
import Component from 'containers/settings/setting_default';
import NavigationTopLogin from "components/navigations/navigation_top_login";
import NavigationSide from "components/navigations/navigation_side";
const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
		<NavigationSide />
    <Component {...props} />
  </>
);

export default Page;
