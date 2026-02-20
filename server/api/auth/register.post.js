export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "invalid params" }),
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Password do not match" }),
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://picsum.photos/200/200",
  };

  try {
    const user = await createUser(userData);
    return { body: userTransformer(user) };
  } catch (e) {
    if (e.code === "P2002") {
      return sendError(
        event,
        createError({
          statusCode: 409,
          statusMessage: "Username or email already exists",
        }),
      );
    }
    throw e;
  }
});
