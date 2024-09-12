/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Story } from "./Story";
import { StoryCountArgs } from "./StoryCountArgs";
import { StoryFindManyArgs } from "./StoryFindManyArgs";
import { StoryFindUniqueArgs } from "./StoryFindUniqueArgs";
import { CreateStoryArgs } from "./CreateStoryArgs";
import { UpdateStoryArgs } from "./UpdateStoryArgs";
import { DeleteStoryArgs } from "./DeleteStoryArgs";
import { User } from "../../user/base/User";
import { StoryService } from "../story.service";
@graphql.Resolver(() => Story)
export class StoryResolverBase {
  constructor(protected readonly service: StoryService) {}

  async _storiesMeta(
    @graphql.Args() args: StoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Story])
  async stories(@graphql.Args() args: StoryFindManyArgs): Promise<Story[]> {
    return this.service.stories(args);
  }

  @graphql.Query(() => Story, { nullable: true })
  async story(
    @graphql.Args() args: StoryFindUniqueArgs
  ): Promise<Story | null> {
    const result = await this.service.story(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Story)
  async createStory(@graphql.Args() args: CreateStoryArgs): Promise<Story> {
    return await this.service.createStory({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Story)
  async updateStory(
    @graphql.Args() args: UpdateStoryArgs
  ): Promise<Story | null> {
    try {
      return await this.service.updateStory({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Story)
  async deleteStory(
    @graphql.Args() args: DeleteStoryArgs
  ): Promise<Story | null> {
    try {
      return await this.service.deleteStory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Story): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
