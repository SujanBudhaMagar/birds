import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/50">
      <div className="rounded-full animate-spin h-16 w-16 z-10"></div>
    </div>
  );
};

export default Loading;
