import React from 'react';

interface MenomicsPlateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-amber-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-amber-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);


const MenomicsPlateModal: React.FC<MenomicsPlateModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const menomicsPlateDiagram = `
                      MENOMICS — META-LAW LAYER
     (The governing principles that stabilize, preserve, and unify systems)

                   ONE SPELLING → THREE DIMENSIONS
     ---------------------------------------------------------------
      /mə-NO-miks/   →   NOMIC LAW      → structure/order/system-law
      /ME-no-miks/   →   MEMORY LAW     → retention/continuity coherence
      /NE-no-miks/   →   MIND LAW       → cognition/understanding models
     ---------------------------------------------------------------
────────────────────────────────────────
A) THE THREE FACES OF MENOMICS
────────────────────────────────────────
┌─────────────────────────────────────────────────────────────┐
│ 1. MENOMICS (pronounced: mə-NO-miks)                        │
│    "Nomic-Law"                                              │
│    The structural ordering principle:                       │
│    • system coherence                                        │
│    • category stability                                      │
│    • lawful organization                                     │
│    Ensures systems behave consistently and predictably.      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 2. MENOMICS (pronounced: ME-no-miks)                        │
│    "Memory-Law"                                             │
│    The continuity-preserving principle:                     │
│    • meaning retention                                       │
│    • semantic stability                                      │
│    • etymological coherence                                  │
│    Ensures meaning persists through time.                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 3. MENOMICS (pronounced: NE-no-miks)                        │
│    "Mind-Law"                                               │
│    The cognitive ordering principle:                        │
│    • conceptual coherence                                    │
│    • understanding architectures                              │
│    • interpretive stability                                  │
│    Ensures the mind forms stable, accurate meaning models.   │
└─────────────────────────────────────────────────────────────┘
────────────────────────────────────────
B) MENOMICS APPLIED TO THE ENTIRE LANGUAGE SYSTEM
────────────────────────────────────────
MENOMICS governs:

• Grapheme systems  → Graphemenomics
• Phoneme systems   → Phonemenomics
• Morpheme systems  → Morphemenomics
• Lexeme systems    → Lexemenomics
• Sememe systems    → Sememenomics
• Pragmeme systems  → Pragmemonomics
• Mnēma systems     → Mnēmamenomics
• Pneuma systems    → Pneumamenomics
Each is stabilized by all three layers:
             NOMOS          MNĒMA          NOOS
       (structure-law)   (memory-law)   (mind-law)

────────────────────────────────────────
C) MENOMICS FULL META-LAW MAP
────────────────────────────────────────
┌────────────────────────────────────────────────────┐
│ MENOMICS META-LAWS                                 │
├────────────────────────────────────────────────────┤
│ 1. STRUCTURAL LAW (Nomos)                          │
│    • defines boundaries                             │
│    • constrains systems                              │
│    • enforces order                                  │
├────────────────────────────────────────────────────┤
│ 2. MEMORY LAW (Mnēma)                               │
│    • preserves meanings                              │
│    • stabilizes categories                           │
│    • retains identity                                │
├────────────────────────────────────────────────────┤
│ 3. MIND LAW (Noos)                                   │
│    • ensures cognitive coherence                     │
│    • maintains interpretive stability                │
│    • supports understanding                          │
└────────────────────────────────────────────────────┘

────────────────────────────────────────
D) THE MENOMICS RECURSION LOOP
────────────────────────────────────────
            ┌──────────────┐
            │  NOMIC LAW   │
            │ (Structure)  │
            └──────┬───────┘
                   ▼
            ┌──────────────┐
            │ MEMORY LAW   │
            │ (Mnēma)      │
            └──────┬───────┘
                   ▼
            ┌──────────────┐
            │  MIND LAW    │
            │ (Noos)       │
            └──────┬───────┘
                   ▼
       [MENOMICS — ALL THREE DIMENSIONS]
────────────────────────────────────────
E) ULTIMATE SYNTHESIS (MENOMICS IN ONE LINE)
────────────────────────────────────────
MENOMICS = NOMOS + MNĒMA + NOOS
         = (law) + (memory) + (mind)
         = structural + temporal + cognitive coherence
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
                        MENOMICS: THE META-LAW PLATE
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
                        The highest and deepest layer of the linguistic architecture. This is the meta-law that governs coherence, memory, mind, continuity, recursion, and the lawful stability of all language systems.
                    </p>
                    
                    <AsciiDiagram title="MENOMICS (META-LAW OF LANGUAGE SYSTEMS)" content={menomicsPlateDiagram} />
                </div>
            </div>
        </div>
    );
};

export default MenomicsPlateModal;
