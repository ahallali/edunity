"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock, Eye, EyeOff, Sparkles, Github, Chrome, ArrowLeft, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "../components/theme-toggle"

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    return newErrors
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formErrors = validateForm()
    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Handle successful signin
        console.log("Signin successful:", formData)

        // Redirect to dashboard
        // router.push('/dashboard')
      } catch (error) {
        setErrors({ general: "Invalid email or password. Please try again." })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
            <ThemeToggle />
          </div>

          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600 dark:text-slate-300">Sign in to continue your learning journey</p>
        </div>

        <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="p-8">
            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                variant="outline"
                className="w-full h-12 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 bg-transparent"
                disabled={isLoading}
              >
                <Chrome className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 bg-transparent"
                disabled={isLoading}
              >
                <Github className="w-5 h-5 mr-3" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative mb-6">
              <Separator className="bg-slate-200 dark:bg-slate-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white dark:bg-slate-800 px-4 text-sm text-slate-500 dark:text-slate-400">
                  or continue with email
                </span>
              </div>
            </div>

            {/* General Error */}
            {errors.general && (
              <Alert className="mb-6 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-700 dark:text-red-300">{errors.general}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`pl-10 h-12 transition-colors bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 ${
                      errors.email
                        ? "border-red-300 dark:border-red-600 focus:border-red-400 dark:focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                        : "border-slate-200 dark:border-slate-600 focus:border-emerald-300 dark:focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-800"
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 dark:text-slate-300 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`pl-10 pr-10 h-12 transition-colors bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 ${
                      errors.password
                        ? "border-red-300 dark:border-red-600 focus:border-red-400 dark:focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                        : "border-slate-200 dark:border-slate-600 focus:border-emerald-300 dark:focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-800"
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-600 dark:text-red-400">{errors.password}</p>}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 mt-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-slate-600 dark:text-slate-300">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
          <p>Trusted by 10,000+ students worldwide</p>
        </div>
      </div>
    </div>
  )
}
