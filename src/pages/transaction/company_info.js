
import Component from "/src/containers/transaction/company_info";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import NavigationSide from "/src/components/navigations/navigation_side";
const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
		<NavigationSide />
    <Component {...props} />
  </>
);

export default Page;
