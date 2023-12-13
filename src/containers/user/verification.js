import { useRouter } from "next/router";
import { decryptData, decryptDataOptions } from "../../asset/apis/verification";

const Component = () => {

  const router = useRouter();
  const { mobileno } = router.query;

  const verificate = async () => {
    window.opener.postMessage(mobileno, "http://localhost:3000/user/find_id");
  }

  verificate();
  window.close();

	return(
    <></>
	)
}
export default Component;