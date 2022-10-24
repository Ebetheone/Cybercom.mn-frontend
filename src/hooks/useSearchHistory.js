import { useCallback, useEffect, useState } from "react";

export const useSearchHistory = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    const localStorageCheck = JSON.parse(localStorage.getItem("history"));
    localStorageCheck && setData(localStorageCheck);
  }, [setData]);

  useEffect(() => {
    getData();
  }, [getData]);

  const addToHistory = useCallback(
    ({ history }) => {
      const datas = [...data];
      if (datas.length >= 10) {
        datas.pop();
        let dataa = [history, ...datas];
        setData(dataa);
        localStorage.setItem("history", JSON.stringify(dataa));
      } else {
        let dataa = [...datas, history];
        setData(dataa);
        localStorage.setItem("history", JSON.stringify(dataa));
      }
    },
    [data]
  );
  return { addToHistory, data };
};
