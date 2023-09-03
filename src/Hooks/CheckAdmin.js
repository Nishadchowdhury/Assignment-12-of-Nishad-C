import rootUrl from "./RootUrl";

export default async function checkAdmin(email) {
  let user = {};

  if (user?.email === email) {
    return user;
  }

  if (email) {
    await fetch(`${rootUrl}/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        user = data;
      });
  }

  return user;
}
