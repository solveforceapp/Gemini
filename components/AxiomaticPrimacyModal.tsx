import React from 'react';

interface AxiomaticPrimacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h2 className="text-2xl font-bold text-emerald-300 mt-4 mb-2 font-orbitron text-center">{children}</h2>;
const UnitHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-xl font-bold text-emerald-200 mt-6 mb-2 font-orbitron tracking-wide">{children}</h3>;
const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="text-lg font-bold text-emerald-300 mt-4 mb-2 font-orbitron">{children}</h4>;
const SectionSeparator = () => <hr className="border-emerald-500/30 my-6" />;
const Term: React.FC<{ children: React.ReactNode }> = ({ children }) => <code className="bg-gray-800 text-emerald-300 px-1.5 py-0.5 rounded-sm font-mono text-xs">{children}</code>;
const AsciiDiagram: React.FC<{ content: string }> = ({ content }) => (
    <div className="my-4 p-4 bg-black/40 border border-emerald-400/30 rounded-lg text-left">
        <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
    </div>
);


const Unit: React.FC<{ name: string; etymology: React.ReactNode; func: string; individually: string; interdependently: string; validation: string; }> = 
({ name, etymology, func, individually, interdependently, validation }) => (
    <div>
        <UnitHeader>{name}</UnitHeader>
        <SubHeader>Etymology</SubHeader>
        {etymology}
        <SubHeader>Function</SubHeader>
        <p>{func}</p>
        <SubHeader>Individually</SubHeader>
        <p>{individually}</p>
        <SubHeader>Interdependently</SubHeader>
        <p>{interdependently}</p>
        <SubHeader>Mutual validation</SubHeader>
        <p>{validation}</p>
    </div>
);


const AxiomaticPrimacyModal: React.FC<AxiomaticPrimacyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-5xl max-h-[90vh] bg-[#0d1a15] border-2 border-emerald-500/50 rounded-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-emerald-500/30">
                    <h2 className="text-2xl font-bold text-emerald-300 font-orbitron tracking-wider">
                        AXIOMATIC PRIMACY: ETYMOLOGICAL COHERENCE
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-emerald-300 hover:text-white text-3xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">
                        The architecture's final proof is not in its complexity, but in its self-evident foundation. Each language unit's name, its etymological root or "true sense," perfectly encodes its function, proving the system is not an invention, but an observation of pre-existing, lawful order.
                    </p>
                    
                    <SectionSeparator />

                    <SectionHeader>The Origin Triad: Etymon, Logos, Lingua</SectionHeader>
                    <div className="mt-4 space-y-2">
                        <p><Term>Etymon (<span className="text-gray-400">ἔτυμον</span>)</Term> = “true sense, real meaning.”</p>
                        <p><Term>Logos / logia (<span className="text-gray-400">λόγος, -λογία</span>)</Term> = “word, reason, account, study of.”</p>
                        <p><Term>Lingua (<span className="text-gray-400">Latin</span>)</Term> = “tongue, speech, language” → linguistics = “the science of language.”</p>
                        <p className="mt-4">So:</p>
                        <p><b className="text-emerald-200">Etymology</b> = <Term>etymon</Term> + <Term>logia</Term> = “the study of the true sense of words.”</p>
                        <p><b className="text-emerald-200">Linguistics</b> = <Term>lingua</Term> + <Term>-istics</Term> (science of) = “the systematic study of language.”</p>
                        <p className="mt-4">Your framework is literally etymological linguistics raised to its logical conclusion: language using its own words to analyze its own units via their true sense.</p>
                    </div>

                    <SectionSeparator />

                    <Unit 
                        name="1. GRAPHEME"
                        etymology={<>
                            <p><Term>graph- (<span className="text-gray-400">γράφειν</span>)</Term> = “to write, to scratch, to inscribe.”</p>
                            <p><Term>-eme (<span className="text-gray-400">from Greek -ημα, -ēma</span>)</Term> = “that which is, minimal unit.”</p>
                            <p className="mt-2">So: <b className="text-emerald-200">Grapheme</b> = “the smallest written thing.” The minimal written unit.</p>
                        </>}
                        func="Smallest visible mark that distinguishes one symbol from another: letters, digits, punctuation."
                        individually="A grapheme is atomic: “A” is not “B,” “1” is not “7.” It is indivisible as a unit of visual distinction."
                        interdependently="Grapheme without phoneme is mute. Grapheme without morpheme is meaningless pattern. But: phoneme cannot be stabilized without some graphemic memory; morphemes cannot be recorded or transmitted without graphemes."
                        validation="Grapheme proves it is doing its job when different graphemes reliably map to different sounds, structures, words, meanings. If graphemes didn’t distinguish, downstream units would collapse—so their very existence as functional objects validates grapheme’s role."
                    />

                    <Unit 
                        name="2. PHONEME"
                        etymology={<>
                            <p><Term>phon- (<span className="text-gray-400">φωνή</span>)</Term> = “voice, sound.”</p>
                            <p><Term>-eme</Term> = minimal unit.</p>
                            <p className="mt-2">So: <b className="text-emerald-200">Phoneme</b> = “the smallest sound-unit.”</p>
                        </>}
                        func="Minimal auditory distinction that can change meaning: /p/ vs /b/, /t/ vs /d/."
                        individually="A phoneme is indivisible as a contrastive sound category in a given language. You can break the waveform down further physically, but linguistically /p/ is a unit."
                        interdependently="Phoneme requires pneuma (breath) to exist physically. It needs graphemes (or IPA) to be stabilized, recorded, and studied. Morphemes need phonemes to be pronounceable; lexemes need them to be spoken."
                        validation="Distinct lexemes (e.g., “pat” vs “bat”) validate the existence and function of /p/ vs /b/. If there were no phonemic contrast, the morpheme and lexeme layers would become indistinguishable in speech."
                    />
                    
                    <Unit 
                        name="3. MORPHEME"
                        etymology={<>
                            <p><Term>morph- (<span className="text-gray-400">μορφή</span>)</Term> = “shape, form.”</p>
                            <p><Term>-eme</Term> = minimal unit.</p>
                            <p className="mt-2">So: <b className="text-emerald-200">Morpheme</b> = “the smallest shaped unit (of meaning).”</p>
                        </>}
                        func="Minimal meaningful structure: roots, prefixes, suffixes, inflections."
                        individually="A morpheme is a unit of form + meaning: “un-” (negation), “-ed” (past), “bio” (life), “graph” (write)."
                        interdependently="Needs phonemes and graphemes to manifest. Lexemes can’t exist without morphemes; they’re built from them. Sememes lean on morphemes to “anchor” meaning in structured form."
                        validation="When a morpheme consistently transforms meaning in predictable ways (“re-,” “un-,” “-able”), it validates its own necessity and the layer it lives on. The fact that lexemes and sememes behave systematically is proof that morphemic structure is real and indispensable."
                    />

                    <Unit 
                        name="4. LEXEME"
                        etymology={<>
                            <p><Term>lex- (<span className="text-gray-400">λέξις, lexis</span>)</Term> = “word,” “speech.”</p>
                            <p><Term>-eme</Term> = minimal unit.</p>
                            <p className="mt-2">So: <b className="text-emerald-200">Lexeme</b> = “the minimal unit of word-identity.”</p>
                        </>}
                        func="Abstract word identity independent of inflected forms: RUN = run, runs, running, ran."
                        individually="A lexeme is an indivisible “word-concept.” You can have many forms, but one lexeme identity."
                        interdependently="Built from morphemes. Host for sememes (meaning fields). Needed for pragmemes to work (“what exactly is being done or invoked?”)."
                        validation="That you can list dictionary entries at all is validation that lexemes exist as stable identity units. Semantic fields and lexical networks (synonyms/antonyms) show lexemes interacting as distinct individuals in a structured system."
                    />

                    <Unit 
                        name="5. SEMEME"
                        etymology={<>
                            <p><Term>sēma (<span className="text-gray-400">σῆμα</span>)</Term> = “sign, mark, signal.”</p>
                            <p><Term>-eme</Term> = minimal unit.</p>
                            <p className="mt-2">So: <b className="text-emerald-200">Sememe</b> = “the minimal unit of signified meaning.”</p>
                        </>}
                        func="Meaning-content: denotation, connotation, associative field."
                        individually="A sememe is indivisible as a conceptual field. You can analyze it, but the unit is the “minimal meaning packet” tied to a lexeme."
                        interdependently="Requires lexeme as host. Required for pragmeme (you can’t intend/act without something meant). Needs mnēma for stability; needs grapheme/phoneme for expression."
                        validation="The fact that the same lexeme can shift meaning across contexts but still hold a core sense is evidence sememes exist as fields. Consistent understanding across speakers shows that sememes cohere across minds; they validate each other in shared usage."
                    />

                    <Unit 
                        name="6. PRAGMEME"
                        etymology={<>
                            <p><Term>pragma (<span className="text-gray-400">πρᾶγμα</span>)</Term> = “deed, act, thing done.”</p>
                            <p><Term>-eme</Term> = minimal unit.</p>
                            <p className="mt-2">So: <b className="text-emerald-200">Pragmeme</b> = “the smallest unit of linguistic action.”</p>
                        </>}
                        func="Sememe + context + intention + effect = the “speech-act unit.”"
                        individually="A pragmeme is indivisible as an act-class in context: a promise, an order, a threat, a sincere apology, a joke."
                        interdependently="Needs sememe (meaning to act on). Needs lexeme/morpheme/phoneme/grapheme for expression. Feeds mnēma (memory) with new traces; triggers pneuma (new cycles)."
                        validation="Social reality (laws, contracts, norms, relationships) is built from pragmemes. The very existence of consistent consequences for speech (“You are under arrest”; “I now pronounce you…”) validates the pragmeme layer."
                    />

                    <Unit 
                        name="7. MNĒMA"
                        etymology={<>
                            <p><Term>mnēma (<span className="text-gray-400">μνῆμα</span>)</Term> = “remembrance, record, monument.”</p>
                            <p>Related to <Term>mnēsis</Term> (memory) and <Term>mnēmonikos</Term> → mnemonics.</p>
                        </>}
                        func="The stored trace of experiences, meanings, forms, interactions."
                        individually="A mnēma is a unit of retention—like a semantic “engraving” or episodic mark in the cognitive substrate."
                        interdependently="Stores graphemes, phonemes, morphemes, lexemes, sememes, pragmemes. Without mnēma, no etymology, no lexicon, no scientific accumulation, no culture."
                        validation="Shared mnēma across people = cultural memory. The ability to reconstruct etymons, patterns, systems over time is direct evidence that mnēma is a real layer in the architecture."
                    />

                    <Unit 
                        name="8. PNEUMA"
                        etymology={<>
                            <p><Term>pneuma (<span className="text-gray-400">πνεῦμα</span>)</Term> = “breath, wind, spirit, animating air.”</p>
                        </>}
                        func="Physical + symbolic activation of expression—breath that becomes sound that becomes speech."
                        individually="A pneuma-event is indivisible as a moment of activation: the taken breath before a sentence, the internal “push” that initiates language."
                        interdependently="Required for phoneme production. Loops with mnēma: what is remembered shapes what is breathed into expression. Without it, all other units remain latent."
                        validation="The necessity of breath for speech and the way changes in breath change meaning (sighs, gasps, tone) validate pneuma as a foundational, irreducible layer."
                    />

                    <SectionSeparator />
                    <SectionHeader>Inseparable, Indivisible, Interdependent</SectionHeader>
                    <div className="mt-4 space-y-4">
                        <p>Each unit is atomic in its own dimension but collectively they form the basis vectors of one higher-dimensional space: <b className="text-white">Unifieldimensions</b>.</p>
                        <p>Each unit <Term>Uᵢ</Term> has a distinct etymon (true sense), a distinct functional role, and carries a distinct type of data (form, sound, structure, identity, meaning, action, memory, activation). Yet no unit can fully operate alone.</p>
                        <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-gray-400">
                            <li>A grapheme with no phoneme/morpheme never reaches meaning.</li>
                            <li>A sememe without a lexeme never stabilizes.</li>
                            <li>A pragmeme without mnēma doesn’t become history.</li>
                            <li>Mnēma without pneuma never becomes new expression.</li>
                        </ul>
                        <p>The recursion <Term>Λ(x) = Φ(N(R(S(L(M(P(G(x))))))))</Term> is the formal proof of this principle: Indivisible units, working as one indivisible system.</p>
                        <p>Each unit:</p>
                        <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-emerald-200">
                            <li><b className="font-orbitron">Coheres:</b> fits with others without contradiction.</li>
                            <li><b className="font-orbitron">Inheres:</b> lives within the larger structure.</li>
                            <li><b className="font-orbitron">Adheres:</b> sticks to its function and to the others through constraints and etymological alignment.</li>
                        </ul>
                        <p className="mt-4">And etymology is the continuous audit trail: The name of each unit encodes its job. The job of each unit confirms the name was true. That feedback loop is the etymological recursion at the heart of the system.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AxiomaticPrimacyModal;