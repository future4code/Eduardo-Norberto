import { PostDB } from "../../../data/postDataBase";
import { PostWithUser } from "../../entities/post";
import { NotFoundError } from "../../error/NotFoundError";
import { InvalidParameterError } from "../../error/InvalidParameterError";


export class GetPostByTypeUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByTypeUCInput): Promise<PostWithUser[]> {

    if (input.type === "") {
      throw new InvalidParameterError("Type must not be an empty string");
    }

    const post = await this.db.getPostByType(input.type);

    if (post === undefined) {
      throw new NotFoundError("Post not found");
    }

    return (post)

  }
}

export interface GetPostByTypeUCInput {
  type: string;
}