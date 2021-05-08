export const compareByQuestion = (a, b) => {
  const qA = a.q.toUpperCase();
  const qB = b.q.toUpperCase();
  return qA < qB
    ? -1
    : qA > qB
      ? 1
      : 0
}
