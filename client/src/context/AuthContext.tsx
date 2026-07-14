import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type User = { id: string; email: string; name?: string } | null;

const AuthContext = createContext<{
  user: User;
  setUser: (u: User) => void;
  loading: boolean;
} | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/auth/userWho', { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};