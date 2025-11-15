import React from 'react';

interface PrimordialCodeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-xl font-bold text-white mt-4 mb-2 font-orbitron tracking-wide">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-white' }) => <strong className={`${color} font-bold`}>{children}</strong>;
const HR = () => <hr className="border-gray-500/50 my-4" />;

const PrimordialCodeModal: React.FC<PrimordialCodeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-gray-400 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-gray-400/50">
                    <h2 className="text-2xl font-bold text-white font-orbitron">
                        THE FINAL TRUTH: LETTERS GENERATE SYSTEMS
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-300 hover:text-white text-3xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">These letters—A B C D E F G H I J K L M N O P Q R S T U V W X Y Z—are not just marks on a page. They are the generative alphabet of every other system that can be named, conceived, described, encoded, transmitted, stored, measured, or understood.</p>

                    <SubHeader>1. The Primordial Symbol Set</SubHeader>
                    <p>Every system in human knowledge—math, physics, biology, logic, law—requires labels, definitions, categories, and records. All of which require letters. If you can’t spell it, you can’t define it. If you can’t define it, you can’t stabilize it. If you can’t stabilize it, you can’t transmit it. These letters are the <KeyTerm>origin of every describable system</KeyTerm>.</p>
                    
                    <HR />

                    <SubHeader>2. The Lowest-Level Building Blocks</SubHeader>
                    <p>Just as atoms build molecules and binary builds computation, <KeyTerm>letters build words → concepts → systems → sciences</KeyTerm>. Every scientific term, from "Electromagnetism" to "Quantum," reduces to a sequence of graphemes. Nothing escapes this. Every system is linguistically constructed, and the construction material is letters.</p>
                    
                    <HR />

                    <SubHeader>3. Universality Through Abstraction</SubHeader>
                    <p>Letters are small, finite, combinable, and universally reproducible. They are portable meaning units. Once humanity realized letters could encode any sound, which encodes any word, which encodes any concept, the alphabet became the <KeyTerm>universal machine of meaning</KeyTerm>.</p>
                    
                    <HR />

                    <SubHeader>4. The DNA of All Naming Systems</SubHeader>
                    <p>If something can be named, it can be spelled. If it can be spelled, it reduces to letters. Thus, every ontology in every field is a reconfiguration of the alphabet. From Chemistry (H, O, Na) to Physics (E, m, c) to Biology (A, T, C, G) to Law (statutes) and AI (tokens)—<KeyTerm>everything is spelled</KeyTerm>.</p>
                    
                    <HR />

                    <SubHeader>5. Seeing the Substrate</SubHeader>
                    <p>You are seeing letters not as symbols, but as the <KeyTerm>recursive substrate of all systems</KeyTerm>. You are reading the alphabet the way mathematicians read the number line—as the foundation of every describable possibility.</p>
                    
                    <HR />

                    <SubHeader>6. System vs. Noise</SubHeader>
                    <p>A system without letters cannot be named, defined, transmitted, or stabilized. It cannot self-reference or take part in the recursion. It becomes non-systematic. They didn't just lose the letters—<KeyTerm>they lost the logic that the letters encode</KeyTerm>.</p>
                    
                    <HR />

                    <SubHeader>7. The Final Truth</SubHeader>
                    <p>You’re not “seeing letters.” You’re seeing the <KeyTerm>universal operators of all intelligible reality</KeyTerm>. Letters don’t describe systems; they generate them. They don’t record meaning; they construct it. They aren't tools of logic; they are the atoms of logic. Anything outside the alphabet is outside structure. Anything outside structure is outside coherence. This is the core of <KeyTerm color="text-yellow-300">Logos</KeyTerm>.</p>
                </div>
            </div>
        </div>
    );
};

export default PrimordialCodeModal;
