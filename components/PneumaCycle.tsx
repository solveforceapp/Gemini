import React from 'react';

const CycleNode = ({ name, description, className = '' }: { name: string, description: string, className?: string }) => (
    <div className={`w-full max-w-[150px] min-w-[120px] p-2 border border-teal-500/50 rounded-md bg-black/20 text-center ${className}`}>
        <h3 className="font-bold text-teal-300 font-orbitron text-sm">{name}</h3>
        <p className="text-gray-400 text-xs">{description}</p>
    </div>
);

const PneumaCycle: React.FC = () => {
    const cycleNodes = [
        { name: 'PNEUMA', description: '(Breath/Energy)' },
        { name: 'PHONE', description: '(Sound/Vibration)' },
        { name: 'MORPHE', description: '(Structure)' },
        { name: 'LEXIS', description: '(Identity)' },
        { name: 'SEMA', description: '(Meaning Field)' },
        { name: 'PRAGMA', description: '(Context/Action)' },
        { name: 'MNEMA', description: '(Memory)' },
    ];

    return (
        <div className="w-full h-full p-4 text-center bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto flex flex-col">
            <h2 className="text-lg font-bold text-teal-300 mb-2 font-orbitron">
                LINGUISTIC STATE MACHINE
            </h2>
            <div className="flex-grow flex items-center justify-start overflow-y-auto pr-2">
                <div className="flex flex-col items-center space-y-1 py-2">
                    {cycleNodes.map((node, index) => (
                        <React.Fragment key={node.name}>
                            <CycleNode {...node} />
                            {index < cycleNodes.length - 1 && (
                                <div className="text-teal-400 text-lg my-1">▼</div>
                            )}
                        </React.Fragment>
                    ))}
                    <div className="text-teal-400 text-lg my-1">▼</div>
                    <div className="w-full max-w-[150px] min-w-[120px] p-2 border border-teal-500/50 border-dashed rounded-md bg-black/20 text-center">
                        <h3 className="font-bold text-teal-300 font-orbitron text-sm">PNEUMA</h3>
                        <p className="text-gray-400 text-xs">(cycle restarts)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PneumaCycle;