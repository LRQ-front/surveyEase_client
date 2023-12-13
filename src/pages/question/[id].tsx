import Image from "next/image";
import Head from "next/head";
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";

import styles from "../../styles/Question.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { getQuestionById } from "../service/question";
import { getComponent } from "@/components/QuestionComponents";

type PropsType = {
  errno: number;
  data?: {
    id: string;
    title: string;
    desc?: string;
    js?: string;
    css?: string;
    isPublished: boolean;
    isDeleted: boolean;
    componentList: Array<any>;
  };
  msg?: string;
};

export default function Question(props: PropsType) {
  const { errno, data, msg = "" } = props;

  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    isPublished,
    isDeleted,
    componentList,
    desc = "",
    title = "",
    id,
  } = data || {};

  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷已经删除</p>
      </PageWrapper>
    );
  }

  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷未发布</p>
      </PageWrapper>
    );
  }

  const genComponentList = (
    <>
      {componentList?.map((c) => {
        return (
          <div key={c["fe_id"]} className={styles.componentWrapper}>
            {getComponent(c)}
          </div>
        );
      })}
    </>
  );

  return (
    <PageWrapper title="问卷">
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={id} />
        {genComponentList}
        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;

  //获取问卷数据
  const data = await getQuestionById(id);

  return {
    props: data,
  };
}
