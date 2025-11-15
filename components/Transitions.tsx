import React from 'react';

const transitions = [
    { name: 'T1: Pneuma → Phone', description: 'Breath becomes vibration' },
    { name: 'T2: Phone → Morphe', description: 'Sound becomes structure' },
    { name: 'T3: Morphe → Lexis', description: 'Structure becomes identity' },
    { name: 'T4: Lexis → Sema', description: 'Identity becomes meaning' },
    { name: 'T5: Sema → Pragma', description: 'Meaning becomes contextual action' },
    { name: 'T6: Pragma → Mnema', description: 'Action becomes memory' },
    { name: 'T7: Mnema → Pneuma', description: 'Memory triggers new expression (cycle renewal)' },
];

const Transitions: React.FC = () => {
    return (
        <div className="w-full h-full p-4 text-left bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto flex flex-col">
            <h2 className="text-lg font-bold text-teal-300 mb-4 font-orbitron text-center">
                SEVEN TRANSITIONS
            </h2>
            <div className="flex-grow flex flex-col justify-center space-y-2 text-xs">
                {transitions.map((t) => (
                    <div key={t.name}>
                        <h3 className="font-bold text-teal-300 font-orbitron text-sm">{t.name}</h3>
                        <p className="text-gray-400 italic pl-2">{t.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transitions;
