'use client';
import { motion } from 'framer-motion';

export default function CloudMesh() {
  return (
    <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
      />
      
      {/* Floating nodes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${20 + (i * 5) % 80}%`,
            top: `${20 + (i * 7) % 60}%`,
          }}
        />
      ))}
      
      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + (i * 12) % 90}%`}
            y1={`${15 + (i * 8) % 70}%`}
            x2={`${20 + (i * 15) % 80}%`}
            y2={`${25 + (i * 12) % 60}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.3 }}
          />
        ))}
      </svg>
    </div>
  );
}