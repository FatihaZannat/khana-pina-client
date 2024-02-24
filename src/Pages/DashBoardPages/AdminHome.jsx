import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "../../hooks/AuthLoad";
import Axios from "../../hooks/Axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,   Legend } from 'recharts';
import { FaBook, FaMoneyBill, FaUsers, FaUtensils } from "react-icons/fa";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const AdminHome = () => {
    const { user } = UseAuthContext()
    const axios = Axios()
    const { data: statsData = [] } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axios.get('/admin-stats')
            // console.log(res.data);
            return res.data
        }
    })

    const { data: stats } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axios.get('/order-stats')
            // console.log(res.data);
            return res.data
        }
    })

    // custom shape for barChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pieChart
    const stat = stats.map(item => {
        return { name: item.category, value: item.totalRevenue }
    })

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <>
            <div>
                <h1><span>Hello , Wellcome </span>
                    {user?.displayName ? user?.displayName : "back"}
                </h1>
            </div>

            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-figure text-3xl text-secondary">
                        <FaMoneyBill></FaMoneyBill>
                    </div>
                    <div className="stat-value">{(statsData?.revenue?.toFixed(2))}</div>
                    <div className="stat-title">Revenue</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-3xl text-secondary ">
                        <FaBook></FaBook>
                    </div>
                    <div className="stat-value">{statsData.menu}</div>
                    <div className="stat-title">Menu</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-3xl text-secondary ">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-value">{statsData.users}</div>
                    <div className="stat-title">Users</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-3xl text-secondary ">
                        <FaUtensils></FaUtensils>
                    </div>
                    <div className="stat-value">{statsData.orders}</div>
                    <div className="stat-title">Orders</div>
                </div>

            </div>

            <div className="flex mt-10">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={stats}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="itemCount" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {stats?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>

                </div>
                {/* pie chart */}
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={stat}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {stat.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>

                </div>
            </div>
        </>
    );
};

export default AdminHome;