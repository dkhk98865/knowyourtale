// lib/compatibility-data.ts
import { CompatibilityReport } from '@/types/compatibility';

// This is a template structure for all 66 compatibility reports
// You can populate this with the actual content for each character combination

export const compatibilityReports: Record<string, CompatibilityReport> = {
  // Example: Snow White × Cinderella
  'snowwhite-cinderella': {
    id: 'snowwhite-cinderella',
    character1: 'Snow White',
    character2: 'Cinderella',
    character1Id: 'snowwhite',
    character2Id: 'cinderella',
    title: 'Innocence Meets Endurance — Two Hearts of Kindness',
    subtitle: 'When Snow White and Cinderella meet, there\'s an immediate recognition of shared sweetness.',
    compatibilityScore: 80,
    relationshipType: 'Gentle Harmony',
    summary: 'Both archetypes embody purity and kindness, though expressed differently: Snow White\'s innocence shines in her trusting heart, while Cinderella\'s endurance shows in her quiet patience under hardship.',
    strengths: [
      'Empathy & Understanding → Both naturally forgive and comfort each other, avoiding cruelty.',
      'Shared Values → Loyalty, family, and harmony matter deeply to both.',
      'Mutual Gentleness → They provide a safe haven where neither fears judgment.',
      'Emotional Healing → Cinderella reassures Snow White\'s fears, while Snow White lightens Cinderella\'s burdens.'
    ],
    challenges: [
      'Over-Passivity → Both tend to endure rather than confront. They may stay too long in toxic dynamics without pushing for change.',
      'Lack of Initiative → Neither archetype is naturally bold — together they risk "waiting for rescue."',
      'Suppressed Frustration → Their politeness can hide resentment if they avoid tough conversations.'
    ],
    communication: 'Gentle and empathetic, but may avoid difficult conversations.',
    emotionalConnection: 'Deep emotional understanding and mutual comfort.',
    sharedValues: 'Loyalty, family, harmony, and kindness.',
    growthPotential: 'Learning to balance kindness with courage and taking initiative.',
    advice: [
      'Practice Small Acts of Boldness → Try making decisions without waiting for outside approval — even small choices like planning a trip or starting a project.',
      'Balance Care with Courage → Kindness is their gift, but courage is their lesson. Supporting each other in taking risks builds strength.',
      'Journal Prompt: Snow White types: "Where do I avoid action out of fear of conflict?" Cinderella types: "Where am I waiting for recognition instead of claiming it myself?"'
    ],
    keywords: ['gentle', 'harmonious', 'empathetic', 'patient', 'loyal', 'kind']
  },

  // Snow White × Aurora
  'snowwhite-aurora': {
    id: 'snowwhite-aurora',
    character1: 'Snow White',
    character2: 'Aurora',
    character1Id: 'snowwhite',
    character2Id: 'aurora',
    title: 'The Innocent and the Dreamer — A Bond of Purity and Imagination',
    subtitle: 'Snow White and Aurora are kindred spirits, both embodying innocence and a gentle nature.',
    compatibilityScore: 60,
    relationshipType: 'Deep spiritual harmony, but fragile without grounding and action.',
    summary: 'Snow White\'s archetype reflects purity through trust and nurturing, while Aurora (Sleeping Beauty) represents the dreamlike, inward world of intuition and imagination. When together, they create an atmosphere of serenity, kindness, and shared sensitivity. Their connection is soulful and almost otherworldly. However, because both lean toward passivity and withdrawal, they may struggle to bring energy and initiative into the relationship.',
    strengths: [
      'Gentle Resonance → Both value kindness, peace, and a safe emotional world.',
      'Spiritual Depth → Aurora\'s dreamlike vision complements Snow White\'s innocent faith.',
      'Mutual Compassion → Each has patience for the other\'s vulnerabilities.',
      'Healing Energy → They create a soft space for recovery from harshness in the world.'
    ],
    challenges: [
      'Lack of Grounding in Action → Neither archetype naturally pushes forward; together they may drift or avoid practical steps.',
      'Over-Reliance on Rescue → Both stories (the poisoned apple, the cursed sleep) show dependence on others\' intervention.',
      'Emotional Fragility → If challenges arise, they may both retreat instead of confronting the issue.'
    ],
    communication: 'Gentle and intuitive, but may avoid difficult conversations.',
    emotionalConnection: 'Deep spiritual and emotional resonance with shared sensitivity.',
    sharedValues: 'Kindness, peace, innocence, and spiritual depth.',
    growthPotential: 'Learning to balance dreams with action and developing courage together.',
    advice: [
      'Balance Dreams with Plans → Anchor shared dreams with small, achievable goals.',
      'Cultivate Courage → Practice facing conflict gently but directly, so neither archetype hides away.',
      'Journal Prompt: Snow White types: "When do I expect rescue instead of acting for myself?" Aurora types: "What dreams of mine need grounding in reality?"'
    ],
    keywords: ['spiritual', 'gentle', 'dreamy', 'innocent', 'fragile', 'serene']
  },

  // Snow White × Ariel
  'snowwhite-ariel': {
    id: 'snowwhite-ariel',
    character1: 'Snow White',
    character2: 'Ariel',
    character1Id: 'snowwhite',
    character2Id: 'ariel',
    title: 'Innocence Meets Curiosity — Wonder and Risk Entwined',
    subtitle: 'Snow White lives in the archetype of innocence and trust, finding joy in the simple goodness of life.',
    compatibilityScore: 80,
    relationshipType: 'Magical and adventurous, but must balance innocence with wisdom to thrive.',
    summary: 'Ariel, in contrast, is restless curiosity embodied — bold, adventurous, and hungry for the unknown. When these two meet, their dynamic is exciting yet precarious: Ariel pulls Snow White into new experiences, while Snow White softens Ariel\'s impulsiveness with gentle compassion. The relationship thrives on wonder but risks imbalance if Ariel moves too fast or Snow White hesitates too much.',
    strengths: [
      'Balance of Energy → Ariel brings exploration, Snow White brings grounding.',
      'Shared Sense of Wonder → Both delight in discovery, though from different angles.',
      'Emotional Healing → Snow White\'s kindness soothes Ariel when her adventures wound her spirit.',
      'Inspiration → Ariel admires Snow White\'s pure heart; Snow White admires Ariel\'s daring spirit.'
    ],
    challenges: [
      'Trust vs. Risk → Snow White\'s naïve trust may collide with Ariel\'s reckless curiosity.',
      'Different Paces → Ariel leaps forward; Snow White lingers in comfort. This can create friction.',
      'Vulnerability to Influence → Both archetypes may follow their hearts into danger without considering consequences.'
    ],
    communication: 'Exciting and dynamic, but may need to balance different communication styles.',
    emotionalConnection: 'Deep emotional resonance with complementary strengths and vulnerabilities.',
    sharedValues: 'Wonder, discovery, kindness, and following the heart.',
    growthPotential: 'Learning to balance innocence with wisdom and adventure with safety.',
    advice: [
      'Use Each Other\'s Strengths → Let Snow White ground the partnership while Ariel pushes it forward.',
      'Learn Timing → Ariel should pause to ensure Snow White feels safe; Snow White should risk small leaps into adventure.',
      'Journal Prompt: Snow White types: "Where am I too quick to trust without question?" Ariel types: "What drives my curiosity — discovery, or escape?"'
    ],
    keywords: ['adventurous', 'magical', 'balanced', 'wondrous', 'risky', 'inspiring']
  },

  // Snow White × Belle
  'snowwhite-belle': {
    id: 'snowwhite-belle',
    character1: 'Snow White',
    character2: 'Belle',
    character1Id: 'snowwhite',
    character2Id: 'belle',
    title: 'Innocence Meets Intellect — Gentle Hearts, Thoughtful Minds',
    subtitle: 'Snow White embodies purity, trust, and simple joy.',
    compatibilityScore: 80,
    relationshipType: 'Kind and thoughtful — a bond of heart and mind, but needs courage to avoid staying too safe.',
    summary: 'Belle, however, brings curiosity, reflection, and a hunger for knowledge. When these two archetypes come together, their relationship is marked by quiet warmth and thoughtful connection. Snow White softens Belle\'s intensity with sweetness, while Belle brings Snow White depth and perspective. Their bond thrives on kindness and shared values, though it risks becoming too sheltered if neither pushes for greater adventure.',
    strengths: [
      'Shared Compassion → Both archetypes value kindness above all.',
      'Balance of Energy → Snow White\'s innocence lightens Belle\'s seriousness; Belle\'s wisdom grounds Snow White\'s trust.',
      'Mutual Admiration → Belle admires Snow White\'s pure heart, while Snow White is drawn to Belle\'s insight.',
      'Safe Haven → Together they create a supportive, gentle environment.'
    ],
    challenges: [
      'Over-Sheltering → Both may avoid risk or conflict, retreating into safety.',
      'Different Focuses → Snow White delights in relationships and simple joys, while Belle seeks intellectual stimulation.',
      'Hidden Frustrations → Belle may quietly judge Snow White\'s naivety; Snow White may feel overlooked when Belle turns inward.'
    ],
    communication: 'Thoughtful and gentle, with deep mutual understanding.',
    emotionalConnection: 'Warm and supportive, built on shared compassion and values.',
    sharedValues: 'Kindness, compassion, gentleness, and creating safe spaces.',
    growthPotential: 'Learning to balance heart and mind while encouraging each other\'s boldness.',
    advice: [
      'Share Worlds → Snow White should engage with Belle\'s intellectual pursuits; Belle should step into Snow White\'s simple joys.',
      'Encourage Boldness → Both archetypes benefit from pushing each other gently into action.',
      'Journal Prompt: Snow White types: "Where do I avoid seeing deeper truths out of fear?" Belle types: "Where do I overthink instead of enjoying the simple good?"'
    ],
    keywords: ['thoughtful', 'gentle', 'compassionate', 'intellectual', 'safe', 'nurturing']
  },

  // Snow White × Rapunzel
  'snowwhite-rapunzel': {
    id: 'snowwhite-rapunzel',
    character1: 'Snow White',
    character2: 'Rapunzel',
    character1Id: 'snowwhite',
    character2Id: 'rapunzel',
    title: 'Innocence and Resilience — Healing Through Trust and Freedom',
    subtitle: 'Snow White represents innocence, trust, and a tender heart.',
    compatibilityScore: 80,
    relationshipType: 'Healing and nurturing, with potential for great growth if they move beyond waiting and step into action together.',
    summary: 'Rapunzel symbolizes resilience, endurance, and the longing for liberation. When they come together, the relationship feels like a sanctuary: Snow White brings warmth and purity, while Rapunzel offers strength born from surviving hardship. This pairing thrives on compassion and emotional safety, but it may also struggle with over-protection or hesitation to take bold steps into the world.',
    strengths: [
      'Mutual Healing → Snow White\'s sweetness comforts Rapunzel\'s wounds; Rapunzel\'s resilience strengthens Snow White\'s vulnerability.',
      'Shared Hope → Both carry faith in goodness and new beginnings.',
      'Emotional Safety → They create a nurturing, protective bond.',
      'Balance of Innocence and Experience → Rapunzel tempers Snow White\'s naivety; Snow White softens Rapunzel\'s scars.'
    ],
    challenges: [
      'Over-Sheltering → Both archetypes may retreat into comfort, waiting for rescue rather than acting.',
      'Naivety vs. Fear → Snow White may trust too easily, while Rapunzel may fear too much due to past confinement.',
      'Dependence → Risk of leaning on each other for safety without developing independence.'
    ],
    communication: 'Gentle and supportive, with deep emotional understanding.',
    emotionalConnection: 'Healing and nurturing, built on mutual compassion and shared hope.',
    sharedValues: 'Hope, goodness, healing, emotional safety, and new beginnings.',
    growthPotential: 'Moving from dependence to liberation through trust and courage.',
    advice: [
      'Encourage Small Freedoms → Support each other in taking steps outside comfort zones.',
      'Turn Pain into Wisdom → Rapunzel should share her resilience lessons; Snow White should share her faith in goodness.',
      'Journal Prompt: Snow White types: "Where do I need to see reality more clearly instead of assuming goodness?" Rapunzel types: "Where do I cling to safety when freedom is possible?"'
    ],
    keywords: ['healing', 'resilient', 'nurturing', 'liberating', 'protective', 'hopeful']
  },

  // Snow White × Gerda
  'snowwhite-gerda': {
    id: 'snowwhite-gerda',
    character1: 'Snow White',
    character2: 'Gerda',
    character1Id: 'snowwhite',
    character2Id: 'gerda',
    title: 'Pure Innocence and Loyal Devotion — The Heart\'s True Companions',
    subtitle: 'Snow White represents innocence, trust, and openness to life.',
    compatibilityScore: 100,
    relationshipType: 'A beautifully harmonious match — gentle, loyal, and full of heart, though they must guard against over-idealism.',
    summary: 'Gerda (from *The Snow Queen*) embodies loyalty, perseverance, and the power of unwavering devotion. Together, this pair creates one of the most harmonious bonds in the archetype spectrum. Snow White offers warmth and joy, while Gerda brings steadfast loyalty and the courage to endure hardship for those she loves. Their connection feels natural, like two gentle souls walking side by side. The main challenge lies not in conflict, but in ensuring their shared kindness is balanced with practical strength.',
    strengths: [
      'Loyalty and Trust → Gerda\'s devotion perfectly complements Snow White\'s trusting nature.',
      'Gentle Affection → Both value kindness and compassion above all.',
      'Emotional Healing → Snow White\'s innocence restores hope, while Gerda\'s persistence brings stability.',
      'Faith in Goodness → They inspire each other to keep believing in love and light, even in hardship.'
    ],
    challenges: [
      'Over-Idealization → Both may see the world too hopefully, underestimating dangers.',
      'Avoidance of Conflict → They might hesitate to confront negativity or stand up firmly when needed.',
      'Dependence → Risk of staying too much in a comfort zone, relying on each other for safety without external growth.'
    ],
    communication: 'Gentle and understanding, with deep mutual trust and loyalty.',
    emotionalConnection: 'Harmonious and deeply connected, built on shared values and gentle affection.',
    sharedValues: 'Kindness, compassion, loyalty, trust, faith in goodness, and gentle strength.',
    growthPotential: 'Balancing idealism with practical strength and developing healthy boundaries.',
    advice: [
      'Strengthen Boundaries → Trust and loyalty are gifts, but both archetypes must learn discernment.',
      'Act with Courage → Encourage each other to take practical steps rather than only hoping for goodness.',
      'Journal Prompt: Snow White types: "Where in my life do I confuse kindness with letting things slide?" Gerda types: "Where does my loyalty become self-sacrifice instead of strength?"'
    ],
    keywords: ['harmonious', 'loyal', 'gentle', 'devoted', 'trusting', 'healing']
  },

  // Snow White × Mulan
  'snowwhite-mulan': {
    id: 'snowwhite-mulan',
    character1: 'Snow White',
    character2: 'Mulan',
    character1Id: 'snowwhite',
    character2Id: 'mulan',
    title: 'Innocence Meets Bravery — Protection and Awakening',
    subtitle: 'Snow White embodies innocence, purity, and unquestioning trust.',
    compatibilityScore: 60,
    relationshipType: 'Challenging but transformative — Snow White learns courage, Mulan learns gentleness. Growth depends on balance.',
    summary: 'Mulan represents courage, action, and the willingness to fight for what is right. When these two archetypes come together, the dynamic is both complementary and challenging. Mulan feels compelled to protect Snow White, seeing her vulnerability as something to shield. Snow White, in turn, admires Mulan\'s strength and conviction. Yet, the contrast between passive innocence and active bravery can cause friction: Mulan may grow impatient with Snow White\'s naivety, while Snow White may feel overwhelmed by Mulan\'s intensity.',
    strengths: [
      'Balance of Energy → Snow White softens Mulan\'s warrior edge, while Mulan strengthens Snow White\'s fragile trust.',
      'Mutual Inspiration → Mulan admires Snow White\'s gentle spirit; Snow White looks up to Mulan\'s courage.',
      'Protective Bond → Mulan offers security, Snow White offers emotional healing.',
      'Shared Moral Compass → Both value integrity and goodness, though they express it differently.'
    ],
    challenges: [
      'Naivety vs. Realism → Snow White trusts blindly, while Mulan sees danger everywhere.',
      'Imbalance of Power → Mulan may dominate decisions, unintentionally silencing Snow White\'s voice.',
      'Conflict Styles → Snow White avoids confrontation, Mulan embraces it — this mismatch may create misunderstandings.'
    ],
    communication: 'May need work to balance different communication styles and conflict approaches.',
    emotionalConnection: 'Protective and inspiring, but requires conscious effort to maintain equality.',
    sharedValues: 'Integrity, goodness, moral compass, and doing what is right.',
    growthPotential: 'Learning to merge courage with kindness and act without losing heart.',
    advice: [
      'Balance Protection with Empowerment → Mulan should guard against overprotecting, instead helping Snow White develop her own strength.',
      'Speak Honestly → Snow White should voice her needs, even when Mulan\'s intensity feels overwhelming.',
      'Journal Prompt: Snow White types: "Where do I rely too much on others to shield me?" Mulan types: "Where does my bravery become control rather than support?"'
    ],
    keywords: ['challenging', 'transformative', 'protective', 'courageous', 'balanced', 'inspiring']
  },

  // Snow White × Alice
  'snowwhite-alice': {
    id: 'snowwhite-alice',
    character1: 'Snow White',
    character2: 'Alice',
    character1Id: 'snowwhite',
    character2Id: 'alice',
    title: 'Innocence and Curiosity — Trust Meets Imagination',
    subtitle: 'Snow White embodies innocence, kindness, and trust in the goodness of others.',
    compatibilityScore: 60,
    relationshipType: 'Magical but fragile — full of wonder, yet needs balance to thrive in the real world.',
    summary: 'Alice (*Alice in Wonderland*) represents curiosity, questioning, and a willingness to explore the strange and unfamiliar. When paired, their relationship feels like a blend of wonder and vulnerability. Snow White offers emotional warmth and stability, while Alice invites Snow White into worlds of imagination and new possibilities. Yet this same mix can also lead to tension: Alice may find Snow White too simple or naive, while Snow White may feel unsettled by Alice\'s restless questioning of reality.',
    strengths: [
      'Shared Wonder → Both archetypes approach life with wide-eyed openness.',
      'Balance of Grounding and Curiosity → Snow White anchors Alice\'s whimsical side, while Alice inspires Snow White to see beyond the familiar.',
      'Complementary Innocence → Snow White\'s trust pairs well with Alice\'s exploration, creating mutual delight.',
      'Emotional Support → Snow White provides comfort when Alice feels lost or overwhelmed.'
    ],
    challenges: [
      'Different Realities → Alice questions everything, Snow White accepts things at face value — this mismatch can frustrate them both.',
      'Naivety vs. Distraction → Snow White risks being misled by her trust, while Alice risks losing herself in endless possibilities without grounding.',
      'Conflict Avoidance → Both may fail to deal with real-world challenges, preferring fantasy or faith in goodness.'
    ],
    communication: 'May need work to bridge different approaches to reality and questioning.',
    emotionalConnection: 'Magical and imaginative, but requires grounding to maintain stability.',
    sharedValues: 'Wonder, openness, innocence, and seeing the good in life.',
    growthPotential: 'Learning to blend trust with questioning, innocence with imagination.',
    advice: [
      'Meet in the Middle → Snow White can learn to ask questions like Alice, while Alice can learn to trust like Snow White.',
      'Stay Grounded Together → Channel imagination into practical joy instead of drifting.',
      'Journal Prompt: Snow White types: "Where do I accept without questioning, when I should be curious?" Alice types: "Where do I chase curiosity without asking if it\'s safe or meaningful?"'
    ],
    keywords: ['magical', 'fragile', 'wondrous', 'imaginative', 'curious', 'trusting']
  },

  // Snow White × Dorothy
  'snowwhite-dorothy': {
    id: 'snowwhite-dorothy',
    character1: 'Snow White',
    character2: 'Dorothy',
    character1Id: 'snowwhite',
    character2Id: 'dorothy',
    title: 'Innocence and Belonging — Gentle Hearts Seeking Home',
    subtitle: 'Snow White carries the essence of innocence, joy, and trust in others.',
    compatibilityScore: 80,
    relationshipType: 'Comforting and kind — a nurturing bond that must learn to act rather than only hope.',
    summary: 'Dorothy (*The Wizard of Oz*) embodies the archetype of the seeker — someone who longs for belonging, safety, and "home." Together, their relationship is warm and nurturing. Snow White\'s kindness offers Dorothy comfort, while Dorothy\'s determination gives Snow White stability. Both share a hopeful outlook, but their challenge lies in avoiding passivity — waiting for things to be "set right" rather than stepping forward themselves.',
    strengths: [
      'Shared Values → Both treasure love, loyalty, and the warmth of companionship.',
      'Mutual Comfort → Snow White soothes Dorothy\'s longing; Dorothy reassures Snow White\'s fears.',
      'Faith in Goodness → Together they maintain optimism even in hard times.',
      'Balance of Innocence and Will → Snow White\'s gentle spirit softens Dorothy\'s strong will.'
    ],
    challenges: [
      'Dependency on Others → Both risk relying on external "rescuers" (the prince, Glinda the Good Witch) instead of acting boldly.',
      'Over-Idealization → They may romanticize home, love, or safety without addressing reality.',
      'Avoidance of Conflict → Both archetypes tend to seek harmony, sometimes at the cost of asserting needs.'
    ],
    communication: 'Warm and supportive, with shared values and mutual understanding.',
    emotionalConnection: 'Nurturing and comforting, built on shared longing for safety and belonging.',
    sharedValues: 'Love, loyalty, companionship, faith in goodness, and the search for home.',
    growthPotential: 'Learning to act rather than wait, and claiming their own agency.',
    advice: [
      'Redefine \'Home\' → Recognize that home is built within, not only found outside.',
      'Act Bravely → Support each other in taking initiative instead of waiting for rescue.',
      'Journal Prompt: Snow White types: "Where am I waiting for someone else to make me safe?" Dorothy types: "What does \'home\' mean to me beyond a place?"'
    ],
    keywords: ['comforting', 'nurturing', 'seeking', 'belonging', 'hopeful', 'gentle']
  },

  // Snow White × Wendy
  'snowwhite-wendy': {
    id: 'snowwhite-wendy',
    character1: 'Snow White',
    character2: 'Wendy',
    character1Id: 'snowwhite',
    character2Id: 'wendy',
    title: 'The Childlike and the Caretaker — Innocence Cradled by Nurture',
    subtitle: 'Snow White embodies innocence, trust, and purity of heart.',
    compatibilityScore: 80,
    relationshipType: 'A nurturing, gentle match — beautiful when balanced, but must avoid falling into unequal roles.',
    summary: 'Wendy (*Peter Pan*) represents the archetype of the caretaker-child — youthful yet deeply responsible, balancing playfulness with maternal instincts. Together, their connection feels tender and familial. Wendy naturally takes on a protective, guiding role, while Snow White responds with gratitude and warmth. This creates a deeply comforting bond, though it can slip into imbalance if Wendy becomes over-responsible or Snow White remains too dependent.',
    strengths: [
      'Nurturing Harmony → Wendy offers guidance, Snow White offers gentle appreciation.',
      'Shared Softness → Both value kindness, safety, and loyalty.',
      'Emotional Support → Wendy steadies Snow White in moments of fear, while Snow White restores Wendy\'s joy.',
      'Playful Innocence → Their shared youthful spirit makes the relationship lighthearted and tender.'
    ],
    challenges: [
      'Over-Protection → Wendy may slip into "mothering" Snow White instead of seeing her as an equal.',
      'Dependency → Snow White may lean too much on Wendy\'s caretaking rather than developing independence.',
      'Avoiding Hard Lessons → Both may shelter one another, leaving important growth undone.'
    ],
    communication: 'Tender and familial, with Wendy as guide and Snow White as companion.',
    emotionalConnection: 'Deeply comforting and nurturing, built on shared softness and loyalty.',
    sharedValues: 'Kindness, safety, loyalty, playfulness, and nurturing care.',
    growthPotential: 'Learning to balance care with equality and embrace shared responsibility.',
    advice: [
      'Balance Care and Equality → Wendy should avoid over-caretaking; Snow White should take responsibility for her own growth.',
      'Embrace Shared Play → Lean into their childlike joy, not just caretaking roles.',
      'Journal Prompt: Snow White types: "Where do I expect others to take care of me instead of stepping up?" Wendy types: "Where do I over-caretake instead of letting others grow?"'
    ],
    keywords: ['nurturing', 'tender', 'familial', 'playful', 'protective', 'gentle']
  },

  // Snow White × Little Red Riding Hood
  'snowwhite-littleredridinghood': {
    id: 'snowwhite-littleredridinghood',
    character1: 'Snow White',
    character2: 'Little Red Riding Hood',
    character1Id: 'snowwhite',
    character2Id: 'littleredridinghood',
    title: 'Innocence and Instinct — Trust Meets Caution',
    subtitle: 'Snow White is the archetype of innocence, trusting in the goodness of others.',
    compatibilityScore: 60,
    relationshipType: 'Protective but challenging — full of growth potential if trust and caution are integrated instead of opposed.',
    summary: 'Little Red Riding Hood embodies instinct, caution, and survival in the face of danger. Together, they create a fascinating balance. Snow White brings warmth, openness, and compassion, while Red reminds her to stay alert and recognize danger. This relationship can be deeply protective, but it can also spark friction: Snow White may see Red as overly suspicious, while Red may find Snow White\'s naïveté frustrating.',
    strengths: [
      'Balance of Perspectives → Snow White trusts too easily, Red questions what\'s safe — together they provide balance.',
      'Protective Energy → Red shields Snow White from harm, while Snow White softens Red\'s vigilance with kindness.',
      'Shared Heart → Both value connection and loyalty, though expressed differently.',
      'Growth Through Contrast → Each archetype helps the other develop what they lack.'
    ],
    challenges: [
      'Naivety vs. Suspicion → Snow White assumes the best; Red assumes the worst — this can cause frequent disagreements.',
      'Clash of Energies → Snow White seeks harmony, Red is quick to confront danger.',
      'Overprotection → Red may dominate, limiting Snow White\'s growth out of fear for her safety.'
    ],
    communication: 'May need work to bridge different approaches to trust and caution.',
    emotionalConnection: 'Protective and loyal, but may clash due to different perspectives on safety.',
    sharedValues: 'Connection, loyalty, and protecting what matters, though expressed differently.',
    growthPotential: 'Learning to integrate trust with instinct and kindness with caution.',
    advice: [
      'Respect Each Other\'s Lens → Snow White should honor Red\'s instincts; Red should value Snow White\'s optimism.',
      'Blend Heart and Caution → Use kindness with discernment — trust tempered by awareness.',
      'Journal Prompt: Snow White types: "Where do I ignore warning signs because I want to see only goodness?" Red types: "Where do I assume danger and close myself off from joy?"'
    ],
    keywords: ['protective', 'challenging', 'balanced', 'instinctive', 'cautious', 'contrasting']
  },

  // Cinderella × Aurora
  'cinderella-aurora': {
    id: 'cinderella-aurora',
    character1: 'Cinderella',
    character2: 'Aurora',
    character1Id: 'cinderella',
    character2Id: 'aurora',
    title: 'Endurance and Dream — Patience Meets Stillness',
    subtitle: 'Cinderella embodies endurance, humility, and quiet perseverance through hardship.',
    compatibilityScore: 60,
    relationshipType: 'Gentle and empathetic, but risks stagnation unless they embrace self-initiative.',
    summary: 'Aurora (*Sleeping Beauty*) represents stillness, receptivity, and the dreamlike state of waiting for transformation. Together, their relationship is serene, gentle, and deeply empathetic. Both archetypes know what it means to endure in silence. However, their bond risks becoming stagnant if neither takes initiative — too much waiting and not enough action.',
    strengths: [
      'Deep Empathy → Both understand the quiet pain of waiting for change.',
      'Shared Kindness → Compassion and forgiveness flow naturally between them.',
      'Mutual Healing → They provide each other with rest and acceptance.',
      'Peaceful Energy → Their bond feels safe, calm, and harmonious.'
    ],
    challenges: [
      'Lack of Initiative → Both archetypes risk remaining passive, hoping life will change without their action.',
      'Over-Reliance on Rescue → Cinderella waits for recognition, Aurora for awakening — both may depend on others to save them.',
      'Avoiding Growth → Too much harmony can lead to complacency.'
    ],
    communication: 'Serene and gentle, with deep mutual understanding and empathy.',
    emotionalConnection: 'Peaceful and harmonious, built on shared experiences of waiting and endurance.',
    sharedValues: 'Patience, kindness, compassion, forgiveness, and quiet perseverance.',
    growthPotential: 'Learning to turn patience into action and embrace self-initiative.',
    advice: [
      'Turn Patience Into Action → Support each other in small, concrete steps toward change.',
      'Challenge Passive Waiting → Recognize when endurance becomes avoidance.',
      'Journal Prompt: Cinderella types: "Where am I waiting for approval instead of stepping forward?" Aurora types: "Where do I dream instead of acting on what I long for?"'
    ],
    keywords: ['serene', 'gentle', 'empathetic', 'patient', 'peaceful', 'stagnant']
  },

  // Cinderella × Ariel
  'cinderella-ariel': {
    id: 'cinderella-ariel',
    character1: 'Cinderella',
    character2: 'Ariel',
    character1Id: 'cinderella',
    character2Id: 'ariel',
    title: 'Endurance Meets Restlessness — Patience and Bold Desire',
    subtitle: 'Cinderella symbolizes quiet endurance, humility, and hidden strength.',
    compatibilityScore: 80,
    relationshipType: 'Dynamic and transformative — a partnership of patience and passion, best when they honor each other\'s rhythms.',
    summary: 'Ariel (*The Little Mermaid*) embodies restless curiosity, bold desire, and the courage (sometimes recklessness) to pursue it. When paired, their connection is dynamic but uneven. Cinderella\'s steady patience balances Ariel\'s impulsive leaps, while Ariel inspires Cinderella to believe change is possible. However, their contrasting paces can cause frustration: Cinderella may see Ariel as reckless, and Ariel may see Cinderella as too passive.',
    strengths: [
      'Balance of Action and Endurance → Cinderella steadies Ariel, Ariel motivates Cinderella.',
      'Shared Hope → Both long for transformation — Cinderella for recognition, Ariel for freedom.',
      'Complementary Growth → Ariel pushes Cinderella to seize opportunities; Cinderella teaches Ariel the value of patience.',
      'Emotional Resonance → Both feel deeply and care intensely about their dreams.'
    ],
    challenges: [
      'Clash of Tempos → Ariel moves too fast; Cinderella waits too long — timing is their biggest challenge.',
      'Risk vs. Caution → Ariel dives into danger, while Cinderella hesitates out of fear or humility.',
      'Misunderstanding Priorities → Ariel pursues passion regardless of cost; Cinderella often sacrifices her desires for others.'
    ],
    communication: 'Dynamic and inspiring, though may need work to bridge different paces and approaches.',
    emotionalConnection: 'Deeply resonant, built on shared hopes and dreams for transformation.',
    sharedValues: 'Hope, transformation, emotional depth, and pursuing dreams.',
    growthPotential: 'Learning to balance patience with bold action and respect each other\'s rhythms.',
    advice: [
      'Learn From Each Other\'s Pace → Ariel should practice patience; Cinderella should take bold steps when opportunities arise.',
      'Respect Each Other\'s Dreams → Value both endurance and risk as valid paths.',
      'Journal Prompt: Cinderella types: "Where am I holding back when I should leap forward?" Ariel types: "Where am I rushing ahead without considering the consequences?"'
    ],
    keywords: ['dynamic', 'transformative', 'balanced', 'inspiring', 'passionate', 'patient']
  },

  // Continue this pattern for all 66 combinations...
  // You can use the generateCompatibilityIds() function to get all combinations
  // and then populate each one with the appropriate content
};

// Helper function to get a compatibility report
export const getCompatibilityReport = (id: string): CompatibilityReport | null => {
  return compatibilityReports[id] || null;
};

// Helper function to get all compatibility reports
export const getAllCompatibilityReports = (): CompatibilityReport[] => {
  return Object.values(compatibilityReports);
};
