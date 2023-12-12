import React from "react";
import Component from "/src/containers/user/waiting_sign_up";
import NavigationTopLogin from "/src/components/navigations/navigation_top";

const Page = ({ ...props }) => (
  <>
		<NavigationTopLogin />
    <Component {...props} />
  </>
);

export default Page;
