'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = 'red'; // Set the drawing line color to red
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const context = canvasRef.current.getContext('2d');
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    const context = canvasRef.current.getContext('2d');
    context.closePath();
    setIsDrawing(false);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const { clientX, clientY } = touch;
    const boundingRect = canvasRef.current.getBoundingClientRect();
    const offsetX = clientX - boundingRect.left;
    const offsetY = clientY - boundingRect.top;
    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = 'red'; // Set the drawing line color to red
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing) return;
    const touch = e.touches[0];
    const { clientX, clientY } = touch;
    const boundingRect = canvasRef.current.getBoundingClientRect();
    const offsetX = clientX - boundingRect.left;
    const offsetY = clientY - boundingRect.top;
    const context = canvasRef.current.getContext('2d');
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const handleTouchEnd = () => {
    const context = canvasRef.current.getContext('2d');
    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-auto">
        <Image
          src="/teeth_scan_example.jpg"
          alt="Doctor's Canvas"
          layout="responsive"
          width={1600}
          height={384}
        />
        <canvas
          ref={canvasRef}
          width={1500}
          height={500}
          className="absolute top-0 left-0"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
      <button
        onClick={clearCanvas}
        className="relative mt-5 px-5 py-2 bg-indigo-500 text-white border-none rounded cursor-pointer"
      >
        Clear
      </button>
    </div>
  );
};

export default Canvas;