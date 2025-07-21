const CustomBarShape = (props) => {
  const { fill, x, y, width, height } = props;

  // This SVG path creates the curved shape
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height} 
            C${x + width / 2},${y + height}, ${x + width / 2},${y} ${x + width / 2},${y} 
            C${x + width / 2},${y}, ${x + width / 2},${y + height} ${x + width},${y + height} 
            L${x},${y + height} Z`;
  };

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default CustomBarShape;