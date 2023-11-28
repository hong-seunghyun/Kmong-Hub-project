import React from "react";
import Component from "/src/containers/technology/index";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import NavigationSide from "/src/components/navigations/navigation_side";
const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
		<NavigationSide navigationNumber={1}/>
    <Component {...props} />
  </>
);

export default Page;