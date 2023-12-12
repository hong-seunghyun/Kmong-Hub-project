import Component from "/src/containers/home/index";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import NavigationSide from "/src/components/navigations/navigation_side";
import { getUserInfo } from "../../asset/apis/siteApis";
import { useEffect } from "react";

const Page = () => (
  <>
    <NavigationTopLogin />
    <NavigationSide />
    <Component />
  </>
);
export async function getServerSideProps() {
  let auth;
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    auth = `Bearer ${token}`;
  })
  let userData;
  try {
    await getUserInfo(auth).then(res => {
      console.log(res);
      userData = res;
    }).catch(err => {
      console.log(err);
    });
    return {
      props: {
        userData,
      },
    };
  } catch(error) {
    console.log(error);
    return {
      props: {
        userData: null,
        error: "Error fetching data.",
      }
    }
  }
}

export default Page;
