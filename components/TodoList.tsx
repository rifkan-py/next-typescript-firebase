import { collection, getDocs } from "firebase/firestore";
import { NextPage } from "next";
import { useEffect } from "react";
import { db } from "../firebase/firebase";

const TodoList: NextPage = () => {
  useEffect(() => {
    async function getBooks(db: any) {
      const booksCollection = collection(db, "books");
      const citiesSnapshot = await getDocs(booksCollection);
      const cityList = citiesSnapshot.docs.map((doc) => doc.data());
      return cityList;
    }
  }, []);
  return <div></div>;
};

export default TodoList;
