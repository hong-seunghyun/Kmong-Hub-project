
import Component from "/src/containers/marketing/news_setting";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
		
    <Component {...props} />
  </>
);

export default Page;
