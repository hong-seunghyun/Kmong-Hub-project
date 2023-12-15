import { useRouter } from "next/router";
import { decryptData, decryptDataOptions } from "../../asset/apis/verification";
import { useEffect } from "react";
import { useState } from "react";

const Component = () => {

  const router = useRouter();
  const [ mobileno, setMobileno ] = useState('');

  const postMobileno = () => {
    setMobileno(router.query.mobileno); 
    mobileno !== '' && window.opener.postMessage(mobileno, `http://localhost:3000${router.query.to}`);
    window.close();
  }

  useEffect(() => {
    if(!router.isReady) return;
    if(router.query == null || router.query.mobileno == '') return;
    postMobileno();
  });

	return(
    <></>
	)
}
export default Component;