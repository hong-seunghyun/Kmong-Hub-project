
import Component from "/src/containers/transaction/company_add";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
		
    <Component {...props} />
  </>
);

export default Page;
