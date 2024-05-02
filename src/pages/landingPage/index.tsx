import LandingHeader from "@/components/landingHeader";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import iracingVideo from "../../assets/iRacing - Race With Us.mp4";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  ChartData,
} from "chart.js";
import { useState } from "react";
import { callback } from "chart.js/helpers";
import { Separator } from "@/components/ui/separator";

ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function LandingPage() {
  const lineChartData = [
    {
      id: 0,
      laptime: "01:25:300",
      lap: 1,
    },
    {
      id: 1,
      laptime: "01:25:400",
      lap: 2,
    },
    {
      id: 2,
      laptime: "01:25:500",
      lap: 3,
    },
    {
      id: 3,
      laptime: "01:25:700",
      lap: 4,
    },
  ];

  const chartOptions: any = {
    backgroundColor: "#1a1a1a",
    scales: {
      x: {
        grid: {
          color: "#F0F0F0",
        },
        ticks: {
          color: "#8B4513",
        },
      },
      y: {
        grid: {
          color: "#F0F0F0",
        },
        ticks: {
          callback: function (value: number) {
            const minutes = Math.floor(value / 60000);

            const remainingMilliseconds = value % 60000;

            const seconds = Math.floor(remainingMilliseconds / 1000);

            const decimals = remainingMilliseconds % 1000;

            const formattedMinutes = minutes.toString().padStart(2, "0");
            const formattedSeconds = seconds.toString().padStart(2, "0");
            const formattedDecimals = decimals.toString().padStart(3, "0");

            return `${formattedMinutes}:${formattedSeconds}:${formattedDecimals}`;
          },
          color: "#8B4513",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#8B4513", // Cor da legenda
        },
      },
      title: {
        display: true,
        text: "Gráfico de Exemplo",
        color: "#8B4513", // Cor do título
      },
    },
  };

  function convertTimeStringToNumber(timeString: string) {
    const [minutes, seconds, decimals] = timeString.split(":").map(Number);

    const minutesInMilliseconds = minutes * 60000;

    const secondsInMilliseconds = seconds * 1000;

    const decimalsInMilliseconds = decimals;

    const totalMilliseconds =
      minutesInMilliseconds + secondsInMilliseconds + decimalsInMilliseconds;

    return totalMilliseconds;
  }

  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: lineChartData.map((data) => "lap " + data.lap),
    datasets: [
      {
        label: "Monza + Ferrari 296 GT3",
        data: lineChartData.map((data) =>
          convertTimeStringToNumber(data.laptime)
        ),
        borderColor: "#8B4513",
        backgroundColor: "rgba(0,0,0,0)",
        pointBackgroundColor: "#D3D3D3",
      },
    ],
  });

  return (
    <div className="bg-black">
      <LandingHeader />
      <section aria-label="Hero Section" className="relative w-full h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={iracingVideo}
          autoPlay
          loop
          aria-label="Hero Section Background Video"
        />

        {/* Hero Text and Button */}
        <div className="absolute w-full h-screen flex flex-col justify-between items-center gap-4">
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 2 }}
            animate={{ opacity: 1 }}
            className="text-white text-5xl font-bold text-center mt-24"
            style={{
              WebkitTextStroke: "1px black",
              textShadow: "1px 1px 1px black",
            }}
          >
            TRACK YOUR RACING PERFORMACE WITH <br /> RACESTATS
          </motion.h1>
          <Button
            variant={"default"}
            className="mb-4"
            onClick={() => {
              document.getElementById("features")?.scrollIntoView();
            }}
          >
            See More Below <ChevronDown />
          </Button>
        </div>
      </section>
      <div className="relative">
        <Separator
          orientation="horizontal"
          className="my-10 bg-white"
          decorative
        />
        <motion.img
          initial={{ x: -500 }}
          transition={{ duration: 15 }}
          animate={{ x: 3000 }}
          src="src/assets/F1 Pixelart LADO 2.png"
          alt="f1 lado 2"
          width={100}
          className="absolute -top-6"
        />
      </div>
      <section
        id="features"
        className="w-11/12 mx-auto flex flex-col gap-2 text-white"
      >
        <div className="w-full flex items-center justify-between">
          <div className="w-1/2 h-full">
            <Line data={chartData} options={chartOptions} />
          </div>
          <h3>
            Monitor your progress, analyze your stats, and improve your racing
            skills.
          </h3>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3>
            Insert your lap times to a given track and car, upload your lap
            replay, add comments.
          </h3>
          <div>
            <h1>Table</h1>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div>
            <h1>Image</h1>
          </div>
          <h3>
            Check out recommended content for you to learn and improve your
            racing.
          </h3>
        </div>
      </section>
    </div>
  );
}
