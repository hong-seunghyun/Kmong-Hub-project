import React from "react";
import Component from "/src/containers/user/find_pw_1";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
    <Component {...props} />
  </>
);

export default Page;
