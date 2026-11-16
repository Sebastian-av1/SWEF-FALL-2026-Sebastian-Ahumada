import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [message, setMessage] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    // The server decides if this token is valid.
    fetch("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then(async (res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
          return;
        }
        const data = await res.json();
        setMessage(data.message);
      })
      .catch(() => setMessage("Could not reach the server"));
  }, [navigate]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div style={{ maxWidth: 480, margin: "80px auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <div style={{ fontSize: 64 }}>🎉</div>
      <h1>{message}</h1>
      <p>You are logged in. This page checked your token with the backend.</p>
      <button onClick={logout} style={{ padding: "8px 16px" }}>Log out</button>
    </div>
  );
}
