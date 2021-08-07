import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMard = completed ? "[完]" : "[未]";
  return <p>{`${completeMard} ${title}(ユーザー:${userId})`}</p>;
};
