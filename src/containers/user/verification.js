import { useRouter } from "next/router";
import { decryptData, decryptDataOptions } from "../../asset/apis/verification";

const Component = () => {

  const router = useRouter();

  const { token_version_id, enc_data, integrity_value } = router.query;
  console.log(token_version_id);
  console.log(enc_data);
  console.log(integrity_value);

  const verificate = async () => { 
    await decryptData({token_version_id, enc_data, integrity_value})
    .then(res => {
      console.log(res);
    }).catch(err => {
      alert(err);
    });
  }

  verificate();

	return(
    <></>
	)
}
export default Component;