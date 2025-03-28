'use client';

import { useState } from 'react';
import { Bell, Droplet, Heart, Search, Users, LogIn, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg dark:bg-gray-900/50 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold dark:text-white">BloodConnect</h1>
          </div>
          <nav className="flex space-x-4">
            <Link 
              href="/auth/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              href="/auth/register"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white dark:text-white transition-colors"
            >
              <UserPlus className="h-5 w-5" />
              <span>Sign Up</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1920&q=80"
            alt="Blood donation"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Save Lives Through
            <br />
            Blood Donation
          </h1>
          <p className="text-xl sm:text-2xl dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of life-savers. Every donation counts in our mission
            to ensure blood availability for those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg text-lg font-semibold transition-colors"
            >
              Become a Donor
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 dark:text-white rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center dark:text-white mb-12">
            Why Choose BloodConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white mb-2">
                Real-time Matching
              </h3>
              <p className="dark:text-gray-300">
                Instantly connect with compatible donors in your area when blood is needed.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white mb-2">
                Emergency Alerts
              </h3>
              <p className="dark:text-gray-300">
                Receive immediate notifications for urgent blood requirements in your vicinity.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white mb-2">
                Community Impact
              </h3>
              <p className="dark:text-gray-300">
                Join thousands of donors making a difference in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}