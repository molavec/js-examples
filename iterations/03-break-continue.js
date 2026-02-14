
// Break / Continue
// break: termina el bucle actual
// continue: termina la iteración actual y continúa con la siguiente

export function loopWithBreak(limit) {
  const elements = [];
  for (let i = 0; i < 5; i++) {
    if (i === limit) {
      break;
    }
    elements.push(i);
  }
  return elements;
}

export function loopWithContinue(skipValue) {
  const elements = [];
  for (let i = 0; i < 5; i++) {
    if (i === skipValue) {
      continue;
    }
    elements.push(i);
  }
  return elements;
}
