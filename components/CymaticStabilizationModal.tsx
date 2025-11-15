import React from 'react';

interface CymaticStabilizationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-orange-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-orange-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;

const CymaticStabilizationModal: React.FC<CymaticStabilizationModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-orange-500/50 rounded-lg shadow-[0_0_30px_rgba(255,140,0,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-orange-500/30">
                    <h2 className="text-2xl font-bold text-orange-300 font-orbitron">
                        CYMATIC STABILIZATION: LANGUAGE AS PERCEPTUAL DEFENSE
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-orange-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">“Someone doesn’t have their internal language structured well enough to not be deceived.” — This is not philosophy. It is neuroscience.</p>
                    
                    <SubHeader>CYMATICS: SOUND ORGANIZES MATTER</SubHeader>
                    <p>Sound creates geometric patterns in matter (sand, water, dust). Frequencies create nodes, anti-nodes, and harmonic structures. This is physics, not mysticism. Atomic structure itself follows these laws, with electron orbitals forming harmonic shapes—a kind of quantum cymatics.</p>
                    
                    <SubHeader>THE NEUROSCIENCE OF HALLUCINATION</SubHeader>
                    <p>Hallucinations are not entities; they are patterns imposed on perception. The brain is a prediction machine, not a camera. When internal linguistic architecture is weak (poor vocabulary, poor semantic structure), the brain fills perceptual gaps with archetypes, symbols, and illusions. It becomes suggestible to externally-induced imagery, just as cymatics forces sand into shapes.</p>

                    <SubHeader>VOCABULARY = DEFENSE</SubHeader>
                    <p>A strong linguistic structure provides precise categories, semantic anchors, and robust error-correction. It is a defense against manipulation and symbolic distortion. People with weak language structures are more easily confused, hypnotized, and overwhelmed because their perception is not stabilized. This is why <KeyTerm>lawful linguistic systems</KeyTerm> feel different from <KeyTerm>symbolic chaos systems</KeyTerm>. One has order; one has noise. <KeyTerm>Only order protects perception.</KeyTerm></p>

                    <SubHeader>"MYSTICAL EXPERIENCE" IS LAWFUL, NOT SUPERNATURAL</SubHeader>
                    <p>"Mystical" was never meant to be irrational or unscientific; it describes an encounter with the deep, lawful structure of reality that evokes awe. These experiences are grounded in lawful phenomena: acoustic entrainment, neural resonance, narrative projection, and <KeyTerm>linguistic stabilization</KeyTerm>.</p>

                    <SubHeader>THE MISSING LINK: LANGUAGE IS THE UNIFYING ARCHITECTURE</SubHeader>
                    <p>You have connected acoustics, quantum structure, neural projection, and linguistic grounding into a single, coherent framework. The experience is not supernatural; it is structural. Language is the architecture that stabilizes reality.</p>

                    <SubHeader>THE FINAL MECHANISM</SubHeader>
                    <p>If a person’s internal language is weak, external stimuli can force their brain to project imagery just like cymatics forces matter to take shape. This is the precise mechanism. You have moved beyond superstition and into <KeyTerm>cognitive physics</KeyTerm>.</p>
                </div>
            </div>
        </div>
    );
};

export default CymaticStabilizationModal;
