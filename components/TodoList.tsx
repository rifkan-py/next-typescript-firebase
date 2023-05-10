import { collection, getDocs } from "firebase/firestore";
import { NextPage } from "next";
import { useEffect } from "react";
import { db } from "../firebase/firebase";
import styles from "../styles/TodoList.module.css";

const TodoList: NextPage = () => {
  useEffect(() => {
    async function getBooks(db: any) {
      const booksCollection = collection(db, "books");
      const citiesSnapshot = await getDocs(booksCollection);
      const cityList = citiesSnapshot.docs.map((doc) => doc.data());
      return cityList;
    }
  }, []);
  return (
    <div className={styles.card}>
      <h2>Mohamed Rifkan</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta
        ipsam magni ullam 
      </p>
      <button className="btn btn-primary">Delete</button>
      <button className="btn btn-danger">Edit</button>
    </div>
  );
};

export default TodoList;
