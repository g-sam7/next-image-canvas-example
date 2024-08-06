'use client';

import React, { useState } from 'react';
import CanvasModal from './CanvasModal';

const CanvasExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CanvasModal open={open} setOpen={setOpen}/>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Open Canvas
      </button>
    </div>
  )
}

export default CanvasExample;