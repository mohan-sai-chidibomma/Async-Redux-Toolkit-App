import { useSelector } from "react-redux";

import styles from "./users.module.css";

export default function Users() {
  const {
    data: users,
    isLoading,
    errorMessage,
  } = useSelector((state) => state.userSlice);

  let content,
    className = "";

  if (isLoading) {
    className = styles.loading;
    content = "Please wait...";
  } else if (errorMessage) {
    className = styles.error;
    content = errorMessage;
  } else if (users.length > 0) {
    content = (
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    );
  } else {
    className = styles.noUsers;
    content = "No Users";
  }

  return (
    <section className={styles.section}>
      <h2>Users Component</h2>
      <div className={className}>{content}</div>
    </section>
  );
}
