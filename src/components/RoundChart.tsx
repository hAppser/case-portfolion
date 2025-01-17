"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartConfig = {
  completedRate: {
    label: "completedRate",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type TProps = {
  progress: number;
};

export function RoundChart({ progress }: TProps) {
  const chartData = [{ completedRate: 75, fill: "var(--color-safari)" }];
  return (
    <ChartContainer config={chartConfig} className="w-20 h-20 aspect-square ">
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={(360 * progress) / 100}
        innerRadius={32}
        height={56}
        width={56}
        outerRadius={42}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
        />
        <RadialBar dataKey="completedRate" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground font-bold"
                    >
                      {chartData[0].completedRate.toLocaleString()}%
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
