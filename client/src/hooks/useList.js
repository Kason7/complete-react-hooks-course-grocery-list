import { useState } from 'react';

function useList(init) {
  const [list, setList] = useState(init);

  return {
    list,
    removeItem(index) {
      const listCopy = [...list];
      listCopy.splice(index, 1);
      setList(listCopy);
    },
    removeUnhealthy() {
      const listCopy = [...list];
      const filteredList = listCopy.filter((v) => v.calories < 50);
      setList(filteredList);
    },
    saveNameHandler(event, index) {
      if (event.which === 13 || event.keyCode === 13) {
        const copyList = [...list];
        copyList[index].name = event.target.value;
        setList(copyList);
      }
    },
  };
}

export default useList;
