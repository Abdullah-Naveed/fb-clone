import React from "react";
import { Button } from "@material-ui/core";

export const Login = ({ handleSignIn }: any) => {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://seeklogo.com/images/F/facebook-icon-logo-03865A9BA2-seeklogo.com.png"
          alt=""
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/573bf9761bbee0b32db4e9ff/1488170391590-OE9IUIWNSOZLYFCT60S2/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/image-asset.png"
          alt=""
        />
      </div>

      <Button type="submit" onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
