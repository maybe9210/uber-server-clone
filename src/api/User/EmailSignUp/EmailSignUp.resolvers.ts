import { EmailSignUpMutationArgs, EmailSignUpResponse } from "src/types/graph";
import User from "../../../entities/User";
import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: EmailSignUpMutationArgs
    ): Promise<EmailSignUpResponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "You should log in instead",
            token: null,
          };
        } else {
          // const newUser = await User.create({ ...args }).save();
          await User.create({ ...args }).save();
          return {
            ok: true,
            error: null,
            token: "Comming soon",
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
