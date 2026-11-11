// Checkout: the customer pays by card (Stripe).
export async function payByCard(cart, cardToken, stripe) {
  const amount = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const charge = await stripe.charges.create({ amount, currency: 'pkr', source: cardToken })
  return { orderId: charge.id, status: charge.paid ? 'PAID' : 'FAILED' }
}
