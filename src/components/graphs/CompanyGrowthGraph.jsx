import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

gsap.registerPlugin(ScrollTrigger);

const GraphSection = () => {
  const graphContainerRef = useRef(null);
  const graphLineRef = useRef(null);

  useEffect(() => {
    // Graph Container Animation
    gsap.fromTo(
      graphContainerRef.current,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: graphContainerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Graph Line Animation
    gsap.fromTo(
      graphLineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: graphContainerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const data = {
    labels: ["May 2011", "Dec 2021", "May 2022", "June 2022", "July 2023"],
    datasets: [
      {
        label: "Milestones Achieved",
        data: [0, 25, 50, 75, 100],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        pointBorderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "white",
        pointBorderWidth: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the graph scales properly
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Milestone: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: { title: { display: true, text: "Timeline" } },
      y: {
        title: { display: true, text: "Progress (%)" },
        ticks: { callback: (value) => `${value}%` },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div
      ref={graphContainerRef}
      className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 w-full max-w-5xl mx-auto rounded-lg shadow-md"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-ev-gold text-center">
        Milestone for EV Charger Development
      </h2>
      <div ref={graphLineRef} className="relative w-full h-64 sm:h-80 md:h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphSection;