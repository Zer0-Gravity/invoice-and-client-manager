import Topbar from "@/components/custom-ui/Topbar";
import LineChartComp from "./_components/LineChart";
import BarChartComp from "./_components/BarChart";

export default async function Dashboard() {
    return (
        <div className="flex flex-1 min-h-0 flex-col rounded-lg bg-base">
            <Topbar />

            <section className="p-5 flex h-full justify-center overflow-y-auto">
                <div className="dash-grid h-full">
                    <LineChartComp />
                    <BarChartComp />
                    <div className="client">
                        <p className="text-muted-foreground">Client</p>
                        <p className="font-extrabold text-[25px]">134</p>
                    </div>
                    <div className="draft">
                        <p className="text-muted-foreground">Draft</p>
                        <p className="font-extrabold text-[25px]">134</p>
                    </div>
                    <div className="revenue">
                        <p className="text-muted-foreground">
                            Revenue this month
                        </p>
                        <p className="font-extrabold text-[25px]">134</p>
                    </div>
                    <div className="attention h-full min-h-125 overflow-hidden">
                        <p className="font-medium mb-3">Need Attention</p>

                        <div className="overflow-y-auto min-h-0 h-full flex flex-col gap-2 scroll-none">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                                (key) => (
                                    <div
                                        key={key}
                                        className="h-15 flex justify-between items-center bg-base p-2 rounded-md"
                                    >
                                        <p className="font-bold">Acme Corp</p>
                                        <p className="text-muted-foreground">
                                            Due 24 Oct 2026
                                        </p>
                                        <p className="font-bold">2345.0</p>
                                        <p
                                            style={{
                                                backgroundColor: `#df603550`,
                                                fontSize: "14px",
                                                padding: "8px",
                                                borderColor: "#df6035",
                                                color: "#df6035",
                                            }}
                                            className="rounded-full border"
                                        >
                                            Pending
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="top h-full min-h-125 overflow-hidden">
                        <p className="font-medium mb-2">Top Client</p>

                        <div className="overflow-y-auto min-h-0 h-full scroll-none flex flex-col gap-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                                (key) => (
                                    <div
                                        key={key}
                                        className="h-15 flex justify-between bg-base p-2 items-center rounded-md"
                                    >
                                        <div>
                                            <h1 className="font-bold">
                                                Acme Corp
                                            </h1>
                                            <p className="text-muted-foreground text-[14px]">
                                                acme@mail.com
                                            </p>
                                        </div>
                                        <p className="font-bold">4,345,23</p>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
