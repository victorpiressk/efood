/* Limita o tamanho de uma string e adiciona "..." no final, caso ultrapasse o limite. */
export const truncateText = (value: string) => {
  if (value.length > 248) {
    return value.slice(0, 245) + '...'
  }

  return value
}

/* Formata um número para o formato de moeda brasileira (BRL). */
export const formatToBRL = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
