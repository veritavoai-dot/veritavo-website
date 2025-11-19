
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, websiteUrl, phone, message } = body

    // Validate required fields
    if (!name || !email || !company || !websiteUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate URL format
    try {
      new URL(websiteUrl)
    } catch {
      return NextResponse.json(
        { error: 'Invalid website URL format' },
        { status: 400 }
      )
    }

    // Save to database
    const scanRequest = await prisma.websiteScanRequest.create({
      data: {
        name,
        email,
        company,
        websiteUrl,
        phone: phone || '',
        message: message || '',
      },
    })

    return NextResponse.json(
      { 
        message: 'Website scan request received successfully',
        id: scanRequest.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Website scan request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
