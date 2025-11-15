import React from 'react';

interface SynchronizationArcModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-indigo-300 mt-4 mb-2 font-orbitron tracking-wide">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-indigo-200' }) => <strong className={`${color} font-bold`}>{children}</strong>;
const HR = () => <hr className="border-indigo-500/30 my-4" />;

const ArcStep: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-orbitron text-indigo-300">{children}</span>
);

const ArcArrow: React.FC = () => (
    <span className="mx-1 text-gray-400">→</span>
);

const AsciiDiagram: React.FC<{ content: string }> = ({ content }) => (
    <div className="my-4 p-4 bg-black/40 border border-indigo-400/30 rounded-lg text-left">
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);

const SynchronizationArcModal: React.FC<SynchronizationArcModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const fullDiagram = `
                    UNIFIED FIELD RECURSION LOOP
         (Reflection → Inflection → Circumspection → Involution
               → Evolution → Revolution → Solution → Contribution)

                                        ┌───────────────────────────────┐
                                        │   1. REFLECTION               │
                                        │   (External appearance)       │
                                        │   System mirrors itself       │
                                        └───────────┬───────────────────┘
                                                    │  R1
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   2. INFLECTION               │
                                        │   (Change of form)            │
                                        │   Structure bends internally  │
                                        └───────────┬───────────────────┘
                                                    │  R2
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   3. CIRCUMSPECTION           │
                                        │   (Examination from all sides)│
                                        │   System rotates viewpoint    │
                                        └───────────┬───────────────────┘
                                                    │  R3
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   4. INVOLUTION               │
                                        │   (Turning inward)            │
                                        │   Recursion, compression      │
                                        └───────────┬───────────────────┘
                                                    │  R4
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   5. EVOLUTION                │
                                        │   (Unfolding outward)         │
                                        │   Expansion, refinement       │
                                        └───────────┬───────────────────┘
                                                    │  R5
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   6. REVOLUTION               │
                                        │   (Turning over)              │
                                        │   Paradigm shift, inversion   │
                                        └───────────┬───────────────────┘
                                                    │  R6
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   7. SOLUTION                 │
                                        │   (Resolving structure)       │
                                        │   Coherence emerges           │
                                        └───────────┬───────────────────┘
                                                    │  R7
                                                    ▼
                                        ┌───────────────────────────────┐
                                        │   8. CONTRIBUTION             │
                                        │   (Adding to the whole)       │
                                        │   System strengthens itself   │
                                        └───────────┬───────────────────┘
                                                    │  R8
                                                    ▼
                                    ┌──────────────────────────────────────────┐
                                    │  BACK TO REFLECTION (Cycle Restart)     │
                                    │  Contribution becomes new appearance     │
                                    └──────────────────────────────────────────┘
    `.trim();

    const compactDiagram = `
    ┌───────────┐
    │Reflection │
    └──────┬────┘
           ▼
    ┌───────────┐
    │Inflection │
    └──────┬────┘
           ▼
    ┌──────────────┐
    │Circumspection│
    └──────┬───────┘
           ▼
    ┌───────────┐
    │Involution │
    └──────┬────┘
           ▼
    ┌───────────┐
    │Evolution  │
    └──────┬────┘
           ▼
    ┌───────────┐
    │Revolution │
    └──────┬────┘
           ▼
    ┌───────────┐
    │Solution   │
    └──────┬────┘
           ▼
    ┌────────────┐
    │Contribution│
    └──────┬─────┘
           ▼
      [Reflection]
    `.trim();

    const transitions = [
        { name: 'R1: Reflection → Inflection', description: 'The system observes itself and begins internal modification.' },
        { name: 'R2: Inflection → Circumspection', description: 'The system evaluates the impact of changes from all angles.' },
        { name: 'R3: Circumspection → Involution', description: 'Observation collapses inward into recursive structure.' },
        { name: 'R4: Involution → Evolution', description: 'Compression becomes expansion; new forms emerge.' },
        { name: 'R5: Evolution → Revolution', description: 'Expansion destabilizes old patterns; paradigm shift.' },
        { name: 'R6: Revolution → Solution', description: 'Chaos resolves into new stable structure.' },
        { name: 'R7: Solution → Contribution', description: 'The new coherence becomes input to the larger system.' },
        { name: 'R8: Contribution → Reflection', description: 'What was added now appears outwardly and becomes visible.' },
    ];

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-[#0c0a18] border-2 border-indigo-500/50 rounded-lg shadow-[0_0_40px_rgba(129,140,248,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-indigo-500/30">
                    <h2 className="text-2xl font-bold text-indigo-300 font-orbitron tracking-wider">
                        THE RECURSIVE ARC: LINGUISTIC-PHYSICAL SYNCHRONIZATION
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-indigo-300 hover:text-white text-3xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">Physics does not merely “use” language—physics is spoken through language because physics behaves like language. This is not imitation. It is synchronization.</p>

                    <SubHeader>LANGUAGE & PHYSICS: TWO PROJECTIONS OF ONE ARCHITECTURE</SubHeader>
                    <p>Language behaves the way physical law behaves because both are structured through recursion, symmetry, and invariants. An equation IS a sentence. A variable IS a pronoun. A symbol IS a grapheme. They are not metaphors for each other; they are synchronized instances of the same underlying structure. This is the unity of <KeyTerm color="text-yellow-300">Logos</KeyTerm>.</p>
                    
                    <HR />

                    <SubHeader>THE FULL RECURSIVE ARC OF ALL SYSTEMS</SubHeader>
                    <div className="text-center my-4 p-4 bg-black/30 border border-indigo-400/30 rounded-lg">
                        <p className="text-sm md:text-base flex flex-wrap justify-center items-center">
                            <ArcStep>Reflection</ArcStep> <ArcArrow />
                            <ArcStep>Inflection</ArcStep> <ArcArrow />
                            <ArcStep>Circumspection</ArcStep> <ArcArrow />
                            <ArcStep>Involution</ArcStep> <ArcArrow />
                            <ArcStep>Evolution</ArcStep> <ArcArrow />
                            <ArcStep>Revolution</ArcStep> <ArcArrow />
                            <ArcStep>Solution</ArcStep> <ArcArrow />
                            <ArcStep>Contribution</ArcStep>
                        </p>
                    </div>
                    
                    <SubHeader>ASCII DIAGRAM — UNIFIED RECURSION OPERATORS</SubHeader>
                    <AsciiDiagram content={fullDiagram} />

                    <SubHeader>EXPLANATION OF THE RECURSION</SubHeader>
                    <div className="space-y-2 mt-2 text-gray-400">
                        {transitions.map(t => (
                            <p key={t.name}><b className="text-indigo-200">{t.name}:</b> {t.description}</p>
                        ))}
                    </div>

                    <SubHeader>COMPACT DIAGRAM</SubHeader>
                    <AsciiDiagram content={compactDiagram} />

                    <HR />

                    <SubHeader>THE UNIFIED FIELD IS A UNIFIED LINGUISTIC DIMENSION</SubHeader>
                    <p>There cannot be a unified field theory without a unified language. The unification is not just in the physics; it must be in the linguistic architecture used to describe it. This requires a unified vocabulary, a unified semantic field, a unified recursion system, and a unified dimensional mapping.</p>
                    <p className="mt-2 font-bold text-indigo-200">This is the final law: <KeyTerm color="text-white">UNIFIELDIMENSIONS</KeyTerm> is not a static concept, but a dynamic process that unfolds through this very arc.</p>
                </div>
            </div>
        </div>
    );
};

export default SynchronizationArcModal;
