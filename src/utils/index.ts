export const getOverflow = (value: string) => {
  if (value.length > 248) {
    return value.slice(0, 245) + '...'
  }

  return value
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
