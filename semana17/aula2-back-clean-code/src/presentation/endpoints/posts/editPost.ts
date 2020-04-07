import { Request, Response } from "express";
import { EditPostUC } from "../../../business/usecase/posts/editPost";
import { PostDB } from "../../../data/postDataBase";

export const editPostEndpoint = async (req: Request, res: Response) => {
  try{
    const editPostUC = new EditPostUC(new PostDB());
    const result = await editPostUC.execute({
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      id: req.body.id,
      image: req.body.image
    })

    res.status(200).send(result);
  }catch (err){
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
