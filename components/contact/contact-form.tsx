'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Mail, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

const services = [
  'Facility Design, Build & Management',
  'Athlete Discovery & Development',
  'Sport Surfaces & Flooring',
  'Sport Equipment & Gear',
  'Partnership',
  'Other',
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value:
      '101, Kinshasa road opposite lema jubril house, Angwar rimi GRA kaduna.',
  },
  {
    icon: Phone,
    label: 'Phone number',
    value: '09012397998',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'teworhsportsandskills@gmail.com',
  },
]

const errorClass = 'mt-1 text-xs text-red-500'

const inputStyles =
  'border border-[#E0E0E0] bg-white text-[#1a1a1a] placeholder:text-[#9ca3af] focus-visible:ring-1 focus-visible:ring-[#3B924C] focus-visible:ring-offset-0 rounded-lg h-12'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to send')
  }

  const router = useRouter()

  return (
    <div>
      {/* ── Hero image ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-96">
        <Image
          src="/images/contact-hero.png"
          alt="Footballer kicking ball"
          fill
          priority
          className="object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Back button */}
        <div className="absolute top-0 left-0 z-10 flex items-center gap-1 bg-[#4CAF50]/60 px-4 py-2 pr-32 text-lg font-medium text-white [clip-path:polygon(0_0,100%_0,calc(100%-58px)_100%,0_100%)] md:pr-92 lg:pr-150">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-1 hover:underline"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Contact <span className="text-accent">Us</span>
          </h1>
        </div>
      </div>

      {/* ── Contact info cards on green bg ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-360 px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex w-full min-w-0 items-center gap-4 rounded-xl p-5"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.08)',
                }}
              >
                <div className="bg-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">{label}</p>
                  <p className="text-sm font-normal break-words text-white/80">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form ── */}
      <div className="mx-auto max-w-360 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-primary mb-10 text-center text-2xl font-medium sm:text-3xl">
          Fill in your details to get started
        </h2>

        {isSubmitSuccessful ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <p className="font-redrose text-primary text-2xl font-bold">
              Message sent!
            </p>
            <p className="text-foreground">
              We&apos;ll get back to you as soon as possible.
            </p>
            <Button
              variant="accent"
              size="pill"
              className="mt-2 px-8"
              onClick={() => reset()}
            >
              Send another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            noValidate
          >
            {/* Full name — full width */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-primary text-sm font-medium">
                Full name
              </Label>
              <Input
                {...register('name')}
                placeholder="Full name"
                className={inputStyles}
              />
              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>

            {/* Email + Service — side by side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label className="text-primary text-sm font-medium">
                  Email
                </Label>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className={inputStyles}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-primary text-sm font-medium">
                  I&apos;m interested in
                </Label>
                <Select
                  onValueChange={val =>
                    setValue('service', val, { shouldValidate: true })
                  }
                >
                  <SelectTrigger
                    className={`${inputStyles} h-12! w-full cursor-pointer`}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" align="start">
                    {services.map(s => (
                      <SelectItem key={s} value={s} className="cursor-pointer">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className={errorClass}>{errors.service.message}</p>
                )}
              </div>
            </div>

            {/* Message — full width */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-primary text-sm font-medium">
                Your message
              </Label>
              <Textarea
                {...register('message')}
                rows={7}
                placeholder="Tell us about your project or what you're looking for"
                className="resize-none rounded-lg border border-[#E0E0E0] bg-white placeholder:text-[#9ca3af] focus-visible:ring-1 focus-visible:ring-[#3B924C] focus-visible:ring-offset-0"
              />
              {errors.message && (
                <p className={errorClass}>{errors.message.message}</p>
              )}
            </div>

            {/* Submit — centered */}
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="accent"
                size="pill"
                disabled={isSubmitting}
                className="px-12 py-3 text-base font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
