"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

export default function MatchesPage() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // This would connect to your Spring Boot backend
        const fetchMatches = async () => {
            try {
                setLoading(true);
                // In production, replace with actual API endpoint
                // const response = await axios.get('/api/matches');

                // Mock data for demonstration
                const mockData = [
                    { id: 1, donor: { name: 'John Doe', bloodType: 'O+' }, recipient: { name: 'Jane Smith', bloodType: 'O+' }, status: 'pending', createdAt: new Date() },
                    { id: 2, donor: { name: 'Alice Johnson', bloodType: 'A-' }, recipient: { name: 'Bob Brown', bloodType: 'A-' }, status: 'completed', createdAt: new Date(Date.now() - 86400000) },
                    { id: 3, donor: { name: 'Charlie Davis', bloodType: 'B+' }, recipient: { name: 'Medical Center', bloodType: 'B+' }, status: 'in-progress', createdAt: new Date() }
                ];

                setMatches(mockData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching matches:', error);
                setLoading(false);
            }
        };

        fetchMatches();

        // Set up real-time connection with Spring Boot backend
        // This would be implemented with WebSockets
        // const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);
        // socket.on('newMatch', (match) => {
        //   setMatches(prev => [match, ...prev]);
        // });

        // For demo purposes, simulate new matches arriving
        const interval = setInterval(() => {
            setMatches(prev => {
                const newMatch = {
                    id: Date.now(),
                    donor: { name: `Donor ${Math.floor(Math.random() * 100)}`, bloodType: ['A+', 'B+', 'AB+', 'O+'][Math.floor(Math.random() * 4)] },
                    recipient: { name: `Recipient ${Math.floor(Math.random() * 100)}`, bloodType: ['A+', 'B+', 'AB+', 'O+'][Math.floor(Math.random() * 4)] },
                    status: 'pending',
                    createdAt: new Date()
                };
                return [newMatch, ...prev.slice(0, 9)]; // Keep only 10 items
            });
        }, 15000);

        return () => {
            clearInterval(interval);
            // socket.disconnect();
        };
    }, []);

    const filteredMatches = filter === 'all'
        ? matches
        : matches.filter(match => match.status === filter);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Donor-Recipient Matches</h1>

            <div className="mb-4">
                <label className="mr-2 font-medium">Filter by status:</label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border rounded p-2"
                >
                    <option value="all">All Matches</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {loading ? (
                <p>Loading matches...</p>
            ) : filteredMatches.length === 0 ? (
                <p>No matches found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredMatches.map(match => (
                        <div key={match.id} className="border rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold">Match #{match.id}</h3>
                                <span className={`px-2 py-1 rounded text-xs ${match.status === 'completed' ? 'bg-green-500 text-white' :
                                        match.status === 'in-progress' ? 'bg-blue-500 text-white' :
                                            'bg-yellow-500 text-white'
                                    }`}>
                                    {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                                </span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <div>
                                    <p className="text-sm text-gray-600">Donor</p>
                                    <p className="font-medium">{match.donor.name}</p>
                                    <p className="text-sm">Blood Type: {match.donor.bloodType}</p>
                                </div>

                                <div className="text-center self-center">
                                    <span className="block">→</span>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Recipient</p>
                                    <p className="font-medium">{match.recipient.name}</p>
                                    <p className="text-sm">Blood Type: {match.recipient.bloodType}</p>
                                </div>
                            </div>

                            <div className="text-sm text-gray-500 mt-2">
                                Matched: {new Date(match.createdAt).toLocaleString()}
                            </div>

                            <button
                                className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                                onClick={() => alert(`View details for match #${match.id}`)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
