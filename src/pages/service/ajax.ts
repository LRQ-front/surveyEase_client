//mock地址
const HOST = "http://localhost:3001";

export async function get(url: string) {
  const URL = `${HOST}${url}`;
  const res = await fetch(URL);
  return res.json();
}

export async function post(url: string, body: any) {
  const URL = `${HOST}${url}`;

  const res = await fetch(URL, {
    method: "post",
    body: JSON.stringify(body),
  });

  return res.json();
}
