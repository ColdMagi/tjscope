import { Heading, VStack } from "@chakra-ui/react";
import { Bar, Line, Radar } from "react-chartjs-2";
import { ActivityChartData } from "utils/charts";

interface ActivityChartsProps {
  data: ActivityChartData;
  options?: Object;
}

function ActivityCharts({
  data: { years, months, days, hours, ratingByEntity },
  options,
}: ActivityChartsProps) {
  return (
    <>
      <VStack w="100%">
        <Heading size="md">По годам</Heading>
        <Bar data={years} options={options} />
      </VStack>
      <VStack w="100%">
        <Heading size="md">По месяцам</Heading>
        <Bar data={months} options={options} />
      </VStack>
      <VStack w="100%">
        <Heading size="md">По дням</Heading>
        <Bar data={days} options={options} />
      </VStack>
      <VStack w="100%">
        <Heading size="md">По часам</Heading>
        <Radar data={hours} options={options} />
      </VStack>
      <VStack w="100%">
        <Heading size="md">Оценки</Heading>
        <Line data={ratingByEntity} />
      </VStack>
    </>
  );
}

export default ActivityCharts;
