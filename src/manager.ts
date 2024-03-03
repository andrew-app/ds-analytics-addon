import { addons } from "@storybook/manager-api";
import { ADDON_ID, TAB_ID } from "./constants";
import { AnalyticsTab } from "./Tab";
import { Addon_TypesEnum } from "@storybook/types";
import { themes } from '@storybook/theming';
/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tab
  addons.add(TAB_ID, {
    type: Addon_TypesEnum.TAB,
    title: "Analytics",
    render: AnalyticsTab,
  });
});

addons.setConfig({
  theme: themes.light,
});