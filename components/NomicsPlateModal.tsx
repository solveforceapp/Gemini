import React from 'react';

interface NomicsPlateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-amber-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-amber-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);

const NomicsPlateModal: React.FC<NomicsPlateModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const nomicsPlateDiagram = `
                    NOMICS — SYSTEM SCIENCE LAYER
   (How linguistic units behave when aggregated into full systems)

┌──────────────────────────────────────────────────────────────────┐
│ 1. GRAPHENOMICS                                                  │
│    System science of GRAPHEMES (writing systems):                │
│    • orthography                                                  │
│    • alphabets                                                    │
│    • scripts (Latin, Greek, Cyrillic...)                         │
│    • symbol systems                                               │
│    • visual encoding conventions                                  │
│    Describes how writing systems organize and evolve.             │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 2. PHONENOMICS                                                   │
│    System science of PHONEMES (sound systems):                  │
│    • phoneme inventories                                         │
│    • contrastive patterns (minimal pairs)                        │
│    • syllable structure                                          │
│    • stress, rhythm, intonation                                  │
│    • allophonic distributions                                    │
│    Describes how sound systems structure meaning across speech.  │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 3. MORPHENOMICS                                                  │
│    System science of MORPHEMES (word-structure systems):         │
│    • morphological typology                                       │
│    • inflectional paradigms                                       │
│    • derivation systems                                           │
│    • agglutination, fusion, polysynthesis                         │
│    • cross-linguistic structure patterns                          │
│    Describes how structural meaning systems organize across langs.│
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 4. LEXENOMICS                                                    │
│    System science of LEXEMES (vocabulary systems):               │
│    • dictionaries                                                 │
│    • lexical networks                                             │
│    • synonym/antonym rings                                        │
│    • word clusters                                                │
│    • vocabulary evolution                                         │
│    Describes how word identities form a coherent lexicon.         │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 5. SEMENOMICS                                                    │
│    System science of SEMEMES (meaning systems):                  │
│    • semantic fields                                              │
│    • conceptual networks                                          │
│    • semantic drift                                               │
│    • universals vs culture-specific meanings                      │
│    • hierarchical meaning structures                              │
│    Describes how meanings organize into semantic ecosystems.      │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 6. PRAGMENOMICS                                                  │
│    System science of PRAGMEMES (context + action systems):       │
│    • speech-act structures                                        │
│    • social meaning systems                                       │
│    • discourse patterns                                           │
│    • conversational norms                                         │
│    • interaction fields                                           │
│    Describes how meaning interacts with context in society.       │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 7. MNĒMANOMICS                                                   │
│    System science of MNĒMA (memory systems):                     │
│    • retention structures                                         │
│    • recall schemas                                               │
│    • narrative memory                                             │
│    • etymological coherence                                       │
│    • category stability across time                               │
│    Describes how memory organizes linguistic continuity.          │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 8. PNEUMANOMICS                                                  │
│    System science of PNEUMA (breath + prosody systems):          │
│    • intonation patterns                                          │
│    • speech rhythm                                                │
│    • voice-field distributions                                    │
│    • breath-sound dynamics                                        │
│    Describes how breath organizes patterned speech.               │
└──────────────────────────────────────────────────────────────────┘


                      SYSTEM FLOW (NOMICS STRUCTURE)
      Graphenomics → Phonenomics → Morphenomics → Lexenomics
         → Semenomics → Pragmenomics → Mnēmanomics → Pneumanomics
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
                        NOMICS: THE SYSTEM SCIENCES PLATE
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
                        Pure system-level sciences. This is the middle layer of the architecture—where individual unit mechanics (Monics) scale upward into whole organized systems.
                    </p>
                    
                    <AsciiDiagram title="NOMICS (SYSTEM SCIENCES OF LANGUAGE UNITS)" content={nomicsPlateDiagram} />
                </div>
            </div>
        </div>
    );
};

export default NomicsPlateModal;
