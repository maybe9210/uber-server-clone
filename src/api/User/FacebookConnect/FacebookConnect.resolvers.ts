import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import {
  FacebookConnectMutationArgs,
  FacebookConnectResponse,
} from "../../../types/graph";

const resolvers: Resolvers = {
  Mutation: {
    FacebookConnect: async (
      _,
      args: FacebookConnectMutationArgs
    ): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        const existingUser = await User.findOne({ fbId });
        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: "comming soon",
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e.message,
          token: null,
        };
      }

      return {
        ok: false,
        error: "error",
        token: null,
      };
    },
  },
};

export default resolvers;
