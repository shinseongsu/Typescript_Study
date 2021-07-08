function calcTax(state: string, income: number, dependents: number): number {
  if (state === "NY") {
    return income * 0.06 - dependents * 500;
  } else if (state === "NJ") {
    return income * 0.05 - dependents * 300;
  }
}
