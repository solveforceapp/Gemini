import React from 'react';

interface UnifieldimensionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2 font-orbitron tracking-wide">{children}</h3>;
const SubSubHeader: React.FC<{ children: React.ReactNode, color?: string }> = ({ children, color = 'text-gray-300' }) => <h4 className={`text-md font-bold ${color} mt-4 mb-2 font-orbitron`}>{children}</h4>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-white' }) => <strong className={`${color} font-bold`}>{children}</strong>;
const HR = () => <hr className="border-gray-500/50 my-6" />;

const AsciiDiagram: React.FC<{ content: string }> = ({ content }) => (
    <div className="my-4 p-4 bg-black/40 border border-gray-400/30 rounded-lg text-left">
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);

const UnifieldimensionsModal: React.FC<UnifieldimensionsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const masterBlueprint = `
                       UNIFIELDIMENSIONS MASTER ENGINE

           META-LAW LAYER            →    MENOMICS
                                       (law of mind, memory, coherence)
           SYSTEM SCIENCE LAYER       →    NOMICS
                                       (pattern of sound, form, meaning)
           LOCAL MECHANICS LAYER      →    MONICS
                                       (behavior of graphemes, phonemes...)
           LANGUAGE UNIT LAYER        →    GRAPHEME → PHONEME
                                            → MORPHEME → LEXEME
                                            → SEMEME → PRAGMEME
                                            → MNĒMA → PNEUMA
                                            → back to GRAPHEME

                         ALL FOUR LAYERS RESONATE AS ONE:
                           THE UNIFIELDIMENSIONS ARCHITECTURE
    `.trim();

    const languageUnitPlate = `
                       LANGUAGE UNITS (FOUNDATIONAL LAYER)
      ---------------------------------------------------------------

┌───────────────────────────────────────────────────────────────────┐
│ 1. GRAPHEME                                                       │
│    The smallest visible unit of writing:                          │
│    letters, digits, punctuation, symbols.                         │
│    Carries: FORM (not meaning).                                   │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 2. PHONEME                                                        │
│    The smallest unit of sound that changes meaning.               │
│    Carries: AUDITORY DISTINCTION.                                 │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 3. MORPHEME                                                       │
│    The smallest meaningful structural unit:                       │
│    roots, prefixes, suffixes, inflections.                        │
│    Carries: STRUCTURED MEANING.                                   │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 4. LEXEME                                                         │
│    The abstract identity of a word across all its forms.          │
│    RUN = run / runs / running / ran.                              │
│    Carries: CONCEPTUAL IDENTITY.                                  │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 5. SEMEME                                                         │
│    The smallest unit of meaning:                                  │
│    sense, connotation, conceptual load, emotional hue.            │
│    Carries: CONCEPTUAL MEANING.                                   │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 6. PRAGMEME                                                       │
│    The smallest unit of meaning-in-context:                       │
│    speech-act, intention, situational meaning, action-value.      │
│    Carries: APPLIED / CONTEXTUAL MEANING.                         │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 7. MNĒMA                                                          │
│    The memory trace that stores meaning, identity, and structure. │
│    Carries: RETENTION / CONTINUITY.                               │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────────┐
│ 8. PNEUMA                                                         │
│    Breath / energetic activation enabling sound and expression.   │
│    Carries: INITIATION / ACTIVATION.                              │
└───────────────────────────────────────────────────────────────────┘

                         CYCLE CONTINUES →
               PNEUMA → GRAPHEME → PHONEME → ... → MNĒMA → PNEUMA
    `.trim();

    const menomicsDimensions = `
THE THREE DIMENSIONS OF MENOMICS
(One spelling → three valid pronunciations → three dimensions)
/mə-NO-miks/  → Nomic Law (structure/order)
/ME-no-miks/  → Memory Law (mnēma/continuity)
/NE-no-miks/  → Mind Law (noos/cognition)
    `.trim();

    const finalEquation = `
MENOMICS(Nomics(Monics(Units(Pneuma)))) = UNIFIELDIMENSIONS

Which reads:

Menomic meta-law governs Nomics →
which govern Monics →
which govern Units →
which express Pneuma →
which restarts the whole system →
producing unified dimensional resonance.
    `.trim();

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-black border-2 border-gray-300 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.4)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-gray-300/50">
                    <h2 className="text-2xl font-bold text-white font-orbitron tracking-wider">
                        UNIFIELDIMENSIONS: THE MASTER ARCHITECTURE
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
                    <p className="text-base italic text-gray-400">The first fully unified representation of the Language Unit Engine, the Law-Level Engine, the Dual-Recursive Synchronization, and the multi-dimensional linguistic operator: MENOMICS.</p>

                    <SubHeader>THE MASTER BLUEPRINT</SubHeader>
                    <AsciiDiagram content={masterBlueprint} />
                    <HR />

                    <SubHeader>THE LINGUISTIC ARCHITECTURE (FOUR LAYERS)</SubHeader>
                    
                    <SubSubHeader color="text-teal-300">I. LANGUAGE UNITS (BASE LEVEL)</SubSubHeader>
                    <p>The foundational layer of linguistic reality. Each unit represents a distinct state in the cycle of meaning-generation.</p>
                    <AsciiDiagram content={languageUnitPlate} />

                    <SubSubHeader color="text-amber-300">II. MONICS (UNIT MECHANICS)</SubSubHeader>
                    <p>The behavior rules of each unit; how each unit behaves internally.</p>
                    <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-gray-400">
                        <li><b className="text-amber-200">Graphemonics:</b> Mechanical rules of graphemes (shape, contrast, legibility, stroke-patterns).</li>
                        <li><b className="text-amber-200">Phonemonics:</b> Mechanical rules of phonemes (distribution, articulation, resonance).</li>
                        <li><b className="text-amber-200">Morphemonics:</b> Mechanical rules of morphemes (combination, derivation, inflection).</li>
                        <li><b className="text-amber-200">Lexemonics:</b> Mechanical rules of lexemes (identity stability, form-variation, category).</li>
                        <li><b className="text-amber-200">Sememonics:</b> Mechanical rules of sememes (sense distribution, association, semantic load).</li>
                        <li><b className="text-amber-200">Pragmemonics:</b> Mechanical rules of pragmemes (context activation, intention, social relevance).</li>
                        <li><b className="text-amber-200">Mnēmamonics:</b> Mechanical rules of how memory encodes and retrieves meaning.</li>
                        <li><b className="text-amber-200">Pneumamonics:</b> Mechanical rules of breath-to-sound initiation.</li>
                    </ul>

                    <SubSubHeader color="text-amber-400">III. NOMICS (SYSTEM SCIENCES)</SubSubHeader>
                    <p>The system-level patterns that emerge when many units interact under monic rules.</p>
                    <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-gray-400">
                        <li><b className="text-amber-300">Graphenomics:</b> The system science of writing—orthography, scripts, symbol systems.</li>
                        <li><b className="text-amber-300">Phonenomics:</b> The system science of sound—phonology, sound inventories, contrast systems.</li>
                        <li><b className="text-amber-300">Morphenomics:</b> The system science of word-structure—morphology across dialects and languages.</li>
                        <li><b className="text-amber-300">Lexenomics:</b> The system science of dictionaries, vocabularies, lexical networks.</li>
                        <li><b className="text-amber-300">Semenomics:</b> The system science of meaning—semantic fields, conceptual networks, categories.</li>
                        <li><b className="text-amber-300">Pragmenomics:</b> The system science of context—interaction, communication, social language.</li>
                        <li><b className="text-amber-300">Mnēmanomics:</b> The system science of memory—meaning retention, category stability, evolution.</li>
                        <li><b className="text-amber-300">Pneumanomics:</b> The system science of breath—prosody, phrasing, speech rhythm, intonation.</li>
                    </ul>

                    <SubSubHeader color="text-amber-500">IV. MENOMICS (META-LAW LEVEL)</SubSubHeader>
                    <p>The meta-law governing how systems stay coherent across time, perception, and recursion.</p>
                    <AsciiDiagram content={menomicsDimensions} />
                    <p className="mt-2 text-gray-400">Each menomics level carries this three-dimensional law:</p>
                    <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-gray-400">
                        <li><b className="text-amber-400">Graphemenomics:</b> How written form maintains coherence, identity, and historical continuity.</li>
                        <li><b className="text-amber-400">Phonemenomics:</b> How a sound system preserves contrast and stability across generations.</li>
                        <li><b className="text-amber-400">Morphemenomics:</b> How structural meaning patterns remain intelligible and evolve lawfully.</li>
                        <li><b className="text-amber-400">Lexemenomics:</b> How word identities maintain themselves despite drift and variation.</li>
                        <li><b className="text-amber-400">Sememenomics:</b> How meanings retain coherence, conceptual boundaries, and semantic gravity.</li>
                        <li><b className="text-amber-400">Pragmemonomics:</b> How communicative patterns stabilize social meaning and interaction norms.</li>
                        <li><b className="text-amber-400">Mnēmamenomics:</b> How memory-laws protect the persistence of linguistic knowledge.</li>
                        <li><b className="text-amber-400">Pneumamenomics:</b> How breath-patterns and prosodic forms maintain communicative coherence.</li>
                    </ul>

                    <HR />

                    <SubHeader>THE FINAL EQUATION</SubHeader>
                    <AsciiDiagram content={finalEquation} />
                    <p className="mt-4 text-center font-bold text-gray-200">This is the complete unification. The architecture is now whole.</p>
                </div>
            </div>
        </div>
    );
};

export default UnifieldimensionsModal;
