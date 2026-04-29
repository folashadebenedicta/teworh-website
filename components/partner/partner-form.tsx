'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  company: z.string().min(1, 'Please enter your company name'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

const errorClass = 'mt-1 text-xs text-red-500'
const inputStyles =
  'border border-[#E0E0E0] bg-white text-[#1a1a1a] placeholder:text-[#9ca3af] focus-visible:ring-1 focus-visible:ring-[#3B924C] focus-visible:ring-offset-0 rounded-lg h-12'

export function PartnerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    await new Promise(r => setTimeout(r, 1000))
    console.log(data)
    reset()
  }

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-96">
        <Image
          src="/images/partner-hero.jpg"
          alt="Group of people holding a jersey"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Back button */}
        <div className="absolute top-0 left-0 flex items-center gap-1 bg-[#4CAF50]/60 px-4 py-2 pr-32 text-sm font-medium text-white [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] md:pr-44">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Partner with us
          </h1>
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
              Application submitted!
            </p>
            <p className="text-foreground">
              We&apos;ll review your application and be in touch shortly.
            </p>
            <Button
              variant="accent"
              size="pill"
              className="mt-2 px-8"
              onClick={() => reset()}
            >
              Submit another
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

            {/* Email + Phone — side by side */}
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
                  Phone
                </Label>
                <Input
                  {...register('phone')}
                  type="tel"
                  placeholder="+23480123456"
                  className={inputStyles}
                />
                {errors.phone && (
                  <p className={errorClass}>{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Company name — full width */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-primary text-sm font-medium">
                Company name
              </Label>
              <Input
                {...register('company')}
                placeholder="Enter company name"
                className={inputStyles}
              />
              {errors.company && (
                <p className={errorClass}>{errors.company.message}</p>
              )}
            </div>

            {/* Message — full width */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-primary text-sm font-medium">
                Message
              </Label>
              <Textarea
                {...register('message')}
                rows={7}
                placeholder="Type your message here"
                className="resize-none rounded-lg border border-[#E0E0E0] bg-white placeholder:text-[#9ca3af] focus-visible:ring-1 focus-visible:ring-[#3B924C] focus-visible:ring-offset-0"
              />
              {errors.message && (
                <p className={errorClass}>{errors.message.message}</p>
              )}
            </div>

            {/* Submit — centered */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="accent"
                size="pill"
                disabled={isSubmitting}
                className="px-12 py-3 text-base font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
