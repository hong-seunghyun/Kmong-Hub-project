export const setPhoneNumber = (phNo) => {
  let fixPhNo;
  if (phNo) {
    let cpPhNo = phNo.replace(/-/g, "");
    if (cpPhNo.length >= 11)
      fixPhNo =
        cpPhNo.substr(0, 3) +
        "-" +
        cpPhNo.substr(3, 4) +
        "-" +
        cpPhNo.substr(7, 4);
    else if (cpPhNo.length >= 10)
      fixPhNo =
        cpPhNo.substr(0, 3) +
        "-" +
        cpPhNo.substr(3, 3) +
        "-" +
        cpPhNo.substr(6, 4);
    else fixPhNo = cpPhNo;
  }
  return fixPhNo;
};
