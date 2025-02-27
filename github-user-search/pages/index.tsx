import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Use slim version
import Particles from "@tsparticles/react";


export default function LandingPage() {
  const router = useRouter();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log();
    await loadSlim(engine); // ✅ Correct function to load particles
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      <Particles
        id="tsparticles"
        particlesInit={particlesInit} // ✅ Use `particlesInit` instead of `init`
        options={{
          background: { color: "transparent" }, // ✅ No background override
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.7 },
            color: { value: "#ffffff" }, // ⚪ White particles (visible on red bg)
          },
        }}
        className="absolute inset-0 pointer-events-none z-0"
      />


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center cursor-pointer"
        onClick={() => router.push("/search")}
      >
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="w-32 h-32 mx-auto mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Platform
        </motion.h1>
        <motion.p
          className="mt-2 text-lg opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Click anywhere to explore
        </motion.p>
      </motion.div>
    </div>
  );
}
