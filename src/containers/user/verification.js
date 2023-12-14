import { useRouter } from "next/router";
import { decryptData, decryptDataOptions } from "../../asset/apis/verification";
import { useEffect } from "react";
import { useState } from "react";

const Component = () => {

  const router = useRouter();
  const [ mobileno, setMobileno ] = useState('');

  const postMobileno = () => {
    setMobileno(router.query.mobileno);
    mobileno !== '' && window.opener.postMessage(mobileno, "http://localhost:3000/user/find_id");
  }

  useEffect(() => {
    if(!router.isReady) return;
    postMobileno();
  });

	return(
    <></>
	)
}
export default Component;