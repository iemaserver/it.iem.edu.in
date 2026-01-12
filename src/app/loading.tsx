import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#240a1e]/90 backdrop-blur-sm">
      {/* Container for the loader */}
      <div className="flex flex-col items-center gap-4">
        
        {/* The Animated Spinner */}
        <div className="loader">
          <div className="inner-circle"></div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-lg font-bold tracking-widest animate-pulse">
          LOADING
        </p>
      </div>

      {/* Internal CSS for the specific animation */}
      <style>{`
        .loader {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, transparent, transparent 40%, #7a2fe3);
          animation: spin 1.5s linear infinite;
        }

        .loader::before {
          content: "";
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          bottom: 6px;
          background: #240a1e; /* Matches the background overlay color */
          border-radius: 50%;
          z-index: 1000;
        }

        .loader::after {
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: linear-gradient(45deg, transparent, transparent 40%, #7a2fe3);
          border-radius: 50%;
          z-index: 1;
          filter: blur(20px); /* Creates the glow effect */
        }

        .inner-circle {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           border-radius: 50%;
           border-top: 2px solid #fff;
           animation: spin-reverse 2s linear infinite;
           z-index: 2000;
           box-sizing: border-box;
           opacity: 0.5;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

         @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}