const colors = ["#FF80AB", "#B388FF", "#40C4FF"];

export const getColor = (index: number): string => {
  return colors[index % colors.length];
};
