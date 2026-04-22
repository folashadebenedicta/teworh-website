'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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

const errorClass = 'mt-1 text-xs text-red-300'

const inputStyles =
  'border-0 bg-white/90 text-[#1a1a1a] placeholder:text-[#9ca3af] focus-visible:ring-1 focus-visible:ring-[#3B924C] focus-visible:ring-offset-0'

export function GetInTouchSection() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    // Replace with your API call
    await new Promise(r => setTimeout(r, 1000))
    console.log(data)
    reset()
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-360 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 lg:flex-1">
            <div className="flex items-center gap-3">
              <span className="bg-accent h-1 w-10" />
              <span className="text-base font-semibold text-white/90">
                Get in touch
              </span>
            </div>

            <h2 className="font-redrose text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-7xl">
              Lets build something together
            </h2>

            <p className="max-w-sm text-base leading-relaxed text-white/75">
              Whether you&apos;re a government agency, school, private investor,
              or ambitious athlete we&apos;d love to hear from you and explore
              what&apos;s possible.
            </p>
          </div>

          {/* Right: form card */}
          <div
            className="w-full rounded-2xl p-6 sm:p-8 lg:w-[580px] lg:shrink-0"
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {isSubmitSuccessful ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <p className="font-redrose text-2xl font-bold text-white">
                  Message sent!
                </p>
                <p className="text-white/75">
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
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name + Email — side by side */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-white/90">Your name</Label>
                    <Input
                      {...register('name')}
                      placeholder="John Doe"
                      className={inputStyles}
                    />
                    {errors.name && (
                      <p className={errorClass}>{errors.name.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-white/90">Email Address</Label>
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className={inputStyles}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Service — full width */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-white/90">
                    I&apos;m interested in
                  </Label>
                  <Select
                    onValueChange={val =>
                      setValue('service', val, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger className={`w-full ${inputStyles}`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(s => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className={errorClass}>{errors.service.message}</p>
                  )}
                </div>

                {/* Message — full width */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-white/90">Your message</Label>
                  <Textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your project or what you're looking for..."
                    className={`resize-none ${inputStyles}`}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>

                {/* Submit — full width */}
                <Button
                  type="submit"
                  variant="accent"
                  disabled={isSubmitting}
                  className="w-full rounded-lg py-3 text-base font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
