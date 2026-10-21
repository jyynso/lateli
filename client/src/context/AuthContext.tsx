import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type User = { id: string; email: string; name?: string } | null;

const AuthContext = createContext<{
  user: User;
  setUser: (u: User) => void;
  loading: boolean;
  logout: () => void;
} | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

	const logout = async () => {
		await fetch('http://localhost:8000/api/logout', {
			method: 'POST',
			credentials: 'include',
		});
		setUser(null);
	}

  useEffect(() => {
    fetch('http://localhost:8000/api/user', { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}; 