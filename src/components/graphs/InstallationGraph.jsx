import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const data = [
  { name: 'Volvo', installed: 18, planned: 4 },
  { name: 'Jio-bp', installed: 1000, planned: 48 },
  { name: 'Statiq', installed: 1000, planned: 43 },
  { name: 'Charge+Zone', installed: 1600, planned: 960 },
  { name: 'Blu-Smart', installed: 1814, planned: 1450 },
];

const InstallationGraph = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine chart size based on screen size
  const chartWidth = Math.min(windowSize.width * 0.9, 800); // Max width is 800
  const chartHeight = Math.min(windowSize.height * 0.5, 400); // Max height is 400

  return (
    <div ref={ref} className="overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
        className="flex flex-col items-center justify-center p-4 sm:px-8 md:px-16 lg:px-32 bg-[var(--bg-color)] rounded-lg"
      >
        <BarChart
          width={chartWidth}
          height={chartHeight}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="installed"
            fill="#4287f5"
            name="No. of chargers installed"
            animationDuration={2000}
          />
          <Bar
            dataKey="planned"
            fill="#f5a742"
            name="No. of chargers planned by ENN"
            animationDuration={2000}
          />
        </BarChart>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-8 text-xl sm:text-2xl font-semibold text-ev-gold text-center"
        >
          Enn Installation Share
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default InstallationGraph;