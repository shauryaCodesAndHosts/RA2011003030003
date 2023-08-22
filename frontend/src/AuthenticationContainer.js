import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AuthenticationContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return isLogin ? (
    <LoginPage onSwitch={handleSwitch} />
  ) : (
    <SignupPage onSwitch={handleSwitch} />
  );
};

export default AuthenticationContainer;
