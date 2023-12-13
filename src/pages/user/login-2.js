import React from "react";
import Component from "/src/containers/user/login-2";
import NavigationTop from "/src/components/navigations/navigation_top";

const Page = ({ ...props }) => (
  <>
    <NavigationTop />
    <Component {...props} />
  </>
);

export default Page;
