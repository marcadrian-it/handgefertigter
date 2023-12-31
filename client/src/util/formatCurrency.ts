export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('de-DE', {
    currency: 'eur',
    style: 'currency',
  }).format(amount);
}
