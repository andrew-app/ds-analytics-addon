import React from "react";
import { styled } from "@storybook/theming";
import { H1, H2 } from "@storybook/components";
import { BarChart } from "../components/bar-chart";

const TabWrapper = styled.div(({ theme }) => ({
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  marginLeft: 'auto',
  marginRight: "auto",
  position: "relative",
  height: "760px",
  width: "1280px"
});


interface TabContentProps {
  componentName: string;
}

export const Analytics: React.FC<TabContentProps> = ({ componentName }) => {


  return (
    <TabWrapper>
      <TabInner>
      {
        (componentName === '') ?
        <H2>No component selected</H2>:
        <>
        <H2>{componentName} Usage</H2>
        <BarChart componentName={componentName} />
        </>
      }
      </TabInner>
    </TabWrapper>
  );
}
