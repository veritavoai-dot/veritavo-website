
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { priceId, planName, billingPeriod, priceMonthly, priceAnnual, customerInfo, successUrl, cancelUrl } = body

    const origin = req.headers.get('origin') || 'http://localhost:3000'

    // Handle consultation booking
    if (priceId === 'consultation') {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: 'Strategic Marketing Consultation',
                description: '45-minute video consultation with our digital marketing experts',
              },
              unit_amount: 10000, // £100 in pence
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: successUrl || `${origin}/book-consultation/success`,
        cancel_url: cancelUrl || `${origin}/book-consultation`,
        metadata: {
          type: 'consultation',
          customerName: customerInfo?.name || '',
          customerEmail: customerInfo?.email || '',
          customerCompany: customerInfo?.company || '',
          customerPhone: customerInfo?.phone || '',
          businessType: customerInfo?.businessType || '',
          message: customerInfo?.message || '',
        },
        customer_email: customerInfo?.email,
      })

      return NextResponse.json({ sessionId: session.id, url: session.url })
    }

    // Handle plan subscription
    // Setup fee varies by plan
    // Foundation and Growth plans: £1,000
    // Elite Growth System: £1,995
    let setupFee = 100000 // Default £1,000 in pence
    if (planName.toLowerCase().includes('elite')) {
      setupFee = 199500 // £1,995 in pence
    }

    // Determine the recurring price based on billing period
    let recurringPrice: number
    let recurringInterval: 'month' | 'year'

    if (billingPeriod === 'annual') {
      recurringPrice = priceAnnual // Already in pence
      recurringInterval = 'year'
    } else {
      recurringPrice = priceMonthly // Already in pence
      recurringInterval = 'month'
    }

    // Create the checkout session with setup fee + first period payment
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `${planName} - Setup Fee`,
              description: 'Nonrefundable setup fee to secure your project',
            },
            unit_amount: setupFee,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `${planName} - ${billingPeriod === 'annual' ? 'Annual' : 'Monthly'} Service`,
              description: `${billingPeriod === 'annual' ? 'Annual' : 'Monthly'} service fee (charged after 14 day cooling off period)`,
            },
            unit_amount: recurringPrice,
            recurring: {
              interval: recurringInterval,
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/get-started/success?session_id={CHECKOUT_SESSION_ID}&plan=${encodeURIComponent(planName)}`,
      cancel_url: `${origin}/get-started/${planName.toLowerCase().split(' ')[0]}`,
      metadata: {
        planName,
        billingPeriod,
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
