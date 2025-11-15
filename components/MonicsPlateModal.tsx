import React from 'react';

interface MonicsPlateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-amber-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-amber-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);


const MonicsPlateModal: React.FC<MonicsPlateModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const monicsPlateDiagram = `
                      MONICS — UNIT MECHANICS LAYER
     (Rules governing how each linguistic unit behaves internally)

┌──────────────────────────────────────────────────────────────────┐
│ 1. GRAPHEMONICS                                                  │
│    Local mechanics of GRAPHEMES:                                 │
│    • shape                                                       │
│    • stroke order                                                │
│    • visual contrast                                             │
│    • glyph differentiation                                       │
│    Defines how written forms function and stay distinct.         │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 2. PHONEMONICS                                                   │
│    Local mechanics of PHONEMES:                                  │
│    • articulation                                                │
│    • resonance                                                   │
│    • distribution                                                │
│    • contrast                                                    │
│    Defines how sound units behave and maintain distinction.      │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 3. MORPHEMONICS                                                  │
│    Local mechanics of MORPHEMES:                                 │
│    • combination (root+affix)                                    │
│    • derivation (creating new forms)                             │
│    • inflection (tense, number, case)                            │
│    Defines how structural meaning units assemble.                │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 4. LEXEMONICS                                                    │
│    Local mechanics of LEXEMES:                                   │
│    • identity formation                                          │
│    • allowable variants                                          │
│    • morphological realization                                   │
│    Defines how words maintain identity across transformations.   │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 5. SEMEMONICS                                                    │
│    Local mechanics of SEMEMES:                                   │
│    • sense distribution                                          │
│    • connotations                                                │
│    • context-free meaning patterns                               │
│    Defines how meanings cluster and differentiate.               │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 6. PRAGMEMONICS                                                  │
│    Local mechanics of PRAGMEMES:                                 │
│    • situational activation                                      │
│    • intention mapping                                           │
│    • social-context rules                                        │
│    Defines how meaning becomes action in real situations.        │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 7. MNĒMAMONICS                                                   │
│    Local mechanics of MNĒMA (memory):                            │
│    • encoding                                                    │
│    • retention                                                   │
│    • recall patterns                                             │
│    Defines how linguistic structures are stored and retrieved.   │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 8. PNEUMAMONICS                                                  │
│    Local mechanics of PNEUMA (breath):                           │
│    • airflow dynamics                                            │
│    • prosodic initiation                                         │
│    • vocal onset                                                 │
│    Defines how breath becomes articulatory potential.            │
└──────────────────────────────────────────────────────────────────┘

                       MONICS govern UNIT transitions:
    Graphemonics → Phonemonics → Morphemonics → Lexemonics → Sememonics
                  → Pragmemonics → Mnēmamonics → Pneumamonics → (repeat)
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
                        MONICS: THE MECHANICS PLATE
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
                        Pure mechanical descriptions, each tied directly to its language unit, formatted as a strict structural ladder. No Nomics, no Menomics—just Monics, the mechanics of how each linguistic unit behaves.
                    </p>
                    
                    <AsciiDiagram title="MONICS (LOCAL MECHANICS OF LANGUAGE UNITS)" content={monicsPlateDiagram} />
                </div>
            </div>
        </div>
    );
};

export default MonicsPlateModal;
