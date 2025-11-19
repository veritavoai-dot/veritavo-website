
import Stripe from 'stripe'

// Server-side Stripe initialization (only used in API routes)
let stripeInstance: Stripe | null = null

export const getStripe = () => {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set. Please add your Stripe secret key to the .env file.')
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-09-30.acacia' as any,
      typescript: true,
    })
  }
  return stripeInstance
}

// For backwards compatibility
export const stripe = new Proxy({} as Stripe, {
  get: (_, prop) => {
    const instance = getStripe()
    return (instance as any)[prop]
  }
})

// Client-side publishable key getter
export const getStripePublishableKey = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!key || key === 'pk_test_placeholder') {
    console.warn('Stripe publishable key not configured. Payment processing will not work until you add your Stripe keys to the .env file.')
  }
  return key || 'pk_test_placeholder'
}
