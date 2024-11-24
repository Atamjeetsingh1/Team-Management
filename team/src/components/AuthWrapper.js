import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return isAuthenticated ? children : null;
};

export default AuthWrapper;
