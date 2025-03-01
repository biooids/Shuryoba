const userLogIn = (req, res, next) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    console.log("There was an error");
  }
};
const userSignUp = (req, res, next) => {};
const userLogOut = (req, res, next) => {};
const deleteAccount = (req, res, next) => {};
