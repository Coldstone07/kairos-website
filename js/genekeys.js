/* ═══════════════════════════════════════════════════════════════
   GENE KEYS DATA — All 64 keys with Shadow / Gift / Siddhi
   ═══════════════════════════════════════════════════════════════ */
const GENE_KEYS = {
    1: {shadow:{keyword:"Entropy",description:"The tendency toward disorder and decay; feeling life is winding down or purposeless."},gift:{keyword:"Freshness",description:"Seeing life with perpetually new eyes; each moment becomes a creative act of renewal."},siddhi:{keyword:"Beauty",description:"The direct perception of beauty as the underlying nature of all existence."}},
    2: {shadow:{keyword:"Dislocation",description:"Feeling displaced or disconnected from one's true direction and inner compass."},gift:{keyword:"Orientation",description:"A natural sense of direction that aligns you with the flow of life's deeper currents."},siddhi:{keyword:"Unity",description:"The realization that all directions lead to the same source; complete oneness with life."}},
    3: {shadow:{keyword:"Chaos",description:"Being overwhelmed by disorder, unable to find pattern or meaning in confusion."},gift:{keyword:"Innovation",description:"The ability to find new order within chaos; turning confusion into creative breakthroughs."},siddhi:{keyword:"Innocence",description:"A return to the pristine state before thought; meeting each moment without preconception."}},
    4: {shadow:{keyword:"Intolerance",description:"Rejecting anything that doesn't fit one's mental framework; rigidity of understanding."},gift:{keyword:"Understanding",description:"The capacity to hold multiple perspectives and find universal patterns within diversity."},siddhi:{keyword:"Forgiveness",description:"Total acceptance that transcends judgment; seeing the perfection in all human behavior."}},
    5: {shadow:{keyword:"Impatience",description:"Rushing ahead of natural timing; inability to wait for the right moment to act."},gift:{keyword:"Patience",description:"Deep trust in universal timing; allowing events to unfold at their natural pace."},siddhi:{keyword:"Timelessness",description:"Living beyond the constraints of time; each moment contains eternity."}},
    6: {shadow:{keyword:"Conflict",description:"Emotional reactivity and friction in relationships; inability to maintain peace under pressure."},gift:{keyword:"Diplomacy",description:"The art of navigating emotional currents with grace; creating harmony through sensitivity."},siddhi:{keyword:"Peace",description:"An unshakeable inner peace that radiates outward and transforms all relationships."}},
    7: {shadow:{keyword:"Division",description:"Creating separation through hierarchical thinking; us-versus-them mentality."},gift:{keyword:"Guidance",description:"Natural leadership that unifies through vision; leading by example rather than force."},siddhi:{keyword:"Virtue",description:"Living as a pure expression of goodness; leadership that emerges from selfless being."}},
    8: {shadow:{keyword:"Mediocrity",description:"Settling for less than your creative potential; conforming to avoid standing out."},gift:{keyword:"Style",description:"Expressing your unique creative signature; contributing your individual genius to the whole."},siddhi:{keyword:"Exquisiteness",description:"Every expression becomes a masterpiece; life itself becomes a work of art."}},
    9: {shadow:{keyword:"Inertia",description:"Feeling stuck or unable to begin; resistance to focusing energy on a single point."},gift:{keyword:"Determination",description:"The power of sustained focus; channeling energy with precision toward a clear purpose."},siddhi:{keyword:"Invincibility",description:"An unstoppable force of focused will that moves through all obstacles effortlessly."}},
    10: {shadow:{keyword:"Self-Obsession",description:"Being trapped in self-image and persona; constantly managing how others perceive you."},gift:{keyword:"Naturalness",description:"Relaxing into your authentic self; behaving naturally without concern for others' opinions."},siddhi:{keyword:"Being",description:"Pure presence without any self-consciousness; the dissolution of the separate self."}},
    11: {shadow:{keyword:"Obscurity",description:"Ideas that remain vague and unformed; difficulty bringing vision into clear focus."},gift:{keyword:"Idealism",description:"The power to envision new possibilities; holding a bright vision of what could be."},siddhi:{keyword:"Light",description:"Becoming a transparent vessel for universal illumination; pure radiance of awareness."}},
    12: {shadow:{keyword:"Vanity",description:"Using words and expression to inflate the ego; communication driven by self-importance."},gift:{keyword:"Discrimination",description:"Knowing exactly when and how to speak; pure and precise articulation of truth."},siddhi:{keyword:"Purity",description:"Words that emerge from absolute silence; communication as a direct transmission of essence."}},
    13: {shadow:{keyword:"Discord",description:"Disharmony arising from secrets and hidden agendas; broken trust between people."},gift:{keyword:"Discernment",description:"The ability to listen deeply and perceive the essence within any story or narrative."},siddhi:{keyword:"Empathy",description:"Complete merging with another's experience; feeling the universal story within every individual."}},
    14: {shadow:{keyword:"Compromise",description:"Selling out your talents for security; not fully committing to your creative fire."},gift:{keyword:"Competence",description:"Mastery through dedication to your craft; abundance flows from skilled and passionate work."},siddhi:{keyword:"Bounteousness",description:"Overflowing abundance that pours forth naturally; prosperity as a state of being."}},
    15: {shadow:{keyword:"Dullness",description:"Loss of vitality and magnetism; going through life on autopilot without presence."},gift:{keyword:"Magnetism",description:"A natural charisma that draws others; vitality that comes from embracing life's diversity."},siddhi:{keyword:"Florescence",description:"Blooming into full radiance; the flowering of human potential in all its diversity."}},
    16: {shadow:{keyword:"Indifference",description:"Going through the motions without enthusiasm; lack of passion or commitment to mastery."},gift:{keyword:"Versatility",description:"Enthusiastic engagement with many skills; finding depth through breadth of experience."},siddhi:{keyword:"Mastery",description:"Effortless excellence that comes from total absorption; transcendence through devoted practice."}},
    17: {shadow:{keyword:"Opinion",description:"Rigid mental positions mistaken for truth; arguing for beliefs rather than seeking understanding."},gift:{keyword:"Far-Sightedness",description:"The ability to see the bigger picture; wisdom that comes from a broader perspective."},siddhi:{keyword:"Omniscience",description:"Direct knowing beyond the mind; awareness that encompasses all perspectives simultaneously."}},
    18: {shadow:{keyword:"Judgment",description:"Chronic fault-finding and criticism; seeing what's wrong rather than what's right."},gift:{keyword:"Integrity",description:"The drive to correct and perfect; channeling critical awareness into genuine improvement."},siddhi:{keyword:"Perfection",description:"Seeing the inherent perfection in all things, including apparent imperfection."}},
    19: {shadow:{keyword:"Co-Dependence",description:"Emotional neediness that creates unhealthy bonds; losing yourself in others' needs."},gift:{keyword:"Sensitivity",description:"Deep attunement to the needs of others and the environment; emotional intelligence."},siddhi:{keyword:"Sacrifice",description:"Surrendering the separate self for the benefit of the whole; selfless service."}},
    20: {shadow:{keyword:"Superficiality",description:"Skimming the surface of life; avoiding the depths through constant busyness or distraction."},gift:{keyword:"Self-Assurance",description:"Confidence rooted in presence; being fully engaged in the current moment."},siddhi:{keyword:"Presence",description:"Total absorption in the now; the complete absence of past and future."}},
    21: {shadow:{keyword:"Control",description:"Trying to dominate life and others through willpower; fear of losing authority."},gift:{keyword:"Authority",description:"Natural command that comes from self-mastery; leading through inner strength."},siddhi:{keyword:"Valour",description:"Fearless courage in the face of all challenges; the warrior spirit of the heart."}},
    22: {shadow:{keyword:"Dishonour",description:"Emotional instability that undermines grace; mood swings that compromise integrity."},gift:{keyword:"Graciousness",description:"Emotional depth expressed with elegance; turning feeling into a refined art form."},siddhi:{keyword:"Grace",description:"Divine elegance flowing through every gesture; the beauty of the soul made manifest."}},
    23: {shadow:{keyword:"Complexity",description:"Over-complicating things through excessive mental processing; inability to simplify."},gift:{keyword:"Simplicity",description:"The genius of reducing complexity to its essence; communicating profound truths simply."},siddhi:{keyword:"Quintessence",description:"Distilling reality to its absolute essence; the fifth element beyond form."}},
    24: {shadow:{keyword:"Addiction",description:"Compulsive mental loops and repetitive behaviors; being trapped in habitual patterns."},gift:{keyword:"Invention",description:"Breaking free from mental ruts through creative insight; turning obsession into innovation."},siddhi:{keyword:"Silence",description:"The cessation of all mental noise; the profound stillness at the core of consciousness."}},
    25: {shadow:{keyword:"Constriction",description:"Tightening around pain; closing the heart to protect against suffering."},gift:{keyword:"Acceptance",description:"Opening to all of life's experiences without resistance; embracing what is."},siddhi:{keyword:"Universal Love",description:"Love without conditions or boundaries; the heart that embraces all of existence."}},
    26: {shadow:{keyword:"Pride",description:"Inflated self-importance; using cunning and manipulation to maintain status."},gift:{keyword:"Artfulness",description:"The skill of strategic communication; using influence with integrity and purpose."},siddhi:{keyword:"Invisibility",description:"Ego dissolved so completely that only the message remains; selfless transmission."}},
    27: {shadow:{keyword:"Selfishness",description:"Hoarding resources and care; nurturing only self at the expense of others."},gift:{keyword:"Altruism",description:"Genuine care for others' wellbeing; nurturing that flows naturally from abundance."},siddhi:{keyword:"Selflessness",description:"Complete dissolution of self-interest; becoming a pure channel of nourishment for life."}},
    28: {shadow:{keyword:"Purposelessness",description:"Existential despair; feeling that life has no meaning or direction."},gift:{keyword:"Totality",description:"Throwing yourself fully into life; finding purpose through complete engagement."},siddhi:{keyword:"Immortality",description:"Transcending the fear of death; realizing the eternal nature of consciousness."}},
    29: {shadow:{keyword:"Half-Heartedness",description:"Saying yes without full commitment; spreading yourself too thin across obligations."},gift:{keyword:"Commitment",description:"The power of wholehearted devotion; saying yes only when you can give everything."},siddhi:{keyword:"Devotion",description:"Total surrender to the flow of life; every act becomes an offering."}},
    30: {shadow:{keyword:"Desire",description:"Insatiable craving that creates suffering; always wanting what you don't have."},gift:{keyword:"Lightness",description:"Holding desires lightly; enjoying the play of longing without being consumed by it."},siddhi:{keyword:"Rapture",description:"Ecstatic union with the fire of life; desire transformed into divine bliss."}},
    31: {shadow:{keyword:"Arrogance",description:"Imposing your views on others; leadership corrupted by ego and self-importance."},gift:{keyword:"Leadership",description:"Humble and natural influence; guiding others through the power of your example."},siddhi:{keyword:"Humility",description:"True greatness through self-effacement; the leader who serves from emptiness."}},
    32: {shadow:{keyword:"Failure",description:"Fear of failure that prevents risk-taking; defining yourself by past defeats."},gift:{keyword:"Preservation",description:"The wisdom to conserve and protect what has lasting value; patient endurance."},siddhi:{keyword:"Veneration",description:"Deep reverence for all of life; honoring the sacred in the ordinary."}},
    33: {shadow:{keyword:"Forgetting",description:"Refusing to learn from the past; repeating patterns through unconscious denial."},gift:{keyword:"Mindfulness",description:"The practice of conscious remembering; learning from experience with clarity."},siddhi:{keyword:"Revelation",description:"Sudden illumination that reveals hidden truths; the veil of forgetting lifted entirely."}},
    34: {shadow:{keyword:"Force",description:"Using brute power to overwhelm; aggression born from impatience and insecurity."},gift:{keyword:"Strength",description:"Power tempered by wisdom; the quiet confidence that doesn't need to prove itself."},siddhi:{keyword:"Majesty",description:"The full magnificence of human power aligned with divine will."}},
    35: {shadow:{keyword:"Hunger",description:"Restless seeking for new experiences; never satisfied with what you have."},gift:{keyword:"Adventure",description:"Embracing change and the unknown with enthusiasm; life as a grand exploration."},siddhi:{keyword:"Boundlessness",description:"Freedom from all limitation; infinite expansion of consciousness beyond all horizons."}},
    36: {shadow:{keyword:"Turbulence",description:"Emotional storms and crisis; being tossed about by waves of intense feeling."},gift:{keyword:"Humanity",description:"Compassion born from personal suffering; using emotional depth to connect with others."},siddhi:{keyword:"Compassion",description:"The vast heart that holds all suffering; transforming darkness into light through love."}},
    37: {shadow:{keyword:"Weakness",description:"Compromising your truth to keep the peace; giving away power in relationships."},gift:{keyword:"Equality",description:"Creating balanced and fair relationships; honoring both self and other equally."},siddhi:{keyword:"Tenderness",description:"Exquisite vulnerability that opens the deepest bonds; strength through softness."}},
    38: {shadow:{keyword:"Struggle",description:"Fighting against life; exhausting yourself through unnecessary resistance and opposition."},gift:{keyword:"Perseverance",description:"Courageous persistence in the face of adversity; standing firm for what matters."},siddhi:{keyword:"Honour",description:"Living with complete integrity; every action aligned with the highest truth."}},
    39: {shadow:{keyword:"Provocation",description:"Triggering emotional reactions in others; unconsciously stirring up conflict."},gift:{keyword:"Dynamism",description:"Using creative tension as fuel for growth; catalyzing change through spirited engagement."},siddhi:{keyword:"Liberation",description:"Complete freedom from all emotional patterns; the spirit unbound."}},
    40: {shadow:{keyword:"Exhaustion",description:"Burnout from over-giving or over-working; depleting yourself for others."},gift:{keyword:"Resolve",description:"The willpower to set healthy boundaries; knowing when to give and when to rest."},siddhi:{keyword:"Divine Will",description:"Surrendering personal will to the greater flow; effortless action aligned with the whole."}},
    41: {shadow:{keyword:"Fantasy",description:"Escaping into imagined futures; confusing dreams with reality."},gift:{keyword:"Anticipation",description:"Healthy excitement about possibilities; using imagination to fuel creative action."},siddhi:{keyword:"Emanation",description:"Becoming a source of new realities; pure creative potential manifesting through you."}},
    42: {shadow:{keyword:"Expectation",description:"Attachment to specific outcomes; disappointment when reality doesn't match your plans."},gift:{keyword:"Detachment",description:"Engaging fully while releasing attachment to results; inner freedom amidst action."},siddhi:{keyword:"Celebration",description:"Rejoicing in life exactly as it is; every ending becomes a new beginning."}},
    43: {shadow:{keyword:"Deafness",description:"Being closed to new insights; refusing to hear what challenges your worldview."},gift:{keyword:"Insight",description:"Sudden breakthroughs of understanding; the 'aha' moment that transforms perception."},siddhi:{keyword:"Epiphany",description:"Continuous revelation; living in a state of perpetual breakthrough and wonder."}},
    44: {shadow:{keyword:"Interference",description:"Meddling in others' affairs; patterns of codependency rooted in fear."},gift:{keyword:"Teamwork",description:"The synergy of working together; creating something greater through collaboration."},siddhi:{keyword:"Synarchy",description:"Perfect group harmony where each member serves the whole without losing individuality."}},
    45: {shadow:{keyword:"Dominance",description:"Misuse of material power; controlling others through wealth or status."},gift:{keyword:"Synergy",description:"Gathering resources for the benefit of all; leadership that creates collective prosperity."},siddhi:{keyword:"Communion",description:"The mystical experience of shared abundance; all beings united as one body."}},
    46: {shadow:{keyword:"Seriousness",description:"Taking life too heavily; losing the lightness and joy of embodied existence."},gift:{keyword:"Delight",description:"Finding joy in the physical experience; celebrating the body and its senses."},siddhi:{keyword:"Ecstasy",description:"The body becomes a vessel of divine rapture; physical existence as pure bliss."}},
    47: {shadow:{keyword:"Oppression",description:"Mental anguish and feeling trapped; the weight of unanswered questions and confusion."},gift:{keyword:"Transmutation",description:"Alchemizing suffering into wisdom; transforming mental pressure into breakthrough insights."},siddhi:{keyword:"Transfiguration",description:"Complete transformation of consciousness; the mind dissolved into pure light."}},
    48: {shadow:{keyword:"Inadequacy",description:"Feeling you don't know enough; paralysis from the fear of not being ready."},gift:{keyword:"Resourcefulness",description:"Trusting your depth of knowledge; finding solutions from your well of experience."},siddhi:{keyword:"Wisdom",description:"The inexhaustible well of knowing; wisdom that flows from the source of all understanding."}},
    49: {shadow:{keyword:"Reaction",description:"Emotional volatility; being triggered into fight-or-flight by perceived threats."},gift:{keyword:"Revolution",description:"The courage to initiate necessary change; transforming outdated structures with clarity."},siddhi:{keyword:"Rebirth",description:"Continuous death and renewal; the phoenix rising from the ashes of the old."}},
    50: {shadow:{keyword:"Corruption",description:"Compromising values under pressure; erosion of natural law and cosmic principles."},gift:{keyword:"Equilibrium",description:"Maintaining balance between cosmic law and human needs; harmonizing order with compassion."},siddhi:{keyword:"Harmony",description:"Perfect alignment with universal law; every action in accord with the cosmic order."}},
    51: {shadow:{keyword:"Agitation",description:"Restless nervous energy; being shocked or startled by life's sudden changes."},gift:{keyword:"Initiative",description:"The courage to act first; channeling shock into creative initiative and boldness."},siddhi:{keyword:"Awakening",description:"The ultimate shock of enlightenment; sudden and complete awakening to reality."}},
    52: {shadow:{keyword:"Stress",description:"Inability to be still; constant mental and physical tension that drains vitality."},gift:{keyword:"Restraint",description:"The power of stillness; knowing when not to act and finding strength in pause."},siddhi:{keyword:"Stillness",description:"Absolute inner quiet; the mountain-like presence that nothing can disturb."}},
    53: {shadow:{keyword:"Immaturity",description:"Rushing into new beginnings without completing what came before; perpetual starting over."},gift:{keyword:"Expansion",description:"Growing through structured development; maturity that comes from completing full cycles."},siddhi:{keyword:"Superabundance",description:"Infinite creative potential overflowing into form; the cornucopia of new beginnings."}},
    54: {shadow:{keyword:"Greed",description:"Insatiable desire for more; ambition driven by fear of not having enough."},gift:{keyword:"Aspiration",description:"Healthy ambition directed toward higher goals; the drive to ascend and evolve."},siddhi:{keyword:"Ascension",description:"Rising above all material attachment; the spirit soaring to its highest expression."}},
    55: {shadow:{keyword:"Victimization",description:"Feeling powerless and at the mercy of circumstances; emotional suffering as identity."},gift:{keyword:"Freedom",description:"Emotional independence; the ability to feel deeply without being controlled by feelings."},siddhi:{keyword:"Freedom",description:"Absolute liberation from all emotional bondage; the spirit forever free."}},
    56: {shadow:{keyword:"Distraction",description:"Scattering attention across too many stimuli; losing focus through constant input."},gift:{keyword:"Enrichment",description:"Using diverse experiences to enrich your narrative; weaving stories that inspire."},siddhi:{keyword:"Intoxication",description:"Divine inebriation with the wonder of existence; drunk on the beauty of life."}},
    57: {shadow:{keyword:"Unease",description:"Low-level anxiety and fear; a persistent sense that something is not quite right."},gift:{keyword:"Intuition",description:"Acute sensitivity to subtle signals; trusting your gut instinct for moment-to-moment guidance."},siddhi:{keyword:"Clarity",description:"Crystal-clear perception beyond the mind; seeing reality exactly as it is."}},
    58: {shadow:{keyword:"Dissatisfaction",description:"Chronic unhappiness and complaint; always finding fault with the present situation."},gift:{keyword:"Vitality",description:"The joy of being alive; enthusiasm and energy that comes from appreciating life."},siddhi:{keyword:"Bliss",description:"Unconditional joy that requires no external cause; the natural state of being."}},
    59: {shadow:{keyword:"Dishonesty",description:"Barriers of deception between people; sexual and emotional manipulation."},gift:{keyword:"Intimacy",description:"The courage to be transparent and vulnerable; dissolving barriers to true connection."},siddhi:{keyword:"Transparency",description:"Complete openness without any walls; the dissolution of all separation between beings."}},
    60: {shadow:{keyword:"Limitation",description:"Feeling trapped by restrictions; seeing boundaries as obstacles rather than creative constraints."},gift:{keyword:"Realism",description:"Working creatively within limitations; finding freedom through accepting structure."},siddhi:{keyword:"Justice",description:"The perfection of cosmic law; seeing the absolute rightness of all limitation and form."}},
    61: {shadow:{keyword:"Psychosis",description:"Mental pressure from unanswerable questions; the mind pushed to its breaking point."},gift:{keyword:"Inspiration",description:"Receiving creative downloads from the unknown; allowing mystery to fuel imagination."},siddhi:{keyword:"Sanctity",description:"The experience of the sacred in all things; life as a holy mystery."}},
    62: {shadow:{keyword:"Intellect",description:"Over-reliance on mental precision; missing the bigger picture through excessive detail."},gift:{keyword:"Precision",description:"Exact and careful expression; the art of naming things with perfect accuracy."},siddhi:{keyword:"Impeccability",description:"Flawless expression in every word and deed; language as a vehicle of truth."}},
    63: {shadow:{keyword:"Doubt",description:"Chronic skepticism and questioning; never feeling certain enough to move forward."},gift:{keyword:"Inquiry",description:"Healthy questioning that leads to deeper understanding; doubt transformed into curiosity."},siddhi:{keyword:"Truth",description:"Direct apprehension of absolute truth; the end of all questioning in pure knowing."}},
    64: {shadow:{keyword:"Confusion",description:"Mental overwhelm from too many possibilities; inability to find clarity amidst complexity."},gift:{keyword:"Imagination",description:"Visionary thinking that embraces all possibilities; creative genius born from mental diversity."},siddhi:{keyword:"Illumination",description:"The mind fully lit up; complete understanding that transcends all confusion."}}
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
                shadow: gk.shadow, gift: gk.gift, siddhi: gk.siddhi
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
            doc.autoTable({
                startY: y,
                head: [[{
                    content: s.sphere + " \u2014 Gene Key " + s.gate + "." + s.line,
                    colSpan: 2,
                    styles: { fillColor: [55, 50, 80], textColor: 255, fontStyle: "bold", fontSize: 10 }
                }]],
                body: [
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

        // Overview table
        const tbody = document.getElementById("gkOverviewBody");
        tbody.innerHTML = "";
        for (const [, spheres] of Object.entries(data.results)) {
            for (const s of spheres) {
                const tr = document.createElement("tr");
                tr.innerHTML =
                    "<td>" + s.sphere + "</td>" +
                    '<td><span class="gk-gate-num">' + s.gate + "</span></td>" +
                    '<td><span class="gk-line-num">' + s.line + "</span></td>" +
                    '<td><span class="gk-shadow">' + s.shadow.keyword + "</span></td>" +
                    '<td><span class="gk-gift">' + s.gift.keyword + "</span></td>" +
                    '<td><span class="gk-siddhi">' + s.siddhi.keyword + "</span></td>";
                tbody.appendChild(tr);
            }
        }

        // Detail sections
        const detail = document.getElementById("gkDetailSections");
        detail.innerHTML = "";
        for (const [seqName, spheres] of Object.entries(data.results)) {
            const seqClass = SEQ_CLASSES[seqName] || "";
            var html = '<div class="gk-sequence ' + seqClass + '">' +
                '<div class="gk-sequence-title">' + seqName + "</div>" +
                '<div class="gk-sphere-cards">';

            for (const s of spheres) {
                html +=
                    '<div class="glass-panel gk-sphere-card rounded-xl">' +
                    '  <div class="gk-sphere-top">' +
                    '    <span class="gk-sphere-name">' + s.sphere + "</span>" +
                    "    <span>" +
                    '      <span class="gk-sphere-gate">' + s.gate + "</span>" +
                    '      <span class="gk-sphere-line">.' + s.line + "</span>" +
                    "    </span>" +
                    "  </div>" +
                    '  <div class="gk-freq-bands">' +
                    '    <div class="gk-freq-band">' +
                    '      <div class="gk-freq-label gk-shadow">Shadow</div>' +
                    '      <div class="gk-freq-content">' +
                    '        <div class="gk-freq-keyword">' + s.shadow.keyword + "</div>" +
                    '        <div class="gk-freq-desc">' + s.shadow.description + "</div>" +
                    "      </div>" +
                    "    </div>" +
                    '    <div class="gk-freq-band">' +
                    '      <div class="gk-freq-label gk-gift">Gift</div>' +
                    '      <div class="gk-freq-content">' +
                    '        <div class="gk-freq-keyword">' + s.gift.keyword + "</div>" +
                    '        <div class="gk-freq-desc">' + s.gift.description + "</div>" +
                    "      </div>" +
                    "    </div>" +
                    '    <div class="gk-freq-band">' +
                    '      <div class="gk-freq-label gk-siddhi">Siddhi</div>' +
                    '      <div class="gk-freq-content">' +
                    '        <div class="gk-freq-keyword">' + s.siddhi.keyword + "</div>" +
                    '        <div class="gk-freq-desc">' + s.siddhi.description + "</div>" +
                    "      </div>" +
                    "    </div>" +
                    "  </div>" +
                    "</div>";
            }

            html += "</div></div>";
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
                '<div class="gk-loc-main">' + main + "</div>" +
                (detail ? '<div class="gk-loc-detail">' + detail + "</div>" : "") +
                "</div>";
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
