class UserService {
  signup(user: Record<string, any>): Record<string, any> {
    const { firstName, lastName, email } = user;
    return {
      firstName,
      lastName,
      completeName: `${firstName} ${lastName}`,
      email,
    };
  }
}

export default UserService;
