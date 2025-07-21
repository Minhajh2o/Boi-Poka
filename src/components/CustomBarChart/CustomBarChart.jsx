import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import CustomBarShape from "./CustomBarShape ";


const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF4F6F",
  "#8A2BE2",
  "#4682B4",
  "#D2691E",
  "#32CD32",
];

// Custom Tick Component for the X-Axis (to handle long labels)
const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  const maxChars = 10; // Max characters before truncating
  const formattedLabel =
    payload.value.length > maxChars
      ? `${payload.value.substring(0, maxChars)}...`
      : payload.value;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {formattedLabel}
      </text>
    </g>
  );
};

const CustomBarChart = ({ wishlist }) => {


  return (
    <div className="mt-6 mb-12 md:mb-24 py-6 md:p-12 bg-gray-100">
      <div className="w-full h-[400px] md:h-[500px]">
        <ResponsiveContainer>
          <BarChart
            data={wishlist}
            margin={{
              top: 30,
              right: 20,
              left: 0,
              bottom: 30, 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="bookName"
              angle={-45}
              textAnchor="end"
              height={50} // Adjust height to make space for labels
              interval={0} // This ensures all labels are shown
              tick={<CustomizedAxisTick />} // Use the custom component for labels
            />

            <YAxis />
            <Bar dataKey="totalPages" shape={<CustomBarShape />}>
              {wishlist.map((entry, index) => (
                // Use modulo to loop through colors if there are more books than colors
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
              <LabelList
                dataKey="totalPages"
                position="top"
                style={{ fill: "black", fontWeight: "bold" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomBarChart;
