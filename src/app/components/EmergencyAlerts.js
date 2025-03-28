const EmergencyAlerts = ({ emergencies }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Emergency Blood Requests</h2>
            <div className="space-y-4">
                {emergencies.map((emergency) => (
                    <div
                        key={emergency.id}
                        className="border-l-4 border-red-500 bg-red-50 p-4 rounded"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold">Blood Type: {emergency.bloodType}</span>
                                <p className="text-gray-600">{emergency.location}</p>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-800">
                                {emergency.urgency}
                            </span>
                        </div>
                    </div>
                ))}
                {emergencies.length === 0 && (
                    <p className="text-gray-500 text-center">No current emergency requests</p>
                )}
            </div>
        </div>
    );
};

export default EmergencyAlerts;
