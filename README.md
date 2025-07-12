# VisionExa Digital Marketing Website

A modern, responsive website for VisionExa digital marketing consultancy built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean black and white design with smooth animations
- **Contact Form**: Integrated email functionality for client inquiries
- **Service Showcase**: Detailed presentation of digital marketing services
- **Portfolio Section**: Sample work demonstrations
- **Client Testimonials**: Social proof and customer feedback
- **Smooth Animations**: Liquid effects and micro-interactions

## Services Offered

- Website Management
- SEO (Search Engine Optimization)
- Video Editing
- Graphic Designing
- Social Media Management

## Contact Information

- **Phone**: +91 8925098547
- **Email**: joneswalker342@gmail.com
- **Address**: No.3, Thamarai Appartment, Nedunchizhian Street, Shollinganallur, Chennai 600119

## Email Integration Setup

To enable the contact form email functionality:

### Option 1: Resend (Recommended)
1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to your environment variables
4. Verify your domain or use their test domain

### Option 2: EmailJS (Alternative)
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Create a service (Gmail)
3. Create an email template
4. Update the edge function with your credentials

### Option 3: Other Services
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with Gmail

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Supabase Edge Functions
- **Email Service**: Resend API

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Works.tsx
│   ├── Clients.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css

supabase/
└── functions/
    └── send-contact-email/
        └── index.ts
```

## Deployment

The website can be deployed to:
- Netlify
- Vercel
- AWS Amplify
- GitHub Pages

For Supabase Edge Functions, deploy using the Supabase CLI or dashboard.

## License

This project is created for VisionExa Digital Marketing Consultancy.