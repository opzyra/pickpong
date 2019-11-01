const random = () => {
  return (Math.random() * 100).toFixed(2);
};

const arcDegree = (min, max) => {
  const offset = 10;
  const minAd = min + offset;
  const maxAd = max - offset;
  return Math.floor(Math.random() * (maxAd - minAd) + minAd);
};

const commentArcDegree = () => {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    return arcDegree(60, 120);
  } else if (random == 2) {
    return arcDegree(180, 240);
  } else {
    return arcDegree(300, 360);
  }
};

// Roulette Percentage
export default function reward() {
  const chance = random();

  if (chance <= 0.1) {
    return [1, arcDegree(240, 300)]; // Starbucks
  } else if (chance > 0.1 && chance <= 0.2) {
    return [2, arcDegree(0, 60)]; // PAIK'S
  } else if (chance > 0.2 && chance <= 0.3) {
    return [3, arcDegree(120, 180)]; // EDIYA
  } else {
    return [4, commentArcDegree()]; // MEGAPHONE
  }
}
