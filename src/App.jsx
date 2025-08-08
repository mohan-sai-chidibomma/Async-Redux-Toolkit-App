import Counter from "./components/Counter";
import Users from "./components/Users";

import styles from "./app.module.css";

function App() {
  return (
    <main className={styles.main}>
      <Counter />
      <Users />
    </main>
  );
}

export default App;
