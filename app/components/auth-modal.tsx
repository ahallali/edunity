"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Lock, User, Eye, EyeOff, Sparkles, Github, Chrome } from "lucide-react"

interface AuthModalProps {
  mode: "signin" | "signup" | null
  onClose: () => void
  onSwitchMode: (mode: "signin" | "signup") => void
}

export default function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log("Auth submission:", { mode, formData })
    onClose()
  }

  const handleSwitchMode = () => {
    const newMode = mode === "signin" ? "signup" : "signin"
    onSwitchMode(newMode)
  }

  if (!mode) return null

  return (
    <Dialog open={!!mode} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-0 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-6">
            <DialogHeader className="text-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                {mode === "signin" ? "Welcome Back" : "Join Edunity AI"}
              </DialogTitle>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 text-center">
                {mode === "signin"
                  ? "Sign in to continue your learning journey"
                  : "Start learning together with AI collaboration"}
              </p>
            </DialogHeader>

            {/* Social Login Buttons */}
            <div className="space-y-2 mb-4">
              <Button
                variant="outline"
                className="w-full h-10 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 bg-transparent text-sm"
              >
                <Chrome className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-10 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 bg-transparent text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative mb-4">
              <Separator className="bg-slate-200 dark:bg-slate-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white dark:bg-slate-800 px-3 text-xs text-slate-500 dark:text-slate-400">
                  or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {mode === "signup" && (
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-9 h-10 text-sm border-slate-200 dark:border-slate-600 focus:border-emerald-300 dark:focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-800 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-9 h-10 text-sm border-slate-200 dark:border-slate-600 focus:border-emerald-300 dark:focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-800 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="password" className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-9 pr-10 h-10 text-sm border-slate-200 dark:border-slate-600 focus:border-emerald-300 dark:focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-800 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {mode === "signup" && (
                <div className="space-y-1">
                  <Label htmlFor="confirmPassword" className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-9 h-10 text-sm border-slate-200 dark:border-slate-600 focus:border-emerald-300 dark:focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-800 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                      required
                    />
                  </div>
                </div>
              )}

              {mode === "signin" && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-sm mt-4"
              >
                {mode === "signin" ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="text-center mt-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={handleSwitchMode}
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                >
                  {mode === "signin" ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            {mode === "signup" && (
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3 leading-relaxed">
                By creating an account, you agree to our{" "}
                <a
                  href="#"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  Privacy Policy
                </a>
              </p>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
