# Veritavo AI Website

Official website for Veritavo AI - AI-powered client growth systems for finance, insurance, and real estate professionals.

## 🚀 Live Website

**https://veritavo-ai-website-kftwih.abacusai.app**

---

## 📋 Features

- ✅ **Products Page** - Veritavo Growth Engine with explainer video
- ✅ **Services Page** - Full-service marketing packages
- ✅ **Pricing Page** - Foundation, Growth, and Elite plans
- ✅ **Contact Forms** - Web3Forms integration
- ✅ **GoHighLevel Chat Widget** - Draggable chat support
- ✅ **Responsive Design** - Mobile and desktop optimized
- ✅ **Stripe Integration** - Ready for payments (keys needed)

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** Web3Forms API
- **Chat:** GoHighLevel Widget
- **Payments:** Stripe (requires configuration)

---

## 📦 Installation

### 1. Clone or Download

```bash
# If using GitHub
git clone <your-repo-url>
cd veritavo-website

# If using the ZIP file
unzip veritavo-website-github.zip
cd nextjs_space
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `nextjs_space` directory:

```bash
# Stripe (Optional - for payment processing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here

# Database (if using Prisma - currently not required)
# DATABASE_URL=your_database_url_here
```

### 4. Run Development Server

```bash
yarn dev
# or
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🏗 Build for Production

```bash
yarn build
yarn start
```

---

## 📁 Project Structure

```
nextjs_space/
├── app/                    # Next.js 14 App Router pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── about/             # About page
│   ├── book-consultation/ # Booking page
│   ├── get-started/       # Plan checkout pages
│   └── api/               # API routes
├── components/            # React components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── draggable-chat-widget.tsx
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities
├── public/                # Static assets
│   └── assets/            # Images, videos, logos
├── prisma/                # Database schema (optional)
└── styles/                # Global CSS
```

---

## 🎨 Branding

### Colors
- **Primary:** `#178AF6` (Custom light blue)
- **Secondary:** `#2563EB` (Tailwind blue-600)
- **Background:** `#FFFFFF` (White) / `#EFF6FF` (Light blue tint)
- **Text:** `#111827` (Dark gray)

### Logos
- Located in `/public/assets/`
- Main logo: `veritavo-ai-logo.png`
- Growth Engine logo: `veritavo-growth-engine-logo.png`

---

## 🔧 Configuration

### GoHighLevel Chat Widget
Widget ID: `6910b8cdd1e01c3266740ebe`  
Configured in `app/layout.tsx`

### Web3Forms Contact
Access Key: `b9ff84d5-8cda-4912-8b8e-c2ce36e5da9e`  
Configured in `components/contact-form.tsx`

### External Booking Link
Consultation bookings redirect to: **https://veritavo.ai/home**

---

## 📞 Contact Information

- **Email:** info@veritavo.ai
- **Phone:** +44 7378 444798
- **Address:** 72 Lynton Rd, Chesham HP5 2BS
- **Social Media:** YouTube, Facebook, Instagram, LinkedIn

---

## 🚨 Important Notes

1. **Stripe Keys:** Payment processing requires valid Stripe keys in `.env`
2. **Node Version:** Recommended Node.js 18+ 
3. **Package Manager:** This project uses **Yarn** (not npm)
4. **Videos:** Large video files are in `/public/assets/` - may take time to download

---

## 📝 Recent Updates

- ✅ **MAJOR CLEANUP (Nov 18, 2025):** Removed ALL dashes from compound words throughout entire website (99+ instances)
- ✅ **Consultation Text Updated:** Removed "free" from all "free consultation" references (4 instances)
- ✅ **FAQ Updated:** Added clear payment process - consultation required before payment
- ✅ Services page updated with digital marketing
- ✅ Draggable chat widget with tooltip
- ✅ Video removed from services page (per user request)
- ✅ Hero section sizing optimized

---

## 🤝 Support

For technical support or questions:
- Email: info@veritavo.ai
- Website: https://veritavo.ai

---

**Built with ❤️ for Veritavo AI**
