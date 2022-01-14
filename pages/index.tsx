import type { NextPage } from "next";
import Add from "../components/Add";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  return (
    <div className="container">
      <TodoList />
      <Add />
    </div>
  );
};

export default Home;
