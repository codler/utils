export function linearColor(value: number, maxValue: number): string {
  if (!value) {
    return "#151b20"; // black
  }
  const colors = [
    "#800026", // red
    "#BD0026",
    "#E31A1C",
    "#FC4E2A",
    "#FD8D3C",
    "#FEB24C",
    "#FED976",
    "#FFEDA0", // yellow
  ];
  for (let i = 0; i < colors.length - 1; i++) {
    if (((colors.length - 1 - i) / (colors.length - 1)) * maxValue < value) {
      return colors[i];
    }
  }
  return colors[colors.length - 1];
}

function scaledColor(value: number, maxValue: number): string {
  if (!value) {
    return "#151b20"; // black
  }
  const colors = [
    "#800026", // red
    "#BD0026",
    "#E31A1C",
    "#FC4E2A",
    "#FD8D3C",
    "#FEB24C",
    "#FED976",
    "#FFEDA0", // yellow
  ];
  for (let i = 0; i < colors.length - 1; i++) {
    if (Math.pow(maxValue / colors.length - 1, 1 / (i / 10 + 1)) < value) {
      return colors[i];
    }
  }
  return colors[colors.length - 1];
}

export default scaledColor;
