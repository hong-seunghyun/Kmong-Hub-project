import React from "react";
import Component from "/src/containers/user/login-2";
import NavigationTopLogin from "/src/components/navigations/navigation_top";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
    <Component {...props} />
  </>
);

export default Page;
