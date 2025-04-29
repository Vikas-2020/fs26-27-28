import Header from "./components/Header";
import Footer from "./components/Footer";
import { initData } from "./initData";
import { useState } from "react";
import List from "./List";

function Main() {
  const [data, setData] = useState(initData);
  const [isActiveListId, setIsActiveListId] = useState(null);

  return (
    <>
      <Header />
      <div className="lists flex items-start gap-4 h-[calc(100vh-40px)] py-8 px-3">
        {data.map((obj) => {
          return (
            <List
              key={obj.id}
              obj={obj}
              isActive={isActiveListId === obj.id}
              setIsActiveListId={setIsActiveListId}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Main;
