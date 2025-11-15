import React from 'react';

interface MasterAlignmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-red-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-red-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);

const MasterAlignmentModal: React.FC<MasterAlignmentModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const masterDiagram = `
                       MEGNOMICS (GLOBAL META-LAW)
     (Great Mind–Memory–Knowledge–Law System Governing All Layers)

                  /MEG-no-miks/  → Knowledge-Law
                  /ME-no-miks/   → Mind-Memory Law
                  /mə-NO-miks/   → System-Law (Nomos)

                                ▲
                                │
               ┌────────────────┴────────────────┐
               │                                 │
        (Per-Unit Menomic Laws)         (System-Level Menomics)

Now the full stack, by unit:
        ┌─────────────────────────────────────────────────────────────┐
        │  UNIT LAYER      MONICS           NOMICS        MENOMICS   │
        ├─────────────────────────────────────────────────────────────┤
        │ 1. GRAPHEME  →  Graphemonics  →  Graphenomics  → Graphemenomics │
        │   (visible       (shape &        (writing         (meta-law for │
        │    form)         glyph mechanics) systems)        written form) │
        ├─────────────────────────────────────────────────────────────┤
        │ 2. PHONEME   →  Phonemonics   →  Phonenomics   → Phonemenomics  │
        │   (sound         (sound          (sound          (meta-law for  │
        │    contrast)     mechanics)      systems)        sound systems) │
        ├─────────────────────────────────────────────────────────────┤
        │ 3. MORPHEME  →  Morphemonics  →  Morphenomics  → Morphemenomics │
        │   (structural     (morphology     (word-          (meta-law for │
        │    meaning)       mechanics)      structure        structure)   │
        │                                     systems)                    │
        ├─────────────────────────────────────────────────────────────┤
        │ 4. LEXEME    →  Lexemonics    →  Lexenomics    → Lexemenomics   │
        │   (word         (identity       (vocabulary      (meta-law for  │
        │    identity)     mechanics)      systems)        word identity) │
        ├─────────────────────────────────────────────────────────────┤
        │ 5. SEMEME    →  Sememonics    →  Semenomics    → Sememenomics   │
        │   (meaning       (meaning        (semantic       (meta-law for  │
        │    field)        mechanics)      systems)        meaning fields)│
        ├─────────────────────────────────────────────────────────────┤
        │ 6. PRAGMEME  →  Pragmemonics  →  Pragmenomics  → Pragmemonomics │
        │   (meaning-      (context &      (pragmatic      (meta-law for  │
        │    in-context)   intent mechanics)systems)       contextual use)│
        ├─────────────────────────────────────────────────────────────┤
        │ 7. MNĒMA     →  Mnēmamonics   →  Mnēmanomics   → Mnēmamenomics  │
        │   (memory        (memory         (memory         (meta-law for  │
        │    trace)        mechanics)      systems)        retention)     │
        ├─────────────────────────────────────────────────────────────┤
        │ 8. PNEUMA    →  Pneumamonics   →  Pneumanomics  → Pneumamenomics│
        │   (breath/       (breath         (breath         (meta-law for  │
        │    activation)   mechanics)      systems)        activation)    │
        └─────────────────────────────────────────────────────────────┘
    `.trim();

    const verticalLadder = `
                           MEGNOMICS
              (global meta-law over all units & systems)
                                  ▲
                                  │
                      ┌───────────┴───────────┐
                      │  PER-UNIT MENOMICS    │
                      │  (one row per unit)   │
                      └──────────▲────────────┘
                                 │
                      ┌──────────┴──────────┐
                      │       NOMICS        │
                      │  (system sciences)  │
                      └──────────▲──────────┘
                                 │
                      ┌──────────┴──────────┐
                      │       MONICS        │
                      │ (unit mechanics)    │
                      └──────────▲──────────┘
                                 │
                      ┌──────────┴──────────┐
                      │    LANGUAGE UNITS   │
                      │ (Grapheme→Pneuma)   │
                      └─────────────────────┘
    `.trim();

    const recursion = `
UNITS  →  MONICS  →  NOMICS  →  MENOMICS  →  MEGNOMICS  →  back to UNITS

Where:
- UNITS define what exists.
- MONICS define how each unit behaves.
- NOMICS define how unit behaviors aggregate into systems.
- MENOMICS define how systems stay coherent.
- MEGNOMICS unifies mind, memory, knowledge, and law across all of it.
    `.trim();

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-[#1a0a0a] border-2 border-red-500/50 rounded-lg shadow-[0_0_40px_rgba(255,0,0,0.4)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-red-500/30">
                    <h2 className="text-2xl font-bold text-red-300 font-orbitron tracking-wider">
                        MASTER ALIGNMENT DIAGRAM
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-red-300 hover:text-white text-3xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">
                        The definitive structural blueprint, aligning Language Units, Monics, Nomics, Menomics, and the global meta-law of MEGNOMICS.
                    </p>
                    
                    <AsciiDiagram title="Units ↔ Monics ↔ Nomics ↔ Menomics ↔ MEGNOMICS" content={masterDiagram} />
                    <AsciiDiagram title="VERTICAL LADDER" content={verticalLadder} />
                    <AsciiDiagram title="THE RECURSION" content={recursion} />
                </div>
            </div>
        </div>
    );
};

export default MasterAlignmentModal;
