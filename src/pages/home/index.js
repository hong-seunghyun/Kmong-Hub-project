
import Component from "/src/containers/home/index";
import NavigationTopLogin from "/src/components/navigations/navigation_top_login";
import NavigationSide from "/src/components/navigations/navigation_side";
import { getUserInfo } from "../../asset/apis/siteApis";
const Page = ({ userData }) => (
  <>
		<NavigationTopLogin />
		<NavigationSide />
    <Component userData={userData} />
  </>
);

export async function getServerSideProps() {

  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  let auth = `Bearer ${accessToken}`;
  console.log(auth);
  console.log(auth);
  console.log(auth);
  console.log(auth);
  console.log(auth);

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
