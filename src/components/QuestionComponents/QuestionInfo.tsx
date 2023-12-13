import React, { FC } from "react";

//这个组件不用提交相关信息，所以不用fe_id
type PropsType = {
  title: string;
  desc?: string;
};

const QuestionInfo: FC<PropsType> = ({ title, desc }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default QuestionInfo;
