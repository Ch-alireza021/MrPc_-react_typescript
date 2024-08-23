// import { faker } from '@faker-js/faker';
import { Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import DashboardWidgetSummary from "./components/DashboardwidgetSummary";
import { dashboard_widget_summary_Data as summaryData } from "../../../config";
import { useId } from "react";
import { CircularChart, LinerChart } from "../../../components";
import { AnalyticsOrderTimeline } from "./components";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../services";

const fakeData = [
  { x: new Date("2023-01-01").getTime(), y: 1200000 },
  { x: new Date("2023-01-02").getTime(), y: 1300000 },
  { x: new Date("2023-01-03").getTime(), y: 1250000 },
  { x: new Date("2023-01-04").getTime(), y: 1350000 },
  { x: new Date("2023-01-05").getTime(), y: 1400000 },
  { x: new Date("2023-01-06").getTime(), y: 1450000 },
  { x: new Date("2023-01-07").getTime(), y: 1500000 },
  { x: new Date("2023-01-08").getTime(), y: 1550000 },
  { x: new Date("2023-01-09").getTime(), y: 1600000 },
  { x: new Date("2023-01-10").getTime(), y: 1650000 },
];

// ----------------------------------------------------------------------

const AdminDashboard = () => {
  const getOrders=async(page=1)=>{
    const sortEarliestDatesUrl=`orders?page=${page}&limit=1000&sort=-createdAt`;
    const url=  sortEarliestDatesUrl
const respons=await api.get(url);
return respons.data
}
  const {
    data: ordersData,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const data = await getOrders();
      return data;
    },
  });
  console.log(ordersData)
  return (
    <Container maxWidth="xl" sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        خوش آمدید 👋
      </Typography>

      <Grid container spacing={3}>
        {summaryData?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <DashboardWidgetSummary
              title={item.title}
              total={item.total}
              color={item.color}
              icon={<img alt="icon" src={item.icon} />}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={6}>
          <CircularChart />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <LinerChart dates={fakeData} />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AnalyticsOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: useId(),
              title: [
                "1983, orders, $4220",
                "12 Invoices have been paid",
                "Order #37745 from September",
                "New order placed #XF-2356",
                "New order placed #XF-2346",
              ][index],
              type: `order${index + 1}`,
              time: useId(),
            }))}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
