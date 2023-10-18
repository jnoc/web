exports.handler = async (event, context) => {
  const response = {
    statusCode: 418,
    body: "I'm a teapot",
    headers: {
      "Content-Type": "text/plain"
      "Set-Cookie": "teapot=true; Max-Age=3600; HttpOnly; Secure",
    },
  };
  return response;
};
