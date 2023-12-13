import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./QuestionCheckbox.module.scss";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    isVertical: boolean;
    list: Array<{ text: string; value: string; checked: boolean }>;
  };
};

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, list } = props;

  const [checkedValue, setCheckedValue] = useState<string[]>([]);

  useEffect(() => {
    list.forEach((l) => {
      const { value, checked } = l;
      if (checked) {
        setCheckedValue((checkedValue) => checkedValue.concat(value));
      }
    });
  }, [list]);

  //收集多选值
  function toggleChecked(value: string) {
    if (checkedValue.includes(value)) {
      setCheckedValue(checkedValue.filter((val) => val != value));
    } else {
      setCheckedValue(checkedValue.concat(value));
    }
  }

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={checkedValue}></input>
      <ul className={styles.list}>
        {list.map((item) => {
          const { text, value, checked } = item;

          let liClassName;
          if (isVertical) liClassName = styles.verticalItem;
          else liClassName = styles.horizontalItem;

          return (
            <li key={value} className={liClassName}>
              <label>
                <input
                  type="checkbox"
                  value={value}
                  checked={checkedValue.includes(value)}
                  onChange={() => toggleChecked(value)}
                ></input>
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionCheckbox;
