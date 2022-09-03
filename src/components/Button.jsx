import React from 'react';

export default function Button({ bgColor, color, text, borderRadius, size }) {
  return (
    <button
      type='button'
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl `}
    >
      {text}
    </button>
  );
}
