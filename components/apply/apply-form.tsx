'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  dob: z.string().min(1, 'Please enter your date of birth'),
  gender: z.string().min(1, 'Please select a gender'),
  email: z.string().email('Please enter a valid email address'),
  skillLevel: z.string().min(1, 'Please select your skill level'),
  preferredPosition: z.string().min(1, 'Please select a position'),
  previousPosition: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const genders = ['Male', 'Female', 'Prefer not to say']
const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional']
const positions = [
  'Goalkeeper',
  'Defender',
  'Midfielder',
  'Forward',
  'Winger',
  'Striker',
]

const errorClass = 'mt-1 text-xs text-red-500'
const inputStyles =
  'border border-[#E0E0E0] bg-white text-[#1a1a1a] placeholder:text-[#9ca3af] focus-visible:ring-1 focus-visible:ring-[#3B924C] focus-visible:ring-offset-0 rounded-lg h-12'

export function ApplyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to submit application')
  }

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-96">
        <Image
          src="/images/apply-hero.jpg"
          alt="Football team sitting on pitch with coach"
          fill
          priority
          className="object-cover object-center"
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
            Apply for football academy
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
              We&apos;ll review your application and get back to you soon.
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
            {/* Name — full width */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-primary text-sm font-medium">Name</Label>
              <Input
                {...register('name')}
                placeholder="Full name"
                className={inputStyles}
              />
              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>

            {/* Date of birth + Gender */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label className="text-primary text-sm font-medium">
                  Date of birth
                </Label>
                <Input
                  {...register('dob')}
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className={inputStyles}
                />
                {errors.dob && (
                  <p className={errorClass}>{errors.dob.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-primary text-sm font-medium">
                  Gender
                </Label>
                <Select
                  onValueChange={val =>
                    setValue('gender', val, { shouldValidate: true })
                  }
                >
                  <SelectTrigger
                    className={`${inputStyles} h-12! w-full cursor-pointer`}
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" align="start">
                    {genders.map(g => (
                      <SelectItem key={g} value={g} className="cursor-pointer">
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className={errorClass}>{errors.gender.message}</p>
                )}
              </div>
            </div>

            {/* Email + Skill level */}
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
                  Skill level
                </Label>
                <Select
                  onValueChange={val =>
                    setValue('skillLevel', val, { shouldValidate: true })
                  }
                >
                  <SelectTrigger
                    className={`${inputStyles} h-12! w-full cursor-pointer`}
                  >
                    <SelectValue placeholder="Beginner" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" align="start">
                    {skillLevels.map(s => (
                      <SelectItem key={s} value={s} className="cursor-pointer">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.skillLevel && (
                  <p className={errorClass}>{errors.skillLevel.message}</p>
                )}
              </div>
            </div>

            {/* Preferred position + Previous position */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label className="text-primary text-sm font-medium">
                  Preferred position
                </Label>
                <Select
                  onValueChange={val =>
                    setValue('preferredPosition', val, { shouldValidate: true })
                  }
                >
                  <SelectTrigger
                    className={`${inputStyles} h-12! w-full cursor-pointer`}
                  >
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" align="start">
                    {positions.map(p => (
                      <SelectItem key={p} value={p} className="cursor-pointer">
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.preferredPosition && (
                  <p className={errorClass}>
                    {errors.preferredPosition.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-primary text-sm font-medium">
                  Previous position
                </Label>
                <Input
                  {...register('previousPosition')}
                  placeholder="Type previous position"
                  className={inputStyles}
                />
              </div>
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
