import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import mockData from "../mocks/data";
type BarChartProps = {
    componentName: string
}

export const BarChart: React.FC<BarChartProps> = ({ componentName }) => {
    return(
        <ResponsiveBar
        data={mockData[componentName as keyof typeof mockData]}
        layout="horizontal"
        indexBy="product"
        keys={['count']}
        margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={"#1f2142"}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Product',
            legendPosition: 'middle',
            legendOffset: -80,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={"#ffffff"}
        role="application"
        ariaLabel="Nivo bar chart demo"
    />
    )
};