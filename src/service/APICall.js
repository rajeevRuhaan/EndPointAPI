const login = "https://api.supermetrics.com/assignment/register";
const clientID = "ju16a6m81mhid5ue1z3v2g0uh";
const post = "https://api.supermetrics.com/assignment/posts";

export const user = (name, email) => {
  let paramsObj = { name: name, email: email, client_id: clientID };
  const params = new URLSearchParams(paramsObj);
  return fetch(login, {
    method: "POST",
    body: params,
  });
};

export const postResponse = async (token) => {
  return fetch(`${post}?sl_token=${token}`);
};
