import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
} from 'recharts';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const data = [
  { year: '2018-19', revenue: 50000000 },
  { year: '2019-20', revenue: 70000000 },
  { year: '2020-21', revenue: 100000000 },
  { year: '2021-22', revenue: 270000000 },
  { year: '2022-2023', revenue: 750000000 },
];

const AnnualRevenue = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.3 });
  const [currentData, setCurrentData] = useState(
    data.map((item) => ({ ...item, revenue: 0 }))
  );

  useEffect(() => {
    if (isInView) {
      // Animate the data over 2 seconds
      const startTime = Date.now();
      const duration = 2000;

      const animateData = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const newData = data.map((item) => ({
          ...item,
          revenue: item.revenue * progress,
        }));

        setCurrentData(newData);

        if (progress < 1) {
          requestAnimationFrame(animateData);
        }
      };

      requestAnimationFrame(animateData);
    }
  }, [isInView]);

  return (
    <div ref={chartRef} className='bg-[var(--bg-color] w-full '>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className='bg-[var(--bg-color)] rounded-lg p-8 '
      >
        <h2 className='text-2xl ml-40 text-start text-center font-bold mb-8 text-ev-gold'>
          We are experiencing consistent revenue growth trends
        </h2>

        <ComposedChart
          width={
            window.innerWidth >= 1024
              ? 900 // Desktop width
              : window.innerWidth >= 768
              ? window.innerWidth - 80 // Tablet width
              : window.innerWidth - 40 // Mobile width
          }
          height={
            window.innerWidth >= 1024
              ? 500 // Desktop height
              : window.innerWidth >= 768
              ? 400 // Tablet height
              : 300 // Mobile height
          }
          data={currentData}
          margin={{
            top: 20,
            right: window.innerWidth < 768 ? 10 : 30,
            left: window.innerWidth < 768 ? 20 : 50,
            bottom: window.innerWidth < 768 ? 30 : 50,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            label={{
              value: 'Annual Year',
              position: 'bottom',
              offset: window.innerWidth < 768 ? 30 : 50,
            }}
            tick={{
              fontSize: window.innerWidth < 768 ? 10 : 12, // Smaller tick font for mobile/tablet
            }}
          />
          <YAxis
            label={{
              value: 'Revenue (₹)',
              angle: -90,
              position: 'insideLeft',
              offset: window.innerWidth < 768 ? -10 : -40,
            }}
            tickFormatter={(value) => `₹ ${(value / 10000000).toFixed(1)}Cr`}
            tick={{
              fontSize: window.innerWidth < 768 ? 10 : 12, // Smaller tick font for mobile/tablet
            }}
          />
          <Tooltip
            formatter={(value) => [
              `₹ ${(value / 10000000).toFixed(2)}Cr`,
              'Revenue',
            ]}
            wrapperStyle={{
              fontSize: window.innerWidth < 768 ? '10px' : '12px',
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: window.innerWidth < 768 ? '10px' : '12px',
            }}
          />
          <Bar
            dataKey='revenue'
            fill='#fbbf24'
            name='Revenue'
            barSize={window.innerWidth < 768 ? 20 : 30} // Smaller bar size for mobile
          />
          <Line
            type='monotone'
            dataKey='revenue'
            stroke='#39bc50'
            strokeDasharray='5 5'
            dot={{ fill: '#39bc50', r: window.innerWidth < 768 ? 3 : 5 }} // Smaller dots for mobile
            name='Trend Line'
          />
        </ComposedChart>
      </motion.div>
    </div>
  );
};

export default AnnualRevenue;
