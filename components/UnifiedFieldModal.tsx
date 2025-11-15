import React from 'react';

interface UnifiedFieldModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-yellow-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-yellow-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;

const UnifiedFieldModal: React.FC<UnifiedFieldModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-yellow-500/50 rounded-lg shadow-[0_0_30px_rgba(255,255,0,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-yellow-500/30">
                    <h2 className="text-2xl font-bold text-yellow-300 font-orbitron">
                        THE UNIFIED FIELD: RESONANCE AS LAW
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-yellow-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">"A unified field cannot be expressed by one word. It must be expressed by the relationship between words. This is the linguistic analog of field equations."</p>
                    
                    <SubHeader>SONOLUMINESCENCE & PHOTOACOUSTICS: THE PHYSICAL BRIDGE</SubHeader>
                    <p>Physics demonstrates that sound and light are convertible. <KeyTerm>Sonoluminescence</KeyTerm> creates light from sound; <KeyTerm>photoacoustics</KeyTerm> creates sound from light. This is not a metaphor; it is a lawful conversion that proves a deep connection between vibration (sound), information (light), and structure (matter).</p>
                    
                    <SubHeader>GNOSIS IS INTEGRATED PERCEPTION</SubHeader>
                    <p>The root <KeyTerm>-gnosis</KeyTerm> means knowledge. <KeyTerm>Diagnosis</KeyTerm> (through-knowledge) and <KeyTerm>prognosis</KeyTerm> (before-knowledge) are forms of structural perception. Gnosis is not mystical; it is the brain's ability to integrate perception across modalities—to see the "light" in the "sound," the pattern in the noise. It is scientific, not supernatural.</p>

                    <SubHeader>LANGUAGE IS THE RESONANT ARCHITECTURE</SubHeader>
                    <p>The structure of language—with its binary contrasts, recursive loops, and relational grammar—perfectly mirrors the structure of a physical field. <KeyTerm>Coherent articulation creates a unified informational field</KeyTerm>. Language is the resonant architecture required to perceive and describe the universe.</p>

                    <SubHeader>EQUATIONS ARE SENTENCES</SubHeader>
                    <p>Physics requires language. Physical constants are <KeyTerm color="text-fuchsia-300">lexemes</KeyTerm> (e.g., 'c' for light speed). Mathematical operators are <KeyTerm color="text-fuchsia-300">morphemes</KeyTerm>. A physical law is a grammatically correct sentence. To unify physics, one must use a language that is itself unified, coherent, and grounded in lawful recursion.</p>

                    <SubHeader>THE UNIFIED FIELD IS LINGUISTIC + PHYSICAL</SubHeader>
                    <p>The final unification is found where a coherent meaning-system (language) and a resonant physical system (the universe) intersect. They are not separate; they are governed by the same universal laws of structure, resonance, and relation. This is the core of <KeyTerm color="text-amber-300">Logos</KeyTerm>.</p>
                    
                    <SubHeader>MYSTERY IS UNEXPLAINED STRUCTURE</SubHeader>
                    <p>What was once called "mystical" is the perception of a hidden, lawful pattern. You are not departing from science; you are witnessing the integration of science into the fundamental architecture of meaning itself.</p>
                </div>
            </div>
        </div>
    );
};

export default UnifiedFieldModal;