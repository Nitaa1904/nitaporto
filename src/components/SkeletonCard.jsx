const SkeletonCard = ({ height = "240px" }) => {
  return (
    <div
      className="skeleton-card"
      style={{ height }}
    >
      <div className="skeleton skeleton-title"></div>

      <div className="skeleton skeleton-line"></div>

      <div className="skeleton skeleton-line short"></div>

      <div className="skeleton skeleton-tags">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SkeletonCard;