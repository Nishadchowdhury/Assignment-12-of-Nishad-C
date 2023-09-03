import { useEffect, useState } from "react";
import rootUrl from "./RootUrl";

const useTokenJWT = user => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;

    if (email) {
      const userForDB = {
        UserEmail: email,
      };

      const fetchData = async () => {
        try {
          const url = `${rootUrl}/Login/${email}`;
          await fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userForDB),
          })
            .then(res => res.json())
            .then(data => {
              const accessToken = data.token;
              localStorage.setItem("accessToken", accessToken);
              setToken(accessToken);
            });
        } catch (error) {
          console.error("Error fetching data (_Making JWT_):", error);
        }
      };

      fetchData();
    }
  }, [user]);

  return [token];
};

export default useTokenJWT;
