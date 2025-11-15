import React from 'react';

interface LinguisticEngineProps {
    onOpenStructuralCoherence: () => void;
    onOpenHolographicProjection: () => void;
    onOpenCymaticStabilization: () => void;
    onOpenUnifiedField: () => void;
    onOpenUnifieldimensions: () => void;
    onOpenSynchronizationArc: () => void;
    onOpenMasterAlignment: () => void;
    onOpenMetaScience: () => void;
    onOpenMathematicalTier: () => void;
    onOpenLogosAttunement: () => void;
}

const CycleNode = ({ name, description, className = '' }: { name: string, description: string, className?: string }) => (
    <div className={`w-full max-w-[150px] min-w-[120px] p-2 border border-teal-500/50 rounded-md bg-black/20 text-center ${className}`}>
        <h3 className="font-bold text-teal-300 font-orbitron text-sm">{name}</h3>
        <p className="text-gray-400 text-xs">{description}</p>
    </div>
);

const transitions = [
    { name: 'T1: Pneuma → Phone', description: 'Breath becomes vibration' },
    { name: 'T2: Phone → Morphe', description: 'Sound becomes structure' },
    { name: 'T3: Morphe → Lexis', description: 'Structure becomes identity' },
    { name: 'T4: Lexis → Sema', description: 'Identity becomes meaning' },
    { name: 'T5: Sema → Pragma', description: 'Meaning becomes contextual action' },
    { name: 'T6: Pragma → Mnema', description: 'Action becomes memory' },
    { name: 'T7: Mnema → Pneuma', description: 'Memory triggers new expression (cycle renewal)' },
];

const cycleNodes = [
    { name: 'PNEUMA', description: '(Breath/Energy)' },
    { name: 'PHONE', description: '(Sound/Vibration)' },
    { name: 'MORPHE', description: '(Structure)' },
    { name: 'LEXIS', description: '(Identity)' },
    { name: 'SEMA', description: '(Meaning Field)' },
    { name: 'PRAGMA', description: '(Context/Action)' },
    { name: 'MNEMA', description: '(Memory)' },
];


const LinguisticEngine: React.FC<LinguisticEngineProps> = ({ 
    onOpenStructuralCoherence, 
    onOpenHolographicProjection, 
    onOpenCymaticStabilization, 
    onOpenUnifiedField, 
    onOpenUnifieldimensions, 
    onOpenSynchronizationArc, 
    onOpenMasterAlignment,
    onOpenMetaScience,
    onOpenMathematicalTier,
    onOpenLogosAttunement
}) => {
    return (
        <div className="w-full h-full p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto flex flex-col">
            <h2 className="text-lg font-bold text-amber-300 mb-2 font-orbitron text-center">
                GOVERNING PRINCIPLES
            </h2>
            <div className="text-xs text-center border-b border-amber-500/30 pb-3 mb-3 space-y-2">
                 <div>
                    <p className="font-bold text-amber-300 font-orbitron">[LOGOS] <span className="font-normal text-gray-300">(Ordering Principle)</span></p>
                    <p className="text-gray-400 italic">governs all states</p>
                </div>
                <div>
                    <p className="font-bold text-amber-300 font-orbitron">[NOMOS] <span className="font-normal text-gray-300">(Constraint and Structure)</span></p>
                    <p className="text-gray-400 italic">governs all transitions</p>
                </div>
                <div>
                    <p className="font-bold text-amber-300 font-orbitron">[MENOMICS] <span className="font-normal text-gray-300">(Memory-Law)</span></p>
                    <p className="text-gray-400 italic">governs state stability & recursion</p>
                </div>
            </div>

            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pt-2">
                {/* Pneuma Cycle Part */}
                <div className="flex flex-col items-center">
                    <h3 className="text-base font-bold text-teal-300 mb-2 font-orbitron text-center">
                        STATE MACHINE
                    </h3>
                    <div className="flex flex-col items-center space-y-1">
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
                {/* Transitions Part */}
                <div className="flex flex-col">
                     <h3 className="text-base font-bold text-teal-300 mb-4 font-orbitron text-center">
                        TRANSITIONS
                    </h3>
                     <div className="flex-grow flex flex-col justify-center space-y-2 text-xs">
                        {transitions.map((t) => (
                            <div key={t.name}>
                                <h3 className="font-bold text-teal-300 font-orbitron text-sm">{t.name}</h3>
                                <p className="text-gray-400 italic pl-2">{t.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="mt-4 text-center border-t border-amber-500/30 pt-3 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <button
                    onClick={onOpenStructuralCoherence}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-blue-600 hover:bg-blue-700/50 hover:border-blue-400 hover:text-white text-blue-300 shadow-[0_0_10px_rgba(7,139,255,0.3)] hover:shadow-[0_0_20px_rgba(7,139,255,0.6)]"
                >
                    [LAW vs. CHAOS]
                </button>
                 <button
                    onClick={onOpenHolographicProjection}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-purple-600 hover:bg-purple-700/50 hover:border-purple-400 hover:text-white text-purple-300 shadow-[0_0_10px_rgba(192,132,252,0.3)] hover:shadow-[0_0_20px_rgba(192,132,252,0.6)]"
                >
                    [PROJECTION VS. ESSENCE]
                </button>
                 <button
                    onClick={onOpenCymaticStabilization}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-orange-600 hover:bg-orange-700/50 hover:border-orange-400 hover:text-white text-orange-300 shadow-[0_0_10px_rgba(255,140,0,0.3)] hover:shadow-[0_0_20px_rgba(255,140,0,0.6)]"
                >
                    [CYMATIC DEFENSE]
                </button>
                 <button
                    onClick={onOpenUnifiedField}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-yellow-500 hover:bg-yellow-600/50 hover:border-yellow-300 hover:text-white text-yellow-300 shadow-[0_0_10px_rgba(255,255,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,0,0.6)]"
                >
                    [UNIFIED FIELD]
                </button>
                <button
                    onClick={onOpenUnifieldimensions}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-gray-300 hover:bg-white/20 hover:border-white hover:text-white text-gray-200 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                >
                    [UNIFIELDIMENSIONS]
                </button>
                <button
                    onClick={onOpenSynchronizationArc}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-indigo-500 hover:bg-indigo-600/50 hover:border-indigo-300 hover:text-white text-indigo-300 shadow-[0_0_10px_rgba(129,140,248,0.3)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]"
                >
                    [SYNCHRONIZATION ARC]
                </button>
                 <button
                    onClick={onOpenMasterAlignment}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-red-600 hover:bg-red-700/50 hover:border-red-400 hover:text-white text-red-300 shadow-[0_0_10px_rgba(255,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
                >
                    [MASTER ALIGNMENT]
                </button>
                <button
                    onClick={onOpenMetaScience}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-lime-600 hover:bg-lime-700/50 hover:border-lime-400 hover:text-white text-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.3)] hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]"
                >
                    [LANGUAGE AS META-SCIENCE]
                </button>
                <button
                    onClick={onOpenMathematicalTier}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-rose-600 hover:bg-rose-700/50 hover:border-rose-400 hover:text-white text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.3)] hover:shadow-[0_0_20px_rgba(244,63,94,0.6)]"
                >
                    [LANGUAGE AS EQUATION]
                </button>
                 <button
                    onClick={onOpenLogosAttunement}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-yellow-300 hover:bg-yellow-400/50 hover:border-yellow-200 hover:text-white text-yellow-200 shadow-[0_0_10px_rgba(253,249,156,0.4)] hover:shadow-[0_0_20px_rgba(253,249,156,0.7)]"
                >
                    [LOGOS ATTUNEMENT]
                </button>
            </div>
        </div>
    );
};

export default LinguisticEngine;