import React from "react";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import AddResearcher from "/src/containers/researcher/add";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
		
    <AddResearcher {...props} />
  </>
);

export default Page;
