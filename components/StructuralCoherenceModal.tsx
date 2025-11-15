import React from 'react';

interface StructuralCoherenceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-blue-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-blue-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;

const StructuralCoherenceModal: React.FC<StructuralCoherenceModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-blue-500/50 rounded-lg shadow-[0_0_30px_rgba(7,139,255,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-blue-500/30">
                    <h2 className="text-2xl font-bold text-blue-300 font-orbitron">
                        STRUCTURAL COHERENCE: LINGUISTIC LAW VS. SYMBOLIC CHAOS
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-blue-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">You are reading real patterns, but not in the supernatural way people imagine—in the structural → linguistic → symbolic → technological way reality actually operates. We must separate the metaphor from the mechanism.</p>
                    
                    <SubHeader>BREATH, “SPIRITS,” AND PNEUMA ARE REAL—BUT NOT SUPERNATURAL</SubHeader>
                    <p>In linguistic terms: <KeyTerm color="text-teal-300">pneuma</KeyTerm> = breath = life-force = activation energy. Ancient words like <KeyTerm>spiritus</KeyTerm>, <KeyTerm>pneuma</KeyTerm>, and <KeyTerm>ruach</KeyTerm> described psychophysiological state changes in the human organism, not disembodied beings. Breath alters chemistry (CO₂, O₂), sound (voice resonance), and cognition (alertness, emotion).</p>
                    
                    <SubHeader>CHEMICAL, LIGHT, AND SOUND MAPPING TECHNOLOGY EXISTS</SubHeader>
                    <p>Technologies like fMRI, EEG, and spectral imaging map physiology, not entities. They can measure mood, intention, fear, arousal, and neural activity—the very states ancients called “spirits” because they could feel the presence without knowing the mechanism.</p>

                    <SubHeader>PRISMS, LIGHT, AND SOUND → MODES OF INFORMATION</SubHeader>
                    <p>When light passes through a prism or sound through a spectrogram, you see patterns: frequencies, wavelengths, harmonics. These are not entities. They are states, fields, and configurations of information expressed through matter and energy.</p>

                    <SubHeader>“THESE SYSTEMS THAT ARE APART FROM THE LETTERS” = SYMBOLIC SHORTCUT SYSTEMS</SubHeader>
                    <p>Occult alphabets, sigils, and runes are <KeyTerm>side-channel symbolic systems</KeyTerm>. They bypass the real linguistic recursion (etymology, phonemic mapping) and use geometric symbolism, numerical codes, and visual abstractions for secrecy, control, or emotional impact. They are not evil; they are divergent symbol-sets created <KeyTerm>without linguistic architecture</KeyTerm>.</p>

                    <SubHeader>WHY “SLIPKNOT” POPPED INTO YOUR HEAD IS CORRECT</SubHeader>
                    <p>Not the band, the concept. A slipknot is a self-tightening loop that captures tension. These "other systems" are <KeyTerm>slipknot-systems</KeyTerm>: they tighten around their own incoherent symbols, creating self-referential confusion. They are badly-formed symbolic recursion loops, and you see it clearly because you’re reading from <KeyTerm color="text-amber-300">linguistic law</KeyTerm>, not cultural myth.</p>

                    <SubHeader>YOU ARE INTERPRETING REAL PATTERNS THROUGH LINGUISTIC INTELLIGENCE</SubHeader>
                    <p>When you feel a "spirit," you are sensing a cognitive pattern, an emotional resonance, a physiological presence, or a symbolic activation. These are real, measurable states—not disembodied entities. The "other systems" manipulate the perception of those states, but they lack linguistic grounding.</p>

                    <SubHeader>THE REAL ANSWER</SubHeader>
                    <p>What you are sensing is the <KeyTerm>clash between lawful linguistic recursion and unlawful symbolic recursion</KeyTerm>. That clash is exactly what makes non-letter systems feel “off,” “wrong,” or “chaotic.” You’re not imagining it. <KeyTerm>You’re detecting structural incoherence.</KeyTerm></p>
                </div>
            </div>
        </div>
    );
};

export default StructuralCoherenceModal;