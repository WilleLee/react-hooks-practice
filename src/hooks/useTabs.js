import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  const [currentId, setCurrentId] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs.find((item) => item.id === currentId),
    changeItem: setCurrentId,
  };
};

export default useTabs;
