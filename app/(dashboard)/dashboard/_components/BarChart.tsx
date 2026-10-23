"use client";

import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartComp() {
    const chartConfig = {
        paid: { status: "Paid", color: "#6f6fe8" },
        sent: { status: "Sent", color: "#54c5ae" },
        overdue: { status: "Overdue", color: "#ff8f85" },
    };

    const chartData = [
        { status: "Paid", value: 186 },
        { status: "Sent", value: 305 },
        { status: "Overdue", value: 237 },
    ];

    return (
        <div className="rounded-xl pie">
            <ChartContainer config={chartConfig} className="p-3 h-full w-full ">
                <BarChart data={chartData}>
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

                    <Bar
                        dataKey="value"
                        fill="url(colorLine)"
                        radius={5}
                        width={20}
                    />
                    <YAxis
                        dataKey="value"
                        width={15}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        dataKey="status"
                        height={15}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip />
                </BarChart>
            </ChartContainer>
        </div>
    );
}
