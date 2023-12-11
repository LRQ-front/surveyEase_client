import Image from "next/image";
import styles from "../page.module.css";
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";

export default function Home() {
  return (
    <main className={styles.main}>
      <QuestionInput
        fe_id="c1"
        props={{ title: "你的名字", placeholder: "请输入你的姓名" }}
      ></QuestionInput>
      <QuestionRadio
        fe_id="c2"
        props={{
          title: "性别",
          options: [
            { value: "male", text: "男" },
            { value: "female", text: "女" },
          ],
          isVertical: false,
          value: "male",
        }}
      ></QuestionRadio>
    </main>
  );
}
