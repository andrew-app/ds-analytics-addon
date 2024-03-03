import React from "react";
import { useParameter,useStorybookApi } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";
import { Analytics } from "./feature/analytics/routes/analytics";
import { styled } from "@storybook/theming";

interface TabProps {
  active: boolean;
}

export const AnalyticsTab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const componentData = useParameter<string>(PARAM_KEY, "");

  return active ? <Analytics componentName={componentData} /> : null;
};
