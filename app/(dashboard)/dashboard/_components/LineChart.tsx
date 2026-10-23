"use client";

import { ChartContainer } from "@/components/ui/chart";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export default function LineChartComp() {
    const chartConfig = {
        revenue: {
            label: "Revenue",
            color: "#df6035",
        },
    };

    const chartData = [
        { month: "Jan", revenue: 186 },
        { month: "Feb", revenue: 305 },
        { month: "Mar", revenue: 237 },
        { month: "Apr", revenue: 73 },
        { month: "May", revenue: 209 },
        { month: "Jun", revenue: 214 },
        { month: "Jul", revenue: 321 },
    ];

    return (
        <div className="rounded-xl line-chart">
            <ChartContainer config={chartConfig} className="p-3 h-full w-full">
                <AreaChart accessibilityLayer data={chartData}>
                    <CartesianGrid strokeDasharray="3,3" />
                    <defs>
                        <linearGradient
                            id="colorLine"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                        >
                            <stop
                                offset="5%"
                                stopColor="var(--color-secondary)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-secondary)"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        fill="url(#colorLine)"
                    />
                    <Tooltip />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        height={15}
                        axisLine={false}
                    />
                    <YAxis
                        dataKey="revenue"
                        tickLine={false}
                        width={15}
                        axisLine={false}
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
}
