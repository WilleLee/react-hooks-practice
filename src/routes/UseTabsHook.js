import { tabs } from "../db";
import useTabs from "../hooks/useTabs";

const UseTabsHook = () => {
  const { currentItem, changeItem } = useTabs(0, tabs);
  return (
    <section>
      <h1>useTabs</h1>
      {tabs.map((tab) => (
        <div key={tab.id}>
          <button onClick={() => changeItem(tab.id)}>{tab.title}</button>
        </div>
      ))}
      {currentItem ? <p>{currentItem.content}</p> : null}
    </section>
  );
};

export default UseTabsHook;
