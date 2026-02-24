import UrlPattern from "url-pattern";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/auth/user/tweets"];

  const requestUrl = getRequestURL(event).pathname;

  const isHandleByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    return pattern.match(requestUrl);
  });

  if (!isHandleByThisMiddleware) {
    return;
  }

  const token = getRequestHeader(event, "authorization")?.split(" ")[1];

  const decoded = decodeAccessToken(token);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      }),
    );
  }

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
