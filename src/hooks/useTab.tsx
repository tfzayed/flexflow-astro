import { useState } from "react";

export function useTabs({
  tabs,
  initialTabId,
  onChange,
}: {
  tabs: any;
  initialTabId: number;
  onChange: (id: number) => void;
}) {
  const [selectedTabIndex, setSelectedTab] = useState(() => {
    const indexOfInitialTab = tabs.findIndex(
      (tab: any, i: number) => i === initialTabId,
    );
    return indexOfInitialTab === -1 ? 0 : indexOfInitialTab;
  });

  return {
    tabs,
    selectedTab: tabs[selectedTabIndex],
    selectedTabIndex,
    setSelectedTab,
    onChange,
  };
}
