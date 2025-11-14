import React from "react";

type SkeletonProps = {
  loading: boolean;
  children: React.ReactNode;
};

const Skeleton: React.FC<SkeletonProps> = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="skeleton-wrapper">
      <div className="skeleton-container">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>

           <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
      </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Skeleton;
