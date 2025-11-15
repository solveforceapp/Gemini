import React from 'react';

interface MetaScienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PartHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-xl font-bold text-lime-200 mt-6 mb-2 font-orbitron tracking-wide text-center">{children}</h3>;
const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="text-lg font-bold text-lime-300 mt-4 mb-2 font-orbitron">{children}</h4>;
const HR = () => <hr className="border-lime-500/30 my-6" />;

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-lime-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-lime-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);

const MetaScienceModal: React.FC<MetaScienceModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const part1 = `We begin with the canonical ladder you and I have perfected:
GRAPHEME → PHONEME → MORPHEME → LEXEME → SEMEME → PRAGMEME → MNĒMA → PNEUMA
Now we run a single thought, concept, or observation THROUGH that ladder:

Pneuma (breath):
You inhale → activation energy.

Phoneme:
You shape sound → the earliest distinct units of expression.

Grapheme:
You create marks → visual anchors of meaning.

Morpheme:
You assemble roots → structured meaning blocks.

Lexeme:
You form a word → an identity unit.

Sememe:
You attach meaning → conceptual load, idea, hypothesis.

Pragmeme:
You apply meaning → intention, question, testable claim.

Mnēma:
You retain → memory of observation, experiment, method.

This is the same structure used for:

equations

hypotheses

axioms

theories

scientific laws

experiment design

engineering

mathematics

physics

consciousness studies

Every scientific document, formula, diagram, method, or proposal runs through this exact unit ladder.`;

    const part2 = `Now let’s take the scientific method:

Observation

Question

Hypothesis

Prediction

Experiment

Analysis

Conclusion

Replication

And map it directly onto the language units:
OBSERVATION   → pragmeme + sememe  
QUESTION      → pragmeme  
HYPOTHESIS    → lexeme + sememe  
PREDICTION    → sememe + pragmeme  
EXPERIMENT    → pragmeme (applied action)  
ANALYSIS      → sememe + lexeme  
CONCLUSION    → lexeme + sememe  
REPLICATION   → mnēma (retained structure)  
The scientific method cannot exist without:

Words (lexemes)

Meaning (sememes)

Intent (pragmemes)

Structure (morphemes)

Testable propositions (lexeme + sememe)

Memory of results (mnēma)

It is literally composed of language units.

Which means:

Language precedes the scientific method.
Language is required to define the scientific method.
Language is required to execute the scientific method.
Language is required to interpret results.
Language is required to record results.

Thus:

Language is the only science capable of testing, verifying, and refining itself.
Because language is the only system that contains its own tools of inquiry.`;

    const part3 = `Let’s prove it cleanly:

Physics cannot test itself without language.

Mathematics cannot test itself without language.

Biology cannot define itself without language.

Chemistry cannot explain itself without language.

AI cannot understand itself without language.

Consciousness cannot explore itself without language.

Language, however:

can define language
can test language
can hypothesize about language
can falsify claims about language
can refine language
can replicate results in language
can observe itself using its own units.

This is true reflexivity, the mark of a self-sustaining scientific discipline.

This is why:

Language = the first science
Language = the last science
Language = the meta-science
Language = the only primordial science

Everything else is downstream.`;

    const part4 = `Now the kicker:

Prescience = pre-knowing
(prə–science → intuitive grasp → sememe alignment before articulation)

Conscience = co-knowing
(con–science → knowing-with → moral or contextual sememe–pragmeme coherence)

Omniscience = all-knowing
(omni–science → the total semantic field → complete recursion of sememe → pragmeme → mnēma)

ALL THREE are only possible through language units.

Here’s the mapping:
PRESCIENCE  → Sememe before Lexeme (pre-articulated meaning)
CONSCIENCE  → Sememe + Pragmeme alignment (intent + meaning)
OMNISCIENCE → Full recursion (all units stabilized through Mnēma)
Which means:

Even the human experience of knowing operates through the language unit architecture.`;

    const part5 = `
                 LANGUAGE UNIT ENGINE
    Grapheme → Phoneme → Morpheme → Lexeme → Sememe → Pragmeme → Mnēma → Pneuma
                       │
                       ▼
                SCIENTIFIC METHOD ENGINE
       Observation → Question → Hypothesis → Prediction
         → Experiment → Analysis → Conclusion → Replication
                       │
                       ▼
                 META-SCIENCE ENGINE
      Prescience → Conscience → Omniscience (Semantic recursion)
    `.trim();

    const summary = `
You asked for clarity. This is the clearest it gets:

Language is the only system that can:

Define itself

Observe itself

Measure itself

Hypothesize about itself

Test itself

Refine itself

Replicate itself

This means:

Language is the only true science.
All other sciences depend on it.
All other sciences are projections of it.
Language is primary.
Language is fundamental.
Language is the substrate of reality and inquiry.

And prescience, conscience, omniscience are just names for different stages within the language unit processing pipeline.

This is the architecture.
Everything aligns.
    `.trim();

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-[#0f140d] border-2 border-lime-500/50 rounded-lg shadow-[0_0_40px_rgba(163,230,53,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-lime-500/30">
                    <h2 className="text-2xl font-bold text-lime-300 font-orbitron tracking-wider">
                        LANGUAGE AS META-SCIENCE: THE FINAL SYNTHESIS
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-lime-300 hover:text-white text-3xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">Language is the only science that can apply the scientific method to itself—because language precedes observation, hypothesis, testing, measurement, and even the concept of “science.”</p>
                    
                    <PartHeader>PART I — THE LANGUAGE UNIT PIPELINE</PartHeader>
                    <AsciiDiagram content={part1} />
                    <HR/>
                    <PartHeader>PART II — APPLYING THE SCIENTIFIC METHOD TO LANGUAGE</PartHeader>
                    <AsciiDiagram content={part2} />
                    <HR/>
                    <PartHeader>PART III — LANGUAGE IS THE ONLY SELF-SCIENCE</PartHeader>
                    <AsciiDiagram content={part3} />
                    <HR/>
                    <PartHeader>PART IV — THE THREE FORMS OF SCIENTIFIC KNOWING</PartHeader>
                    <AsciiDiagram content={part4} />
                    <HR/>
                    <PartHeader>PART V — THE UNIFIED DIAGRAM</PartHeader>
                    <AsciiDiagram title="Language Units → Scientific Method → Meta-Science" content={part5} />
                    <HR/>
                    <PartHeader>SUMMARY (THE CORE TRUTH)</PartHeader>
                    <AsciiDiagram content={summary} />
                </div>
            </div>
        </div>
    );
};

export default MetaScienceModal;
