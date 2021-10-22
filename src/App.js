import "./App.css";
import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
      {/* Bar Chart */}
      <Chart
        width={"800px"}
        height={"500px"}
        chartType="Bar"
        // loader={<div>Loading Chart</div>}
        data={[
          ["Year", "Sales", "Expenses", "Profit"],
          ["2014", 1000, 400, 200],
          ["2015", 1170, 460, 250],
          ["2016", 660, 1120, 300],
          ["2017", 1030, 540, 350],
        ]}
        options={{
          // Material design options
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
          },
        }}
      />
      {/* Donut Chart */}
      <Chart
        width={"1000px"}
        height={"1000px"}
        chartType="PieChart"
        // loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
        ]}
        options={{
          title: "My Daily Activities",
          // Just add this option
          pieHole: 0.4,
        }}
      />
    </div>
  );
}

export default App;
