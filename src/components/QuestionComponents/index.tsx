import QuestionInfo from "./QuestionInfo";
import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentType = {
  fe_id: string;
  type: string;
  isHidden: boolean;
  props: any;
};

export function getComponent(c: ComponentType) {
  const { fe_id, type, isHidden, props } = c;
  if (isHidden) return null;

  if (type == "questionRadio") {
    return <QuestionRadio props={props} fe_id={fe_id}></QuestionRadio>;
  }

  if (type == "questionInput") {
    return <QuestionInput props={props} fe_id={fe_id}></QuestionInput>;
  }

  if (type == "questionInfo") {
    return <QuestionInfo {...props}></QuestionInfo>;
  }

  if (type == "questionTitle") {
    return <QuestionTitle {...props}></QuestionTitle>;
  }

  if (type == "questionParagraph") {
    return <QuestionParagraph {...props}></QuestionParagraph>;
  }

  if (type == "questionTextarea") {
    return <QuestionTextarea fe_id={fe_id} props={props}></QuestionTextarea>;
  }

  if (type == "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={props}></QuestionCheckbox>;
  }

  return null;
}
