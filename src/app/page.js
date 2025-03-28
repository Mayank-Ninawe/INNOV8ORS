"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EmergencyAlerts from './components/EmergencyAlerts';

export default function Home() {
    const [emergencies, setEmergencies] = useState([]);
    const [stats, setStats] = useState({
        donors: 1500,
        recipients: 1200,
        successfulMatches: 850,
        bloodBanks: 45
    });

    useEffect(() => {
        const fetchEmergencies = async () => {
            const mockData = [
                { id: 1, bloodType: 'O+', location: 'City Hospital', urgency: 'High' },
                { id: 2, bloodType: 'AB-', location: 'Medical Center', urgency: 'Critical' }
            ];
            setEmergencies(mockData);
        };

        fetchEmergencies();

        const interval = setInterval(fetchEmergencies, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-500 to-red-700 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">Save Lives Through Blood Donation</h1>
                    <p className="text-xl mb-8">Connect with blood donors and recipients in real-time</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/donor/register" className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            Become a Donor
                        </Link>
                        <Link href="/recipient/request" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
                            Request Blood
                        </Link>
                    </div>
                </div>
            </section>

            {/* Emergency Alerts */}
            <div className="container mx-auto px-6 py-8">
                <EmergencyAlerts emergencies={emergencies} />
            </div>

            {/* Statistics */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {Object.entries(stats).map(([key, value]) => (
                            <div key={key} className="p-4">
                                <div className="text-4xl font-bold text-red-600 mb-2">{value}+</div>
                                <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-3">Real-time Matching</h3>
                        <p className="text-gray-600">Instantly connect donors with recipients based on blood type and location.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-3">Emergency Alerts</h3>
                        <p className="text-gray-600">Get immediate notifications for urgent blood requirements in your area.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-3">Blood Bank Management</h3>
                        <p className="text-gray-600">Efficient inventory management system for blood banks.</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">What Our Donors Say</h2>
                        <blockquote className="text-xl italic text-gray-600 mb-8">
                            "Donating blood through this platform was seamless. Knowing I helped save someone's life is the most rewarding feeling."
                        </blockquote>
                        <p className="font-semibold text-red-600">- Sarah Johnson, Regular Donor</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-white">Ready to Make a Difference?</h2>
                    <p className="text-white text-xl mb-12">Every drop counts. Join our mission to save lives.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/donor/register" className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                            Become a Donor
                        </Link>
                        <Link href="/recipient/request" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all transform hover:scale-105">
                            Need Blood?
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
