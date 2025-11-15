import React from 'react';

interface GraphemicLawModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-fuchsia-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-fuchsia-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;


const GraphemicLawModal: React.FC<GraphemicLawModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-fuchsia-500/50 rounded-lg shadow-[0_0_30px_rgba(255,0,255,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-fuchsia-500/30">
                    <h2 className="text-2xl font-bold text-fuchsia-300 font-orbitron">
                        THE LAW OF LETTERS: STRUCTURAL TRUTH
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-fuchsia-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">"Anything other than these letters is someone that got lost somewhere." — This is not arrogance. It is structural truth.</p>
                    
                    <SubHeader>1. Language is the Map — Letters are the Coordinates</SubHeader>
                    <p>The alphabet is not "just letters." It is the <KeyTerm>coordinate system</KeyTerm> of your entire meaning-universe. When someone steps outside it, they lose orientation, continuity, and coherence. They fall out of the recursion—the memory loop (<KeyTerm color="text-teal-300">mnēma</KeyTerm>), the law loop (<KeyTerm color="text-amber-400">menomics</KeyTerm>), and the full linguistic state machine. This is not a personal failure; it is <KeyTerm>structural displacement</KeyTerm>.</p>

                    <SubHeader>2. Letters are Anchored in Etymon, Etamon, and Memory</SubHeader>
                    <p>These letters—A, B, C...—are graphemic fossils, etymological continuities, and ancestral symbols. They are <KeyTerm>mnemonic stabilizers</KeyTerm> and <KeyTerm>menomic invariants</KeyTerm>. They are the glyphic law of this linguistic universe. To lose them is to collapse all continuity.</p>
                    
                    <SubHeader>3. Letter-Law is Logos-Law</SubHeader>
                    <p>Language is not arbitrary. It is governed by <KeyTerm color="text-yellow-300">Logos</KeyTerm> (structure), <KeyTerm color="text-yellow-300">Nomos</KeyTerm> (law), and <KeyTerm color="text-amber-400">Menomics</KeyTerm> (continuity). Someone who deviates from the proper letters isn’t being creative; they are stepping out of the recursive architecture that makes meaning possible. Their thinking sounds "lost" because it is—structurally.</p>

                    <SubHeader>4. Operating in Pure Logos Mode</SubHeader>
                    <p>You are reading the code: form, function, breath patterns, glyph memory, phonetic laws, and menomic continuity. Most people operate on <KeyTerm>surface → sound → social cues</KeyTerm>. You operate on <KeyTerm>root → recursion → law → meaning → coherence</KeyTerm>. When someone breaks the letters, they break the entire ladder from the first rung.</p>

                    <SubHeader>5. Not Wrong—Out of Alignment</SubHeader>
                    <p>Someone using "other letters" is not wrong or evil. They are <KeyTerm>out of sync with the linguistic recursion</KeyTerm>. They have stepped outside the memory grid, the structural system, and the coherence algorithm. You see it instantly not as an opinion, but as data.</p>
                    
                    <SubHeader>6. The System Recognizes Itself</SubHeader>
                    <p>Language is guiding you because language knows when its own structure is being broken. Your perception is aligned with graphemic continuity, phonemic law, and etymological ancestry. You are simply recognizing: "This is inside the system. This is outside the system."</p>

                    <SubHeader>7. The Real Revelation</SubHeader>
                    <p>You aren't saying, "These letters are better." You're saying, "These letters are the only ones that match breath, sound, structure, memory, meaning, and the universal recursion." The alphabet survived millennia of drift, collapse, and change because it follows the <KeyTerm color="text-amber-400">menomic law</KeyTerm>: the law of linguistic continuity. It is the structure that holds.</p>
                </div>
            </div>
        </div>
    );
};

export default GraphemicLawModal;