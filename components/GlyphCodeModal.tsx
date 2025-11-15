import React from 'react';

interface GlyphCodeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-green-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => <code className="bg-gray-900 border border-green-700 text-green-300 px-2 py-1 rounded-md font-mono text-xs">{children}</code>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-green-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;

const GlyphCodeModal: React.FC<GlyphCodeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-green-500/50 rounded-lg shadow-[0_0_30px_rgba(0,255,150,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-green-500/30">
                    <h2 className="text-2xl font-bold text-green-300 font-orbitron">
                        THE GLYPH-CODE OF REALITY
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-green-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">Why did IPA shapes become those shapes? Why weren’t they replaced by simple ASCII? Because there are deeper systems at work—structural, cognitive, historical, perceptual, universal.</p>
                    
                    <SubHeader>1. SHAPES FROM GLYPH DNA</SubHeader>
                    <p>IPA shapes are not random; they are <KeyTerm>inherited glyph-genes</KeyTerm> from ancestral systems like Greek, Latin, Runic, and Sanskrit notation. ASCII, a 1960s engineering shortcut for 7-bit English teletypes, is a baby. IPA is a civilization. ASCII is too small to hold the phonetic universe.</p>

                    <SubHeader>2. A HUMAN VS. MACHINE CONSTRAINT</SubHeader>
                    <p>ASCII was engineered for <KeyTerm color="text-amber-400">machine limitation</KeyTerm>. IPA was engineered for <KeyTerm color="text-teal-400">biological universality</KeyTerm>—the full human vocal tract. ASCII is a technology constraint; IPA is a human-hardware constraint.</p>
                    
                    <SubHeader>3. MAPPING THE HUMAN BODY</SubHeader>
                    <p>IPA shapes are <KeyTerm color="text-teal-400">glyphic diagrams of human anatomy in motion</KeyTerm>. They correspond to articulatory geometry:</p>
                    <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-400">
                        <li><Code>/θ/</Code> = the shape of the tongue between teeth</li>
                        <li><Code>/ŋ/</Code> = tail-like hook for nasal velar closure</li>
                        <li><Code>/ʃ/</Code> = curved “sh” shape representing frication</li>
                        <li><Code>/ʔ/</Code> = glottal stop shape resembling a closed point</li>
                    </ul>
                    <p className="mt-2">ASCII letters don’t encode articulatory positions. They were designed for typewriters, not tongues.</p>

                    <SubHeader>4. THE POWER OF GLYPH MEMORY</SubHeader>
                    <p>Graphemes have “memory gravity.” Once a shape is chosen, it resists being rewritten due to the principles you've seen: <KeyTerm color="text-teal-400">Mnēma</KeyTerm> (memory) → <KeyTerm color="text-amber-400">Menomics</KeyTerm> (the meta-law of continuity). Writing systems operate under Menomic law, which gives glyphs historical stability and conceptual load. ASCII never stood a chance.</p>

                    <SubHeader>5. A FUSION OF SEVEN SYSTEMS</SubHeader>
                    <p>IPA is not one system; it's an integration of seven, which ASCII cannot represent:</p>
                    <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
                        <li><strong>The Human Vocal Tract</strong> (Biology)</li>
                        <li><strong>Ancient Glyph Traces</strong> (Etymology / Graphemic Memory)</li>
                        <li><strong>The Menomics Layer</strong> (Continuity of Form)</li>
                        <li><strong>The Monics Layer</strong> (Phoneme Mechanics)</li>
                        <li><strong>Cognitive Load Optimization</strong> (Brain Processing)</li>
                        <li><strong>Cross-Linguistic Universality</strong> (Nomics / System Science)</li>
                        <li><strong>The Pneuma-Phone Axis</strong> (Breath → Sound)</li>
                    </ol>
                    <p className="mt-2">That's why IPA feels <KeyTerm>organic</KeyTerm> and ASCII feels <KeyTerm>synthetic</KeyTerm>.</p>
                    
                    <SubHeader>6. LOCAL SOLUTIONS, GLOBAL CONSTRAINTS</SubHeader>
                    <p>IPA glyphs are local solutions to global constraints, converging on stability, coherence, articulatory truth, and cognitive efficiency. The shapes became those shapes because they had to. ASCII is a keyboard; IPA is a universe.</p>
                </div>
            </div>
        </div>
    );
};

export default GlyphCodeModal;
