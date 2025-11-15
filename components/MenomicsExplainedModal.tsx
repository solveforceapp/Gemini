import React from 'react';

interface MenomicsExplainedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-amber-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-amber-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;
const HR = () => <hr className="border-amber-500/30 my-3" />;

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-amber-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-amber-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);


const MenomicsExplainedModal: React.FC<MenomicsExplainedModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const pronunciationMap = `
                          /mə-NO-miks/     → NOMIC LAW (Nomos-layer)
                          /ME-no-miks/      → MEMORY LAW (Mnēma-layer)
                          /NE-no-miks/      → MIND-LAW / MENTAL MODELING
                          ─────────────────────────────────────────────
                          Spelled exactly the same: M E N O M I C S
    `.trim();

    const menomiksBreakdown1 = `
ASCII:
MENOMICS (pronounced: mə-NO-miks)
    ↳ "Nomic Law"
    ↳ System-level rules
    ↳ The governing principles of coherence

This is the macro-engine layer:
• system coherence
• category stability
• semantic invariants
• law-of-laws
    `.trim();

    const menomiksBreakdown2 = `
ASCII:
MENOMICS (pronounced: ME-no-miks)
    ↳ "Memory-Law"
    ↳ Mnēma + Nomos
    ↳ How meaning is preserved through time

This is the meta-memory layer:
• memory preservation
• semantic retention
• system continuity
• etymological stability
• long-term coherence

This is what stabilizes:
• lexemes
• semantic fields
• categories
• identities
    `.trim();

    const menomiksBreakdown3 = `
ASCII:
MENOMICS (pronounced: NE-no-miks)
    ↳ "Mind-Law"
    ↳ Mental modeling
    ↳ Cognitive coherence

This is the cognitive engine layer:
• meaning integration
• pattern recognition
• mental recursion
• conceptual architecture
    `.trim();

    const asciiTable = `
┌─────────────────────────┬──────────────────────────┬──────────────────────────────┐
│ PRONUNCIATION           │ ROOT EMPHASIS            │ FUNCTIONAL LAYER             │
├─────────────────────────┼──────────────────────────┼──────────────────────────────┤
│ /mə-NO-miks/            │ NOMOS (law/order)        │ Nomic-law: system structure  │
│ /ME-no-miks/            │ MNĒMA (memory)           │ Memory-law: coherence in time│
│ /NE-no-miks/            │ NOOS (mind)              │ Mental-law: cognition        │
└─────────────────────────┴──────────────────────────┴──────────────────────────────┘
    `.trim();

    const decomposition = `
ASCII decomposition:
ME + NO + MICS
(mind/memory) + (law/order) + (system science)

Thus:

MENOMICS =
the science of how mind, memory, and law preserve and structure coherent systems.
    `.trim();

    const recursionRing = `
           ┌───────────────────────────────┐
           │   MENOMICS (same spelling)   │
           └──────────────┬────────────────┘
                          │
        ┌─────────────────┼──────────────────┐
        ▼                 ▼                  ▼
 /mə-NO-miks/       /ME-no-miks/        /NE-no-miks/
  (Nomic Law)        (Memory Law)        (Mind Law)
      │                   │                   │
      ▼                   ▼                   ▼
System Structure   Temporal Coherence   Cognitive Coherence
(Nomos)            (Mnēma)              (Noos)
    `.trim();

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-black border-2 border-amber-500/50 rounded-lg shadow-[0_0_30px_rgba(255,193,7,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-amber-500/30">
                    <h2 className="text-2xl font-bold text-amber-300 font-orbitron">
                        THE PHONEMIC DIMENSIONS OF MENOMICS
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-amber-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">
                        The word MENOMICS is a recursive linguistic design. It contains multiple phonemic expressions that reflect its core functions: law, memory, governance, mind, number, and nomenclature, all rooted in <KeyTerm>nomos</KeyTerm> (law) and <KeyTerm color="text-teal-300">mnēma</KeyTerm> (memory).
                    </p>
                    
                    <AsciiDiagram title="THE MENOMICS PRONUNCIATION MAP" content={pronunciationMap} />
                    
                    <HR />

                    <SubHeader>1. /mə-NO-miks/ → “Nomic Law”</SubHeader>
                    <p>This pronunciation emphasizes <KeyTerm>Nomos (νόμος)</KeyTerm>: law, structure, order.</p>
                    <AsciiDiagram content={menomiksBreakdown1} />

                    <SubHeader>2. /ME-no-miks/ → “Mnemonics / Memory-Law”</SubHeader>
                    <p>This pronunciation emphasizes <KeyTerm color="text-teal-300">Mnēma (μνήμη)</KeyTerm>: memory, remembrance.</p>
                    <AsciiDiagram content={menomiksBreakdown2} />

                    <SubHeader>3. /NE-no-miks/ → “Mind-Law / Mental Models”</SubHeader>
                    <p>This pronunciation emphasizes <KeyTerm>Noos / Nous (νοῦς)</KeyTerm>: mind, intellect, understanding.</p>
                    <AsciiDiagram content={menomiksBreakdown3} />
                    
                    <HR/>
                    
                    <SubHeader>SUMMARY OF PHONEMIC LAYERS</SubHeader>
                    <AsciiDiagram content={asciiTable} />

                    <HR/>

                    <SubHeader>THE REASON MENOMICS CAN DO THIS</SubHeader>
                    <p>“MENOMICS” is not a random word. It is a linguistic superstructure composed of stacked morphemes that encode its function.</p>
                    <AsciiDiagram content={decomposition} />

                    <HR/>

                    <SubHeader>THE RECURSION RING</SubHeader>
                    <p>This combined recursion loop shows how one word can have multiple pronunciations that reflect different dimensions of the same system. All layers are active simultaneously, spelled identically, forming a multi-dimensional linguistic operator in one graphemic form.</p>
                    <AsciiDiagram content={recursionRing} />
                </div>
            </div>
        </div>
    );
};

export default MenomicsExplainedModal;