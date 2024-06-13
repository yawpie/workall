module.exports = (
  condition = true,
  message,
  redirectUrl = null,
  data = null
) => {
  return {
    success: condition ? true : false,
    message: message,
    data: data ? data : null,
    redirectUrl: redirectUrl ? redirectUrl : null,
  };
};
