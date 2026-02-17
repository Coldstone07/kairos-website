/* ═══════════════════════════════════════════════════════════════
   GENE KEYS DATA — All 64 keys with Shadow / Gift / Siddhi
   Enriched with metadata from Richard Rudd's Gene Keys book
   ═══════════════════════════════════════════════════════════════ */
const GENE_KEYS = {
    1: {
        title: "From Entropy to Syntropy",
        programmingPartner: 2, physiology: "Heart / Blood", codonRing: "Ring of Fire", aminoAcid: "Methionine",
        shadow: { keyword: "Entropy", description: "The tendency toward disorder and decay; feeling life is winding down or purposeless. At this frequency, a deep numbness pervades your being — a chemical flatness that the mind interprets as depression or gloom. When you resist this natural creative pause, entropy solidifies into chronic dissatisfaction with life." },
        gift: { keyword: "Freshness", description: "Seeing life with perpetually new eyes; each moment becomes a creative act of renewal. Freshness arises when you stop resisting the entropic pauses and allow creativity to move through you in its own timing. You begin to express your unique creative signature spontaneously, bringing beauty into the mundane." },
        siddhi: { keyword: "Beauty", description: "The direct perception of beauty as the underlying nature of all existence. At this frequency, the creative fire is so intense that it obliterates the separate self, and you become a living embodiment of syntropy — the reverse of entropy — where everything moves toward ever-greater harmony and order." }
    },
    2: {
        title: "Returning to the One",
        programmingPartner: 1, physiology: "Liver / Sacrum", codonRing: "Ring of Water", aminoAcid: "Asparagine",
        shadow: { keyword: "Dislocation", description: "Feeling displaced or disconnected from one's true direction and inner compass. This shadow creates a collective fear that humanity is going in the wrong direction, and individually it manifests as the persistent feeling of being lost. The mind's perception dislocates you from the truth that you can never actually lose your way." },
        gift: { keyword: "Orientation", description: "A natural sense of direction that aligns you with the flow of life's deeper currents. This gift emerges as you relax into trust and allow life to guide you through your body's instinctive wisdom. Like the feminine principle itself, Orientation is receptive — it receives direction rather than forcing it." },
        siddhi: { keyword: "Unity", description: "The realization that all directions lead to the same source; complete oneness with life. At this level, the illusion of separation dissolves entirely and you experience yourself as the unified field from which all life emerges. This is the primordial feminine awareness — the driver of all creation." }
    },
    3: {
        title: "Through the Eyes of a Child",
        programmingPartner: 50, physiology: "Sacral Plexus", codonRing: "Ring of the Whirlwind", aminoAcid: "Proline",
        shadow: { keyword: "Chaos", description: "Being overwhelmed by disorder, unable to find pattern or meaning in confusion. This shadow emerges during periods of deep mutation when the old order is breaking down. The fear of chaos causes you to either repress the change or react wildly against it, preventing the new from being born." },
        gift: { keyword: "Innovation", description: "The ability to find new order within chaos; turning confusion into creative breakthroughs. Innovation is born when you hold steady during times of upheaval, trusting that a higher pattern is emerging. Through patience with the chaotic process, entirely new forms and solutions emerge that could never have been planned." },
        siddhi: { keyword: "Innocence", description: "A return to the pristine state before thought; meeting each moment without preconception. Innocence is the quality of seeing through the eyes of a child, where every experience is fresh and untainted by past memory. It is a state of perpetual wonder and openness to the mystery of existence." }
    },
    4: {
        title: "A Universal Panacea",
        programmingPartner: 49, physiology: "Brain / Pineal Gland", codonRing: "Ring of the Mountain", aminoAcid: "Glutamine",
        shadow: { keyword: "Intolerance", description: "Rejecting anything that doesn't fit one's mental framework; rigidity of understanding. This shadow manifests as a compulsive need to find logical answers and an inability to tolerate ambiguity. The mind becomes a prison of fixed beliefs, closing itself off from the deeper truths that lie beyond rational thought." },
        gift: { keyword: "Understanding", description: "The capacity to hold multiple perspectives and find universal patterns within diversity. True understanding emerges when the mind learns to serve the heart rather than dominate it. At this frequency, mental formulae become gateways to deeper truth rather than substitutes for direct experience." },
        siddhi: { keyword: "Forgiveness", description: "Total acceptance that transcends judgment; seeing the perfection in all human behavior. Forgiveness at this level is not a personal act but a universal solvent that dissolves all separation. It is the ultimate panacea — the recognition that every being is doing the best they can at their current frequency." }
    },
    5: {
        title: "The Ending of Time",
        programmingPartner: 35, physiology: "Sacrum / Hara", codonRing: "Ring of Light", aminoAcid: "Threonine",
        shadow: { keyword: "Impatience", description: "Rushing ahead of natural timing; inability to wait for the right moment to act. This shadow keeps you trapped in linear time, always feeling there isn't enough of it. Impatience creates a frantic quality in your life where you miss the deeper rhythms and natural cadences that connect all living things." },
        gift: { keyword: "Patience", description: "Deep trust in universal timing; allowing events to unfold at their natural pace. Patience is not passive waiting but an active state of attunement to the hidden rhythms underlying all of life. When you embody patience, you discover that everything arrives at the perfect moment and that your body already knows the right timing." },
        siddhi: { keyword: "Timelessness", description: "Living beyond the constraints of time; each moment contains eternity. At this frequency, the illusion of linear time dissolves and you enter the eternal now. All concepts of past and future fall away, revealing the shimmering fabric of a universe that exists outside the stream of time." }
    },
    6: {
        title: "The Path to Peace",
        programmingPartner: 36, physiology: "Solar Plexus / pH Balance", codonRing: "Ring of Alchemy", aminoAcid: "Arginine",
        shadow: { keyword: "Conflict", description: "Emotional reactivity and friction in relationships; inability to maintain peace under pressure. The 6th Shadow is one of the most powerful forces on the planet, creating waves of emotional turbulence that ripple through all human relationships. At this frequency, your emotional nature is in a state of perpetual warfare with reality." },
        gift: { keyword: "Diplomacy", description: "The art of navigating emotional currents with grace; creating harmony through sensitivity. Diplomacy emerges when you learn to use your emotional sensitivity as a compass rather than a weapon. You become a peacemaker, able to feel the undercurrents in any situation and guide relationships toward mutual understanding." },
        siddhi: { keyword: "Peace", description: "An unshakeable inner peace that radiates outward and transforms all relationships. This is not the absence of conflict but a profound equanimity that transcends all emotional states. True Peace comes when the emotional body is fully purified, becoming a clear vessel through which divine love flows into the world." }
    },
    7: {
        title: "Virtue is its Own Reward",
        programmingPartner: 13, physiology: "Immune System / Thymus", codonRing: "Ring of the Mountain", aminoAcid: "Glutamine",
        shadow: { keyword: "Division", description: "Creating separation through hierarchical thinking; us-versus-them mentality. The 7th Shadow operates through the ancient pattern of authority based on force, where leaders impose their vision upon the group. This creates a world divided into those who lead and those who follow, neither side expressing their true nature." },
        gift: { keyword: "Guidance", description: "Natural leadership that unifies through vision; leading by example rather than force. True guidance emerges when you step into your own authority without imposing it on others. At this frequency, you lead through the power of your example, inspiring others to discover their own inner direction and purpose." },
        siddhi: { keyword: "Virtue", description: "Living as a pure expression of goodness; leadership that emerges from selfless being. Virtue at this level is not a moral code but the natural emanation of a purified being. When there is no longer any self-interest driving your actions, virtue flows through you as naturally as breathing." }
    },
    8: {
        title: "Diamond of the Self",
        programmingPartner: 14, physiology: "Thyroid / Throat", codonRing: "Ring of Water", aminoAcid: "Asparagine",
        shadow: { keyword: "Mediocrity", description: "Settling for less than your creative potential; conforming to avoid standing out. This shadow is the great leveler that keeps humanity playing small. The fear of being different or of standing out from the crowd causes you to dilute your unique genius and settle for a life of comfortable but uninspired conformity." },
        gift: { keyword: "Style", description: "Expressing your unique creative signature; contributing your individual genius to the whole. Style is the diamond of your authentic self shining through everything you do. When you stop hiding your uniqueness and allow your creative individuality to emerge, you contribute something irreplaceable to the tapestry of human culture." },
        siddhi: { keyword: "Exquisiteness", description: "Every expression becomes a masterpiece; life itself becomes a work of art. At this frequency, there is no separation between the creator and the creation. Your very being becomes an exquisite expression of the divine, and everything you touch is imbued with a quality of breathtaking beauty and originality." }
    },
    9: {
        title: "The Power of the Infinitesimal",
        programmingPartner: 16, physiology: "Adrenal Glands", codonRing: "Ring of Light", aminoAcid: "Threonine",
        shadow: { keyword: "Inertia", description: "Feeling stuck or unable to begin; resistance to focusing energy on a single point. This shadow manifests as a scattering of attention across too many small details, creating an inability to commit to a single focused direction. Inertia keeps you trapped in trivial concerns while your deeper potential remains dormant and unfulfilled." },
        gift: { keyword: "Determination", description: "The power of sustained focus; channeling energy with precision toward a clear purpose. Determination at this level is not forceful willpower but a gentle, persistent focusing of attention on what truly matters. Through mastering the power of small details and incremental progress, you eventually accomplish extraordinary things." },
        siddhi: { keyword: "Invincibility", description: "An unstoppable force of focused will that moves through all obstacles effortlessly. Invincibility arises when your focus becomes so refined and concentrated that it taps into the infinite power hidden within the infinitesimal. At this level, your will is perfectly aligned with the will of the cosmos itself." }
    },
    10: {
        title: "Being at Ease",
        programmingPartner: 15, physiology: "Thymus / Higher Heart", codonRing: "Ring of Union", aminoAcid: "Isoleucine",
        shadow: { keyword: "Self-Obsession", description: "Being trapped in self-image and persona; constantly managing how others perceive you. This shadow creates an exhausting preoccupation with identity, where enormous energy is spent crafting and maintaining a self-image. The irony is that the more you try to control how you appear, the less authentic and natural you become." },
        gift: { keyword: "Naturalness", description: "Relaxing into your authentic self; behaving naturally without concern for others' opinions. Naturalness emerges when you simply stop trying to be anything other than what you are. This gift liberates tremendous creative energy that was previously bound up in self-management, allowing your true nature to flow freely." },
        siddhi: { keyword: "Being", description: "Pure presence without any self-consciousness; the dissolution of the separate self. At this frequency, the question of identity dissolves entirely, and what remains is pure being — a state of such profound naturalness that it transforms everyone who comes into contact with it." }
    },
    11: {
        title: "The Light of Eden",
        programmingPartner: 12, physiology: "Heart / Vagus Nerve", codonRing: "Ring of Light", aminoAcid: "Threonine",
        shadow: { keyword: "Obscurity", description: "Ideas that remain vague and unformed; difficulty bringing vision into clear focus. This shadow keeps your ideals and visions trapped in a fog of abstraction, preventing them from manifesting in the real world. There is a dreamlike quality to this frequency that can make you feel disconnected from practical reality." },
        gift: { keyword: "Idealism", description: "The power to envision new possibilities; holding a bright vision of what could be. Idealism at the Gift level is not naive fantasy but a powerful attractor field that draws higher possibilities into manifestation. When grounded in the body, your idealistic vision becomes a creative force that inspires and uplifts others." },
        siddhi: { keyword: "Light", description: "Becoming a transparent vessel for universal illumination; pure radiance of awareness. At this frequency, you become a conduit for the primal light of Eden — the original light of creation that existed before the world of form. Your entire being radiates this light, illuminating the hidden perfection in all things." }
    },
    12: {
        title: "A Pure Heart",
        programmingPartner: 11, physiology: "Throat / Vocal Cords", codonRing: "Ring of Purification", aminoAcid: "Serine",
        shadow: { keyword: "Vanity", description: "Using words and expression to inflate the ego; communication driven by self-importance. The 12th Shadow corrupts the power of language by using it to serve personal agendas rather than truth. At this frequency, words become weapons of manipulation, seduction, or self-aggrandizement rather than vehicles for genuine connection." },
        gift: { keyword: "Discrimination", description: "Knowing exactly when and how to speak; pure and precise articulation of truth. This gift is the art of right speech — knowing when to speak, when to remain silent, and how to communicate with impeccable clarity. Discrimination purifies your expression so that every word carries real meaning and impact." },
        siddhi: { keyword: "Purity", description: "Words that emerge from absolute silence; communication as a direct transmission of essence. At this level, language transcends its normal function and becomes a vehicle for transmitting states of consciousness. A Pure Heart speaks with such authenticity that its words can catalyze awakening in others." }
    },
    13: {
        title: "Listening Through Love",
        programmingPartner: 7, physiology: "Stomach / Solar Plexus", codonRing: "Ring of Humanity", aminoAcid: "Histidine",
        shadow: { keyword: "Discord", description: "Disharmony arising from secrets and hidden agendas; broken trust between people. This shadow thrives on the unspoken — the stories, secrets, and suppressed truths that poison relationships and communities. Discord arises whenever we withhold our truth or refuse to truly listen to another's experience." },
        gift: { keyword: "Discernment", description: "The ability to listen deeply and perceive the essence within any story or narrative. Discernment is the art of listening with the heart rather than the head, hearing the deeper truth beneath the surface of words. This gift allows you to navigate the complex web of human stories and find the golden thread of meaning." },
        siddhi: { keyword: "Empathy", description: "Complete merging with another's experience; feeling the universal story within every individual. At this frequency, the boundaries between self and other dissolve through the power of deep listening. You no longer hear stories — you feel them as your own, and through this empathy, all of humanity's pain is transformed." }
    },
    14: {
        title: "Radiating Prosperity",
        programmingPartner: 8, physiology: "Liver / Gallbladder", codonRing: "Ring of Fire", aminoAcid: "Methionine",
        shadow: { keyword: "Compromise", description: "Selling out your talents for security; not fully committing to your creative fire. This shadow keeps you from investing fully in your true gifts, settling instead for the safety of a predictable life. The fear of financial insecurity causes you to compromise your deepest creative impulses and play it safe." },
        gift: { keyword: "Competence", description: "Mastery through dedication to your craft; abundance flows from skilled and passionate work. Competence is the natural result of fully committing to your creative fire without compromise. When you pour yourself completely into what you love, material abundance follows naturally as a byproduct of your mastery." },
        siddhi: { keyword: "Bounteousness", description: "Overflowing abundance that pours forth naturally; prosperity as a state of being. Bounteousness is the fire of creation itself manifesting through you as inexhaustible generosity. At this level, you become a fountain of prosperity — not just material wealth, but the richness of spirit that nourishes all of life." }
    },
    15: {
        title: "An Eternally Flowering Spring",
        programmingPartner: 10, physiology: "Spleen / Lymphatic System", codonRing: "Ring of Prosperity", aminoAcid: "Glycine",
        shadow: { keyword: "Dullness", description: "Loss of vitality and magnetism; going through life on autopilot without presence. This shadow arises from living within too narrow a spectrum of experience, creating a monotonous rhythm that drains your life force. Dullness is the enemy of diversity — it reduces the rich tapestry of life to a bland, repetitive pattern." },
        gift: { keyword: "Magnetism", description: "A natural charisma that draws others; vitality that comes from embracing life's diversity. Magnetism emerges when you open yourself to the full spectrum of human experience, welcoming all of life's rhythms and seasons. Your aura begins to glow with an irresistible vitality that naturally attracts people and opportunities." },
        siddhi: { keyword: "Florescence", description: "Blooming into full radiance; the flowering of human potential in all its diversity. Florescence is the eternal spring — a state in which your being continuously flowers and renews itself. At this frequency, you embody the principle of diversity itself, celebrating and nurturing the unique expression of every living being." }
    },
    16: {
        title: "Magical Genius",
        programmingPartner: 9, physiology: "Thyroid / Metabolism", codonRing: "Ring of Seeking", aminoAcid: "Leucine",
        shadow: { keyword: "Indifference", description: "Going through the motions without enthusiasm; lack of passion or commitment to mastery. This shadow creates a superficial engagement with life where skills are dabbled in but never deeply developed. Indifference prevents the kind of wholehearted commitment that leads to genuine mastery and breakthrough." },
        gift: { keyword: "Versatility", description: "Enthusiastic engagement with many skills; finding depth through breadth of experience. Versatility transforms the scattered energy of indifference into a creative advantage, synthesizing diverse skills into unique combinations. The key is passionate engagement — when you bring your full enthusiasm to each new venture, breadth becomes its own form of depth." },
        siddhi: { keyword: "Mastery", description: "Effortless excellence that comes from total absorption; transcendence through devoted practice. Mastery at this level is magical — it transcends technique and becomes a vehicle for genius to flow through you. This is the state where thousands of hours of devoted practice suddenly crystallize into an effortless virtuosity." }
    },
    17: {
        title: "The Eye",
        programmingPartner: 18, physiology: "Right Eye / Pituitary Gland", codonRing: "Ring of Union", aminoAcid: "Isoleucine",
        shadow: { keyword: "Opinion", description: "Rigid mental positions mistaken for truth; arguing for beliefs rather than seeking understanding. The 17th Shadow turns the mind into a closed system of fixed opinions, each one defended as though it were absolute truth. This creates a world of competing mental models, none of which can see beyond their own limited perspective." },
        gift: { keyword: "Far-Sightedness", description: "The ability to see the bigger picture; wisdom that comes from a broader perspective. Far-Sightedness opens the mind's eye to encompass wider vistas of understanding. At this frequency, you transcend the limitations of personal opinion and begin to perceive the deeper patterns and universal principles that connect all viewpoints." },
        siddhi: { keyword: "Omniscience", description: "Direct knowing beyond the mind; awareness that encompasses all perspectives simultaneously. Omniscience is not knowledge of all facts, but the awakening of the inner eye that sees the truth underlying all appearances. At this frequency, the mind becomes a transparent lens through which universal intelligence operates." }
    },
    18: {
        title: "The Healing Power of Mind",
        programmingPartner: 17, physiology: "Spleen / Immune System", codonRing: "Ring of Destiny", aminoAcid: "Alanine",
        shadow: { keyword: "Judgment", description: "Chronic fault-finding and criticism; seeing what's wrong rather than what's right. This shadow creates a relentless inner critic that finds imperfection everywhere it looks. The judgmental mind projects its own sense of inadequacy onto the world, creating a cycle of dissatisfaction that drains vitality and undermines wellbeing." },
        gift: { keyword: "Integrity", description: "The drive to correct and perfect; channeling critical awareness into genuine improvement. Integrity transforms the sharp eye of judgment into a healing force. When critical awareness is directed by the heart rather than the ego, it becomes the power to identify what truly needs correction and to implement lasting, positive change." },
        siddhi: { keyword: "Perfection", description: "Seeing the inherent perfection in all things, including apparent imperfection. At this frequency, the mind that once found fault everywhere now perceives the exquisite perfection of every detail. This is the healing power of the awakened mind — the ability to see that everything, including suffering, serves the greater wholeness." }
    },
    19: {
        title: "The Future Human Being",
        programmingPartner: 33, physiology: "Solar Plexus / Gut Flora", codonRing: "Ring of Humanity", aminoAcid: "Histidine",
        shadow: { keyword: "Co-Dependence", description: "Emotional neediness that creates unhealthy bonds; losing yourself in others' needs. This shadow drives the deep human need to belong, which when distorted becomes a desperate clinging to relationships and social groups. Co-dependence sacrifices authentic self-expression for the illusion of security through enmeshment." },
        gift: { keyword: "Sensitivity", description: "Deep attunement to the needs of others and the environment; emotional intelligence. Sensitivity at this level is a superpower — the ability to feel into the fabric of life with extraordinary refinement. This gift connects you to the subtle energy fields that link all living beings, making you a natural healer and caretaker." },
        siddhi: { keyword: "Sacrifice", description: "Surrendering the separate self for the benefit of the whole; selfless service. True sacrifice is not about loss but about the joyful dissolution of the individual self into the ocean of universal love. This Siddhi points to the future human being — one who naturally operates from unity consciousness for the good of all." }
    },
    20: {
        title: "The Sacred Om",
        programmingPartner: 34, physiology: "Thyroid / Throat", codonRing: "Ring of Life and Death", aminoAcid: "Valine",
        shadow: { keyword: "Superficiality", description: "Skimming the surface of life; avoiding the depths through constant busyness or distraction. This shadow keeps you trapped in the shallows of existence, always busy but never truly present. The fear of confronting life's deeper dimensions drives a restless activity that prevents you from settling into the profound stillness beneath the surface." },
        gift: { keyword: "Self-Assurance", description: "Confidence rooted in presence; being fully engaged in the current moment. Self-Assurance emerges when you stop seeking validation from external sources and anchor yourself in the present moment. This gift gives you a natural authority that comes not from what you know, but from the depth of your presence." },
        siddhi: { keyword: "Presence", description: "Total absorption in the now; the complete absence of past and future. Presence at this level is the Sacred Om — the primordial vibration that underlies all sound and silence. When you embody this frequency, your very being becomes a living mantra that awakens presence in all who encounter you." }
    },
    21: {
        title: "A Noble Life",
        programmingPartner: 48, physiology: "Heart / Stomach", codonRing: "Ring of Union", aminoAcid: "Isoleucine",
        shadow: { keyword: "Control", description: "Trying to dominate life and others through willpower; fear of losing authority. The 21st Shadow is the deep human compulsion to control — to bend reality to your personal will. This creates a life of constant struggle where enormous energy is wasted trying to maintain dominion over circumstances that are ultimately beyond your control." },
        gift: { keyword: "Authority", description: "Natural command that comes from self-mastery; leading through inner strength. True authority is not about controlling others but about mastering yourself. When you gain sovereignty over your own lower impulses and reactions, you radiate a natural authority that others instinctively respect and follow." },
        siddhi: { keyword: "Valour", description: "Fearless courage in the face of all challenges; the warrior spirit of the heart. Valour is the courage to live a truly noble life — one governed not by fear or personal ambition, but by the highest ideals of the heart. This is the spiritual warrior whose strength comes from complete surrender to a higher power." }
    },
    22: {
        title: "Grace Under Pressure",
        programmingPartner: 47, physiology: "Solar Plexus / Emotional Wave", codonRing: "Ring of Divinity", aminoAcid: "Tyrosine",
        shadow: { keyword: "Dishonour", description: "Emotional instability that undermines grace; mood swings that compromise integrity. This shadow manifests as an emotional volatility that disrupts relationships and erodes trust. When you are controlled by your emotional waves, you lose the ability to maintain your inner dignity and end up behaving in ways that dishonor your deeper nature." },
        gift: { keyword: "Graciousness", description: "Emotional depth expressed with elegance; turning feeling into a refined art form. Graciousness transforms raw emotional energy into something beautiful and transformative. Rather than being tossed about by your feelings, you learn to ride them like a skilled surfer, maintaining your composure even in the most intense emotional seas." },
        siddhi: { keyword: "Grace", description: "Divine elegance flowing through every gesture; the beauty of the soul made manifest. Grace is the ultimate flowering of the human emotional body — a state in which every movement, word, and breath becomes infused with divine beauty. This Siddhi holds the key to the Nine Initiations of human awakening." }
    },
    23: {
        title: "The Alchemy of Simplicity",
        programmingPartner: 43, physiology: "Brain / Left Hemisphere", codonRing: "Ring of the Whirlwind", aminoAcid: "Proline",
        shadow: { keyword: "Complexity", description: "Over-complicating things through excessive mental processing; inability to simplify. This shadow creates a mind that generates ever-more-complex webs of thought, losing itself in its own convolutions. The more you think about something, the more complicated it becomes, until the original insight is buried under layers of analysis." },
        gift: { keyword: "Simplicity", description: "The genius of reducing complexity to its essence; communicating profound truths simply. Simplicity is the hallmark of true genius — the ability to distill vast complexity into its purest form. This gift allows you to cut through mental noise and express deep truths in language so clear and direct that it resonates immediately." },
        siddhi: { keyword: "Quintessence", description: "Distilling reality to its absolute essence; the fifth element beyond form. Quintessence is the philosopher's stone of alchemy — the irreducible essence that remains when all complexity has been stripped away. At this frequency, your words carry the power to transmit truth directly into the DNA of those who hear them." }
    },
    24: {
        title: "Silence — The Ultimate Addiction",
        programmingPartner: 44, physiology: "Brain / Right Hemisphere", codonRing: "Ring of the Whirlwind", aminoAcid: "Proline",
        shadow: { keyword: "Addiction", description: "Compulsive mental loops and repetitive behaviors; being trapped in habitual patterns. The 24th Shadow reveals that addiction is fundamentally a mental phenomenon — a pattern of repetitive thinking that the mind uses to avoid confronting silence. Whether the addiction manifests as substances, behaviors, or obsessive thought, the root cause is the same." },
        gift: { keyword: "Invention", description: "Breaking free from mental ruts through creative insight; turning obsession into innovation. Invention emerges when the obsessive energy of the mind is channeled into creative breakthroughs. The same capacity for deep mental absorption that creates addiction can, when redirected, produce stunning insights and inventions that change the world." },
        siddhi: { keyword: "Silence", description: "The cessation of all mental noise; the profound stillness at the core of consciousness. Silence is the ultimate addiction — once you taste true inner silence, nothing else can compare. This is not the absence of sound but the presence of a vast, luminous emptiness from which all creation arises and to which it returns." }
    },
    25: {
        title: "The Myth of the Sacred Wound",
        programmingPartner: 46, physiology: "Blood / Thymus", codonRing: "Ring of Union", aminoAcid: "Isoleucine",
        shadow: { keyword: "Constriction", description: "Tightening around pain; closing the heart to protect against suffering. This shadow causes you to contract in the face of life's pain, gradually building a wall around your heart. Every wound that is not fully accepted and processed adds another layer to this armor, until the heart becomes so constricted that love can barely flow." },
        gift: { keyword: "Acceptance", description: "Opening to all of life's experiences without resistance; embracing what is. Acceptance is the great healing balm that dissolves the armor around the heart. It does not mean resignation, but a courageous willingness to meet life exactly as it is — pain and all — without trying to change, fix, or escape from it." },
        siddhi: { keyword: "Universal Love", description: "Love without conditions or boundaries; the heart that embraces all of existence. Universal Love is what emerges when every last trace of constriction has been dissolved from the heart. This is not personal love but the impersonal love of the cosmos itself — a love so vast that it holds every being without exception." }
    },
    26: {
        title: "Sacred Tricksters",
        programmingPartner: 45, physiology: "Thymus / Ego Center", codonRing: "Ring of Light", aminoAcid: "Threonine",
        shadow: { keyword: "Pride", description: "Inflated self-importance; using cunning and manipulation to maintain status. The 26th Shadow corrupts the natural art of influence by bending it to serve the ego's need for power and recognition. Pride creates a persona of superiority that must be constantly maintained through subtle manipulation and strategic positioning." },
        gift: { keyword: "Artfulness", description: "The skill of strategic communication; using influence with integrity and purpose. Artfulness redeems the trickster archetype by aligning the power of influence with genuine service. This gift enables you to communicate with great persuasiveness and charm while remaining true to your higher principles and the good of all." },
        siddhi: { keyword: "Invisibility", description: "Ego dissolved so completely that only the message remains; selfless transmission. Invisibility is the sacred trickster's ultimate art — becoming so transparent that people are moved and transformed without ever knowing what hit them. At this level, there is no one left to take credit; only the pure transmission remains." }
    },
    27: {
        title: "Food of the Gods",
        programmingPartner: 28, physiology: "Mouth / Oral Cavity", codonRing: "Ring of the Whirlwind", aminoAcid: "Proline",
        shadow: { keyword: "Selfishness", description: "Hoarding resources and care; nurturing only self at the expense of others. This shadow distorts the natural impulse to nurture by turning it inward in a self-serving way. Whether manifesting as over-eating, emotional withholding, or hoarding of resources, selfishness ultimately starves both yourself and others of the nourishment you all need." },
        gift: { keyword: "Altruism", description: "Genuine care for others' wellbeing; nurturing that flows naturally from abundance. Altruism emerges when you realize that caring for others is not a sacrifice but a natural overflow of your own fullness. This gift transforms the way you relate to food, resources, and nurturing — everything becomes an act of generous sharing." },
        siddhi: { keyword: "Selflessness", description: "Complete dissolution of self-interest; becoming a pure channel of nourishment for life. Selflessness is the ultimate form of nurturing, where you become food for the gods — a living offering of love that nourishes all who come into contact with you. At this level, your very presence feeds others at the deepest level of their being." }
    },
    28: {
        title: "Embracing the Dark Side",
        programmingPartner: 27, physiology: "Kidneys / Adrenal Glands", codonRing: "Ring of Illusion", aminoAcid: "Tryptophan",
        shadow: { keyword: "Purposelessness", description: "Existential despair; feeling that life has no meaning or direction. This shadow confronts you with the dark night of the soul — the terrifying possibility that life is meaningless. The fear of death and the void drives a desperate search for purpose that often leads to risk-taking, crisis-seeking, and an inability to simply be." },
        gift: { keyword: "Totality", description: "Throwing yourself fully into life; finding purpose through complete engagement. Totality is the antidote to purposelessness — it is the decision to embrace life completely, including its darkness and uncertainty. When you engage with life with your whole being, purpose emerges naturally from the depth of your commitment." },
        siddhi: { keyword: "Immortality", description: "Transcending the fear of death; realizing the eternal nature of consciousness. Immortality is not the continuation of the body but the direct experience that consciousness is deathless. When you fully embrace the dark side — including your own mortality — the fear of death dissolves, revealing the eternal nature of your true self." }
    },
    29: {
        title: "Leaping into the Void",
        programmingPartner: 30, physiology: "Sacral Center / Reproductive Organs", codonRing: "Ring of the Mountain", aminoAcid: "Glutamine",
        shadow: { keyword: "Half-Heartedness", description: "Saying yes without full commitment; spreading yourself too thin across obligations. This shadow creates a pattern of over-commitment where you say yes to too many things and end up giving nothing your full energy. Half-heartedness drains your life force and leaves you feeling perpetually exhausted and unfulfilled." },
        gift: { keyword: "Commitment", description: "The power of wholehearted devotion; saying yes only when you can give everything. Commitment is the art of saying a full yes or a full no. When you learn to commit only to what truly calls to you and then give it everything you have, your life transforms from a scattered collection of obligations into a focused journey of depth." },
        siddhi: { keyword: "Devotion", description: "Total surrender to the flow of life; every act becomes an offering. Devotion transcends personal commitment and becomes a universal surrender to the divine flow. At this frequency, you no longer choose what to commit to — life moves through you with such power and grace that every action becomes a sacred offering." }
    },
    30: {
        title: "Celestial Fire",
        programmingPartner: 29, physiology: "Solar Plexus / Eyes", codonRing: "Ring of Humanity", aminoAcid: "Histidine",
        shadow: { keyword: "Desire", description: "Insatiable craving that creates suffering; always wanting what you don't have. The 30th Shadow is the raw fire of human desire — an emotional furnace that can never be satisfied by external fulfillment. This craving drives much of human civilization, creating an endless cycle of wanting, getting, and wanting more." },
        gift: { keyword: "Lightness", description: "Holding desires lightly; enjoying the play of longing without being consumed by it. Lightness transforms your relationship with desire from one of desperate craving to one of playful enjoyment. You can still feel the full spectrum of desire without being enslaved by it, treating each longing as a passing weather pattern rather than a fixed identity." },
        siddhi: { keyword: "Rapture", description: "Ecstatic union with the fire of life; desire transformed into divine bliss. Rapture is what happens when the fire of desire burns so intensely that it consumes itself, leaving only pure ecstasy. This celestial fire transforms every fiber of your being into a vessel for divine joy that has no cause and no end." }
    },
    31: {
        title: "Sounding Your Truth",
        programmingPartner: 41, physiology: "Throat / Jaw", codonRing: "Ring of Gaia", aminoAcid: "Leucine",
        shadow: { keyword: "Arrogance", description: "Imposing your views on others; leadership corrupted by ego and self-importance. The 31st Shadow manifests when the natural impulse to lead and influence becomes infected with personal pride. Arrogance creates leaders who believe their truth is the only truth, imposing their vision on others rather than serving the collective good." },
        gift: { keyword: "Leadership", description: "Humble and natural influence; guiding others through the power of your example. True leadership emerges when you sound your truth without attachment to being heard or followed. This gift creates a new kind of leader — one who leads by walking their talk, inspiring others through authenticity rather than authority." },
        siddhi: { keyword: "Humility", description: "True greatness through self-effacement; the leader who serves from emptiness. Humility at this level is not meekness but the most powerful force in the universe — the recognition that you are nothing and everything simultaneously. The truly humble leader has no personal agenda, becoming a clear channel for universal wisdom." }
    },
    32: {
        title: "Ancestral Reverence",
        programmingPartner: 42, physiology: "Spleen / Bones", codonRing: "Ring of Life and Death", aminoAcid: "Valine",
        shadow: { keyword: "Failure", description: "Fear of failure that prevents risk-taking; defining yourself by past defeats. This shadow keeps you trapped in the past, replaying old failures and using them as evidence that you should never try again. The fear of failure is really the fear of change — a clinging to the known that prevents the new from emerging." },
        gift: { keyword: "Preservation", description: "The wisdom to conserve and protect what has lasting value; patient endurance. Preservation is the art of knowing what to keep and what to release. This gift honors the ancestral lineage while remaining open to evolution, preserving the timeless wisdom of the past while allowing outdated structures to fall away naturally." },
        siddhi: { keyword: "Veneration", description: "Deep reverence for all of life; honoring the sacred in the ordinary. Veneration is the state of holding all of life in sacred regard — seeing the divine in every leaf, stone, and human face. This frequency connects you to the unbroken chain of your ancestors, honoring the vast evolutionary journey that brought you to this moment." }
    },
    33: {
        title: "The Final Revelation",
        programmingPartner: 19, physiology: "Throat / Thyroid", codonRing: "Ring of Purification", aminoAcid: "Serine",
        shadow: { keyword: "Forgetting", description: "Refusing to learn from the past; repeating patterns through unconscious denial. This shadow creates a cycle of forgetting where the lessons of experience are lost because the pain associated with them is too great to face. Without the willingness to remember and process past experiences, you are condemned to repeat the same patterns." },
        gift: { keyword: "Mindfulness", description: "The practice of conscious remembering; learning from experience with clarity. Mindfulness is the opposite of forgetting — it is the disciplined practice of staying awake and aware, especially during difficult experiences. Through mindfulness, every experience becomes a teacher, and the wisdom of the past illuminates the path forward." },
        siddhi: { keyword: "Revelation", description: "Sudden illumination that reveals hidden truths; the veil of forgetting lifted entirely. Revelation is the final remembering — the moment when the accumulated mindfulness of a lifetime suddenly crystallizes into a flash of total understanding. The veil lifts, and you see reality exactly as it is, in all its breathtaking clarity." }
    },
    34: {
        title: "The Beauty of the Beast",
        programmingPartner: 20, physiology: "Sacral Center / Sexual Organs", codonRing: "Ring of Life and Death", aminoAcid: "Valine",
        shadow: { keyword: "Force", description: "Using brute power to overwhelm; aggression born from impatience and insecurity. The 34th Shadow is raw, primal power that has not yet learned to temper itself with wisdom. This force can manifest as physical aggression, emotional bulldozing, or mental domination — any expression of power that overrides the needs and boundaries of others." },
        gift: { keyword: "Strength", description: "Power tempered by wisdom; the quiet confidence that doesn't need to prove itself. Strength emerges when raw force is refined by awareness and restraint. Like a powerful animal at rest, this gift radiates an effortless potency that commands respect without aggression. True strength is the soft power that moves mountains without strain." },
        siddhi: { keyword: "Majesty", description: "The full magnificence of human power aligned with divine will. Majesty is the beauty of the beast fully realized — the awesome spectacle of human power operating in total harmony with cosmic intelligence. At this frequency, you embody the primal creative force of nature itself, channeled through a fully awakened human being." }
    },
    35: {
        title: "Wormholes and Miracles",
        programmingPartner: 5, physiology: "Throat / Thyroid", codonRing: "Ring of Purification", aminoAcid: "Serine",
        shadow: { keyword: "Hunger", description: "Restless seeking for new experiences; never satisfied with what you have. This shadow creates a voracious appetite for novelty that can never be satisfied. Like a restless traveler who arrives in paradise but immediately begins planning the next trip, the hungry mind prevents you from ever fully tasting the richness of the present moment." },
        gift: { keyword: "Adventure", description: "Embracing change and the unknown with enthusiasm; life as a grand exploration. Adventure redeems hunger by bringing presence and enthusiasm to each new experience. At this frequency, you embrace the unknown not as an escape from the present but as a joyful exploration of life's infinite possibilities, finding wormholes to unexpected miracles." },
        siddhi: { keyword: "Boundlessness", description: "Freedom from all limitation; infinite expansion of consciousness beyond all horizons. Boundlessness is the experience of consciousness without any container — awareness so vast that it encompasses all of creation. At this frequency, every boundary dissolves and you realize that the adventure you were seeking was always right here, in the infinite depth of this moment." }
    },
    36: {
        title: "Becoming Human",
        programmingPartner: 6, physiology: "Solar Plexus / Pancreas", codonRing: "Ring of Divinity", aminoAcid: "Tyrosine",
        shadow: { keyword: "Turbulence", description: "Emotional storms and crisis; being tossed about by waves of intense feeling. The 36th Shadow subjects you to the full force of the human emotional experience — waves of crisis, drama, and intensity that can feel overwhelming. This turbulence is not a malfunction but a necessary stage in the alchemical process of becoming fully human." },
        gift: { keyword: "Humanity", description: "Compassion born from personal suffering; using emotional depth to connect with others. Humanity emerges when you stop fighting your emotional nature and allow your suffering to crack open your heart. The very turbulence that once tormented you becomes the source of a deep empathy and compassion for all human beings." },
        siddhi: { keyword: "Compassion", description: "The vast heart that holds all suffering; transforming darkness into light through love. Compassion at this frequency is not sympathy from a distance but a complete merging with the suffering of all beings. Through this sacred descent into the darkest depths of human experience, darkness itself is transmuted into light." }
    },
    37: {
        title: "Family Alchemy",
        programmingPartner: 40, physiology: "Stomach / Digestive System", codonRing: "Ring of Divinity", aminoAcid: "Tyrosine",
        shadow: { keyword: "Weakness", description: "Compromising your truth to keep the peace; giving away power in relationships. This shadow manifests as a tendency to sacrifice your authenticity for the sake of harmony in your closest relationships. The need to be loved and accepted causes you to suppress your true feelings, creating an underlying resentment that poisons the very bonds you are trying to protect." },
        gift: { keyword: "Equality", description: "Creating balanced and fair relationships; honoring both self and other equally. Equality transforms family dynamics by establishing clear agreements based on mutual respect. This gift enables you to maintain your individual truth while remaining deeply connected to others, creating relationships that are both honest and tender." },
        siddhi: { keyword: "Tenderness", description: "Exquisite vulnerability that opens the deepest bonds; strength through softness. Tenderness is the highest expression of family love — a quality of such exquisite vulnerability that it dissolves all barriers between hearts. At this frequency, every relationship becomes a crucible for alchemical transformation, turning the lead of human weakness into the gold of divine love." }
    },
    38: {
        title: "The Warrior of Light",
        programmingPartner: 39, physiology: "Adrenal Glands / Kidneys", codonRing: "Ring of Miracles", aminoAcid: "Glutamic Acid",
        shadow: { keyword: "Struggle", description: "Fighting against life; exhausting yourself through unnecessary resistance and opposition. The 38th Shadow keeps you in a state of perpetual struggle, turning life into a battlefield. Whether the fight is physical, emotional, or mental, this shadow consumes enormous energy in resistance against forces that cannot be defeated through opposition alone." },
        gift: { keyword: "Perseverance", description: "Courageous persistence in the face of adversity; standing firm for what matters. Perseverance transforms struggle into purposeful endurance. The warrior of light does not fight against life but stands firm within it, maintaining integrity and commitment in the face of all challenges. This gift knows which battles are worth fighting and which to release." },
        siddhi: { keyword: "Honour", description: "Living with complete integrity; every action aligned with the highest truth. Honour is the warrior's ultimate victory — not a triumph over external enemies but the complete alignment of your actions with your deepest truth. At this frequency, your life becomes a testament to the power of living with absolute integrity." }
    },
    39: {
        title: "The Tension of Transcendence",
        programmingPartner: 38, physiology: "Lymphatic System / Legs", codonRing: "Ring of Prosperity", aminoAcid: "Glycine",
        shadow: { keyword: "Provocation", description: "Triggering emotional reactions in others; unconsciously stirring up conflict. This shadow creates a pattern of unconsciously provoking others through emotional pressure, testing their limits until they react. The provocation is not malicious but serves as a catalyst that reveals hidden emotional truths that would otherwise remain buried." },
        gift: { keyword: "Dynamism", description: "Using creative tension as fuel for growth; catalyzing change through spirited engagement. Dynamism harnesses the provocative energy of this Gene Key and channels it into creative transformation. Rather than unconsciously triggering others, you become a conscious catalyst who uses emotional pressure skillfully to inspire growth and breakthrough." },
        siddhi: { keyword: "Liberation", description: "Complete freedom from all emotional patterns; the spirit unbound. Liberation is the release that comes when all emotional tension has been fully transcended. At this frequency, the energy that was bound up in provocation and reaction is freed, creating an explosion of spiritual power that liberates not only yourself but everyone around you." }
    },
    40: {
        title: "The Will to Surrender",
        programmingPartner: 37, physiology: "Stomach / Ego Center", codonRing: "Ring of Alchemy", aminoAcid: "Arginine",
        shadow: { keyword: "Exhaustion", description: "Burnout from over-giving or over-working; depleting yourself for others. The 40th Shadow traps you in a cycle of over-doing — giving too much to others at the expense of your own wellbeing. This exhaustion is not just physical but a deep depletion of will that comes from not honoring your own need for rest and solitude." },
        gift: { keyword: "Resolve", description: "The willpower to set healthy boundaries; knowing when to give and when to rest. Resolve is the gift of knowing your limits and honoring them. This powerful capacity enables you to say no with love, to withdraw when necessary, and to recharge your batteries so that when you do give, you give from a place of genuine abundance." },
        siddhi: { keyword: "Divine Will", description: "Surrendering personal will to the greater flow; effortless action aligned with the whole. Divine Will is the ultimate surrender — the moment when your personal will merges completely with the will of the cosmos. At this frequency, there is no longer any effort because your actions are perfectly aligned with the natural flow of existence." }
    },
    41: {
        title: "The Prime Emanation",
        programmingPartner: 31, physiology: "Adrenal Glands / Root Center", codonRing: "Ring of Gaia", aminoAcid: "Leucine",
        shadow: { keyword: "Fantasy", description: "Escaping into imagined futures; confusing dreams with reality. The 41st Shadow is the prime source of human fantasy — the tendency to project your hopes and desires into an imagined future rather than engaging with reality as it is. This creates a perpetual gap between expectation and experience that generates chronic disappointment." },
        gift: { keyword: "Anticipation", description: "Healthy excitement about possibilities; using imagination to fuel creative action. Anticipation transforms fantasy into a creative force by bringing the energy of imagination into the present moment. Rather than escaping into the future, you use your capacity for vision to fuel inspired action in the here and now." },
        siddhi: { keyword: "Emanation", description: "Becoming a source of new realities; pure creative potential manifesting through you. Emanation is the prime creative force of the universe itself flowing through you. At this frequency, you become a source point from which entirely new realities spring into being — not through personal will but through the natural creative overflow of your awakened nature." }
    },
    42: {
        title: "Letting Go of Living and Dying",
        programmingPartner: 32, physiology: "Reproductive System", codonRing: "Ring of Matter", aminoAcid: "Aspartic Acid",
        shadow: { keyword: "Expectation", description: "Attachment to specific outcomes; disappointment when reality doesn't match your plans. This shadow keeps you trapped in a cycle of hoping and being let down, planning and being thwarted. The expectation that things should go a certain way prevents you from surrendering to the natural cycle of beginnings and endings that governs all life." },
        gift: { keyword: "Detachment", description: "Engaging fully while releasing attachment to results; inner freedom amidst action. Detachment is not indifference but the art of giving your all while remaining unattached to outcomes. This gift enables you to throw yourself wholeheartedly into life while simultaneously accepting that every beginning contains its ending." },
        siddhi: { keyword: "Celebration", description: "Rejoicing in life exactly as it is; every ending becomes a new beginning. Celebration is the natural response to fully letting go of living and dying. When you release all expectations about how life should unfold, what remains is a continuous celebration — a joyful acceptance that every moment is both complete and ever-renewing." }
    },
    43: {
        title: "Breakthrough",
        programmingPartner: 23, physiology: "Brain / Inner Ear", codonRing: "Ring of Matter", aminoAcid: "Aspartic Acid",
        shadow: { keyword: "Deafness", description: "Being closed to new insights; refusing to hear what challenges your worldview. The 43rd Shadow creates a kind of inner deafness — an inability or unwillingness to receive insights that would challenge your established mental framework. This deafness can manifest as stubbornness, arrogance, or simply a chronic resistance to new ideas." },
        gift: { keyword: "Insight", description: "Sudden breakthroughs of understanding; the 'aha' moment that transforms perception. Insight is the great gift of the awakened inner ear — the capacity to receive sudden downloads of understanding that bypass the rational mind. These breakthrough moments transform your perception and can change the entire direction of your life in an instant." },
        siddhi: { keyword: "Epiphany", description: "Continuous revelation; living in a state of perpetual breakthrough and wonder. Epiphany is the experience of continuous breakthrough — a state in which the inner ear is permanently open and receiving transmissions from the universal mind. At this frequency, every moment brings a fresh revelation, and life becomes an endless cascade of wonder." }
    },
    44: {
        title: "Karmic Relationships",
        programmingPartner: 24, physiology: "Spleen / Bones / Smell", codonRing: "Ring of Illusion", aminoAcid: "Tryptophan",
        shadow: { keyword: "Interference", description: "Meddling in others' affairs; patterns of codependency rooted in fear. The 44th Shadow operates through the ancient patterns of karmic entanglement — the web of fear-based relationships that bind us to each other through cycles of interference and codependency. These patterns repeat across generations until they are consciously recognized and released." },
        gift: { keyword: "Teamwork", description: "The synergy of working together; creating something greater through collaboration. Teamwork redeems karmic patterns by transforming them into opportunities for conscious collaboration. When you bring awareness to the deep patterns that connect you to others, those relationships evolve from karmic bondage into creative partnerships that serve the greater good." },
        siddhi: { keyword: "Synarchy", description: "Perfect group harmony where each member serves the whole without losing individuality. Synarchy is the ultimate expression of teamwork — a state of perfect collective harmony in which every individual contributes their unique genius to the whole. This is the future of human organization, where hierarchy gives way to a natural, organic order of mutual service." }
    },
    45: {
        title: "Cosmic Communion",
        programmingPartner: 26, physiology: "Bones / Skeletal System", codonRing: "Ring of Purification", aminoAcid: "Serine",
        shadow: { keyword: "Dominance", description: "Misuse of material power; controlling others through wealth or status. The 45th Shadow corrupts the natural principle of gathering and distribution by concentrating resources in the hands of the few. This creates a world of haves and have-nots, where material power is used to dominate rather than to serve the collective wellbeing." },
        gift: { keyword: "Synergy", description: "Gathering resources for the benefit of all; leadership that creates collective prosperity. Synergy transforms the dynamic of dominance into one of communal abundance. This gift enables you to gather people and resources together in service of a shared vision, creating a rising tide that lifts all boats rather than hoarding wealth for yourself." },
        siddhi: { keyword: "Communion", description: "The mystical experience of shared abundance; all beings united as one body. Communion is the cosmic meal — the experience of all beings sharing in the abundance of creation as one family. At this frequency, the boundaries between mine and yours dissolve completely, and prosperity becomes a shared state of grace." }
    },
    46: {
        title: "A Science of Luck",
        programmingPartner: 25, physiology: "Body / Physical Vitality", codonRing: "Ring of Destiny", aminoAcid: "Alanine",
        shadow: { keyword: "Seriousness", description: "Taking life too heavily; losing the lightness and joy of embodied existence. The 46th Shadow weighs you down with an excessive gravity that makes the body feel like a burden rather than a gift. Seriousness creates a disconnection from the simple pleasures of physical existence, turning life into an endurance test rather than a celebration." },
        gift: { keyword: "Delight", description: "Finding joy in the physical experience; celebrating the body and its senses. Delight is the rediscovery of the body as a temple of joy. This gift reconnects you with the simple magic of being alive in a physical body — the taste of food, the warmth of sunlight, the pleasure of movement. When you embrace the body with delight, luck follows naturally." },
        siddhi: { keyword: "Ecstasy", description: "The body becomes a vessel of divine rapture; physical existence as pure bliss. Ecstasy is the ultimate science of luck — the discovery that the body itself is a gateway to the divine. At this frequency, every cell in your body vibrates with such joy that physical existence becomes an unbroken experience of sacred rapture." }
    },
    47: {
        title: "Transmuting the Past",
        programmingPartner: 22, physiology: "Brain / Limbic System", codonRing: "Ring of Alchemy", aminoAcid: "Arginine",
        shadow: { keyword: "Oppression", description: "Mental anguish and feeling trapped; the weight of unanswered questions and confusion. The 47th Shadow creates a kind of mental oppression where the weight of past experiences and unanswered questions becomes almost unbearable. This pressure can feel like being trapped in a labyrinth of suffering with no visible way out." },
        gift: { keyword: "Transmutation", description: "Alchemizing suffering into wisdom; transforming mental pressure into breakthrough insights. Transmutation is the alchemical art of transforming the lead of suffering into the gold of wisdom. This gift emerges when you stop resisting the mental pressure and instead allow it to work on you, catalyzing profound inner transformation and insight." },
        siddhi: { keyword: "Transfiguration", description: "Complete transformation of consciousness; the mind dissolved into pure light. Transfiguration is the ultimate alchemical achievement — the complete transmutation of the human mind into divine light. At this frequency, the accumulated suffering of the past is not merely healed but transformed into a radiant field of illuminated awareness." }
    },
    48: {
        title: "The Wonder of Uncertainty",
        programmingPartner: 21, physiology: "Spleen / Immune Response", codonRing: "Ring of Destiny", aminoAcid: "Alanine",
        shadow: { keyword: "Inadequacy", description: "Feeling you don't know enough; paralysis from the fear of not being ready. The 48th Shadow convinces you that you are never quite prepared enough, never quite expert enough to act. This creates a pattern of perpetual study and preparation that actually prevents you from accessing the deep well of wisdom that already exists within you." },
        gift: { keyword: "Resourcefulness", description: "Trusting your depth of knowledge; finding solutions from your well of experience. Resourcefulness emerges when you stop accumulating knowledge and begin trusting what you already know. This gift draws from a deep inner well of accumulated wisdom, finding creative solutions in the moment by combining experience with intuitive knowing." },
        siddhi: { keyword: "Wisdom", description: "The inexhaustible well of knowing; wisdom that flows from the source of all understanding. Wisdom at this frequency is not accumulated knowledge but a direct connection to the universal source of all knowing. It is the wonder of uncertainty itself — the recognition that not-knowing is the gateway to the deepest intelligence of all." }
    },
    49: {
        title: "Changing the World from the Inside",
        programmingPartner: 4, physiology: "Stomach / Digestive Fire", codonRing: "Ring of Humanity", aminoAcid: "Histidine",
        shadow: { keyword: "Reaction", description: "Emotional volatility; being triggered into fight-or-flight by perceived threats. The 49th Shadow is the revolutionary impulse corrupted by reactivity — the tendency to lash out emotionally whenever you feel threatened or your values are violated. This creates cycles of uprising and repression that never lead to lasting change." },
        gift: { keyword: "Revolution", description: "The courage to initiate necessary change; transforming outdated structures with clarity. Revolution at the Gift level is not violent overthrow but a principled transformation of what no longer serves. This gift gives you the courage and clarity to identify what needs to change and to initiate that change with compassion and wisdom." },
        siddhi: { keyword: "Rebirth", description: "Continuous death and renewal; the phoenix rising from the ashes of the old. Rebirth is the ultimate revolution — the recognition that true change can only happen from the inside out. At this frequency, you become a living embodiment of transformation, continuously dying to the old and being reborn into ever-higher expressions of love and truth." }
    },
    50: {
        title: "Cosmic Order",
        programmingPartner: 3, physiology: "Stomach / Spleen", codonRing: "Ring of Miracles", aminoAcid: "Glutamic Acid",
        shadow: { keyword: "Corruption", description: "Compromising values under pressure; erosion of natural law and cosmic principles. The 50th Shadow erodes the very foundations of cosmic order through the corruption of natural principles. Whether in governance, ecology, or personal ethics, this shadow manifests wherever human beings compromise their deepest values under pressure from fear or greed." },
        gift: { keyword: "Equilibrium", description: "Maintaining balance between cosmic law and human needs; harmonizing order with compassion. Equilibrium is the gift of holding the balance between structure and freedom, law and compassion. This frequency enables you to maintain your center even in chaotic times, serving as an anchor point for others who have lost their equilibrium." },
        siddhi: { keyword: "Harmony", description: "Perfect alignment with universal law; every action in accord with the cosmic order. Harmony at this level is not merely personal balance but alignment with the cosmic order itself. At this frequency, you become a living expression of natural law — every action, word, and thought reverberates in perfect accord with the underlying harmony of the universe." }
    },
    51: {
        title: "Initiative to Initiation",
        programmingPartner: 57, physiology: "Heart / Gallbladder", codonRing: "Ring of Miracles", aminoAcid: "Glutamic Acid",
        shadow: { keyword: "Agitation", description: "Restless nervous energy; being shocked or startled by life's sudden changes. The 51st Shadow keeps the nervous system in a state of perpetual agitation, creating a hypersensitivity to shock and sudden change. This jittery energy makes it difficult to find your center, keeping you in a state of reactive alertness that exhausts the body and mind." },
        gift: { keyword: "Initiative", description: "The courage to act first; channeling shock into creative initiative and boldness. Initiative transforms the energy of agitation into a powerful first-mover advantage. This gift gives you the courage to leap into the unknown before others, turning the shock of the unexpected into an opportunity for bold, creative action." },
        siddhi: { keyword: "Awakening", description: "The ultimate shock of enlightenment; sudden and complete awakening to reality. Awakening is the final initiation — the moment when the accumulated energy of all your initiatives suddenly ignites into a flash of total illumination. This is the miracle of consciousness awakening to itself — the greatest shock of all." }
    },
    52: {
        title: "The Stillpoint",
        programmingPartner: 58, physiology: "Root Center / Adrenals", codonRing: "Ring of Prosperity", aminoAcid: "Glycine",
        shadow: { keyword: "Stress", description: "Inability to be still; constant mental and physical tension that drains vitality. The 52nd Shadow traps you in a cycle of perpetual tension where the body and mind are unable to truly rest. This stress is not just a response to external pressure but a deep-seated inability to find and rest in your own inner stillpoint." },
        gift: { keyword: "Restraint", description: "The power of stillness; knowing when not to act and finding strength in pause. Restraint is the art of conscious non-action — the capacity to hold still when every impulse in your body urges you to move. This gift reveals that the most powerful action often comes from perfect stillness, like an archer who holds the bow at full draw before releasing." },
        siddhi: { keyword: "Stillness", description: "Absolute inner quiet; the mountain-like presence that nothing can disturb. Stillness at this frequency is the stillpoint at the center of the universe — an absolute quietude that exists beneath all movement and change. When you embody this Siddhi, you become like a mountain — unshakeable, eternal, and profoundly at peace." }
    },
    53: {
        title: "Evolving Beyond Evolution",
        programmingPartner: 54, physiology: "Root Center / Base of Spine", codonRing: "Ring of Prosperity", aminoAcid: "Glycine",
        shadow: { keyword: "Immaturity", description: "Rushing into new beginnings without completing what came before; perpetual starting over. This shadow creates a pattern of premature new beginnings, where the excitement of starting something new prevents you from completing the full cycle of development. Like a seed that is pulled up before it can take root, immaturity prevents genuine growth." },
        gift: { keyword: "Expansion", description: "Growing through structured development; maturity that comes from completing full cycles. Expansion is the gift of allowing each cycle to complete naturally before beginning the next. Through patient development and structured growth, you evolve through a series of ever-expanding cycles that build genuine wisdom and depth over time." },
        siddhi: { keyword: "Superabundance", description: "Infinite creative potential overflowing into form; the cornucopia of new beginnings. Superabundance is what occurs when evolution transcends itself — when the creative potential of life overflows all boundaries and pours forth in an endless cornucopia of new forms, new beginnings, and new expressions of the divine." }
    },
    54: {
        title: "The Serpent Path",
        programmingPartner: 53, physiology: "Root Center / Kundalini", codonRing: "Ring of Prosperity", aminoAcid: "Glycine",
        shadow: { keyword: "Greed", description: "Insatiable desire for more; ambition driven by fear of not having enough. The 54th Shadow is the primal force of material ambition driven by a deep fear of scarcity. This greed extends beyond material possessions to include spiritual materialism — the accumulation of experiences, teachings, and practices as a substitute for genuine transformation." },
        gift: { keyword: "Aspiration", description: "Healthy ambition directed toward higher goals; the drive to ascend and evolve. Aspiration transforms greed into a powerful upward drive that fuels genuine spiritual evolution. The serpent energy that was once directed toward material accumulation now rises through the body as a force of spiritual ascension, drawing you toward ever-higher states of consciousness." },
        siddhi: { keyword: "Ascension", description: "Rising above all material attachment; the spirit soaring to its highest expression. Ascension is the serpent path complete — the kundalini fully risen, the spirit fully awakened. At this frequency, all attachment to the material world falls away naturally, and consciousness ascends to its highest possible expression in human form." }
    },
    55: {
        title: "The Dragonfly's Dream",
        programmingPartner: 59, physiology: "Solar Plexus / Emotional Body", codonRing: "Ring of No Return", aminoAcid: "Lysine",
        shadow: { keyword: "Victimization", description: "Feeling powerless and at the mercy of circumstances; emotional suffering as identity. The 55th Shadow keeps you trapped in the oldest human pattern — the belief that you are a victim of forces beyond your control. This victim consciousness permeates every aspect of life, creating a reality colored by helplessness and emotional suffering." },
        gift: { keyword: "Freedom", description: "Emotional independence; the ability to feel deeply without being controlled by feelings. Freedom at this level is not freedom from emotions but freedom within them. This gift liberates you from the tyranny of the victim pattern, enabling you to experience the full spectrum of human feeling without losing your inner sovereignty." },
        siddhi: { keyword: "Freedom", description: "Absolute liberation from all emotional bondage; the spirit forever free. This Siddhi represents a quantum leap in human consciousness — the complete mutation of the emotional body that Richard Rudd describes as the Dragonfly's Dream. It is the emergence of a new kind of human being who is permanently free from the Shadow frequency." }
    },
    56: {
        title: "Divine Indulgence",
        programmingPartner: 60, physiology: "Throat / Voice / Story", codonRing: "Ring of Seeking", aminoAcid: "Leucine",
        shadow: { keyword: "Distraction", description: "Scattering attention across too many stimuli; losing focus through constant input. The 56th Shadow keeps you perpetually distracted, moving from one stimulus to the next without ever settling into depth. This creates a life of surface-level engagement where the richness of experience is sacrificed for the constant novelty of new input." },
        gift: { keyword: "Enrichment", description: "Using diverse experiences to enrich your narrative; weaving stories that inspire. Enrichment transforms distraction into a creative gift by using your diverse experiences as raw material for storytelling. This gift enables you to weave the threads of many different experiences into narratives that enrich and inspire others." },
        siddhi: { keyword: "Intoxication", description: "Divine inebriation with the wonder of existence; drunk on the beauty of life. Intoxication is divine indulgence — the state of being so overwhelmed by the beauty and wonder of existence that ordinary consciousness is permanently altered. At this frequency, every sensory experience becomes a doorway to the divine." }
    },
    57: {
        title: "A Gentle Wind",
        programmingPartner: 51, physiology: "Spleen / Intuitive Body", codonRing: "Ring of Destiny", aminoAcid: "Alanine",
        shadow: { keyword: "Unease", description: "Low-level anxiety and fear; a persistent sense that something is not quite right. The 57th Shadow is one of the most subtle fears — a pervasive sense of unease that hums beneath the surface of awareness like a low-frequency vibration. This chronic anxiety disrupts your ability to trust your instincts and undermines your natural sense of safety." },
        gift: { keyword: "Intuition", description: "Acute sensitivity to subtle signals; trusting your gut instinct for moment-to-moment guidance. Intuition emerges when the fog of anxiety clears and you can finally hear the gentle wind of your inner knowing. This gift operates through the body's ancient intelligence — a moment-to-moment guidance system of extraordinary precision and subtlety." },
        siddhi: { keyword: "Clarity", description: "Crystal-clear perception beyond the mind; seeing reality exactly as it is. Clarity is the state of perfect inner transparency — the complete absence of fear that allows you to perceive reality without any distortion. Like a gentle wind that has cleared all clouds from the sky, this Siddhi reveals the luminous nature of existence in perfect, crystalline detail." }
    },
    58: {
        title: "From Stress to Bliss",
        programmingPartner: 52, physiology: "Root Center / Nervous System", codonRing: "Ring of Prosperity", aminoAcid: "Glycine",
        shadow: { keyword: "Dissatisfaction", description: "Chronic unhappiness and complaint; always finding fault with the present situation. The 58th Shadow is the voice of perpetual dissatisfaction — the inner critic that finds something wrong with every experience, every person, and every moment. This chronic complaint creates a life of joyless striving where nothing is ever quite good enough." },
        gift: { keyword: "Vitality", description: "The joy of being alive; enthusiasm and energy that comes from appreciating life. Vitality is the transformation of dissatisfaction into a vibrant, enthusiastic engagement with life. When the critical eye turns from fault-finding to appreciation, a tremendous surge of life force is released, filling your body with energy and your heart with joy." },
        siddhi: { keyword: "Bliss", description: "Unconditional joy that requires no external cause; the natural state of being. Bliss is the ultimate destination of the journey from stress — an unconditional joy that does not depend on any circumstance, achievement, or experience. It is the recognition that your natural state of being is one of absolute, causeless happiness." }
    },
    59: {
        title: "The Dragon in Your Genome",
        programmingPartner: 55, physiology: "Sexual Organs / Sacral Center", codonRing: "Ring of the Mountain", aminoAcid: "Glutamine",
        shadow: { keyword: "Dishonesty", description: "Barriers of deception between people; sexual and emotional manipulation. The 59th Shadow creates walls of dishonesty that prevent genuine intimacy between people. These barriers manifest as sexual manipulation, emotional withholding, and the countless small deceptions that keep relationships trapped at a surface level." },
        gift: { keyword: "Intimacy", description: "The courage to be transparent and vulnerable; dissolving barriers to true connection. Intimacy is the courage to lower your defenses and allow another person to see you completely. This gift dissolves the walls of dishonesty through radical vulnerability, creating the conditions for a depth of connection that transforms both partners at a genetic level." },
        siddhi: { keyword: "Transparency", description: "Complete openness without any walls; the dissolution of all separation between beings. Transparency is the dragon fully awakened — a state of such complete openness that there are no longer any barriers between your inner world and the outside world. At this frequency, your genome itself becomes transparent, radiating its pure essence into the collective field." }
    },
    60: {
        title: "The Cracking of the Vessel",
        programmingPartner: 56, physiology: "Root Center / Large Intestine", codonRing: "Ring of Origin", aminoAcid: "Stop Codon",
        shadow: { keyword: "Limitation", description: "Feeling trapped by restrictions; seeing boundaries as obstacles rather than creative constraints. The 60th Shadow creates a sense of imprisonment within the structures and limitations of physical reality. This shadow can manifest as depression, claustrophobia, or a desperate desire to break free from the constraints of your current situation." },
        gift: { keyword: "Realism", description: "Working creatively within limitations; finding freedom through accepting structure. Realism is the art of working brilliantly within constraints rather than fighting against them. This gift recognizes that limitation is not the opposite of freedom but its necessary container — like the banks of a river that give the water its power and direction." },
        siddhi: { keyword: "Justice", description: "The perfection of cosmic law; seeing the absolute rightness of all limitation and form. Justice at this level is not human judgment but the direct perception of cosmic order. At this frequency, you see that every limitation, every boundary, and every constraint is an expression of perfect cosmic intelligence — the vessel through which the infinite pours itself into form." }
    },
    61: {
        title: "The Holy of Holies",
        programmingPartner: 62, physiology: "Crown Center / Pineal Gland", codonRing: "Ring of No Return", aminoAcid: "Lysine",
        shadow: { keyword: "Psychosis", description: "Mental pressure from unanswerable questions; the mind pushed to its breaking point. The 61st Shadow subjects the mind to such intense pressure from the great existential questions that it can crack under the strain. This shadow is the source of both madness and genius — the relentless inner pressure to penetrate the deepest mysteries of existence." },
        gift: { keyword: "Inspiration", description: "Receiving creative downloads from the unknown; allowing mystery to fuel imagination. Inspiration is what happens when you stop trying to answer the unanswerable questions and instead allow them to work on you. The same pressure that creates psychosis, when surrendered to, becomes a channel for extraordinary creative inspiration from the universal mind." },
        siddhi: { keyword: "Sanctity", description: "The experience of the sacred in all things; life as a holy mystery. Sanctity is the Holy of Holies — the direct experience that every atom of creation is sacred. At this frequency, the questions that once tormented the mind dissolve into a vast silence, and what remains is an overwhelming sense of the holiness of all existence." }
    },
    62: {
        title: "The Language of Light",
        programmingPartner: 61, physiology: "Throat / Thyroid / Language", codonRing: "Ring of Matter", aminoAcid: "Aspartic Acid",
        shadow: { keyword: "Intellect", description: "Over-reliance on mental precision; missing the bigger picture through excessive detail. The 62nd Shadow reduces the vast mystery of language to a merely intellectual exercise, where words become tools for dissecting reality rather than celebrating it. This creates a sterile precision that kills the living spirit of communication." },
        gift: { keyword: "Precision", description: "Exact and careful expression; the art of naming things with perfect accuracy. Precision redeems the intellect by putting it in service of the heart. This gift enables you to name things with such accuracy that your words become living entities — each one carefully chosen to convey exactly the right meaning with maximum clarity and minimum waste." },
        siddhi: { keyword: "Impeccability", description: "Flawless expression in every word and deed; language as a vehicle of truth. Impeccability is the Language of Light — the state in which every word you speak is infused with the light of truth. At this frequency, language transcends its ordinary function and becomes a direct transmission of consciousness that transforms all who receive it." }
    },
    63: {
        title: "Reaching the Source",
        programmingPartner: 64, physiology: "Crown Center / Head Center", codonRing: "Ring of Divinity", aminoAcid: "Tyrosine",
        shadow: { keyword: "Doubt", description: "Chronic skepticism and questioning; never feeling certain enough to move forward. The 63rd Shadow is the mind's deepest pattern of doubt — an unrelenting questioning that undermines every certainty and prevents you from ever resting in the truth. This doubt can be paralyzing, creating an endless loop of second-guessing that prevents decisive action." },
        gift: { keyword: "Inquiry", description: "Healthy questioning that leads to deeper understanding; doubt transformed into curiosity. Inquiry transforms crippling doubt into a powerful investigative tool. When doubt becomes genuinely curious rather than anxious, it opens doorways to deeper and deeper levels of truth. This gift is the scientific spirit at its best — questioning not to destroy but to discover." },
        siddhi: { keyword: "Truth", description: "Direct apprehension of absolute truth; the end of all questioning in pure knowing. Truth at this frequency is not a concept but a direct experience — the source that all inquiry has been seeking. When you reach this source, all doubt dissolves in an instant, replaced by an absolute certainty that requires no proof and admits no question." }
    },
    64: {
        title: "The Aurora",
        programmingPartner: 63, physiology: "Crown Center / Pineal Gland", codonRing: "Ring of Alchemy", aminoAcid: "Arginine",
        shadow: { keyword: "Confusion", description: "Mental overwhelm from too many possibilities; inability to find clarity amidst complexity. The 64th Shadow is the bewildering mental pressure of having too many images, possibilities, and memories flooding through your mind simultaneously. This creates a state of chronic confusion where you feel unable to find any clear direction or make any definitive choice." },
        gift: { keyword: "Imagination", description: "Visionary thinking that embraces all possibilities; creative genius born from mental diversity. Imagination transforms the flood of mental imagery from a source of confusion into a wellspring of creative vision. This gift enables you to hold multiple possibilities simultaneously without needing to choose between them, allowing truly original ideas to emerge from the interplay." },
        siddhi: { keyword: "Illumination", description: "The mind fully lit up; complete understanding that transcends all confusion. Illumination is the Aurora — the great light that dawns when all the diverse fragments of the mind suddenly coalesce into a unified field of understanding. At this frequency, the mind becomes a prism through which the light of pure consciousness is refracted into the infinite colors of creation." }
    }
};

/* ═══════════════════════════════════════════════════════════════
   GATES & GATE/LINE CALCULATION
   ═══════════════════════════════════════════════════════════════ */
const GATES = [
    41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3,
    27, 24, 2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56,
    31, 33, 7, 4, 29, 59, 40, 64, 47, 6, 46, 18, 48, 57, 32, 50,
    28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58, 38, 54, 61, 60
];

function longitudeToGateLine(longitude) {
    const adjusted = ((longitude + 58.0) % 360 + 360) % 360;
    const pct = adjusted / 360.0;
    const gateIndex = Math.floor(pct * 64) % 64;
    const gate = GATES[gateIndex];
    const line = Math.floor((pct * 384) % 6) + 1;
    return { gate, line };
}

/* ═══════════════════════════════════════════════════════════════
   SPHERE & SEQUENCE DEFINITIONS
   ═══════════════════════════════════════════════════════════════ */
const SPHERES = {
    "Life's Work": { body: "Sun",     side: "personality" },
    "Evolution":   { body: "Earth",   side: "personality" },
    "Radiance":    { body: "Sun",     side: "design" },
    "Purpose":     { body: "Earth",   side: "design" },
    "Attraction":  { body: "Moon",    side: "design" },
    "IQ":          { body: "Venus",   side: "personality" },
    "EQ":          { body: "Mars",    side: "personality" },
    "SQ":          { body: "Venus",   side: "design" },
    "Vocation":    { body: "Mars",    side: "design" },
    "Culture":     { body: "Jupiter", side: "design" },
    "Pearl":       { body: "Jupiter", side: "personality" }
};

const SEQUENCES = {
    "Activation Sequence": ["Life's Work", "Evolution", "Radiance", "Purpose"],
    "Venus Sequence":      ["Attraction", "IQ", "EQ", "SQ", "Vocation"],
    "Pearl Sequence":      ["Culture", "Pearl"]
};

/* ═══════════════════════════════════════════════════════════════
   ASTRONOMY HELPERS  (uses astronomy-engine CDN)
   ═══════════════════════════════════════════════════════════════ */
function getEclipticLon(body, date) {
    if (body === "Sun")  return Astronomy.SunPosition(date).elon;
    if (body === "Moon") return Astronomy.EclipticGeoMoon(date).lon;
    if (body === "Earth") return (Astronomy.SunPosition(date).elon + 180.0) % 360.0;
    const vec = Astronomy.GeoVector(body, date, true);
    return Astronomy.Ecliptic(vec).elon;
}

function getPlanetaryPositions(date) {
    const pos = {};
    for (const b of ["Sun", "Moon", "Venus", "Mars", "Jupiter"]) {
        pos[b] = getEclipticLon(b, date);
    }
    pos["Earth"] = (pos["Sun"] + 180.0) % 360.0;
    return pos;
}

function findDesignDate(birthDate) {
    const birthSunLon = getEclipticLon("Sun", birthDate);
    const target = ((birthSunLon - 88.0) % 360 + 360) % 360;

    let earlyMs = birthDate.getTime() - 96 * 86400000;
    let lateMs  = birthDate.getTime() - 84 * 86400000;

    for (let i = 0; i < 64; i++) {
        const mid = (earlyMs + lateMs) / 2;
        const sunLon = getEclipticLon("Sun", new Date(mid));
        let diff = sunLon - target;
        if (diff > 180)  diff -= 360;
        if (diff < -180) diff += 360;
        if (diff < 0) earlyMs = mid;
        else           lateMs  = mid;
    }
    return new Date((earlyMs + lateMs) / 2);
}

/* ═══════════════════════════════════════════════════════════════
   TIMEZONE HELPERS
   ═══════════════════════════════════════════════════════════════ */
async function getTimezone(lat, lon) {
    const res = await fetch(
        "https://timeapi.io/api/timezone/coordinate?latitude=" + lat + "&longitude=" + lon
    );
    if (!res.ok) throw new Error("Timezone lookup failed. Please try again.");
    const data = await res.json();
    if (!data.timeZone) throw new Error("Could not determine timezone for this location.");
    return data.timeZone;
}

function localToUTC(dateStr, timeStr, tzName) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hour, minute]     = timeStr.split(":").map(Number);

    const guessMs = Date.UTC(year, month - 1, day, hour, minute, 0);
    const guess   = new Date(guessMs);

    const fmt   = new Intl.DateTimeFormat("en-US", {
        timeZone: tzName,
        year: "numeric", month: "numeric", day: "numeric",
        hour: "numeric", minute: "numeric", second: "numeric",
        hour12: false
    });
    const parts = fmt.formatToParts(guess);
    const get   = function (type) {
        var v = parts.find(function (p) { return p.type === type; }).value;
        return parseInt(v, 10);
    };

    var h = get("hour");
    if (h === 24) h = 0;

    const localMs  = Date.UTC(get("year"), get("month") - 1, get("day"), h, get("minute"), get("second"));
    const offsetMs = localMs - guessMs;

    return new Date(guessMs - offsetMs);
}

/* ═══════════════════════════════════════════════════════════════
   MAIN CALCULATION  (all client-side)
   ═══════════════════════════════════════════════════════════════ */
async function calculateProfile(dateStr, timeStr, lat, lon) {
    const tzName   = await getTimezone(lat, lon);
    const birthUTC = localToUTC(dateStr, timeStr, tzName);

    const personalityPos = getPlanetaryPositions(birthUTC);
    const designDate     = findDesignDate(birthUTC);
    const designPos      = getPlanetaryPositions(designDate);

    const results = {};
    for (const [seqName, sphereNames] of Object.entries(SEQUENCES)) {
        results[seqName] = [];
        for (const name of sphereNames) {
            const { body, side } = SPHERES[name];
            const positions = (side === "personality") ? personalityPos : designPos;
            const lonDeg    = positions[body];
            const { gate, line } = longitudeToGateLine(lonDeg);
            const gk = GENE_KEYS[gate];
            results[seqName].push({
                sphere: name, gate, line,
                shadow: gk.shadow, gift: gk.gift, siddhi: gk.siddhi,
                title: gk.title,
                programmingPartner: gk.programmingPartner,
                physiology: gk.physiology,
                codonRing: gk.codonRing,
                aminoAcid: gk.aminoAcid
            });
        }
    }
    return results;
}

/* ═══════════════════════════════════════════════════════════════
   PDF GENERATION  (jsPDF + autoTable, all client-side)
   ═══════════════════════════════════════════════════════════════ */
function generatePDF(name, dateStr, timeStr, location, results) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pw = doc.internal.pageSize.getWidth();

    doc.setFontSize(20);
    doc.setFont(undefined, "bold");
    doc.text("Gene Keys Hologenetic Profile", pw / 2, 20, { align: "center" });

    doc.setFontSize(15);
    doc.setFont(undefined, "normal");
    doc.text(name, pw / 2, 29, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Born: " + dateStr + " at " + timeStr + " \u2014 " + location, pw / 2, 36, { align: "center" });
    doc.setTextColor(0);

    doc.setDrawColor(180);
    doc.line(15, 40, pw - 15, 40);

    const rows = [];
    for (const [, spheres] of Object.entries(results)) {
        for (const s of spheres) {
            rows.push([s.sphere, String(s.gate), String(s.line),
                        s.shadow.keyword, s.gift.keyword, s.siddhi.keyword]);
        }
    }

    doc.autoTable({
        startY: 44,
        head: [["Sphere", "Key", "Line", "Shadow", "Gift", "Siddhi"]],
        body: rows,
        theme: "striped",
        headStyles: { fillColor: [139, 0, 0], fontStyle: "bold" },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
            1: { halign: "center", fontStyle: "bold" },
            2: { halign: "center" },
            3: { textColor: [180, 90, 60] },
            4: { textColor: [46, 139, 87] },
            5: { textColor: [110, 80, 180] }
        },
        margin: { left: 15, right: 15 }
    });

    var y = doc.lastAutoTable.finalY + 12;

    const seqColors = {
        "Activation Sequence": [139, 0, 0],
        "Venus Sequence":      [199, 21, 133],
        "Pearl Sequence":      [218, 165, 32]
    };

    for (const [seqName, spheres] of Object.entries(results)) {
        if (y > 255) { doc.addPage(); y = 20; }

        const sc = seqColors[seqName] || [0, 0, 0];
        doc.setFontSize(14);
        doc.setFont(undefined, "bold");
        doc.setTextColor(...sc);
        doc.text(seqName, 15, y);
        y += 2;
        doc.setDrawColor(...sc);
        doc.setLineWidth(0.5);
        doc.line(15, y, pw - 15, y);
        y += 7;

        for (const s of spheres) {
            // Metadata line
            var metaLine = "";
            if (s.programmingPartner) metaLine += "Partner: GK " + s.programmingPartner + "   ";
            if (s.physiology) metaLine += "Physiology: " + s.physiology + "   ";
            if (s.codonRing) metaLine += s.codonRing;

            doc.autoTable({
                startY: y,
                head: [[{
                    content: s.sphere + " \u2014 Gene Key " + s.gate + "." + s.line + (s.title ? "  \u2014  " + s.title : ""),
                    colSpan: 2,
                    styles: { fillColor: [55, 50, 80], textColor: 255, fontStyle: "bold", fontSize: 10 }
                }]],
                body: [
                    [{ content: metaLine, colSpan: 2, styles: { fontSize: 7, textColor: [140, 140, 160] } }],
                    [{ content: "Shadow",  styles: { fontStyle: "bold", textColor: [139, 69, 19] } },
                     s.shadow.keyword + ": " + s.shadow.description],
                    [{ content: "Gift",    styles: { fontStyle: "bold", textColor: [46, 139, 87] } },
                     s.gift.keyword + ": " + s.gift.description],
                    [{ content: "Siddhi",  styles: { fontStyle: "bold", textColor: [75, 0, 130] } },
                     s.siddhi.keyword + ": " + s.siddhi.description]
                ],
                theme: "plain",
                styles: { fontSize: 8, cellPadding: 3 },
                columnStyles: { 0: { cellWidth: 22 } },
                margin: { left: 15, right: 15 },
                pageBreak: "auto"
            });
            y = doc.lastAutoTable.finalY + 5;
        }
        y += 3;
    }

    doc.save(name.replace(/ /g, "_") + "_genekeys.pdf");
}

/* ═══════════════════════════════════════════════════════════════
   UI — form, autocomplete, results rendering
   ═══════════════════════════════════════════════════════════════ */
(function () {
    const formView    = document.getElementById("gkFormView");
    const resultsView = document.getElementById("gkResultsView");
    const form        = document.getElementById("gkProfileForm");
    const btnText     = document.getElementById("gkBtnText");
    const spinner     = document.getElementById("gkSpinner");
    const submitBtn   = document.getElementById("gkSubmitBtn");
    const errorMsg    = document.getElementById("gkErrorMsg");

    let lastPayload  = null;
    let lastResults  = null;

    // Stored coordinates from autocomplete selection
    let selectedLat = null;
    let selectedLon = null;

    const SEQ_CLASSES = {
        "Activation Sequence": "seq-activation",
        "Venus Sequence":      "seq-venus",
        "Pearl Sequence":      "seq-pearl"
    };

    const SEQ_SUBTITLES = {
        "Activation Sequence": "Discovering Your Genius",
        "Venus Sequence":      "Opening Your Heart",
        "Pearl Sequence":      "Releasing Your Prosperity"
    };

    // ── Form submit ──
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        errorMsg.style.display = "none";
        btnText.style.display  = "none";
        spinner.style.display  = "block";
        submitBtn.disabled     = true;

        const nameVal     = document.getElementById("gkName").value.trim();
        const dateVal     = document.getElementById("gkDate").value.trim();
        const timeVal     = document.getElementById("gkTime").value.trim() || "12:00";
        const locationVal = document.getElementById("gkLocation").value.trim();

        try {
            // Resolve lat/lon — use stored or geocode via Nominatim
            var lat = selectedLat;
            var lon = selectedLon;
            if (lat === null || lon === null) {
                const geoRes = await fetch(
                    "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
                    encodeURIComponent(locationVal),
                    { headers: { "Accept-Language": "en" } }
                );
                const geoData = await geoRes.json();
                if (!geoData.length) throw new Error("Location not found. Please select from the dropdown.");
                lat = parseFloat(geoData[0].lat);
                lon = parseFloat(geoData[0].lon);
            }

            const results = await calculateProfile(dateVal, timeVal, lat, lon);

            lastPayload = { name: nameVal, date: dateVal, time: timeVal, location: locationVal };
            lastResults = results;

            renderResults({
                name: nameVal, date: dateVal, time: timeVal,
                location: locationVal, results: results
            });

            formView.style.display    = "none";
            resultsView.style.display = "block";
            window.scrollTo(0, 0);
        } catch (err) {
            errorMsg.textContent   = err.message;
            errorMsg.style.display = "block";
        } finally {
            btnText.style.display = "";
            spinner.style.display = "none";
            submitBtn.disabled    = false;
        }
    });

    // ── Back button ──
    document.getElementById("gkBackBtn").addEventListener("click", function () {
        resultsView.style.display = "none";
        formView.style.display    = "block";
    });

    // ── PDF download (client-side) ──
    document.getElementById("gkPdfBtn").addEventListener("click", function () {
        if (!lastPayload || !lastResults) return;
        this.disabled    = true;
        this.textContent = "Generating...";
        try {
            generatePDF(lastPayload.name, lastPayload.date, lastPayload.time,
                        lastPayload.location, lastResults);
        } catch (err) {
            alert("PDF generation failed: " + err.message);
        } finally {
            this.disabled  = false;
            this.innerHTML = "&#8595; Download PDF";
        }
    });

    // ── Render results ──
    function renderResults(data) {
        document.getElementById("gkResultName").textContent = data.name;
        document.getElementById("gkResultInfo").textContent =
            data.date + " at " + data.time + " \u2014 " + data.location;

        // Overview card grid
        var overviewGrid = document.getElementById("gkOverviewGrid");
        overviewGrid.innerHTML = "";
        for (const [, spheres] of Object.entries(data.results)) {
            for (const s of spheres) {
                var card = document.createElement("div");
                card.className = "gk-overview-card";
                card.innerHTML =
                    '<div class="gk-ov-sphere">' + s.sphere + '</div>' +
                    '<div><span class="gk-ov-gate">' + s.gate + '</span><span class="gk-ov-line">.' + s.line + '</span></div>' +
                    '<div class="gk-ov-pills">' +
                    '  <span class="gk-ov-pill shadow">' + s.shadow.keyword + '</span>' +
                    '  <span class="gk-ov-pill gift">' + s.gift.keyword + '</span>' +
                    '  <span class="gk-ov-pill siddhi">' + s.siddhi.keyword + '</span>' +
                    '</div>';
                overviewGrid.appendChild(card);
            }
        }

        // Detail sections
        var detail = document.getElementById("gkDetailSections");
        detail.innerHTML = "";
        for (const [seqName, spheres] of Object.entries(data.results)) {
            var seqClass = SEQ_CLASSES[seqName] || "";
            var subtitle = SEQ_SUBTITLES[seqName] || "";
            var html = '<div class="gk-sequence ' + seqClass + '">' +
                '<div class="gk-sequence-header">' +
                '  <h3>' + seqName + '</h3>' +
                (subtitle ? '  <div class="gk-seq-subtitle">' + subtitle + '</div>' : '') +
                '</div>' +
                '<div class="gk-sphere-cards">';

            for (const s of spheres) {
                // Build metadata pills
                var metaHtml = '<div class="gk-meta-row">';
                if (s.programmingPartner) {
                    metaHtml += '<span class="gk-meta-pill"><strong>Partner:</strong> GK ' + s.programmingPartner + '</span>';
                }
                if (s.physiology) {
                    metaHtml += '<span class="gk-meta-pill"><strong>Physiology:</strong> ' + s.physiology + '</span>';
                }
                if (s.codonRing) {
                    metaHtml += '<span class="gk-meta-pill"><strong>Codon Ring:</strong> ' + s.codonRing + '</span>';
                }
                if (s.aminoAcid) {
                    metaHtml += '<span class="gk-meta-pill"><strong>Amino Acid:</strong> ' + s.aminoAcid + '</span>';
                }
                metaHtml += '</div>';

                html +=
                    '<div class="glass-panel gk-sphere-card rounded-xl">' +
                    '  <div class="gk-sphere-top">' +
                    '    <span class="gk-sphere-name">' + s.sphere + '</span>' +
                    '    <span class="gk-sphere-gate-wrap">' +
                    '      <span class="gk-sphere-gate">Gene Key ' + s.gate + '</span>' +
                    '      <span class="gk-sphere-line">.' + s.line + '</span>' +
                    '    </span>' +
                    '  </div>' +
                    (s.title ? '  <div class="gk-sphere-title">' + s.title + '</div>' : '') +
                    metaHtml +
                    '  <div class="gk-freq-bands">' +
                    '    <div class="gk-freq-band band-shadow">' +
                    '      <div class="gk-freq-label gk-shadow">Shadow</div>' +
                    '      <div class="gk-freq-keyword">' + s.shadow.keyword + '</div>' +
                    '      <div class="gk-freq-desc">' + s.shadow.description + '</div>' +
                    '    </div>' +
                    '    <div class="gk-freq-band band-gift">' +
                    '      <div class="gk-freq-label gk-gift">Gift</div>' +
                    '      <div class="gk-freq-keyword">' + s.gift.keyword + '</div>' +
                    '      <div class="gk-freq-desc">' + s.gift.description + '</div>' +
                    '    </div>' +
                    '    <div class="gk-freq-band band-siddhi">' +
                    '      <div class="gk-freq-label gk-siddhi">Siddhi</div>' +
                    '      <div class="gk-freq-keyword">' + s.siddhi.keyword + '</div>' +
                    '      <div class="gk-freq-desc">' + s.siddhi.description + '</div>' +
                    '    </div>' +
                    '  </div>' +
                    '</div>';
            }

            html += '</div></div>';
            detail.innerHTML += html;
        }
    }

    // ── Location Autocomplete ──
    const locInput = document.getElementById("gkLocation");
    const dropdown = document.getElementById("gkLocDropdown");
    var debounceTimer = null;
    var activeIdx     = -1;
    var items         = [];

    function renderItems(results) {
        items     = results;
        activeIdx = -1;
        if (!results.length) {
            dropdown.innerHTML = '<div class="gk-autocomplete-loading">No results found</div>';
            dropdown.classList.add("show");
            return;
        }
        dropdown.innerHTML = results.map(function (r, i) {
            var parts  = r.display_name.split(", ");
            var main   = parts.slice(0, 2).join(", ");
            var detail = parts.slice(2).join(", ");
            return '<div class="gk-autocomplete-item" data-index="' + i + '">' +
                '<div class="gk-loc-main">' + main + '</div>' +
                (detail ? '<div class="gk-loc-detail">' + detail + '</div>' : '') +
                '</div>';
        }).join("");
        dropdown.classList.add("show");
    }

    function selectItem(idx) {
        if (idx < 0 || idx >= items.length) return;
        locInput.value = items[idx].display_name;
        selectedLat    = parseFloat(items[idx].lat);
        selectedLon    = parseFloat(items[idx].lon);
        dropdown.classList.remove("show");
        dropdown.innerHTML = "";
    }

    function fetchSuggestions(query) {
        if (query.length < 2) { dropdown.classList.remove("show"); return; }
        dropdown.innerHTML = '<div class="gk-autocomplete-loading">Searching...</div>';
        dropdown.classList.add("show");

        fetch("https://nominatim.openstreetmap.org/search?format=json&limit=5&q=" +
                encodeURIComponent(query) + "&addressdetails=1&featuretype=city",
            { headers: { "Accept-Language": "en" } })
            .then(function (r) { return r.json(); })
            .then(function (data) { renderItems(data); })
            .catch(function () {
                dropdown.innerHTML = '<div class="gk-autocomplete-loading">Search failed</div>';
            });
    }

    locInput.addEventListener("input", function () {
        selectedLat = null;
        selectedLon = null;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
            fetchSuggestions(locInput.value.trim());
        }, 300);
    });

    locInput.addEventListener("keydown", function (e) {
        if (!dropdown.classList.contains("show") || !items.length) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            activeIdx = Math.min(activeIdx + 1, items.length - 1);
            updateActive();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            activeIdx = Math.max(activeIdx - 1, 0);
            updateActive();
        } else if (e.key === "Enter" && activeIdx >= 0) {
            e.preventDefault();
            selectItem(activeIdx);
        } else if (e.key === "Escape") {
            dropdown.classList.remove("show");
        }
    });

    function updateActive() {
        dropdown.querySelectorAll(".gk-autocomplete-item").forEach(function (el, i) {
            el.classList.toggle("active", i === activeIdx);
        });
    }

    dropdown.addEventListener("mousedown", function (e) {
        var item = e.target.closest(".gk-autocomplete-item");
        if (item) { e.preventDefault(); selectItem(parseInt(item.dataset.index)); }
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".gk-autocomplete-wrap")) dropdown.classList.remove("show");
    });
})();
