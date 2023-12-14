
const onClickCertButton = () => {
  e.preventDefault()

  const left = screen.width / 2 - 500 / 2
  const top = screen.height / 2 - 800 / 2
  const option = `menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`

  const returnUrl = `${PASS_API_URL}/nice/decrypt/data`
  const redirectUrl = `${BASE_URL}/account/pass`

  window.open(
    `${PASS_API_URL}/nice/encrypt/data?` +
    new URLSearchParams({
      returnUrl,
      redirectUrl,
    }),
    'nicePopup',
    option,
  )

  // @ts-ignore
  window.update = async () => {
    // @ts-ignore
    if (window.certResult) {
      // @ts-ignore
      const res = await fetch(`/api/account/phone/duplicate?phone=${window.certResult.mobileno}`)
      if (res.ok) {
        const body = await res.json()
        if (body.isDuplicate) {
          openDefaultModal(['이미 사용 중인 휴대폰 번호에요.'])
        } else {
          // @ts-ignore
          certResult.value = window.certResult
        }
      } else {
        openDefaultModal(['일시적인 오류가 발생했습니다.', '잠시 후 다시 시도해 주세요.'])
      }
    } else {
      openDefaultModal(['일시적인 오류가 발생했습니다.', '잠시 후 다시 시도해 주세요.'])
    }
  }
}