/** Converte um preço no formato "R$ 32,90" para número (32.9). */
export function parsePrice(value: string): number {
  const normalized = value.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.');
  return Number.parseFloat(normalized) || 0;
}

/** Formata um número como preço no padrão "R$ 32,90". */
export function formatPrice(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
