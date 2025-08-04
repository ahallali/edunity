"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Zap, Shield, BookOpen, MessageSquare, Sparkles, Star, Github, Twitter } from "lucide-react"
import AuthModal from "./components/auth-modal"
import CollaborativeCursors from "./components/collaborative-cursors"
import { ThemeToggle } from "./components/theme-toggle"

export default function LandingPage() {
  const [authModal, setAuthModal] = useState<"signin" | "signup" | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Edunity AI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                onClick={() => setAuthModal("signin")}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
              >
                Sign In
              </Button>
              <Button
                onClick={() => setAuthModal("signup")}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto relative">
            <Badge className="mb-6 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700">
              <Sparkles className="w-3 h-3 mr-1" />
              Now with Real-time Collaboration
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-800 dark:from-slate-100 dark:via-slate-200 dark:to-emerald-400 bg-clip-text text-transparent leading-tight">
              Learn Together with
              <span className="block bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 bg-clip-text text-transparent">
                Edunity AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              The first AI platform designed for collaborative learning. Study with friends, share insights in
              real-time, and unlock your potential together.
            </p>

            {/* Collaborative Demo Area */}
            <div className="relative mb-12 mx-auto max-w-4xl">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/30 dark:from-emerald-900/20 dark:to-blue-900/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  
                  </div>

                  <div className="space-y-4 text-left">
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border-l-4 border-emerald-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          S
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Sarah</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">just asked</span>
                      </div>
                      <p className="text-slate-800 dark:text-slate-200">
                        Can someone explain the chain rule with a practical example?
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          AI
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Edunity AI</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">is responding...</span>
                      </div>
                      <p className="text-slate-800 dark:text-slate-200">
                        Great question! Let me break down the chain rule step by step...
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          M
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Marcus</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">is typing...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collaborative Cursors Component */}
                <CollaborativeCursors />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/signup")}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Together
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-slate-300 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-slate-600 dark:text-slate-300">Loved by 10,000+ students</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Join students from Harvard, MIT, Stanford, and 200+ universities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Why Students Choose Edunity AI
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Experience the future of collaborative learning with features designed specifically for students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-600 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                  Real-time Collaboration
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Work together like in Figma. See your study partners' thoughts, questions, and insights in real-time
                  as you learn together.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-600 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Educational AI</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  AI trained specifically for learning. Get explanations, practice problems, and study guides tailored
                  to your academic needs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-600 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Smart Study Sessions</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Create focused study rooms for specific subjects. Invite classmates and tackle assignments together
                  with AI assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-600 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Instant Insights</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Get immediate feedback on your understanding. AI identifies knowledge gaps and suggests personalized
                  learning paths.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-600 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Academic Integrity</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Built with academic honesty in mind. Promotes understanding over answers, helping you truly learn the
                  material.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-600 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Adaptive Learning</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  AI adapts to your learning style and pace. Whether you're visual, auditory, or kinesthetic, get
                  personalized explanations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Start Learning in 3 Simple Steps
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Get started with collaborative AI learning in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Create Your Study Room</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Set up a collaborative space for your subject. Invite classmates or study solo with AI assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Ask Questions Together</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Collaborate in real-time. See everyone's questions, share insights, and learn from each other's
                perspectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Master the Material</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Get personalized explanations, practice problems, and study guides. Track your progress together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join thousands of students who are already learning better together with Edunity AI
          </p>
          <Button
            size="lg"
            onClick={() => (window.location.href = "/signup")}
            className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-emerald-100 mt-4 text-sm">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Edunity AI</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering students worldwide through collaborative AI learning.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 dark:border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Edunity AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitchMode={setAuthModal} />
    </div>
  )
}
