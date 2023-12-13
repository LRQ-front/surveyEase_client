import React, { CSSProperties, FC } from "react";

//这个组件不用提交相关信息，所以不用fe_id
type PropsType = {
  text: string;
  isCenter?: boolean;
};

const QuestionParagraph: FC<PropsType> = ({ text, isCenter }) => {
  const style: CSSProperties = {};
  if (isCenter) style.textAlign = "center";

  const textList = text.split("\n");
  return (
    <p style={style}>
      {textList.map((t, index) => {
        return (
          <span key={index}>
            {index > 0 && <br></br>}
            {t}
          </span>
        );
      })}
    </p>
  );
};

export default QuestionParagraph;
