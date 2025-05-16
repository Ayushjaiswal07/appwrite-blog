import React from 'react';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  );
}
