// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "../service/answer";

function genAnswerInfo(reqBody: any) {
  const answerList: any[] = [];

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentList: key,
      value: reqBody[key],
    });
  });

  return {
    questionId: reqBody.questionId,
    answerList,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, message: "method错误" });
  }

  const answerInfo = genAnswerInfo(req.body);

  console.log(answerInfo);

  try {
    //发送数据到mock
    const data = await postAnswer(answerInfo);
    console.log(data);

    if (data.errno == 0) {
      res.redirect("/success");
    } else {
      res.redirect("/fail");
    }
  } catch (err) {
    res.redirect("/fail");
  }
}
