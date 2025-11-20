
import { NextRequest, NextResponse } from 'next/server'
import { getPrisma } from '@/lib/db'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database (lazy-load Prisma at request time)
    const prisma = await getPrisma()
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company: company || '',
        phone: phone || '',
        message,
      },
    })

    return NextResponse.json(
      { 
        message: 'Contact submission received successfully',
        id: submission.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
