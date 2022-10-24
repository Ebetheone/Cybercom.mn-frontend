import { useCallback, useState } from "react";
import axios from "../../../api/axios-order";
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = useCallback(async (values) => {
    const username = values.target.username.value;
    const password = values.target.password.value;
    await axios.post("/login", { username, password }).then(({ data }) => {
      if (data.success) {
        localStorage.setItem("token", data.result);
        alert("success");
      } else {
        alert(data.result);
      }
    });
  }, []);

  const register = useCallback(async (values) => {
    const username = values.target.username.value;
    const password = values.target.password.value;
    if (!username) {
      alert("username oruulna uu");
      return;
    }
    if (!password) {
      alert("password oruulna uu");
      return;
    }
    setLoading(true);
    await axios
      .post("/register", {
        username: username,
        password: password,
      })
      .then(({ res }) => {
        if (res.success) {
          alert("Success");
          setLoading(false);
        } else {
          alert("Failure");
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return { login, loading, register };
};
