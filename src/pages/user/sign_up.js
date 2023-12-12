import React from "react";
import Component from "/src/containers/user/sign_up";
import NavigationTop from "/src/components/navigations/navigation_top";

const Page = ({ ...props }) => (
  <>
    <NavigationTop />
    <Component {...props} />
  </>
);

export default Page;
