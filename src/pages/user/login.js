import React from "react";
import Component from "/src/containers/user/login";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
    <Component {...props} />
  </>
);

export default Page;
