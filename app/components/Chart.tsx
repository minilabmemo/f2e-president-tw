import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '1996', 菠菜黨: 4000, 鋼鐵黨: 2400, 復仇黨: 2400, },
  { year: '2000', 菠菜黨: 3000, 鋼鐵黨: 1398, 復仇黨: 2210, },
  { year: '2004', 菠菜黨: 2000, 鋼鐵黨: 9800, 復仇黨: 2290, },
  { year: '2008', 菠菜黨: 2780, 鋼鐵黨: 3908, 復仇黨: 2000, },
  { year: '2012', 菠菜黨: 1890, 鋼鐵黨: 4800, 復仇黨: 2181, },
  { year: '2016', 菠菜黨: 2390, 鋼鐵黨: 3800, 復仇黨: 2500, },
  { year: '2020', 菠菜黨: 3490, 鋼鐵黨: 4300, 復仇黨: 2100, },];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="鋼鐵黨" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="菠菜黨" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="復仇黨" fill="orange" activeBar={<Rectangle fill="gold" stroke="orange" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
