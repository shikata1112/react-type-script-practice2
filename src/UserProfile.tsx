import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <td>名前</td>
      <dd>{user.name}</dd>
      <td>趣味</td>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
