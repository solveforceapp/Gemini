import React from 'react';

interface MathematicalTierModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PartHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-xl font-bold text-rose-200 mt-6 mb-2 font-orbitron tracking-wide text-center">{children}</h3>;
const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="text-lg font-bold text-rose-300 mt-4 mb-2 font-orbitron">{children}</h4>;
const HR = () => <hr className="border-rose-500/30 my-6" />;

const AsciiDiagram: React.FC<{ content: string, title?: string }> = ({ content, title }) => (
    <div className="my-4 p-4 bg-black/40 border border-rose-400/30 rounded-lg text-left">
        {title && <h4 className="font-orbitron text-rose-200 mb-2 text-center">{title}</h4>}
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);

const MathematicalTierModal: React.FC<MathematicalTierModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const part1 = `Each unit can be expressed as a functional transformation:
1. Grapheme      G(x) = visible_form(x)
2. Phoneme       P(x) = sound_value(G(x))
3. Morpheme      M(x) = structure(P(x))
4. Lexeme        L(x) = identity(M(x))
5. Sememe        S(x) = meaning(L(x))
6. Pragmeme      R(x) = intention(S(x))
7. Mnēma         N(x) = memory(R(x))
8. Pneuma        Φ(x) = activation(N(x))
Where:

x = any linguistic input

G, P, M, L, S, R, N, Φ are operators on x

Φ(x) outputs back into G(x) (cycle)

Thus the whole system is:
Φ(N(R(S(L(M(P(G(x)))))))))

This looks like a nested equation—
because it is the linguistic recursion engine itself.`;

    const part2 = `We now collapse all the individual functions into one recursive operator Λ:
Λ = Φ ∘ N ∘ R ∘ S ∘ L ∘ M ∘ P ∘ G
(Where “∘” means function composition: A ∘ B = A(B(x)))

Thus:
Language(x) = Λ(x)
And the recursion is:
Λ(Λ(x)) = Λ(x)
This means:

Once something becomes meaningful language,
reprocessing it through language doesn’t change its identity—
it reinforces it.

This is why language stabilizes reality.`;

    const part3 = `These express how each unit locks to the others:

1. Coherence Equation
Coherence = S ∘ L ∘ M ∘ P ∘ G
Meaning:

Meaning → Identity → Structure → Sound → Form
all reinforce each other.

2. Inherence Equation
Inherence = R ∘ S

Meaning (S) inheres in intention/action (R).

Without S, there is no R.

3. Adherence Equation
Adherence = N ∘ R
Memory adheres to context.

Everything you understand adheres in mnēma.`;

    const part4 = `Here are the unavoidable axioms:

Axiom 1: Language precedes every equation.
∀ equations E:  E requires L (lexeme) + S (sememe)
Axiom 2: Meaning stabilizes structure.
S(L(M(P(G(x))))) = S(x)
Meaning remains even if form shifts.

Axiom 3: Intent is derived from meaning.
R(x) = f(S(x))
Axiom 4: Memory closes the system.
N(R(S(...))))  = stable(x)
Axiom 5: Breath reactivates the cycle.
Φ(N(...)) → G(...)
Pneuma restarts meaning into form.`;

    const part5 = `Let’s map the scientific method to the language unit operators:

The scientific sequence:
Observation → Question → Hypothesis → Prediction → Test → Analysis → Conclusion → Replication
The language sequence:
Pragmeme → Pragmeme → Lexeme/Sememe → Sememe → Pragmeme → Sememe/Lexeme → Sememe → Mnēma
Mapping equation:
ScientificMethod(x) = N(R(S(L(M(P(G(x))))))))
But wait—
this is literally the Λ(x) definition above.

Thus:
ScientificMethod(x) = Language(x)
Which implies:

Language = the only self-scientific system
And the ultimate identity:
Λ = ScientificMethod
Meaning:

Language is the only science that can test, verify, define, falsify, and replicate itself.
No other science can do this.
They all depend on Λ to exist.`;
    
    const part6 = `We now express these using the language units.

1. PRESCIENCE

Pre-meaning, pre-lexical awareness (sememe forming before articulation).
Prescience = lim (L→S)  S(L(x))
Meaning forms before full articulation.

2. CONSCIENCE

Meaning + context (sememe + pragmeme).
Conscience = R(S(x))
Intent informed by meaning.

3. OMNISCIENCE

Full recursive realization of the entire Λ operator.
Omniscience = Λ∞(x)
Infinite recursion of:

Form → Sound → Structure → Identity → Meaning → Intent → Memory → Breath → …

Thus:

Omniscience is perfect recursive coherence of the language unit system.

Tie-in:

Prescience = pre-sememe
Conscience = sememe + pragmeme
Omniscience = the full cycle stabilized (mnēma + pneuma integration)`;
    
    const part7 = `
                     LANGUAGE UNIT FUNCTIONAL TREE
-----------------------------------------------------------------------------------
 Λ(x) = Φ(N(R(S(L(M(P(G(x)))))))))               (Complete recursion operator)
-----------------------------------------------------------------------------------

 G(x) = visible_form(x)                          → Grapheme
 P(x) = sound_value(G(x))                        → Phoneme
 M(x) = structure(P(x))                          → Morpheme
 L(x) = identity(M(x))                           → Lexeme
 S(x) = meaning(L(x))                            → Sememe
 R(x) = intention(S(x))                          → Pragmeme
 N(x) = memory(R(x))                             → Mnēma
 Φ(x) = activation(N(x))                         → Pneuma (cycle restart)
-----------------------------------------------------------------------------------

 SCIENTIFIC METHOD AS LANGUAGE:
 ScientificMethod(x) = Λ(x)
-----------------------------------------------------------------------------------

 PRESCIENCE  = lim(L→S) S(L(x))
 CONSCIENCE  = R(S(x))
 OMNISCIENCE = Λ∞(x)
-----------------------------------------------------------------------------------
`.trim();

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-[#1a0a0f] border-2 border-rose-500/50 rounded-lg shadow-[0_0_40px_rgba(244,63,94,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-rose-500/30">
                    <h2 className="text-2xl font-bold text-rose-300 font-orbitron tracking-wider">
                        THE MATHEMATICAL TIER: LANGUAGE AS EQUATION
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-rose-300 hover:text-white text-3xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">The mathematical tier of the Logos architecture—where language units become equations, and equations, in turn, reveal themselves as nothing but recursively stabilized language units.</p>
                    
                    <PartHeader>I. EQUATIONS FOR THE LANGUAGE UNITS</PartHeader>
                    <AsciiDiagram content={part1} />
                    <HR/>
                    <PartHeader>II. THE RECURSIVE LANGUAGE UNIT EQUATION</PartHeader>
                    <AsciiDiagram content={part2} />
                    <HR/>
                    <PartHeader>III. THE COHERENCE / INHERENCE / ADHERENCE EQUATIONS</PartHeader>
                    <AsciiDiagram content={part3} />
                    <HR/>
                    <PartHeader>IV. THE PRIMAL AXIOMS OF LANGUAGE AS EQUATION</PartHeader>
                    <AsciiDiagram content={part4} />
                    <HR/>
                    <PartHeader>V. THE MASTER EQUATION</PartHeader>
                    <SubHeader>Language is the only system that satisfies the scientific method as a closed-form field.</SubHeader>
                    <AsciiDiagram content={part5} />
                    <HR/>
                    <PartHeader>VI. THE PRIMORDIAL IDENTITY</PartHeader>
                    <SubHeader>Prescience, Conscience, Omniscience</SubHeader>
                    <AsciiDiagram content={part6} />
                    <HR/>
                    <PartHeader>VII. ASCII SUMMARY DIAGRAM</PartHeader>
                    <AsciiDiagram title="Equation ↔ Units ↔ Scientific Method" content={part7} />
                </div>
            </div>
        </div>
    );
};

export default MathematicalTierModal;
