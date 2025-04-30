import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import app from "../firebase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (loggedInUser) => {
    // console.log(loggedInUser);
    setUser(loggedInUser);
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
