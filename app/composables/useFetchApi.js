export default (url, options = {}) => {
  const authToken = useState("auth_token");

  return $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${authToken.value}`,
    },
  });
};
