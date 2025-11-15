import React from 'react';

interface NomosExplainedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-amber-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-amber-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;
const HR = () => <hr className="border-amber-500/30 my-3" />;

const AsciiDiagram: React.FC<{ content: string }> = ({ content }) => (
    <div className="my-4 p-4 bg-black/40 border border-amber-400/30 rounded-lg text-left">
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);


const NomosExplainedModal: React.FC<NomosExplainedModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const fullLawDiagram = `
                           LAW-LEVEL RECURSION ENGINE
          (Monics → Nomics → Menomics → refinement → back to Monics)

┌──────────────────────────────────────────────────────────────────────────┐
│ STATE 1: MONICS                                                          │
│ (Local Mechanics / Unit Behavior)                                        │
│                                                                          │
│ Defines the local rules that govern each linguistic unit:                │
│   • graphemonics   (shape mechanics)                                     │
│   • phonemonics    (sound mechanics)                                     │
│   • morphemonics   (structure mechanics)                                 │
│   • lexemonics     (identity mechanics)                                  │
│   • sememonics     (meaning mechanics)                                   │
│   • pragmemonics   (context mechanics)                                   │
│                                                                          │
│ Output: raw dynamics, behaviors, interactions, constraints               │
└───────────────┬──────────────────────────────────────────────────────────┘
                │ Transition L1: Unit-rules aggregate into system behavior
                ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ STATE 2: NOMICS                                                          │
│ (System Sciences / Pattern-Level Organization)                           │
│                                                                          │
│ Converts monic behavior into coherent systems:                           │
│   • graphenomics    (writing system science)                             │
│   • phonenomics     (sound system science)                               │
│   • morphenomics    (morphological system science)                       │
│   • lexenomics      (lexical networks)                                   │
│   • semenomics      (semantic systems)                                   │
│   • pragmenomics    (context/interaction systems)                        │
│                                                                          │
│ Output: whole-system patterns, structures, invariants                    │
└───────────────┬──────────────────────────────────────────────────────────┘
                │ Transition L2: System patterns crystallize into meta-law
                ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ STATE 3: MENOMICS                                                        │
│ (Meta-Law / Memory-Law / Coherence-Law)                                  │
│                                                                          │
│ This is the governing principle of continuity and coherence:             │
│   • preserves meaning through time                                       │
│   • stabilizes categories                                                │
│   • maintains systemic identity                                          │
│   • enforces recursion and order                                         │
│   • prevents collapse of meaning                                         │
│   • generates lawful evolution                                           │
│                                                                          │
│ Output: refined laws, stable invariants, long-term coherence             │
└───────────────┬──────────────────────────────────────────────────────────┘
                │ Transition L3: Meta-law refines local unit mechanics
                ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ RETURN TO STATE 1: MONICS                                                │
│                                                                          │
│ Menomics provides new constraints and refinements                        │
│ → which update Monics                                                    │
│ → which then create stronger Nomics                                      │
│ → which then evolve Menomics again                                       │
│                                                                          │
│ This forms a self-improving lawful cycle.                                │
└──────────────────────────────────────────────────────────────────────────┘
    `.trim();

    const compactLawDiagram = `
            ┌──────────────┐
            │   MONICS     │
            │ (Mechanics)  │
            └──────┬───────┘
                   │ L1
                   ▼
            ┌──────────────┐
            │   NOMICS     │
            │ (Systems)    │
            └──────┬───────┘
                   │ L2
                   ▼
            ┌──────────────┐
            │  MENOMICS    │
            │ (Meta-Law)   │
            └──────┬───────┘
                   │ L3
                   ▼
            ┌──────────────┐
            │   MONICS     │
            │ (Refined)    │
            └──────────────┘
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
                        NOMOS: THE LAW-LEVEL STATE MACHINE
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
                    <p className="text-base italic text-gray-400">This is the formal schematic for the recursive engine of Law itself. It shows how local unit mechanics (<KeyTerm>Monics</KeyTerm>) lawfully aggregate into system-level sciences (<KeyTerm>Nomics</KeyTerm>), which in turn crystallize into a meta-law of coherence (<KeyTerm>Menomics</KeyTerm>). This is the foundation of <KeyTerm>Nomos</KeyTerm>—true, generative order.</p>
                    
                    <SubHeader>THE LAW-LEVEL STATE MACHINE</SubHeader>
                    <AsciiDiagram content={fullLawDiagram} />

                    <SubHeader>COMPACT / CIRCULAR VERSION</SubHeader>
                    <AsciiDiagram content={compactLawDiagram} />
                    
                    <HR />
                    
                    <SubHeader>Symbolic Systems Invoking the Ghost of Law</SubHeader>
                    <p>Systems that use the term "NOMIC" without this underlying recursive architecture are unknowingly borrowing the linguistic root of lawful order. They are invoking the ghost of law inside a system with no law.</p>
                    <ul className="list-disc list-inside pl-4 mt-2 space-y-2 text-gray-400">
                        <li>
                            <b className="text-amber-300">The Root of Law:</b> <KeyTerm>Nomos (νόμος)</KeyTerm> means law, rule, order. <KeyTerm>Nomic</KeyTerm> means “pertaining to law.” You are using it correctly—as the backbone of systems that truly have structure.
                        </li>
                        <li>
                            <b className="text-amber-300">Imitating Real Order:</b> Other symbolic systems are often chaotic. Their symbols don’t map to breath, sound, or morphology. They lack recursion and memory (<KeyTerm color="text-teal-300">mnēma</KeyTerm>). So they borrow <KeyTerm>Nomos</KeyTerm> to pretend their symbols have structure. It signals <KeyTerm>misalignment, not mastery</KeyTerm>.
                        </li>
                         <li>
                            <b className="text-amber-300">Language Owns Nomos:</b> Language is the only self-consistent, self-referential, self-correcting, and coherence-generating system. Its derivatives (like <KeyTerm>Nomics</KeyTerm>) belong to it. Their symbols belong to noise. Your symbols—letters, graphemes, phonemes—belong to <KeyTerm>structure</KeyTerm>.
                        </li>
                    </ul>

                    <SubHeader>The Final Diagnosis</SubHeader>
                    <p>When someone evokes “NOMIC” outside language, they are lost. They are working outside the only system that corresponds, coheres, persists, scales, explains itself, generates meaning, preserves memory, and organizes reality. Language is the foundation. <KeyTerm>Everything else is shadow.</KeyTerm></p>
                </div>
            </div>
        </div>
    );
};

export default NomosExplainedModal;