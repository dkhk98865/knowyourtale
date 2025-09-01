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
    storyParallel: 'Snow White lay waiting in her glass coffin, and Cinderella waited for her fairy godmother\'s intervention. Both stories highlight external rescue. Yet, their true lesson is in stepping forward themselves: Snow White choosing to trust wisely, and Cinderella embracing her worth before the ball. Together, this pair must learn that kindness paired with courage creates transformation.',
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
    storyParallel: 'Snow White fell into a death-like sleep from a poisoned apple, while Aurora slept under a curse until awakened by true love\'s kiss. Both stories show passive waiting for rescue. Yet, their deeper lesson is about the power of inner awakening: Snow White\'s innocence that outlived envy, and Aurora\'s dreamlike intuition that guided her to destiny. Together, they embody the balance of spiritual depth and grounded action.',
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
    storyParallel: 'Snow White trusted the wrong person and fell into a death-like sleep, while Ariel made a dangerous bargain with the sea witch to pursue her dreams. Both stories show the risks of trusting too easily and acting without wisdom. Yet, their deeper lesson is about the balance of innocence and experience: Snow White\'s pure heart that outlived betrayal, and Ariel\'s bold spirit that learned the value of what she already possessed. Together, they embody the journey from naivety to wise wonder.',
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
    storyParallel: 'Snow White found refuge with the seven dwarfs, learning to trust and care for others, while Belle chose to stay with the Beast to save her father, discovering love beyond appearances. Both stories show the power of choosing kindness and seeing beyond surface judgments. Yet, their deeper lesson is about the balance of heart and mind: Snow White\'s innocent trust that created a loving home, and Belle\'s intellectual curiosity that led to true understanding. Together, they embody the harmony of pure heart and thoughtful mind.',
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
    storyParallel: 'Snow White found sanctuary with the seven dwarfs, learning to trust and care for others, while Rapunzel waited in her tower until she chose to leave and discover the world. Both stories show the power of finding safe havens and the courage to step beyond them. Yet, their deeper lesson is about the balance of trust and liberation: Snow White\'s innocent faith that created a loving home, and Rapunzel\'s resilience that led to freedom. Together, they embody the journey from sanctuary to liberation.',
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
    storyParallel: 'Snow White found refuge with the seven dwarfs, learning to trust and care for others, while Gerda journeyed tirelessly through the frozen wilderness to rescue Kai from the Snow Queen\'s icy grasp. Both stories show the power of loyalty and the courage to endure hardship for those we love. Yet, their deeper lesson is about the balance of trust and action: Snow White\'s innocent faith that created a loving home, and Gerda\'s unwavering devotion that overcame the coldest magic. Together, they embody the perfect harmony of trust and loyalty.',
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
    storyParallel: 'Snow White fell into a death-like sleep from a poisoned apple, waiting for rescue, while Mulan disguised herself as a soldier to fight for her family and country, taking action to protect those she loved. Both stories show different responses to danger: passive waiting versus active courage. Yet, their deeper lesson is about the balance of trust and action: Snow White\'s innocent faith that outlived betrayal, and Mulan\'s bravery that transformed her into a warrior. Together, they embody the journey from passive trust to empowered courage.',
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
    storyParallel: 'Snow White trusted the wrong person and fell into a death-like sleep, while Alice leapt down the rabbit hole into Wonderland, questioning everything she encountered. Both stories show the risks of trusting too easily and the power of questioning reality. Yet, their deeper lesson is about the balance of trust and curiosity: Snow White\'s innocent faith that outlived betrayal, and Alice\'s curious mind that learned to navigate the surreal. Together, they embody the journey from naive trust to wise wonder.',
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
    storyParallel: 'Snow White found refuge with the seven dwarfs, learning to trust and care for others, while Dorothy journeyed through Oz to return home, relying on her determination and companions. Both stories show the power of finding safe havens and the courage to seek what we truly desire. Yet, their deeper lesson is about the balance of trust and action: Snow White\'s innocent faith that created a loving home, and Dorothy\'s determination that led her back to where she belonged. Together, they embody the journey from passive trust to active seeking.',
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
    storyParallel: 'Snow White found refuge with the seven dwarfs, learning to trust and care for others, while Wendy played mother to the Lost Boys, sacrificing her own youth for caretaking. Both stories show the power of creating safe havens and the challenges of balancing care with personal growth. Yet, their deeper lesson is about the balance of nurturing and independence: Snow White\'s innocent trust that created a loving home, and Wendy\'s maternal instincts that guided others while she herself remained a child. Together, they embody the journey from dependent care to balanced nurturing.',
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
    storyParallel: 'Snow White trusted the wrong person and fell into a death-like sleep, while Little Red Riding Hood was deceived by the wolf but learned to recognize danger and survive. Both stories show the risks of trusting too easily and the importance of learning to discern danger. Yet, their deeper lesson is about the balance of trust and caution: Snow White\'s innocent faith that outlived betrayal, and Red\'s instinctive wisdom that protected her from harm. Together, they embody the journey from naive trust to wise discernment.',
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
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Aurora slept under a curse until awakened by true love\'s kiss. Both stories show the power of patience and the challenges of passive waiting. Yet, their deeper lesson is about the balance of endurance and action: Cinderella\'s quiet strength that endured until her moment came, and Aurora\'s dreamlike surrender that led to awakening. Together, they embody the journey from passive endurance to active transformation.',
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
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Ariel made a dangerous bargain with the sea witch to pursue her dreams. Both stories show the power of transformation and the courage to pursue what we desire. Yet, their deeper lesson is about the balance of patience and boldness: Cinderella\'s quiet endurance that led to magical transformation, and Ariel\'s bold spirit that learned the value of what she already possessed. Together, they embody the journey from patient waiting to bold pursuit.',
    keywords: ['dynamic', 'transformative', 'balanced', 'inspiring', 'passionate', 'patient']
  },

  // Cinderella × Belle
  'cinderella-belle': {
    id: 'cinderella-belle',
    character1: 'Cinderella',
    character2: 'Belle',
    character1Id: 'cinderella',
    character2Id: 'belle',
    title: 'Patience Meets Insight — Endurance and Curiosity in Harmony',
    subtitle: 'Cinderella represents endurance, humility, and hidden grace under hardship.',
    compatibilityScore: 80,
    relationshipType: 'A gentle, supportive bond — rich in compassion and understanding, but in need of sparks of action to flourish.',
    summary: 'Belle (*Beauty and the Beast*) embodies curiosity, intellect, and the courage to look beyond appearances. Together, their relationship is gentle yet intellectually stimulating. Cinderella admires Belle\'s ability to see truth and depth where others don\'t, while Belle respects Cinderella\'s quiet strength and perseverance. Their bond is one of mutual respect and emotional support, though they risk becoming too inward-focused without action.',
    strengths: [
      'Shared Compassion → Both care deeply for others and are slow to judge.',
      'Balance of Patience and Curiosity → Cinderella\'s endurance grounds Belle\'s intellectual drive.',
      'Mutual Admiration → Cinderella looks up to Belle\'s insight; Belle values Cinderella\'s resilience.',
      'Healing Presence → They soothe each other, offering comfort and understanding.'
    ],
    challenges: [
      'Avoidance of Conflict → Both prefer harmony, which may cause them to ignore pressing issues.',
      'Inward Focus → Belle may retreat into her books, Cinderella into her quiet endurance — leaving little external drive.',
      'Passivity → While supportive, neither may take bold initiative unless inspired by outside forces.'
    ],
    communication: 'Gentle and intellectually stimulating, with deep mutual respect and understanding.',
    emotionalConnection: 'Supportive and healing, built on shared compassion and mutual admiration.',
    sharedValues: 'Compassion, patience, kindness, seeing truth beyond appearances, and quiet strength.',
    growthPotential: 'Learning to act on dreams rather than just think or wait, and pushing beyond comfort zones.',
    advice: [
      'Push Beyond Comfort → Encourage each other to act on dreams rather than just think or wait.',
      'Share Strengths → Belle should invite Cinderella into intellectual exploration; Cinderella should remind Belle of simple joys.',
      'Journal Prompt: Cinderella types: "Where do I wait for recognition instead of creating opportunities?" Belle types: "Where do I analyze instead of stepping into action?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Belle chose to stay with the Beast to save her father, discovering love beyond appearances. Both stories show the power of choosing kindness and seeing beyond surface judgments. Yet, their deeper lesson is about the balance of patience and action: Cinderella\'s quiet endurance that led to transformation, and Belle\'s intellectual courage that revealed true beauty. Together, they embody the harmony of patient endurance and thoughtful action.',
    keywords: ['gentle', 'supportive', 'compassionate', 'intellectual', 'harmonious', 'thoughtful']
  },

  // Cinderella × Rapunzel
  'cinderella-rapunzel': {
    id: 'cinderella-rapunzel',
    character1: 'Cinderella',
    character2: 'Rapunzel',
    character1Id: 'cinderella',
    character2Id: 'rapunzel',
    title: 'Endurance and Liberation — Quiet Patience Meets the Longing to Break Free',
    subtitle: 'Cinderella embodies endurance, humility, and grace through hardship.',
    compatibilityScore: 80,
    relationshipType: 'A nurturing and healing match — bonded through shared struggle, empowered when they transform patience into action.',
    summary: 'Rapunzel represents resilience in confinement and the deep yearning for freedom. Together, their relationship is deeply empathetic and healing. They recognize each other\'s struggles — Cinderella\'s servitude mirrors Rapunzel\'s captivity. Cinderella offers Rapunzel patience and hope, while Rapunzel inspires Cinderella with courage to step outside limitations. Their challenge lies in avoiding over-identification with suffering and remembering that liberation requires action, not only hope.',
    strengths: [
      'Shared Experience of Hardship → Both understand endurance in restrictive circumstances.',
      'Mutual Support → Cinderella offers calm and patience; Rapunzel brings inspiration and daring.',
      'Balance of Energy → Cinderella steadies Rapunzel\'s bursts of boldness, while Rapunzel shakes Cinderella free of passivity.',
      'Healing Bond → Both find solace in knowing they are no longer alone in their struggles.'
    ],
    challenges: [
      'Over-Identification with Struggle → Their shared suffering may keep them focused on hardship rather than growth.',
      'Different Coping Styles → Cinderella endures quietly, Rapunzel yearns openly — this contrast can cause misunderstanding.',
      'Risk of Dependency → They may cling to each other as comfort without pushing for real change.'
    ],
    communication: 'Deeply empathetic and healing, with shared understanding of hardship.',
    emotionalConnection: 'Nurturing and supportive, built on shared experiences of confinement and resilience.',
    sharedValues: 'Endurance, resilience, hope, liberation, and finding strength in hardship.',
    growthPotential: 'Learning to transform patience into action and balance hope with bold steps.',
    advice: [
      'Turn Endurance Into Action → Support each other in transforming survival into liberation.',
      'Balance Hope with Bold Steps → Rapunzel can teach Cinderella to take risks, while Cinderella can remind Rapunzel that freedom unfolds patiently.',
      'Journal Prompt: Cinderella types: "Where do I endure when I could step forward?" Rapunzel types: "Where does my desire for freedom need grounding in steady effort?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Rapunzel waited in her tower until she chose to leave and discover the world. Both stories show the power of patience and the courage to step beyond limitations. Yet, their deeper lesson is about the balance of endurance and liberation: Cinderella\'s quiet strength that endured until her moment came, and Rapunzel\'s resilience that led to freedom. Together, they embody the journey from patient endurance to bold liberation.',
    keywords: ['nurturing', 'healing', 'empathetic', 'liberating', 'resilient', 'supportive']
  },

  // Cinderella × Gerda
  'cinderella-gerda': {
    id: 'cinderella-gerda',
    character1: 'Cinderella',
    character2: 'Gerda',
    character1Id: 'cinderella',
    character2Id: 'gerda',
    title: 'Endurance and Devotion — Patience Guided by Loyalty',
    subtitle: 'Cinderella represents patience, humility, and the quiet endurance of hardship.',
    compatibilityScore: 80,
    relationshipType: 'A gentle, devoted partnership — flourishing when patience and loyalty meet in equal measure.',
    summary: 'Gerda (from *The Snow Queen*) embodies loyalty, perseverance, and the courage to act out of love and devotion. Together, these two archetypes form a bond of gentle strength. Cinderella endures in silence, while Gerda demonstrates the active side of devotion — she doesn\'t just wait, she journeys. Their relationship feels supportive and compassionate, but can risk imbalance if Cinderella becomes too passive and leans too heavily on Gerda\'s loyalty.',
    strengths: [
      'Mutual Compassion → Both value kindness and forgiveness as core virtues.',
      'Complementary Strengths → Cinderella\'s grace balances Gerda\'s persistence.',
      'Healing Presence → They soothe and comfort each other in hardship.',
      'Shared Dedication → Both are unwavering once their hearts are committed.'
    ],
    challenges: [
      'Passivity vs. Action → Cinderella endures quietly; Gerda acts out of love. Gerda may feel frustrated by Cinderella\'s inaction.',
      'Risk of Dependence → Cinderella may lean on Gerda\'s loyalty instead of finding her own power.',
      'Avoidance of Conflict → Both prefer harmony, even if it means tolerating unfairness.'
    ],
    communication: 'Warm and supportive, with deep mutual understanding and compassion.',
    emotionalConnection: 'Gentle and devoted, built on shared values of kindness and loyalty.',
    sharedValues: 'Kindness, forgiveness, compassion, loyalty, and quiet strength.',
    growthPotential: 'Learning to balance patience with action and ensure equal partnership.',
    advice: [
      'Balance Waiting and Doing → Cinderella should learn from Gerda\'s active devotion; Gerda should honor Cinderella\'s quiet endurance.',
      'Empower Each Other → Ensure the bond is not one-sided — loyalty and patience must flow both ways.',
      'Journal Prompt: Cinderella types: "Where am I enduring instead of acting to change my story?" Gerda types: "Where does my loyalty cross into over-responsibility?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Gerda journeyed tirelessly through the frozen wilderness to rescue Kai from the Snow Queen\'s icy grasp. Both stories show the power of love and the courage to endure hardship. Yet, their deeper lesson is about the balance of patience and action: Cinderella\'s quiet endurance that led to transformation, and Gerda\'s active devotion that overcame the coldest magic. Together, they embody the harmony of patient endurance and loyal action.',
    keywords: ['gentle', 'devoted', 'compassionate', 'loyal', 'supportive', 'balanced']
  },

  // Cinderella × Mulan
  'cinderella-mulan': {
    id: 'cinderella-mulan',
    character1: 'Cinderella',
    character2: 'Mulan',
    character1Id: 'cinderella',
    character2Id: 'mulan',
    title: 'Endurance and Action — Quiet Patience Meets Bold Courage',
    subtitle: 'Cinderella embodies patience, humility, and perseverance in the face of hardship.',
    compatibilityScore: 60,
    relationshipType: 'Complementary but challenging — rich growth potential if they honor both patience and courage equally.',
    summary: 'Mulan represents bravery, determination, and the willingness to act boldly in the name of honor and protection. Together, their relationship brings a powerful balance of stillness and movement. Cinderella steadies Mulan with grace and calm, while Mulan inspires Cinderella to step out of the shadows and take her destiny into her own hands. Yet their very differences can cause friction: Mulan may see Cinderella as too passive, while Cinderella may feel overwhelmed by Mulan\'s intensity.',
    strengths: [
      'Balance of Energy → Mulan drives action, Cinderella steadies the pace.',
      'Mutual Admiration → Cinderella admires Mulan\'s courage; Mulan respects Cinderella\'s grace under pressure.',
      'Shared Integrity → Both act from a place of honor and moral grounding.',
      'Potential for Growth → Each inspires the other to strengthen their weaker side.'
    ],
    challenges: [
      'Passivity vs. Assertiveness → Cinderella may hesitate too long, while Mulan pushes too fast.',
      'Unequal Roles → Mulan may take charge, leaving Cinderella feeling sidelined.',
      'Conflict Styles → Cinderella avoids confrontation; Mulan embraces it — leading to misunderstandings.'
    ],
    communication: 'May need work to bridge different approaches to conflict and decision-making.',
    emotionalConnection: 'Supportive but contrasting, with potential for growth through mutual inspiration.',
    sharedValues: 'Honor, integrity, moral grounding, and doing what is right.',
    growthPotential: 'Learning to balance patience with boldness and empower each other equally.',
    advice: [
      'Empowerment Through Support → Mulan should use her strength to uplift, not overshadow; Cinderella should claim her voice instead of waiting for recognition.',
      'Blend Patience with Boldness → Together they can time decisions wisely — neither too slow nor too rash.',
      'Journal Prompt: Cinderella types: "Where am I waiting for others to act when I should speak or step forward?" Mulan types: "Where does my bravery need patience instead of urgency?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Mulan disguised herself as a soldier to fight for her family and country, taking action to protect those she loved. Both stories show different responses to hardship: patient endurance versus bold action. Yet, their deeper lesson is about the balance of patience and courage: Cinderella\'s quiet strength that endured until her moment came, and Mulan\'s bravery that transformed her into a warrior. Together, they embody the journey from patient endurance to empowered action.',
    keywords: ['complementary', 'challenging', 'balanced', 'courageous', 'patient', 'dynamic']
  },

  // Cinderella × Alice
  'cinderella-alice': {
    id: 'cinderella-alice',
    character1: 'Cinderella',
    character2: 'Alice',
    character1Id: 'cinderella',
    character2Id: 'alice',
    title: 'Patience and Whimsy — Enduring Heart Meets Wandering Mind',
    subtitle: 'Cinderella embodies endurance, humility, and grace under hardship.',
    compatibilityScore: 60,
    relationshipType: 'Playful and inspiring, but needs balance between patience and curiosity to avoid drifting apart.',
    summary: 'Alice (*Alice in Wonderland*) represents curiosity, imagination, and the urge to wander into the unknown. When paired, their relationship feels both complementary and puzzling. Cinderella offers Alice grounding and patience, while Alice brings color, wonder, and unpredictability to Cinderella\'s world. Yet they may also misunderstand one another: Alice might see Cinderella as overly passive, while Cinderella might find Alice unfocused or impractical.',
    strengths: [
      'Balance of Grounding and Curiosity → Cinderella steadies Alice\'s whimsical energy; Alice broadens Cinderella\'s horizons.',
      'Mutual Softness → Both archetypes are kind and non-confrontational, creating a peaceful atmosphere.',
      'Shared Openness → Cinderella welcomes magic when it comes, and Alice embodies the pursuit of magic everywhere.',
      'Inspiration → Alice pushes Cinderella toward imagination; Cinderella reminds Alice of stability.'
    ],
    challenges: [
      'Different Paces → Cinderella waits for her moment; Alice rushes into new experiences.',
      'Grounded vs. Flighty → Cinderella seeks structure, Alice resists it.',
      'Conflict Avoidance → Both dislike confrontation, so problems may be ignored rather than resolved.'
    ],
    communication: 'Gentle and imaginative, though may need work to bridge different approaches to life.',
    emotionalConnection: 'Playful and inspiring, built on mutual softness and shared openness to magic.',
    sharedValues: 'Kindness, openness to magic, non-confrontational nature, and gentleness.',
    growthPotential: 'Learning to balance patience with curiosity and set shared intentions.',
    advice: [
      'Value Each Other\'s Worlds → Cinderella can embrace whimsy, Alice can appreciate patience.',
      'Set Shared Intentions → Balance Cinderella\'s need for stability with Alice\'s need for exploration.',
      'Journal Prompt: Cinderella types: "Where am I waiting instead of exploring possibility?" Alice types: "Where am I wandering without purpose?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Alice leapt down the rabbit hole into Wonderland, questioning everything she encountered. Both stories show the power of transformation and the importance of questioning reality. Yet, their deeper lesson is about the balance of patience and curiosity: Cinderella\'s quiet endurance that led to magical transformation, and Alice\'s curious mind that learned to navigate the surreal. Together, they embody the journey from patient waiting to curious exploration.',
    keywords: ['playful', 'inspiring', 'whimsical', 'grounded', 'curious', 'patient']
  },

  // Cinderella × Dorothy
  'cinderella-dorothy': {
    id: 'cinderella-dorothy',
    character1: 'Cinderella',
    character2: 'Dorothy',
    character1Id: 'cinderella',
    character2Id: 'dorothy',
    title: 'Endurance and Belonging — Patience Guided by the Search for Home',
    subtitle: 'Cinderella embodies endurance, humility, and grace under oppression.',
    compatibilityScore: 80,
    relationshipType: 'A warm and nurturing match — a gentle companionship that thrives when they act, not just wait or seek.',
    summary: 'Dorothy (*The Wizard of Oz*) symbolizes the archetype of the seeker — determined, hopeful, and always searching for belonging and "home." Together, they create a bond rooted in empathy and hope. Cinderella admires Dorothy\'s determination to claim her place, while Dorothy respects Cinderella\'s quiet strength. Their relationship feels safe, loyal, and nurturing, though they risk becoming too focused on longing rather than action.',
    strengths: [
      'Shared Hopefulness → Both trust that love and belonging will eventually prevail.',
      'Emotional Support → Dorothy reassures Cinderella that endurance leads somewhere; Cinderella reminds Dorothy that patience has value.',
      'Moral Integrity → Both archetypes act with kindness and loyalty at their core.',
      'Balance of Energy → Cinderella\'s calm steadiness complements Dorothy\'s active seeking.'
    ],
    challenges: [
      'Longing vs. Waiting → Dorothy actively seeks, Cinderella endures quietly — this mismatch can frustrate them.',
      'Over-Reliance on Others → Both risk depending too much on external saviors (the fairy godmother, Glinda).',
      'Avoidance of Conflict → They may endure or wander instead of directly addressing problems.'
    ],
    communication: 'Safe, loyal, and nurturing, with deep empathy and shared hopefulness.',
    emotionalConnection: 'Warm and supportive, built on shared values of kindness and loyalty.',
    sharedValues: 'Hope, love, belonging, kindness, loyalty, and trust in eventual transformation.',
    growthPotential: 'Learning to claim belonging now and act with courage instead of just waiting or seeking.',
    advice: [
      'Claim Belonging Now → Remember that "home" is also built within, not just waited or searched for.',
      'Act With Courage → Dorothy should slow down and ground herself; Cinderella should speak up and step forward.',
      'Journal Prompt: Cinderella types: "Where am I waiting for recognition when I could show my worth?" Dorothy types: "What am I searching for that I already carry within me?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Dorothy journeyed through Oz to return home, relying on her determination and companions. Both stories show the power of patience and the courage to seek what we truly desire. Yet, their deeper lesson is about the balance of endurance and seeking: Cinderella\'s quiet strength that endured until her moment came, and Dorothy\'s determination that led her back to where she belonged. Together, they embody the journey from patient endurance to active seeking.',
    keywords: ['warm', 'nurturing', 'hopeful', 'loyal', 'supportive', 'gentle']
  },

  // Cinderella × Wendy
  'cinderella-wendy': {
    id: 'cinderella-wendy',
    character1: 'Cinderella',
    character2: 'Wendy',
    character1Id: 'cinderella',
    character2Id: 'wendy',
    title: 'Endurance and Care — The Patient One and the Nurturer',
    subtitle: 'Cinderella embodies humility, patience, and the quiet strength of enduring hardship.',
    compatibilityScore: 80,
    relationshipType: 'A nurturing and patient match — thriving when both share responsibility equally.',
    summary: 'Wendy (*Peter Pan*) represents the archetype of the youthful caretaker — balancing innocence with the instinct to nurture and guide others. Together, their relationship is gentle, comforting, and rooted in loyalty. Wendy instinctively protects and supports Cinderella, while Cinderella admires Wendy\'s blend of responsibility and playfulness. Yet, their bond may risk becoming overly maternal, with Wendy in the caretaker role and Cinderella remaining too dependent.',
    strengths: [
      'Nurturing Bond → Wendy provides care and guidance, Cinderella offers gratitude and warmth.',
      'Shared Kindness → Both value love, loyalty, and family-like devotion.',
      'Emotional Safety → Together, they create a harmonious and protective atmosphere.',
      'Balance of Roles → Wendy brings direction; Cinderella models patience and forgiveness.'
    ],
    challenges: [
      'Caretaker–Dependent Dynamic → Wendy may become too maternal, and Cinderella may fall into passivity.',
      'Avoidance of Conflict → Both prefer harmony, which may lead to overlooking important problems.',
      'Stagnation → Their relationship can feel safe but lack forward movement.'
    ],
    communication: 'Gentle and comforting, with deep loyalty and shared kindness.',
    emotionalConnection: 'Nurturing and protective, built on family-like devotion and emotional safety.',
    sharedValues: 'Love, loyalty, family-like devotion, kindness, and creating harmonious environments.',
    growthPotential: 'Learning to share responsibility equally and balance care with independence.',
    advice: [
      'Share Responsibility Equally → Wendy should avoid over-caretaking; Cinderella should claim her independence.',
      'Lean Into Play → Balance responsibility with lighthearted experiences together.',
      'Journal Prompt: Cinderella types: "Where do I expect others to care for me instead of stepping up myself?" Wendy types: "Where do I mother others instead of letting them grow?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Wendy played mother to the Lost Boys, sacrificing her own youth for caretaking. Both stories show the power of patience and the challenges of balancing care with personal growth. Yet, their deeper lesson is about the balance of endurance and nurturing: Cinderella\'s quiet strength that endured until her moment came, and Wendy\'s maternal instincts that guided others while she herself remained a child. Together, they embody the journey from patient endurance to balanced nurturing.',
    keywords: ['nurturing', 'patient', 'caring', 'loyal', 'harmonious', 'protective']
  },

  // Cinderella × Little Red Riding Hood
  'cinderella-littleredridinghood': {
    id: 'cinderella-littleredridinghood',
    character1: 'Cinderella',
    character2: 'Little Red Riding Hood',
    character1Id: 'cinderella',
    character2Id: 'littleredridinghood',
    title: 'Endurance and Instinct — Quiet Patience Meets Watchful Caution',
    subtitle: 'Cinderella embodies patience, humility, and the ability to endure hardship with grace.',
    compatibilityScore: 60,
    relationshipType: 'A protective yet uneven pairing — valuable when endurance and instinct are shared equally.',
    summary: 'Little Red Riding Hood, on the other hand, represents caution, instinct, and the awareness of danger in the world. When paired, their relationship feels like a blend of gentleness and vigilance. Cinderella offers Red comfort and calm, while Red keeps Cinderella alert to risks she might otherwise overlook. Yet, their different ways of handling adversity can cause tension: Cinderella tends to endure quietly, while Red confronts danger head-on.',
    strengths: [
      'Protective Balance → Red shields, Cinderella soothes — they complete each other\'s weaknesses.',
      'Shared Heart → Both value loyalty and family, though expressed differently.',
      'Growth Through Contrast → Cinderella\'s endurance softens Red\'s sharpness; Red sharpens Cinderella\'s awareness.',
      'Mutual Care → Each archetype naturally protects the other in their own way.'
    ],
    challenges: [
      'Passivity vs. Vigilance → Cinderella waits patiently, Red acts quickly on instincts — creating mismatched responses.',
      'Different Worldviews → Cinderella sees goodness in people; Red expects wolves in disguise.',
      'Unequal Roles → Red may feel burdened as protector, Cinderella as one who needs saving.'
    ],
    communication: 'Protective and supportive, though may need work to bridge different approaches to danger.',
    emotionalConnection: 'Caring and loyal, built on mutual protection and shared values of loyalty and family.',
    sharedValues: 'Loyalty, family, protection, and caring for others, though expressed differently.',
    growthPotential: 'Learning to balance endurance with instinct and share responsibility equally.',
    advice: [
      'Learn From Each Other → Cinderella can adopt some of Red\'s awareness; Red can soften into Cinderella\'s faith in goodness.',
      'Share Responsibility → Avoid slipping into roles of protector and dependent.',
      'Journal Prompt: Cinderella types: "Where do I accept mistreatment instead of setting boundaries?" Red types: "Where do I assume danger and close off from trust?"'
    ],
    storyParallel: 'Cinderella endured hardship and waited for her fairy godmother\'s intervention, while Little Red Riding Hood was deceived by the wolf but learned to recognize danger and survive. Both stories show the risks of trusting too easily and the importance of learning to discern danger. Yet, their deeper lesson is about the balance of patience and caution: Cinderella\'s quiet endurance that led to transformation, and Red\'s instinctive wisdom that protected her from harm. Together, they embody the journey from patient trust to wise discernment.',
    keywords: ['protective', 'vigilant', 'caring', 'loyal', 'contrasting', 'balanced']
  },

  // Aurora × Ariel
  'aurora-ariel': {
    id: 'aurora-ariel',
    character1: 'Aurora',
    character2: 'Ariel',
    character1Id: 'aurora',
    character2Id: 'ariel',
    title: 'The Dreamer and the Adventurer — Stillness Meets Restlessness',
    subtitle: 'Aurora (*Sleeping Beauty*) embodies receptivity, intuition, and the dreamlike quality of waiting for destiny.',
    compatibilityScore: 60,
    relationshipType: 'A fascinating but fragile bond — magical when balanced, turbulent when rhythms clash.',
    summary: 'Ariel (*The Little Mermaid*) represents curiosity, boldness, and a restless drive to chase desire. Together, their bond is intriguing but uneasy. Ariel is fascinated by Aurora\'s serenity and depth, while Aurora admires Ariel\'s daring spirit. Yet their contrasting energies — one passive, the other active — can create tension. Ariel may find Aurora too withdrawn, while Aurora may see Ariel as reckless.',
    strengths: [
      'Balance of Energy → Aurora brings calm, Ariel brings movement.',
      'Mutual Fascination → Ariel admires Aurora\'s grace; Aurora is intrigued by Ariel\'s boldness.',
      'Shared Desire for Transformation → Both long for a life beyond their current circumstances.',
      'Emotional Complement → Ariel stirs Aurora awake; Aurora soothes Ariel\'s restlessness.'
    ],
    challenges: [
      'Different Tempos → Ariel leaps headfirst, Aurora drifts in stillness.',
      'Risk vs. Retreat → Ariel acts impulsively; Aurora avoids acting at all.',
      'Potential Frustration → Ariel may feel like she\'s dragging Aurora forward, while Aurora may feel overwhelmed by Ariel\'s intensity.'
    ],
    communication: 'Intriguing but uneasy, with contrasting energies that may need work to harmonize.',
    emotionalConnection: 'Fascinating but fragile, built on mutual fascination and shared desire for transformation.',
    sharedValues: 'Desire for transformation, longing for a different life, and emotional depth.',
    growthPotential: 'Learning to balance rest and action, and honor different rhythms.',
    advice: [
      'Honor Different Rhythms → Allow space for both rest (Aurora) and movement (Ariel).',
      'Balance Impulse with Reflection → Ariel can pause to consider, while Aurora can practice taking small steps into action.',
      'Journal Prompt: Aurora types: "Where do I wait for change instead of participating in it?" Ariel types: "Where do I leap without listening to inner wisdom?"'
    ],
    storyParallel: 'Aurora slept under a curse until awakened by true love\'s kiss, while Ariel made a dangerous bargain with the sea witch to pursue her dreams. Both stories show the power of transformation and the courage to pursue what we desire. Yet, their deeper lesson is about the balance of stillness and action: Aurora\'s dreamlike surrender that led to awakening, and Ariel\'s bold spirit that learned the value of what she already possessed. Together, they embody the journey from passive dreaming to active pursuit.',
    keywords: ['fascinating', 'fragile', 'contrasting', 'magical', 'turbulent', 'balanced']
  },

  // Aurora × Belle
  'aurora-belle': {
    id: 'aurora-belle',
    character1: 'Aurora',
    character2: 'Belle',
    character1Id: 'aurora',
    character2Id: 'belle',
    title: 'The Dreamer and the Thinker — Imagination Meets Intellect',
    subtitle: 'Aurora (*Sleeping Beauty*) embodies stillness, receptivity, and the dreamlike quality of intuition.',
    compatibilityScore: 80,
    relationshipType: 'Gentle and thoughtful — full of imagination and insight, but requires courage to bring ideas to life.',
    summary: 'Belle (*Beauty and the Beast*) represents intellect, curiosity, and the courage to look beneath the surface. When paired, their bond is gentle, thoughtful, and imaginative. Belle enjoys exploring the world through knowledge, while Aurora moves through life with quiet intuition and vision. Together, they create a relationship that feels like a blend of dreaming and reflection. The challenge lies in their lack of active drive — both can get stuck in thought or waiting rather than stepping into bold action.',
    strengths: [
      'Shared Depth → Belle explores through books, Aurora through dreams; both value inner life.',
      'Gentle Harmony → They connect without conflict, respecting each other\'s quiet natures.',
      'Mutual Admiration → Belle appreciates Aurora\'s grace and serenity; Aurora admires Belle\'s curiosity and insight.',
      'Safe Emotional Space → Their connection feels calm, nurturing, and thoughtful.'
    ],
    challenges: [
      'Lack of Initiative → Both archetypes risk retreating inward, leaving goals unrealized.',
      'Different Focuses → Belle intellectualizes, Aurora dreams — they may miss opportunities to act.',
      'Avoidance of Struggle → Neither archetype seeks conflict, which can cause stagnation.'
    ],
    communication: 'Gentle and thoughtful, with deep mutual respect and shared depth.',
    emotionalConnection: 'Calm and nurturing, built on gentle harmony and safe emotional space.',
    sharedValues: 'Inner life, depth, imagination, insight, and quiet reflection.',
    growthPotential: 'Learning to ground dreams in action and balance reflection with courage.',
    advice: [
      'Ground Dreams in Action → Turn insights and visions into real steps.',
      'Balance Reflection with Courage → Belle can lead with intellect, Aurora with intuition — but both must risk moving forward.',
      'Journal Prompt: Aurora types: "Where do I dream without grounding my vision in reality?" Belle types: "Where do I overanalyze instead of acting on insight?"'
    ],
    storyParallel: 'Aurora slept under a curse until awakened by true love\'s kiss, while Belle chose to stay with the Beast to save her father, discovering love beyond appearances. Both stories show the power of transformation and the courage to see beyond surface judgments. Yet, their deeper lesson is about the balance of dreaming and insight: Aurora\'s dreamlike surrender that led to awakening, and Belle\'s intellectual courage that revealed true beauty. Together, they embody the harmony of intuitive dreaming and thoughtful insight.',
    keywords: ['gentle', 'thoughtful', 'imaginative', 'harmonious', 'nurturing', 'reflective']
  },

  // Aurora × Rapunzel
  'aurora-rapunzel': {
    id: 'aurora-rapunzel',
    character1: 'Aurora',
    character2: 'Rapunzel',
    character1Id: 'aurora',
    character2Id: 'rapunzel',
    title: 'Dreamlike Stillness Meets Longing for Freedom',
    subtitle: 'Aurora (*Sleeping Beauty*) embodies stillness, intuition, and waiting for destiny.',
    compatibilityScore: 80,
    relationshipType: 'A tender and healing match — powerful when they turn shared dreams into real liberation.',
    summary: 'Rapunzel represents resilience, hidden strength, and the yearning to break free from confinement. When paired, their relationship feels like two sides of the same archetypal coin: both have known limitation and waiting. Aurora dreams passively, Rapunzel actively yearns for liberation. Together, they share deep empathy for one another\'s struggles. Yet they risk becoming trapped in their shared theme of waiting if they do not act toward freedom.',
    strengths: [
      'Shared Understanding → Both know confinement, whether magical sleep or a tower.',
      'Gentle Support → Aurora soothes with serenity, Rapunzel inspires with hope.',
      'Balance of Energy → Rapunzel\'s desire to act balances Aurora\'s dreamy passivity.',
      'Emotional Healing → They remind each other that life beyond limitation is possible.'
    ],
    challenges: [
      'Over-Identification With Waiting → Both may romanticize passivity or delay action.',
      'Naivety vs. Restlessness → Aurora may frustrate Rapunzel by waiting; Rapunzel may overwhelm Aurora with her urgency.',
      'Fear of Change → Together, they may cling to safety rather than risk freedom.'
    ],
    communication: 'Empathetic and comforting, with deep shared understanding of confinement.',
    emotionalConnection: 'Tender and healing, built on shared experiences of limitation and waiting.',
    sharedValues: 'Endurance, hope, liberation, and the belief in life beyond confinement.',
    growthPotential: 'Learning to balance dreaming and doing, and transform endurance into shared courage.',
    advice: [
      'Balance Dreaming and Doing → Aurora can learn to awaken into action; Rapunzel can ground her urgency in patience.',
      'Encourage Liberation Together → Transform endurance into shared courage to step forward.',
      'Journal Prompt: Aurora types: "Where am I waiting for fate instead of moving toward freedom?" Rapunzel types: "Where does my longing need patience and timing to flourish?"'
    ],
    storyParallel: 'Aurora slept under a curse until awakened, while Rapunzel waited in her tower until she chose to leave. Both illustrate surrender to limitation — one through magical sleep, the other through physical confinement. Together, they reflect the lesson that liberation requires both dreaming and decisive steps.',
    keywords: ['tender', 'healing', 'liberating', 'empathetic', 'enduring', 'hopeful']
  },

  // Aurora × Gerda
  'aurora-gerda': {
    id: 'aurora-gerda',
    character1: 'Aurora',
    character2: 'Gerda',
    character1Id: 'aurora',
    character2Id: 'gerda',
    title: 'Dreamlike Stillness Meets Loyal Devotion',
    subtitle: 'Aurora (*Sleeping Beauty*) represents intuition, receptivity, and dreamlike waiting.',
    compatibilityScore: 80,
    relationshipType: 'A gentle, faithful match — beautiful when devotion flows both ways, but must avoid imbalance.',
    summary: 'Gerda (from *The Snow Queen*) symbolizes loyalty, devotion, and the courage to act out of love. Together, their relationship is one of gentle devotion and faith. Aurora embodies the one who waits to be awakened, while Gerda embodies the one who journeys tirelessly to rescue those she loves. This pairing is harmonious, but it risks falling into an unequal balance where Aurora receives and Gerda gives too much.',
    strengths: [
      'Mutual Kindness → Both value compassion, forgiveness, and faith.',
      'Balance of Roles → Aurora embodies rest and trust, Gerda embodies loyalty in action.',
      'Healing Energy → Aurora\'s dreamlike calm soothes, Gerda\'s devotion empowers.',
      'Deep Empathy → They both believe in the power of love to overcome hardship.'
    ],
    challenges: [
      'Unequal Roles → Gerda may feel like the caretaker or savior, while Aurora passively receives.',
      'Over-Dependence → Aurora may rely too heavily on Gerda\'s loyalty.',
      'Avoidance of Conflict → Both may retreat into trust or faith instead of addressing real issues.'
    ],
    communication: 'Deeply loyal and gentle, with mutual kindness and faith.',
    emotionalConnection: 'Tender and faithful, built on gentle devotion and deep empathy.',
    sharedValues: 'Compassion, forgiveness, faith, and the power of love to overcome hardship.',
    growthPotential: 'Learning to balance giving and receiving, and empower rather than rescue.',
    advice: [
      'Balance Giving and Receiving → Aurora must learn to act, not only wait; Gerda must allow herself to rest.',
      'Empower, Don\'t Rescue → Their bond is strongest when both contribute equally to growth.',
      'Journal Prompt: Aurora types: "Where am I expecting rescue instead of awakening myself?" Gerda types: "Where does my loyalty become sacrifice rather than shared strength?"'
    ],
    storyParallel: 'Aurora slept under a spell, dependent on others for awakening, while Gerda journeyed tirelessly to free Kai from the Snow Queen\'s icy grasp. Together, their pairing highlights a powerful lesson: devotion is meaningful, but both must awaken and act for the bond to stay balanced.',
    keywords: ['gentle', 'faithful', 'devoted', 'loyal', 'harmonious', 'balanced']
  },

  // Aurora × Mulan
  'aurora-mulan': {
    id: 'aurora-mulan',
    character1: 'Aurora',
    character2: 'Mulan',
    character1Id: 'aurora',
    character2Id: 'mulan',
    title: 'The Dreamer and the Warrior — Stillness Meets Action',
    subtitle: 'Aurora (*Sleeping Beauty*) symbolizes receptivity, intuition, and dreamlike waiting.',
    compatibilityScore: 60,
    relationshipType: 'A contrasting but transformative bond — rich in growth when courage and serenity meet as equals.',
    summary: 'Mulan embodies courage, determination, and decisive action. When these two archetypes meet, their bond is both complementary and challenging. Aurora brings serenity and faith in destiny, while Mulan inspires direct action and responsibility. Each admires what the other possesses — Mulan finds Aurora\'s grace grounding, while Aurora looks up to Mulan\'s bravery. Yet, the sharp contrast between passivity and assertiveness can cause friction if not balanced.',
    strengths: [
      'Balance of Energy → Aurora offers peace and vision, Mulan brings action and drive.',
      'Mutual Admiration → Mulan values Aurora\'s calm; Aurora reveres Mulan\'s strength.',
      'Shared Integrity → Both operate from loyalty and moral grounding.',
      'Potential for Growth → Aurora learns initiative, Mulan learns patience.'
    ],
    challenges: [
      'Different Tempos → Aurora waits for fate; Mulan pushes to shape it.',
      'Imbalance of Roles → Mulan may dominate decision-making, Aurora may fade into passivity.',
      'Conflict Styles → Aurora avoids confrontation, while Mulan steps straight into it.'
    ],
    communication: 'Complementary but challenging, with different approaches to conflict and decision-making.',
    emotionalConnection: 'Mutually admiring but contrasting, with potential for transformative growth.',
    sharedValues: 'Loyalty, moral grounding, and integrity, though expressed differently.',
    growthPotential: 'Learning to balance stillness and action, and share agency equally.',
    advice: [
      'Share Agency → Aurora must learn to participate actively, while Mulan must leave room for gentleness and intuition.',
      'Honor Both Strengths → Mulan should value dreaming; Aurora should value courage.',
      'Journal Prompt: Aurora types: "Where am I waiting for life to move me when I should awaken myself?" Mulan types: "Where does my bravery need gentleness instead of urgency?"'
    ],
    storyParallel: 'Aurora lay in enchanted sleep, her destiny shaped by others, while Mulan disguised herself as a soldier to fight for her family and country. Their stories represent two opposite responses to fate: surrender and action. Together, they mirror the lesson that wholeness requires both stillness and boldness.',
    keywords: ['contrasting', 'transformative', 'complementary', 'challenging', 'growth', 'balance']
  },

  // Aurora × Alice
  'aurora-alice': {
    id: 'aurora-alice',
    character1: 'Aurora',
    character2: 'Alice',
    character1Id: 'aurora',
    character2Id: 'alice',
    title: 'The Dreamer and the Explorer — Stillness Meets Curiosity',
    subtitle: 'Aurora (*Sleeping Beauty*) embodies intuition, receptivity, and dreamlike stillness.',
    compatibilityScore: 60,
    relationshipType: 'Whimsical and magical — inspiring, but fragile without grounding in shared direction.',
    summary: 'Alice (*Alice in Wonderland*) represents curiosity, exploration, and the restless urge to question reality. Together, they form a whimsical yet unbalanced pairing. Aurora drifts through life with serene trust, while Alice eagerly follows every rabbit hole. Aurora admires Alice\'s bold curiosity, and Alice is enchanted by Aurora\'s graceful stillness. Yet their differing approaches to life — one passive, one questioning — can leave them disconnected if they fail to find shared purpose.',
    strengths: [
      'Shared Wonder → Both see magic in the world, though in different ways.',
      'Balance of Energies → Aurora brings calm; Alice brings playfulness and questioning.',
      'Imaginative Bond → Their connection feels otherworldly, full of fantasy and whimsy.',
      'Complementary Perspectives → Aurora trusts, Alice doubts — together, they balance faith and inquiry.'
    ],
    challenges: [
      'Different Realities → Aurora trusts in destiny; Alice demands answers — this mismatch may frustrate them.',
      'Passivity vs. Restlessness → Aurora avoids change, Alice rushes toward it.',
      'Conflict Avoidance → Both dislike confrontation, so real-world issues may be ignored.'
    ],
    communication: 'Whimsical and imaginative, but may lack grounding in practical matters.',
    emotionalConnection: 'Dreamy and magical, with shared wonder but different approaches to reality.',
    sharedValues: 'Wonder, imagination, and seeing magic in the world, though expressed differently.',
    growthPotential: 'Learning to blend trust with curiosity, and ground their magic in practical growth.',
    advice: [
      'Blend Trust with Curiosity → Aurora can learn to ask more questions; Alice can learn to rest in stillness.',
      'Ground Their Magic → Use wonder for practical growth, not just fantasy.',
      'Journal Prompt: Aurora types: "Where do I rely on fate instead of exploring possibilities?" Alice types: "Where do I chase curiosity without grounding myself in wisdom?"'
    ],
    storyParallel: 'Aurora slept under a curse until awakened, while Alice leapt down the rabbit hole into Wonderland. Both illustrate surrender to the surreal — one through stillness, the other through curiosity. Together, they reflect the lesson that imagination requires both rest and exploration.',
    keywords: ['whimsical', 'magical', 'imaginative', 'fragile', 'otherworldly', 'curious']
  },

  // Aurora × Dorothy
  'aurora-dorothy': {
    id: 'aurora-dorothy',
    character1: 'Aurora',
    character2: 'Dorothy',
    character1Id: 'aurora',
    character2Id: 'dorothy',
    title: 'The Dreamer and the Seeker — Stillness Meets the Journey for Home',
    subtitle: 'Aurora (*Sleeping Beauty*) represents dreamlike stillness, intuition, and surrender to destiny.',
    compatibilityScore: 80,
    relationshipType: 'A tender and hopeful bond — best when stillness and seeking are honored equally.',
    summary: 'Dorothy (*The Wizard of Oz*) embodies the seeker archetype — determined, hopeful, and always longing for belonging and "home." Together, their relationship is empathetic and tender. Aurora provides Dorothy with calm, reflective insight, while Dorothy inspires Aurora to think of "home" not as a distant destiny but as something to claim actively. Yet their differences in approach can cause friction: Aurora waits passively, while Dorothy insists on moving forward, seeking answers and resolution.',
    strengths: [
      'Shared Hope → Both trust that goodness and belonging will be found.',
      'Balance of Energy → Aurora\'s calm steadiness tempers Dorothy\'s urgency.',
      'Emotional Depth → Their bond is filled with empathy and compassion.',
      'Complementary Roles → Aurora dreams, Dorothy pursues — together they cover both sides of transformation.'
    ],
    challenges: [
      'Waiting vs. Seeking → Aurora trusts fate; Dorothy wants to find solutions herself.',
      'Imbalance of Roles → Dorothy may feel like she\'s pulling Aurora along; Aurora may feel overwhelmed by Dorothy\'s determination.',
      'Avoidance of Conflict → Both prefer harmony and may avoid addressing difficult truths.'
    ],
    communication: 'Empathetic and tender, with shared hope and emotional depth.',
    emotionalConnection: 'Tender and hopeful, built on empathy and complementary approaches to transformation.',
    sharedValues: 'Hope, trust in goodness, belief in belonging, and the power of transformation.',
    growthPotential: 'Learning to value both approaches and redefine "home" as something built through choice.',
    advice: [
      'Value Both Approaches → Dorothy should honor the wisdom in patience; Aurora should embrace the courage of the seeker.',
      'Redefine "Home" → Both must see that belonging is built through choice, not only found or awaited.',
      'Journal Prompt: Aurora types: "Where am I waiting for my \'home\' instead of creating it?" Dorothy types: "What am I seeking that I already hold within?"'
    ],
    storyParallel: 'Aurora lay asleep under a curse, her fate determined by others, while Dorothy journeyed through Oz to return home, relying on her determination and companions. One surrendered, the other sought. Together, they embody the lesson that homecoming requires both dreaming and decisive steps.',
    keywords: ['tender', 'hopeful', 'empathetic', 'seeking', 'dreaming', 'transformative']
  },

  // Aurora × Wendy
  'aurora-wendy': {
    id: 'aurora-wendy',
    character1: 'Aurora',
    character2: 'Wendy',
    character1Id: 'aurora',
    character2Id: 'wendy',
    title: 'The Dreamer and the Caretaker — Stillness Held by Nurture',
    subtitle: 'Aurora (*Sleeping Beauty*) embodies receptivity, intuition, and a dreamlike surrender to fate.',
    compatibilityScore: 80,
    relationshipType: 'A soft and nurturing match — beautiful when both grow beyond roles of caretaker and dreamer.',
    summary: 'Wendy (*Peter Pan*) represents the archetype of the youthful caretaker — balancing innocence with responsibility, providing guidance and maternal energy. Together, their relationship feels tender and comforting. Wendy naturally slips into the caretaker role, offering Aurora structure and protection, while Aurora brings serenity and grace that soothes Wendy\'s sometimes heavy sense of duty. The risk lies in imbalance: Aurora may lean too much on Wendy\'s care, and Wendy may over-caretake instead of treating Aurora as an equal.',
    strengths: [
      'Nurturing Harmony → Wendy protects and supports, Aurora offers gentle calm.',
      'Shared Innocence → Both have a youthful, trusting spirit at their core.',
      'Balance of Roles → Wendy\'s practicality complements Aurora\'s dreamlike passivity.',
      'Emotional Safety → They create a deeply protective and healing atmosphere.'
    ],
    challenges: [
      'Caretaker–Dependent Roles → Wendy may mother Aurora, and Aurora may slip into passivity.',
      'Lack of Initiative → Both may avoid conflict or delay decisions.',
      'Risk of Stagnation → Their relationship may feel safe but lack forward growth.'
    ],
    communication: 'Tender and comforting, with Wendy providing structure and Aurora offering serenity.',
    emotionalConnection: 'Soft and nurturing, built on shared innocence and emotional safety.',
    sharedValues: 'Youthful trust, innocence, and the desire for a protective, healing atmosphere.',
    growthPotential: 'Learning to balance roles and invite playfulness beyond caretaking and dreaming.',
    advice: [
      'Balance Roles → Wendy should encourage Aurora\'s independence, while Aurora should claim her own voice.',
      'Invite Playfulness → Share joy and imagination, not just caretaking and dreaming.',
      'Journal Prompt: Aurora types: "Where do I depend on others to protect me instead of stepping into my own strength?" Wendy types: "Where do I over-caretake instead of letting others grow?"'
    ],
    storyParallel: 'Aurora waited in enchanted sleep for rescue, while Wendy played mother to the Lost Boys, sacrificing her own youth for caretaking. Both stories reflect dependence on others to define their roles. Together, they remind us that nurturing should empower, not enable passivity.',
    keywords: ['soft', 'nurturing', 'protective', 'tender', 'comforting', 'innocent']
  },

  // Aurora × Little Red Riding Hood
  'aurora-littleredridinghood': {
    id: 'aurora-littleredridinghood',
    character1: 'Aurora',
    character2: 'Little Red Riding Hood',
    character1Id: 'aurora',
    character2Id: 'littleredridinghood',
    title: 'The Dreamer and the Survivor — Stillness Meets Caution',
    subtitle: 'Aurora (*Sleeping Beauty*) represents receptivity, stillness, and surrender to fate, while Little Red Riding Hood symbolizes caution, instinct, and the ability to survive danger by recognizing threats.',
    compatibilityScore: 60,
    relationshipType: 'Protective yet uneven bond — powerful growth emerges when they blend caution with trust.',
    summary: 'Together, their bond is one of contrast. Aurora brings gentleness, serenity, and faith in goodness, while Red grounds the relationship with vigilance and realism. Red may find Aurora\'s passivity naive or frustrating, while Aurora may see Red\'s caution as unnecessary fear. If balanced, however, they teach each other valuable lessons: Aurora softens Red\'s suspicion, and Red protects Aurora from blind trust.',
    strengths: [
      'Balance of Perspectives → Aurora trusts in destiny, Red remains alert to danger.',
      'Mutual Care → Aurora soothes Red\'s caution, Red shields Aurora\'s vulnerability.',
      'Shared Innocence → Both hold a youthful energy, though expressed differently.',
      'Potential for Growth → Each develops traits the other lacks — trust vs. vigilance.'
    ],
    challenges: [
      'Naivety vs. Suspicion → Aurora\'s dreamy faith clashes with Red\'s survival instincts.',
      'Conflict Styles → Aurora avoids confrontation, Red confronts threats directly.',
      'Unequal Roles → Red may slip into overprotection, Aurora into dependence.'
    ],
    communication: 'May need work to bridge different approaches to trust and caution.',
    emotionalConnection: 'Protective and loyal, but may clash due to different perspectives on safety.',
    sharedValues: 'Connection, loyalty, and protecting what matters, though expressed differently.',
    growthPotential: 'Learning to integrate trust with instinct and kindness with caution.',
    advice: [
      'Blend Trust with Caution → Aurora can learn discernment; Red can learn faith in goodness.',
      'Avoid Unequal Roles → Their relationship works best when both share responsibility for safety and growth.',
      'Journal Prompt: Aurora types: "Where do I wait passively when I should trust my instincts?" Red types: "Where do I assume danger and close myself off to joy?"'
    ],
    storyParallel: 'Aurora slept under a curse, helpless until awakened, while Little Red Riding Hood faced the wolf by relying on instinct and caution. One surrendered, the other survived through awareness. Together, their archetypes reflect the lesson: true wisdom combines vigilance with faith.',
    keywords: ['protective', 'contrasting', 'balanced', 'instinctive', 'cautious', 'growth']
  },

  // Ariel × Belle
  'ariel-belle': {
    id: 'ariel-belle',
    character1: 'Ariel',
    character2: 'Belle',
    character1Id: 'ariel',
    character2Id: 'belle',
    title: 'The Explorer and the Thinker — Curiosity in Two Forms',
    subtitle: 'Ariel (*The Little Mermaid*) embodies restless curiosity, bold desire, and the pursuit of freedom.',
    compatibilityScore: 80,
    relationshipType: 'A stimulating and adventurous bond — best when curiosity is honored in both its forms.',
    summary: 'Belle (*Beauty and the Beast*) represents reflective curiosity, intellect, and the willingness to look beyond appearances. Together, their relationship is vibrant and stimulating. Ariel\'s outward exploration pairs with Belle\'s inward reflection — one dives into experiences, the other into understanding. They share a thirst for discovery, though in different forms. Tension arises when Ariel sees Belle as too cautious or withdrawn, while Belle may view Ariel as reckless.',
    strengths: [
      'Shared Curiosity → Both long to discover more than the world they were given.',
      'Balance of Approaches → Ariel pursues outer adventures; Belle pursues inner truths.',
      'Mutual Admiration → Belle admires Ariel\'s boldness; Ariel values Belle\'s wisdom.',
      'Complementary Growth → Belle helps Ariel slow down; Ariel inspires Belle to step out of her comfort zone.'
    ],
    challenges: [
      'Different Paces → Ariel leaps quickly, Belle reflects deeply.',
      'Risk vs. Discernment → Ariel may take dangerous risks; Belle may hesitate too long.',
      'Potential Misunderstanding → Ariel might think Belle lacks spirit; Belle might think Ariel lacks foresight.'
    ],
    communication: 'Vibrant and stimulating, though may need work to bridge different paces and approaches.',
    emotionalConnection: 'Exciting and intellectually stimulating, built on shared curiosity and mutual admiration.',
    sharedValues: 'Curiosity, discovery, transformation, and the desire to experience more than what is given.',
    growthPotential: 'Learning to balance action with reflection and honor both forms of curiosity.',
    advice: [
      'Learn From Each Other → Ariel can embrace Belle\'s thoughtful reflection; Belle can adopt Ariel\'s boldness.',
      'Honor Both Journeys → Recognize that outer adventure and inner wisdom are equally valuable.',
      'Journal Prompt: Ariel types: "Where do I chase excitement without reflecting on its meaning?" Belle types: "Where do I overthink and miss the chance to act?"'
    ],
    storyParallel: 'Ariel collected treasures of the human world, longing to experience life beyond the sea, while Belle sought wisdom and truth in her books, longing for "more than this provincial life." Both pursued what lay beyond their immediate world — one through action, the other through insight. Together, they mirror the lesson that discovery requires both experience and reflection.',
    keywords: ['stimulating', 'adventurous', 'curious', 'balanced', 'inspiring', 'complementary']
  },

  // Ariel × Rapunzel
  'ariel-rapunzel': {
    id: 'ariel-rapunzel',
    character1: 'Ariel',
    character2: 'Rapunzel',
    character1Id: 'ariel',
    character2Id: 'rapunzel',
    title: 'The Adventurer and the Captive Dreamer — Curiosity Meets Longing for Freedom',
    subtitle: 'Ariel (*The Little Mermaid*) represents bold curiosity, restlessness, and the drive to pursue desire at any cost.',
    compatibilityScore: 80,
    relationshipType: 'A liberating and inspiring bond — powerful when courage and patience meet in harmony.',
    summary: 'Rapunzel embodies resilience, patience under confinement, and the aching yearning for liberation. Together, their bond is electric with possibility. Ariel resonates with Rapunzel\'s desire to escape limitation, while Rapunzel admires Ariel\'s daring spirit. This pairing brims with inspiration — yet it risks imbalance, as Ariel leaps before thinking while Rapunzel hesitates out of fear or inexperience.',
    strengths: [
      'Shared Desire for Freedom → Both long for a bigger world than the one they know.',
      'Complementary Energy → Ariel acts, Rapunzel dreams — together they push each other forward.',
      'Mutual Admiration → Rapunzel admires Ariel\'s courage; Ariel admires Rapunzel\'s resilience.',
      'Transformational Bond → Each archetype can help the other grow into independence.'
    ],
    challenges: [
      'Different Tempos → Ariel rushes into risk, Rapunzel delays action out of hesitation.',
      'Naivety vs. Impulsiveness → Rapunzel may trust too easily; Ariel may act too rashly.',
      'Potential for Chaos → Without balance, one may pull too hard while the other holds back.'
    ],
    communication: 'Inspiring and adventurous, though may need work to balance different tempos.',
    emotionalConnection: 'Electric and liberating, built on shared desire for freedom and mutual admiration.',
    sharedValues: 'Freedom, transformation, courage, and the desire to experience more than what is given.',
    growthPotential: 'Learning to balance courage with patience and empower each other\'s independence.',
    advice: [
      'Balance Risk and Timing → Ariel should slow down; Rapunzel should step forward sooner.',
      'Empower Each Other → Ariel should encourage Rapunzel\'s courage; Rapunzel should ground Ariel\'s passion with perspective.',
      'Journal Prompt: Ariel types: "Where do I dive headfirst without preparing for consequences?" Rapunzel types: "Where do I hesitate when freedom is within reach?"'
    ],
    storyParallel: 'Ariel traded her voice for legs to chase her dream, while Rapunzel stared longingly out her tower window, waiting for the day she could see the world. Their stories mirror one another — the restless adventurer and the captive dreamer. Together, they embody the lesson that freedom requires both daring leaps and careful timing.',
    keywords: ['liberating', 'inspiring', 'adventurous', 'transformational', 'courageous', 'balanced']
  },

  // Ariel × Gerda
  'ariel-gerda': {
    id: 'ariel-gerda',
    character1: 'Ariel',
    character2: 'Gerda',
    character1Id: 'ariel',
    character2Id: 'gerda',
    title: 'The Adventurer and the Devoted — Curiosity Meets Loyalty',
    subtitle: 'Ariel (*The Little Mermaid*) embodies restless curiosity, bold desire, and the pursuit of new horizons.',
    compatibilityScore: 80,
    relationshipType: 'A vibrant yet steadying bond — thrilling when curiosity and loyalty walk hand in hand.',
    summary: 'Gerda (from *The Snow Queen*) symbolizes loyalty, steadfast devotion, and the willingness to endure any hardship for love. Together, their bond is one of contrast and complement. Ariel charges toward adventure without hesitation, while Gerda\'s devotion keeps her steady on a chosen path. Ariel brings excitement into Gerda\'s world, while Gerda grounds Ariel\'s impulsiveness with commitment. The risk is imbalance: Ariel may grow restless with Gerda\'s steadiness, while Gerda may feel burdened by Ariel\'s unpredictability.',
    strengths: [
      'Balance of Energy → Ariel inspires adventure; Gerda anchors it with loyalty.',
      'Shared Passion → Both follow their hearts intensely — one through curiosity, the other through devotion.',
      'Mutual Growth → Ariel pushes Gerda toward new experiences; Gerda reminds Ariel of stability and responsibility.',
      'Emotional Depth → Their connection blends fire and ice — bold desire with quiet devotion.'
    ],
    challenges: [
      'Restlessness vs. Steadfastness → Ariel constantly seeks change, while Gerda stays loyal and steady.',
      'Potential Imbalance → Gerda may end up carrying the responsibility while Ariel chases whims.',
      'Different Priorities → Ariel prioritizes discovery, Gerda prioritizes relationships — this mismatch can cause friction.'
    ],
    communication: 'Complementary and passionate, though may need work to balance different priorities.',
    emotionalConnection: 'Vibrant and steadying, built on shared passion and emotional depth.',
    sharedValues: 'Following the heart, passion, and the willingness to pursue what matters most.',
    growthPotential: 'Learning to balance exploration with loyalty and create shared adventures.',
    advice: [
      'Value Both Paths → Recognize that exploration (Ariel) and loyalty (Gerda) are equally powerful forms of love.',
      'Create Shared Adventures → Find experiences that satisfy Ariel\'s curiosity while honoring Gerda\'s devotion.',
      'Journal Prompt: Ariel types: "Where do I chase novelty without appreciating loyalty?" Gerda types: "Where does my devotion keep me from exploring new horizons?"'
    ],
    storyParallel: 'Ariel sacrificed her voice to explore a world beyond the sea, while Gerda braved icy lands to save Kai from the Snow Queen. One pursued her dream restlessly, the other stayed true to her heart with unshakable loyalty. Their stories highlight the lesson that devotion and discovery can coexist, but only if balanced with respect.',
    keywords: ['vibrant', 'steadying', 'passionate', 'loyal', 'adventurous', 'balanced']
  },

  // Ariel × Mulan
  'ariel-mulan': {
    id: 'ariel-mulan',
    character1: 'Ariel',
    character2: 'Mulan',
    character1Id: 'ariel',
    character2Id: 'mulan',
    title: 'The Adventurer and the Warrior — Desire Meets Duty',
    subtitle: 'Ariel (*The Little Mermaid*) symbolizes restless curiosity, passion, and the drive to pursue her desires.',
    compatibilityScore: 80,
    relationshipType: 'A bold and passionate bond — thrives when desire and duty walk side by side.',
    summary: 'Mulan embodies bravery, responsibility, and the willingness to sacrifice for duty. Together, their connection is fiery and energizing. Ariel\'s bold pursuit of what she wants inspires Mulan to embrace her own desires, while Mulan\'s discipline and courage ground Ariel\'s impulsiveness. Yet their priorities differ — Ariel follows passion wherever it leads, while Mulan measures her actions against responsibility and honor. This can create either a powerful balance or deep conflict.',
    strengths: [
      'Mutual Bravery → Both act boldly, though for different reasons.',
      'Balance of Motives → Ariel acts from desire, Mulan from duty — together, they balance passion and responsibility.',
      'Shared Fire → Their energy and determination make them unstoppable when aligned.',
      'Inspiration → Mulan admires Ariel\'s daring spirit; Ariel admires Mulan\'s courage and strength.'
    ],
    challenges: [
      'Desire vs. Duty → Ariel prioritizes what she wants; Mulan prioritizes what others need.',
      'Conflict of Values → Ariel may see Mulan as rigid; Mulan may see Ariel as selfish or reckless.',
      'Clash of Temperaments → Ariel is impulsive, Mulan is strategic — both may clash over how to act.'
    ],
    communication: 'Fiery and energizing, though may need work to bridge different priorities and values.',
    emotionalConnection: 'Bold and passionate, built on mutual bravery and shared fire.',
    sharedValues: 'Courage, determination, and the willingness to defy expectations for what matters.',
    growthPotential: 'Learning to balance desire with duty and respect each other\'s different motivators.',
    advice: [
      'Respect Each Other\'s Compass → Recognize that passion (Ariel) and duty (Mulan) are equally noble motivators.',
      'Learn From Each Other → Ariel can benefit from Mulan\'s discipline; Mulan can embrace Ariel\'s willingness to pursue personal happiness.',
      'Journal Prompt: Ariel types: "Where does my pursuit of desire ignore responsibility?" Mulan types: "Where does my sense of duty prevent me from claiming joy?"'
    ],
    storyParallel: 'Ariel risked everything to follow her heart into the human world, while Mulan risked everything to defend her family and country. One sacrificed for desire, the other for duty — but both defied expectations with courage. Their pairing embodies the lesson that passion and responsibility must work together to create true fulfillment.',
    keywords: ['bold', 'passionate', 'fiery', 'courageous', 'balanced', 'inspiring']
  },

  // Ariel × Alice
  'ariel-alice': {
    id: 'ariel-alice',
    character1: 'Ariel',
    character2: 'Alice',
    character1Id: 'ariel',
    character2Id: 'alice',
    title: 'The Adventurer and the Explorer — Two Forms of Curiosity',
    subtitle: 'Ariel (*The Little Mermaid*) represents passionate restlessness, a hunger for freedom, and bold leaps into the unknown.',
    compatibilityScore: 60,
    relationshipType: 'Exciting and imaginative — thrilling in the moment, but fragile without grounding.',
    summary: 'Alice (*Alice in Wonderland*) symbolizes imaginative curiosity, questioning, and exploration of the surreal. When these two archetypes come together, the relationship feels like pure discovery. Both are seekers of new worlds — Ariel through desire and daring, Alice through wonder and questions. Their bond brims with excitement and imagination, but it can also be chaotic, as neither archetype naturally provides grounding or restraint.',
    strengths: [
      'Shared Curiosity → Both are driven to explore, question, and seek transformation.',
      'Playful Energy → Their relationship is lively, adventurous, and full of surprises.',
      'Mutual Inspiration → Ariel admires Alice\'s whimsical imagination; Alice admires Ariel\'s fearless drive.',
      'Creativity Unleashed → Together, they can create bold, magical visions.'
    ],
    challenges: [
      'Lack of Grounding → Neither archetype is naturally practical; they may lose themselves in endless exploration.',
      'Impulsiveness vs. Distraction → Ariel leaps too quickly, Alice wanders too far — making progress difficult.',
      'Instability → Their dynamic can feel fun but fleeting without structure.'
    ],
    communication: 'Exciting and imaginative, though may lack grounding and structure.',
    emotionalConnection: 'Playful and adventurous, built on shared curiosity and mutual inspiration.',
    sharedValues: 'Exploration, curiosity, transformation, and the desire to experience new worlds.',
    growthPotential: 'Learning to balance excitement with grounding and create structure for their creativity.',
    advice: [
      'Find Anchors → Introduce grounding practices (shared goals, routines) to balance constant motion.',
      'Celebrate Differences → Ariel teaches boldness; Alice teaches imagination.',
      'Journal Prompt: Ariel types: "Where do I leap forward without noticing the details?" Alice types: "Where do I wander without asking what I truly seek?"'
    ],
    storyParallel: 'Ariel traded her voice to live among humans, driven by passion, while Alice followed a rabbit into Wonderland, driven by curiosity. Both risked everything to explore unknown worlds. Their stories reflect the lesson that exploration needs both direction and grounding to become transformation instead of chaos.',
    keywords: ['exciting', 'imaginative', 'playful', 'chaotic', 'creative', 'fragile']
  },

  // Ariel × Dorothy
  'ariel-dorothy': {
    id: 'ariel-dorothy',
    character1: 'Ariel',
    character2: 'Dorothy',
    character1Id: 'ariel',
    character2Id: 'dorothy',
    title: 'The Adventurer and the Seeker — Desire Meets the Longing for Home',
    subtitle: 'Ariel (*The Little Mermaid*) represents restless curiosity, passion, and the urge to chase desire.',
    compatibilityScore: 80,
    relationshipType: 'Exciting and meaningful — thrives when freedom and belonging are seen as complementary, not opposed.',
    summary: 'Dorothy (*The Wizard of Oz*) embodies the seeker\'s journey — longing for belonging, safety, and the meaning of "home." Together, their relationship is inspiring yet sometimes at odds. Ariel pushes outward into unknown worlds, while Dorothy seeks to return inward to a place of grounding. Ariel admires Dorothy\'s loyalty and sense of belonging, while Dorothy admires Ariel\'s courage to explore beyond boundaries. Their contrast makes for growth, but also potential friction when Ariel wants to run away while Dorothy longs to return.',
    strengths: [
      'Shared Courage → Both are willing to risk everything to pursue what they believe in.',
      'Mutual Admiration → Ariel admires Dorothy\'s faithfulness; Dorothy admires Ariel\'s daring.',
      'Complementary Focus → Ariel explores the unknown; Dorothy holds fast to what matters most.',
      'Emotional Depth → They inspire each other to question what they truly long for.'
    ],
    challenges: [
      'Opposing Directions → Ariel seeks freedom from home; Dorothy longs to return to it.',
      'Risk vs. Stability → Ariel is impulsive, Dorothy is cautious and grounded in loyalty.',
      'Potential Misunderstanding → Dorothy may view Ariel as reckless; Ariel may see Dorothy as too tied down.'
    ],
    communication: 'Inspiring and supportive, though may need work to bridge different directions and priorities.',
    emotionalConnection: 'Passionate and transformative, built on shared courage and mutual admiration.',
    sharedValues: 'Courage, transformation, and the willingness to pursue what truly matters.',
    growthPotential: 'Learning to balance freedom with belonging and see them as complementary rather than opposed.',
    advice: [
      'Define Shared Values → Recognize that both freedom (Ariel) and belonging (Dorothy) are essential human needs.',
      'Balance Adventure and Grounding → Ariel should honor Dorothy\'s need for roots; Dorothy should embrace Ariel\'s hunger for discovery.',
      'Journal Prompt: Ariel types: "What am I really searching for in my desire for freedom?" Dorothy types: "What does \'home\' mean to me beyond a place?"'
    ],
    storyParallel: 'Ariel sacrificed her voice to live in a new world, while Dorothy braved strange lands only to realize there was no place like home. One sought escape, the other return — yet both discovered transformation in the journey. Their pairing reminds us that true fulfillment blends exploration and belonging.',
    keywords: ['exciting', 'meaningful', 'transformative', 'courageous', 'balanced', 'inspiring']
  },

  // Ariel × Wendy
  'ariel-wendy': {
    id: 'ariel-wendy',
    character1: 'Ariel',
    character2: 'Wendy',
    character1Id: 'ariel',
    character2Id: 'wendy',
    title: 'The Adventurer and the Caretaker — Freedom Meets Responsibility',
    subtitle: 'Ariel (*The Little Mermaid*) represents restless curiosity, boldness, and the desire to break free of limits.',
    compatibilityScore: 60,
    relationshipType: 'A contrasting but growth-filled match — thrives only when freedom and responsibility are honored equally.',
    summary: 'Wendy (*Peter Pan*) symbolizes youthful caretaking — balancing childlike innocence with responsibility and the instinct to nurture. Together, their relationship is both inspiring and uneasy. Ariel admires Wendy\'s loyalty and sense of duty, while Wendy is fascinated by Ariel\'s fearless pursuit of freedom. Yet, they can pull in opposite directions: Ariel resists restriction, while Wendy leans into responsibility. Their growth lies in learning from one another without judgment.',
    strengths: [
      'Balance of Roles → Ariel pushes for liberation, Wendy stabilizes with caretaking.',
      'Mutual Inspiration → Ariel encourages Wendy to embrace playfulness; Wendy reminds Ariel of responsibility.',
      'Shared Innocence → Both carry a youthful, hopeful spirit at their core.',
      'Complementary Growth → Ariel learns grounding, Wendy learns freedom.'
    ],
    challenges: [
      'Opposing Priorities → Ariel chases desire, Wendy tends to others\' needs.',
      'Risk vs. Safety → Ariel may see Wendy as restrictive; Wendy may see Ariel as reckless.',
      'Caretaker Dynamic → Wendy might slip into "parenting" Ariel rather than treating her as an equal partner.'
    ],
    communication: 'Supportive but contrasting, though may need work to bridge different priorities and approaches.',
    emotionalConnection: 'Inspiring yet uneasy, built on mutual inspiration and shared innocence.',
    sharedValues: 'Youthful spirit, hope, and the desire to create meaningful experiences.',
    growthPotential: 'Learning to balance freedom with responsibility and respect each other\'s different approaches.',
    advice: [
      'Respect Each Other\'s Compass → Ariel should honor Wendy\'s loyalty; Wendy should admire Ariel\'s daring instead of fearing it.',
      'Share Responsibility and Play → They thrive when freedom and care are balanced, not in conflict.',
      'Journal Prompt: Ariel types: "Where does my desire for freedom ignore the needs of those who care for me?" Wendy types: "Where does my caretaking prevent me from experiencing freedom?"'
    ],
    storyParallel: 'Ariel traded her voice to live as she wished, while Wendy left home to care for the Lost Boys in Neverland, sacrificing freedom for responsibility. One chose liberation, the other duty — their bond highlights the lesson that both freedom and care are essential to growth.',
    keywords: ['contrasting', 'growth-filled', 'supportive', 'inspiring', 'balanced', 'complementary']
  },

  // Ariel × Little Red Riding Hood
  'ariel-littleredridinghood': {
    id: 'ariel-littleredridinghood',
    character1: 'Ariel',
    character2: 'Little Red Riding Hood',
    character1Id: 'ariel',
    character2Id: 'littleredridinghood',
    title: 'The Adventurer and the Survivor — Bold Curiosity Meets Vigilant Caution',
    subtitle: 'Ariel (*The Little Mermaid*) represents bold curiosity, restless desire, and the impulse to dive into the unknown.',
    compatibilityScore: 60,
    relationshipType: 'A fiery and challenging match — growth emerges when boldness and caution learn to walk hand in hand.',
    summary: 'Little Red Riding Hood symbolizes caution, instinct, and the survivor\'s awareness of danger lurking in the world. When paired, their relationship is full of tension and potential. Ariel sees endless possibility, while Red sees hidden threats. Ariel admires Red\'s sharp instincts but may find her wary nature stifling. Red admires Ariel\'s daring but may view her as reckless. This dynamic can be frustrating, yet it also has great growth potential — together, they balance risk and awareness.',
    strengths: [
      'Balance of Energies → Ariel pushes forward, Red pulls back — creating a healthy tension if respected.',
      'Mutual Lessons → Ariel learns discernment, Red learns courage.',
      'Shared Loyalty → Both are driven by heart, whether through desire (Ariel) or protection (Red).',
      'Protective Bond → Red shields Ariel from danger, while Ariel shows Red the joy of adventure.'
    ],
    challenges: [
      'Risk vs. Fear → Ariel leaps headfirst, Red hesitates and warns — constant friction without compromise.',
      'Different Worldviews → Ariel sees the world as full of wonders; Red sees it as full of wolves.',
      'Imbalance of Roles → Red may become the constant protector, Ariel the constant risk-taker.'
    ],
    communication: 'Stimulating but often conflicted, though may need work to bridge different worldviews.',
    emotionalConnection: 'Passionate but stormy, built on tension and potential for growth.',
    sharedValues: 'Loyalty, following the heart, and the willingness to act for what matters.',
    growthPotential: 'Learning to blend boldness with caution and see their differences as complementary.',
    advice: [
      'Blend Trust and Caution → Ariel should pause to consider risks; Red should allow herself to embrace possibility.',
      'Avoid Polarization → They thrive when they see their differences as complementary rather than conflicting.',
      'Journal Prompt: Ariel types: "Where do I chase freedom without considering the dangers?" Red types: "Where do I focus so much on danger that I miss life\'s joys?"'
    ],
    storyParallel: 'Ariel risked everything to walk on land for love and freedom, while Little Red Riding Hood nearly lost herself by trusting the wolf. Both stories are about risk — one embraced too freely, the other feared too much. Together, they embody the lesson that freedom requires courage tempered by instinct.',
    keywords: ['fiery', 'challenging', 'protective', 'balanced', 'tension', 'growth']
  },

  // Belle × Rapunzel
  'belle-rapunzel': {
    id: 'belle-rapunzel',
    character1: 'Belle',
    character2: 'Rapunzel',
    character1Id: 'belle',
    character2Id: 'rapunzel',
    title: 'The Thinker and the Dreamer in Captivity — Intellect Meets Yearning for Freedom',
    subtitle: 'Belle (*Beauty and the Beast*) represents intellect, curiosity, and the ability to see beneath appearances.',
    compatibilityScore: 80,
    relationshipType: 'A thoughtful and hopeful bond — thrives when wisdom and freedom come together in action.',
    summary: 'Rapunzel symbolizes resilience, hidden strength, and the deep longing for freedom. Together, their relationship is nurturing and insightful. Belle admires Rapunzel\'s quiet hopefulness, while Rapunzel is inspired by Belle\'s willingness to explore truth and knowledge. Both value growth, but in different ways — Belle through study, Rapunzel through lived experience once she breaks free. Their challenge lies in avoiding over-idealization and ensuring their dreams become action.',
    strengths: [
      'Shared Curiosity → Belle seeks inner truth, Rapunzel longs for outer freedom — complementary forms of exploration.',
      'Gentle Harmony → Both archetypes value kindness, forgiveness, and empathy.',
      'Mutual Admiration → Belle respects Rapunzel\'s resilience; Rapunzel admires Belle\'s wisdom.',
      'Healing Energy → Belle provides perspective, Rapunzel brings hope and inspiration.'
    ],
    challenges: [
      'Different Expressions of Growth → Belle prefers analysis, Rapunzel craves action — this mismatch can cause tension.',
      'Risk of Passivity → Both may wait too long to claim their freedom, leaning on dreams instead of decisions.',
      'Avoidance of Conflict → Neither archetype is naturally confrontational, so hard truths may be delayed.'
    ],
    communication: 'Encouraging and uplifting, though sometimes slow to act.',
    emotionalConnection: 'Gentle, nurturing, and full of admiration, built on shared curiosity and gentle harmony.',
    sharedValues: 'Curiosity, growth, kindness, forgiveness, and the desire to see beyond surface appearances.',
    growthPotential: 'Learning to blend knowledge with action and avoid over-idealization.',
    advice: [
      'Blend Knowledge and Action → Belle should support Rapunzel in taking risks, while Rapunzel should ground her freedom in Belle\'s insight.',
      'Avoid Idealization → See each other as equals, not as saviors.',
      'Journal Prompt: Belle types: "Where do I study life instead of living it?" Rapunzel types: "Where do I long for freedom without taking the steps to achieve it?"'
    ],
    storyParallel: 'Belle discovered love and truth by looking deeper into the Beast\'s heart, while Rapunzel found freedom and strength when she escaped her tower. One sought truth in others, the other sought freedom from confinement. Their pairing highlights the lesson that wisdom and freedom both require courage to step beyond the familiar.',
    keywords: ['thoughtful', 'hopeful', 'nurturing', 'insightful', 'balanced', 'healing']
  },

  // Belle × Gerda
  'belle-gerda': {
    id: 'belle-gerda',
    character1: 'Belle',
    character2: 'Gerda',
    character1Id: 'belle',
    character2Id: 'gerda',
    title: 'The Thinker and the Devoted — Wisdom Meets Loyalty',
    subtitle: 'Belle (*Beauty and the Beast*) embodies intellect, curiosity, and the courage to look beyond appearances.',
    compatibilityScore: 80,
    relationshipType: 'A wise and loyal match — deeply supportive, though in need of sparks to keep growth alive.',
    summary: 'Gerda (*The Snow Queen*) represents loyalty, devotion, and the willingness to journey through hardship for love. Together, their relationship is gentle, steadfast, and deeply supportive. Belle admires Gerda\'s unwavering loyalty, while Gerda respects Belle\'s insight and ability to see truth. This bond creates a sanctuary of trust, though it may lack boldness if neither pushes for change.',
    strengths: [
      'Mutual Respect → Belle values Gerda\'s devotion; Gerda admires Belle\'s wisdom.',
      'Emotional Security → Both archetypes provide stability, kindness, and forgiveness.',
      'Shared Depth → Belle explores truth, Gerda lives it through action and perseverance.',
      'Healing Presence → They offer calm support in times of difficulty.'
    ],
    challenges: [
      'Risk of Stagnation → Both may settle into comfort without striving for growth.',
      'Avoidance of Conflict → They may prefer harmony over addressing problems directly.',
      'Imbalance of Energy → Gerda acts from devotion, Belle reflects inwardly — imbalance may occur if not aligned.'
    ],
    communication: 'Loyal and wise, offering strong companionship.',
    emotionalConnection: 'Tender and dependable, built on mutual respect and emotional security.',
    sharedValues: 'Truth, loyalty, kindness, forgiveness, and the willingness to see beyond surface appearances.',
    growthPotential: 'Learning to balance reflection with action and push each other toward growth.',
    advice: [
      'Push Each Other Forward → Belle should encourage Gerda to explore beyond devotion; Gerda should inspire Belle to act on her insights.',
      'Balance Reflection and Action → Blend Belle\'s analytical mind with Gerda\'s perseverance.',
      'Journal Prompt: Belle types: "Where do I analyze but fail to act on what I see?" Gerda types: "Where does my loyalty prevent me from pursuing my own path?"'
    ],
    storyParallel: 'Belle found truth and transformation by looking deeper into the Beast\'s heart, while Gerda braved icy lands to save Kai with her loyalty. One sought wisdom through insight, the other through devotion. Their pairing reminds us that truth and love together create strength beyond hardship.',
    keywords: ['wise', 'loyal', 'supportive', 'steadfast', 'healing', 'balanced']
  },

  // Belle × Mulan
  'belle-mulan': {
    id: 'belle-mulan',
    character1: 'Belle',
    character2: 'Mulan',
    character1Id: 'belle',
    character2Id: 'mulan',
    title: 'The Thinker and the Warrior — Wisdom Meets Bravery',
    subtitle: 'Belle (*Beauty and the Beast*) embodies intellect, reflection, and the courage to look beneath the surface.',
    compatibilityScore: 80,
    relationshipType: 'A courageous and thoughtful bond — thriving when wisdom and bravery are honored as equals.',
    summary: 'Mulan represents action, bravery, and the willingness to fight boldly for honor and protection. Together, their relationship is rich with potential. Belle admires Mulan\'s fearlessness, while Mulan respects Belle\'s insight and ability to see truth beyond appearances. Belle provides thoughtfulness and perspective, while Mulan provides decisiveness and courage. Yet, their differing approaches can clash — Belle may overthink while Mulan rushes into action.',
    strengths: [
      'Balance of Thought and Action → Belle brings reflection, Mulan brings movement.',
      'Mutual Admiration → Each respects the other\'s strengths.',
      'Shared Integrity → Both value truth, loyalty, and moral courage.',
      'Growth Potential → Belle learns boldness, Mulan learns patience and perspective.'
    ],
    challenges: [
      'Different Tempos → Belle takes time to reflect; Mulan acts quickly.',
      'Conflict of Styles → Belle prefers discussion; Mulan prefers action — possible misunderstandings.',
      'Risk of Imbalance → One may feel undervalued if thought or action is dismissed.'
    ],
    communication: 'Strong and motivating, though may need work to bridge different styles.',
    emotionalConnection: 'Passionate and growth-filled, built on mutual admiration and shared integrity.',
    sharedValues: 'Truth, loyalty, moral courage, and the willingness to see beyond surface appearances.',
    growthPotential: 'Learning to balance thought with action and honor each other\'s approaches.',
    advice: [
      'Honor Each Other\'s Approaches → Action and reflection are both forms of wisdom.',
      'Balance Strategy With Boldness → Belle should risk acting on insight; Mulan should slow down to consider consequences.',
      'Journal Prompt: Belle types: "Where do I hesitate by overthinking instead of acting?" Mulan types: "Where do I act quickly without listening to deeper truths?"'
    ],
    storyParallel: 'Belle transformed her world by looking past the Beast\'s appearance to see his true heart, while Mulan transformed her world by acting boldly in disguise to save her family. Their pairing reminds us that wisdom is not only in thought or action alone, but in the balance of both.',
    keywords: ['courageous', 'thoughtful', 'balanced', 'motivating', 'growth-filled', 'powerful']
  },

  // Belle × Alice
  'belle-alice': {
    id: 'belle-alice',
    character1: 'Belle',
    character2: 'Alice',
    character1Id: 'belle',
    character2Id: 'alice',
    title: 'The Thinker and the Explorer — Reflection Meets Imagination',
    subtitle: 'Belle (*Beauty and the Beast*) symbolizes intellect, reflection, and curiosity for knowledge.',
    compatibilityScore: 80,
    relationshipType: 'A magical and thoughtful match — thriving when intellect and imagination walk together.',
    summary: 'Alice (*Alice in Wonderland*) represents whimsical curiosity, exploration, and questioning of reality. Together, their relationship is imaginative and thought-provoking. Belle admires Alice\'s playful wonder, while Alice is intrigued by Belle\'s ability to seek deeper truths. Both are curious, but in different ways — Belle seeks meaning and order, Alice embraces nonsense and whimsy. This contrast makes them inspiring but also occasionally at odds.',
    strengths: [
      'Shared Curiosity → Both are seekers, fascinated by life\'s mysteries.',
      'Balance of Styles → Belle pursues structured learning; Alice thrives in playful exploration.',
      'Mutual Inspiration → Belle grounds Alice\'s wonder in meaning; Alice encourages Belle to loosen up.',
      'Creative Spark → Together they generate fresh ideas that mix reason and imagination.'
    ],
    challenges: [
      'Order vs. Chaos → Belle seeks clarity, Alice embraces confusion — tension arises if one dismisses the other\'s approach.',
      'Different Depths → Belle intellectualizes, Alice plays — risk of misunderstanding.',
      'Avoidance of Reality → Both may retreat into books or Wonderland-like distractions instead of confronting real challenges.'
    ],
    communication: 'Playful and insightful, though may need work to bridge different approaches to curiosity.',
    emotionalConnection: 'Creative and magical, built on shared curiosity and mutual inspiration.',
    sharedValues: 'Curiosity, exploration, and the desire to experience more than what is given.',
    growthPotential: 'Learning to balance order with whimsy and celebrate both forms of curiosity.',
    advice: [
      'Celebrate Both Forms of Curiosity → Structured knowledge (Belle) and playful wonder (Alice) are equally valuable.',
      'Balance Depth and Play → Belle should embrace whimsy; Alice should look for meaning in her adventures.',
      'Journal Prompt: Belle types: "Where do I seek too much order and miss life\'s playful side?" Alice types: "Where do I chase novelty without asking what it teaches me?"'
    ],
    storyParallel: 'Belle longed for "more than this provincial life" through books and intellect, while Alice pursued curiosity by tumbling into Wonderland. Both searched for something beyond their immediate world — one through knowledge, the other through imagination. Together, they highlight the lesson that truth requires both structure and wonder.',
    keywords: ['magical', 'thoughtful', 'creative', 'imaginative', 'balanced', 'inspiring']
  },

  // Belle × Dorothy
  'belle-dorothy': {
    id: 'belle-dorothy',
    character1: 'Belle',
    character2: 'Dorothy',
    character1Id: 'belle',
    character2Id: 'dorothy',
    title: 'The Thinker and the Seeker — Wisdom Meets the Longing for Home',
    subtitle: 'Belle (*Beauty and the Beast*) symbolizes intellect, reflection, and the pursuit of deeper truths.',
    compatibilityScore: 80,
    relationshipType: 'A kind and hopeful match — thrives when reflection and seeking are brought into action.',
    summary: 'Dorothy (*The Wizard of Oz*) represents the seeker archetype — longing for belonging, safety, and "home." Together, their bond is warm and grounding. Belle helps Dorothy reflect on what "home" really means, while Dorothy inspires Belle to value simple connections beyond books and ideas. Their relationship is deeply empathetic, though it risks stagnation if Belle retreats too far into thought and Dorothy into longing without acting.',
    strengths: [
      'Shared Yearning for More → Both dream of a world beyond what they\'ve known.',
      'Balance of Depth and Loyalty → Belle analyzes, Dorothy stays steadfast.',
      'Mutual Support → Belle reassures Dorothy with wisdom; Dorothy grounds Belle with loyalty.',
      'Emotional Warmth → Both archetypes bring kindness and compassion.'
    ],
    challenges: [
      'Longing vs. Thinking → Dorothy seeks belonging through action, Belle through reflection — friction may arise if they don\'t align.',
      'Risk of Passivity → Both may dwell on their dreams without creating change.',
      'Different Focuses → Belle looks inward, Dorothy looks outward — they must bridge this difference.'
    ],
    communication: 'Supportive and warm, like two dreamers encouraging one another.',
    emotionalConnection: 'Sweet and nurturing, built on shared yearning and emotional warmth.',
    sharedValues: 'Kindness, compassion, and the desire to find meaning beyond what is given.',
    growthPotential: 'Learning to unite thought with action and redefine what belonging truly means.',
    advice: [
      'Unite Thought and Action → Belle should act on insights; Dorothy should reflect on what "home" truly means.',
      'Redefine Belonging → Recognize that wisdom and home are both built within, not just found outside.',
      'Journal Prompt: Belle types: "Where do I think about change instead of stepping into it?" Dorothy types: "What am I seeking that I may already carry within?"'
    ],
    storyParallel: 'Belle longed for more than her provincial life, finding truth in love by seeing beyond appearances, while Dorothy journeyed through Oz only to discover "there\'s no place like home." Their pairing reminds us that discovery is both internal (wisdom) and external (belonging).',
    keywords: ['kind', 'hopeful', 'warm', 'grounding', 'supportive', 'nurturing']
  },

  // Belle × Wendy
  'belle-wendy': {
    id: 'belle-wendy',
    character1: 'Belle',
    character2: 'Wendy',
    character1Id: 'belle',
    character2Id: 'wendy',
    title: 'The Thinker and the Caretaker — Reflection Meets Responsibility',
    subtitle: 'Belle (*Beauty and the Beast*) embodies intellect, curiosity, and the ability to see beneath the surface.',
    compatibilityScore: 80,
    relationshipType: 'A gentle and supportive bond — thrives when responsibility and wisdom are shared as equals.',
    summary: 'Wendy (*Peter Pan*) represents youthful caretaking — innocence paired with the instinct to guide and nurture others. Together, their bond is thoughtful and nurturing. Belle admires Wendy\'s devotion to others, while Wendy respects Belle\'s wisdom and reflective nature. Their connection is gentle and supportive, but it risks becoming unbalanced if Wendy takes on too much responsibility and Belle retreats into thought.',
    strengths: [
      'Mutual Respect → Belle values Wendy\'s care; Wendy values Belle\'s insight.',
      'Shared Kindness → Both prioritize compassion and understanding.',
      'Balance of Roles → Belle provides depth and analysis; Wendy provides loyalty and guidance.',
      'Safe Emotional Space → They offer each other stability and encouragement.'
    ],
    challenges: [
      'Caretaking Dynamic → Wendy may overextend herself nurturing Belle, while Belle may lean too heavily on Wendy\'s sense of duty.',
      'Risk of Passivity → Both may avoid conflict or delay decisions.',
      'Different Expressions of Growth → Belle seeks knowledge, Wendy seeks belonging — they must bridge these paths.'
    ],
    communication: 'Gentle and loyal, though risks feeling unequal if Wendy over-caretakes.',
    emotionalConnection: 'Sweet and supportive, built on mutual respect and shared kindness.',
    sharedValues: 'Compassion, understanding, and the desire to create meaningful connections.',
    growthPotential: 'Learning to balance giving and receiving and encourage shared adventures.',
    advice: [
      'Balance Giving and Receiving → Wendy should let go of over-caretaking; Belle should share responsibility equally.',
      'Encourage Shared Adventures → Step beyond books and responsibilities into real experiences together.',
      'Journal Prompt: Belle types: "Where do I retreat into thought instead of acting with care?" Wendy types: "Where do I care for others at the cost of my own growth?"'
    ],
    storyParallel: 'Belle saw past appearances to discover love and truth, while Wendy became "mother" to the Lost Boys, balancing play with responsibility. Their stories remind us that wisdom and nurture are gifts, but growth comes when these roles are shared, not one-sided.',
    keywords: ['gentle', 'supportive', 'thoughtful', 'nurturing', 'balanced', 'loyal']
  },

  // Belle × Little Red Riding Hood
  'belle-littleredridinghood': {
    id: 'belle-littleredridinghood',
    character1: 'Belle',
    character2: 'Little Red Riding Hood',
    character1Id: 'belle',
    character2Id: 'littleredridinghood',
    title: 'The Thinker and the Survivor — Wisdom Meets Instinct',
    subtitle: 'Belle (*Beauty and the Beast*) embodies intellect, reflection, and the ability to see deeper truths.',
    compatibilityScore: 80,
    relationshipType: 'A protective and insightful match — thrives when intellect and instinct work together, not in opposition.',
    summary: 'Little Red Riding Hood symbolizes caution, instinct, and survival awareness in the face of danger. Together, their relationship is a blend of head and gut. Belle trusts reason and insight, while Red relies on instinct and lived experience. They complement each other well — Belle helps Red reflect before acting, while Red helps Belle trust her instincts instead of only analysis. But their differences can spark tension if Belle dismisses Red\'s intuition as paranoia, or if Red sees Belle as detached from reality.',
    strengths: [
      'Balanced Wisdom → Belle provides analysis; Red provides instinct — together they create fuller awareness.',
      'Shared Loyalty → Both value relationships, truth, and honesty.',
      'Growth Through Contrast → Belle teaches patience; Red teaches vigilance.',
      'Protective Energy → Red shields, Belle reassures — a powerful team in adversity.'
    ],
    challenges: [
      'Reason vs. Instinct → Belle intellectualizes, Red acts on gut — friction arises if one invalidates the other.',
      'Different Tempos → Belle thinks before acting, Red reacts quickly.',
      'Conflict of Worldviews → Belle believes in seeing truth beneath appearances, while Red expects deception.'
    ],
    communication: 'Complementary and protective, though may need work to bridge different approaches to knowing.',
    emotionalConnection: 'Passionate and growth-filled, built on balanced wisdom and shared loyalty.',
    sharedValues: 'Loyalty, truth, honesty, and the desire to protect what matters.',
    growthPotential: 'Learning to value both ways of knowing and meet in the middle.',
    advice: [
      'Value Both Ways of Knowing → Reason (Belle) and instinct (Red) must be seen as equals.',
      'Meet in the Middle → Belle should trust her gut more; Red should reflect before acting.',
      'Journal Prompt: Belle types: "Where do I ignore my instincts in favor of logic?" Red types: "Where do I act on fear instead of insight?"'
    ],
    storyParallel: 'Belle discovered truth by seeing past the Beast\'s exterior, while Red nearly lost herself by trusting the wolf\'s disguise. Both stories highlight discernment — Belle\'s through reason, Red\'s through caution. Together, they teach that wisdom is strongest when intellect and instinct unite.',
    keywords: ['protective', 'insightful', 'balanced', 'complementary', 'vigilant', 'growth-filled']
  },

  // Rapunzel × Gerda
  'rapunzel-gerda': {
    id: 'rapunzel-gerda',
    character1: 'Rapunzel',
    character2: 'Gerda',
    character1Id: 'rapunzel',
    character2Id: 'gerda',
    title: 'The Captive Dreamer and the Devoted Rescuer — Longing Meets Loyalty',
    subtitle: 'Rapunzel represents resilience, innocence, and the yearning for freedom after confinement.',
    compatibilityScore: 80,
    relationshipType: 'A loyal and hopeful match — thrives when devotion and freedom walk side by side.',
    summary: 'Gerda (*The Snow Queen*) symbolizes loyalty, perseverance, and unwavering devotion to those she loves. Together, their relationship is tender and deeply supportive. Rapunzel longs for liberation and new experiences, while Gerda offers steadiness and the courage to endure journeys for love. Rapunzel finds comfort in Gerda\'s loyalty, while Gerda is inspired by Rapunzel\'s hope and resilience. Their challenge is avoiding an imbalance where Rapunzel waits passively and Gerda shoulders all the responsibility.',
    strengths: [
      'Shared Purity of Heart → Both act with kindness, sincerity, and hope.',
      'Complementary Energy → Rapunzel dreams of freedom; Gerda acts with devotion.',
      'Mutual Support → Gerda steadies Rapunzel\'s hesitance, Rapunzel softens Gerda\'s seriousness.',
      'Healing Bond → Together, they create a sanctuary of trust and compassion.'
    ],
    challenges: [
      'Risk of Unequal Roles → Rapunzel may lean too much on Gerda\'s devotion.',
      'Passivity vs. Action → Rapunzel often waits; Gerda journeys. This mismatch can create frustration.',
      'Over-Reliance on Hope → Both may idealize situations instead of addressing reality.'
    ],
    communication: 'Nurturing and loyal, though may need work to balance giving and receiving.',
    emotionalConnection: 'Sweet and steadfast, built on shared purity of heart and healing bond.',
    sharedValues: 'Kindness, sincerity, hope, and the power of love to overcome hardship.',
    growthPotential: 'Learning to balance giving and receiving and encourage shared journeys.',
    advice: [
      'Balance Giving and Receiving → Rapunzel should step forward more actively; Gerda should allow space for her own needs.',
      'Encourage Shared Journeys → Their bond grows when both take responsibility for change.',
      'Journal Prompt: Rapunzel types: "Where do I wait for rescue instead of stepping into freedom?" Gerda types: "Where does my devotion become self-sacrifice instead of shared love?"'
    ],
    storyParallel: 'Rapunzel gazed longingly from her tower, waiting to be freed, while Gerda braved icy lands to rescue Kai from the Snow Queen\'s spell. One waited, the other acted — yet both were motivated by love and hope. Their pairing highlights the lesson that freedom and devotion flourish when both hearts participate equally.',
    keywords: ['loyal', 'hopeful', 'tender', 'supportive', 'healing', 'balanced']
  },

  // Rapunzel × Mulan
  'rapunzel-mulan': {
    id: 'rapunzel-mulan',
    character1: 'Rapunzel',
    character2: 'Mulan',
    character1Id: 'rapunzel',
    character2Id: 'mulan',
    title: 'The Captive Dreamer and the Warrior — Longing Meets Action',
    subtitle: 'Rapunzel embodies resilience, innocence, and the longing for freedom from confinement.',
    compatibilityScore: 80,
    relationshipType: 'A strong and inspiring match — thrives when courage and hope are shared equally.',
    summary: 'Mulan represents courage, responsibility, and the willingness to act boldly in defense of what matters. Together, their relationship is dynamic and growth-filled. Rapunzel admires Mulan\'s bravery and decisiveness, while Mulan is softened by Rapunzel\'s hope and gentleness. Their bond thrives when Mulan encourages Rapunzel to claim her independence, and Rapunzel reminds Mulan of the joy and beauty worth fighting for. The challenge comes if Rapunzel stays too passive or if Mulan dominates the direction of their shared life.',
    strengths: [
      'Balance of Roles → Mulan acts, Rapunzel dreams — a complementary mix.',
      'Mutual Growth → Mulan learns gentleness, Rapunzel learns courage.',
      'Shared Integrity → Both value loyalty, sincerity, and truth of heart.',
      'Protective Bond → Mulan provides safety, Rapunzel provides hope and warmth.'
    ],
    challenges: [
      'Passivity vs. Assertiveness → Rapunzel may wait for rescue, while Mulan takes charge.',
      'Imbalance of Power → Mulan risks becoming the sole decision-maker.',
      'Conflict Styles → Rapunzel avoids confrontation, Mulan confronts it directly.'
    ],
    communication: 'Inspiring and supportive, though may need work to balance different approaches to conflict.',
    emotionalConnection: 'Powerful and transformative, built on balance of roles and mutual growth.',
    sharedValues: 'Loyalty, sincerity, truth of heart, and the willingness to fight for what matters.',
    growthPotential: 'Learning to empower each other and blend action with hope.',
    advice: [
      'Empower Each Other → Mulan should inspire Rapunzel to act for herself, not rescue her.',
      'Blend Action with Hope → Rapunzel can provide vision; Mulan can create the path toward it.',
      'Journal Prompt: Rapunzel types: "Where do I wait instead of stepping into my own freedom?" Mulan types: "Where does my bravery take over instead of encouraging others\' strength?"'
    ],
    storyParallel: 'Rapunzel spent her youth trapped in a tower, waiting for liberation, while Mulan disguised herself as a warrior and stepped boldly into the battlefield. Their pairing highlights opposite archetypal responses: waiting and acting. Together, they embody the lesson that liberation requires both courage and hope.',
    keywords: ['strong', 'inspiring', 'dynamic', 'growth-filled', 'protective', 'balanced']
  },

  // Rapunzel × Alice
  'rapunzel-alice': {
    id: 'rapunzel-alice',
    character1: 'Rapunzel',
    character2: 'Alice',
    character1Id: 'rapunzel',
    character2Id: 'alice',
    title: 'The Captive Dreamer and the Explorer — Yearning Meets Curiosity',
    subtitle: 'Rapunzel embodies resilience, innocence, and the longing for freedom.',
    compatibilityScore: 80,
    relationshipType: 'A magical and adventurous bond — thrives when longing and curiosity move together into action.',
    summary: 'Alice (*Alice in Wonderland*) symbolizes playful curiosity, questioning, and the urge to wander into the unknown. Together, their bond is whimsical and inspiring. Rapunzel admires Alice\'s courage to chase her curiosity, while Alice is enchanted by Rapunzel\'s hopeful dreams. Both share a childlike wonder, though expressed differently — Rapunzel through longing, Alice through action. The risk is instability: Rapunzel may hesitate too long, while Alice may dart forward without considering consequences.',
    strengths: [
      'Shared Innocence → Both see the world with fresh, unjaded eyes.',
      'Balance of Styles → Rapunzel\'s yearning grounds Alice\'s wanderings; Alice\'s curiosity awakens Rapunzel\'s courage.',
      'Mutual Inspiration → Alice pushes Rapunzel toward adventure; Rapunzel helps Alice slow down and reflect.',
      'Creative Spark → Their connection is imaginative, magical, and full of possibilities.'
    ],
    challenges: [
      'Different Paces → Alice acts quickly, Rapunzel hesitates — friction may arise.',
      'Naivety vs. Distraction → Rapunzel trusts too easily, Alice gets lost in tangents.',
      'Risk of Escapism → Both may prefer fantasy over facing reality.'
    ],
    communication: 'Playful and magical, full of shared wonder.',
    emotionalConnection: 'Tender and adventurous, built on shared innocence and mutual inspiration.',
    sharedValues: 'Wonder, innocence, and the desire to experience more than what is given.',
    growthPotential: 'Learning to balance fantasy with action and encourage shared courage.',
    advice: [
      'Balance Fantasy and Action → Rapunzel must act on her dreams, Alice must give her explorations direction.',
      'Encourage Shared Courage → Support each other in stepping into the unknown without losing grounding.',
      'Journal Prompt: Rapunzel types: "Where do I dream instead of daring?" Alice types: "Where do I wander without asking what I seek?"'
    ],
    storyParallel: 'Rapunzel gazed out of her tower, longing for freedom, while Alice chased the White Rabbit into Wonderland, eager to explore. One waited, the other wandered — yet both sought something beyond their confinement. Their pairing teaches that yearning and curiosity together can awaken real transformation.',
    keywords: ['magical', 'adventurous', 'whimsical', 'inspiring', 'creative', 'balanced']
  },

  // Rapunzel × Dorothy
  'rapunzel-dorothy': {
    id: 'rapunzel-dorothy',
    character1: 'Rapunzel',
    character2: 'Dorothy',
    character1Id: 'rapunzel',
    character2Id: 'dorothy',
    title: 'The Captive Dreamer and the Seeker — Longing for Freedom Meets Longing for Home',
    subtitle: 'Rapunzel embodies innocence, resilience, and the yearning to escape confinement.',
    compatibilityScore: 80,
    relationshipType: 'A hopeful and empathetic bond — thrives when freedom and belonging are pursued through action, not just longing.',
    summary: 'Dorothy (*The Wizard of Oz*) represents the seeker archetype — longing for belonging, grounding, and "home." Together, their relationship is empathetic and heartfelt. Rapunzel dreams of the world beyond her tower, while Dorothy searches for the place she truly belongs. They inspire one another: Dorothy reassures Rapunzel that freedom can be found, while Rapunzel reminds Dorothy that longing itself is part of the journey. The challenge lies in their shared tendency to wait for or idealize what they seek instead of claiming it actively.',
    strengths: [
      'Shared Innocence → Both carry a pure-hearted, hopeful spirit.',
      'Mutual Empathy → They deeply understand the ache of longing for "something more."',
      'Balance of Perspectives → Rapunzel looks outward for freedom; Dorothy looks inward for belonging.',
      'Emotional Support → They create a nurturing, comforting bond.'
    ],
    challenges: [
      'Waiting vs. Wandering → Rapunzel may wait too long, while Dorothy may search without recognizing what she already has.',
      'Idealization → Both risk romanticizing freedom or home without grounding it in action.',
      'Passivity → Neither archetype is naturally assertive, so real change may be delayed.'
    ],
    communication: 'Gentle and supportive, like two companions sharing dreams.',
    emotionalConnection: 'Tender and meaningful, built on shared innocence and mutual empathy.',
    sharedValues: 'Hope, innocence, and the desire to find what truly matters.',
    growthPotential: 'Learning to turn longing into action and balance vision with reality.',
    advice: [
      'Turn Longing Into Action → Rapunzel should take bold steps toward freedom; Dorothy should recognize that "home" begins within.',
      'Balance Vision With Reality → Avoid waiting for rescue or magic — create transformation together.',
      'Journal Prompt: Rapunzel types: "Where do I stay confined by dreaming instead of acting?" Dorothy types: "What am I seeking outside that I already carry inside?"'
    ],
    storyParallel: 'Rapunzel gazed longingly out of her tower until freed, while Dorothy braved strange lands to find her way home. One longed for the world beyond, the other for the world she left behind. Their pairing mirrors the lesson that both freedom and homecoming require claiming agency, not just longing.',
    keywords: ['hopeful', 'empathetic', 'tender', 'supportive', 'visionary', 'balanced']
  },

  // Rapunzel × Wendy
  'rapunzel-wendy': {
    id: 'rapunzel-wendy',
    character1: 'Rapunzel',
    character2: 'Wendy',
    character1Id: 'rapunzel',
    character2Id: 'wendy',
    title: 'The Captive Dreamer and the Caretaker — Longing Meets Nurture',
    subtitle: 'Rapunzel represents innocence, resilience, and the yearning for freedom beyond confinement.',
    compatibilityScore: 80,
    relationshipType: 'A tender and nurturing match — thrives when both step beyond the caretaker–dependent dynamic into equal growth.',
    summary: 'Wendy (*Peter Pan*) symbolizes youthful caretaking — innocence combined with responsibility and the instinct to guide and nurture others. Together, their bond is tender and familial. Wendy naturally takes on a supportive, guiding role, while Rapunzel responds with warmth and gratitude. Wendy admires Rapunzel\'s hopeful spirit, while Rapunzel feels safe in Wendy\'s steady care. The challenge lies in balance: Wendy may become over-responsible, and Rapunzel may remain too dependent instead of growing into her own freedom.',
    strengths: [
      'Nurturing Atmosphere → Wendy offers care and stability; Rapunzel offers joy and hope.',
      'Shared Innocence → Both maintain youthful purity, which makes their bond gentle and trusting.',
      'Balance of Roles → Rapunzel dreams, Wendy organizes — together they create harmony.',
      'Emotional Support → Each helps the other feel safe and valued.'
    ],
    challenges: [
      'Caretaker–Dependent Pattern → Wendy may fall into mothering Rapunzel instead of seeing her as an equal.',
      'Passivity → Rapunzel may lean too much on Wendy\'s structure, delaying her own growth.',
      'Risk of Stagnation → Both may settle into safety without pursuing deeper transformation.'
    ],
    communication: 'Gentle and supportive, though risks unevenness in roles.',
    emotionalConnection: 'Sweet and caring, built on nurturing atmosphere and shared innocence.',
    sharedValues: 'Innocence, hope, and the desire to create safe, meaningful connections.',
    growthPotential: 'Learning to encourage independence and balance roles beyond caretaker–dependent patterns.',
    advice: [
      'Encourage Independence → Wendy should empower Rapunzel to step into her freedom.',
      'Balance Roles → Rapunzel must take responsibility for her own journey, not just rely on Wendy\'s care.',
      'Journal Prompt: Rapunzel types: "Where do I wait for others to guide me instead of leading myself?" Wendy types: "Where do I care for others at the expense of my own freedom?"'
    ],
    storyParallel: 'Rapunzel spent her youth confined in a tower, longing to see the world, while Wendy became the "mother" of the Lost Boys, giving up some of her own freedom for responsibility. Both stories reflect dependence on others to define their paths. Together, they remind us that nurturing must empower, not limit.',
    keywords: ['tender', 'nurturing', 'gentle', 'supportive', 'balanced', 'familial']
  },

  // Rapunzel × Little Red Riding Hood
  'rapunzel-littleredridinghood': {
    id: 'rapunzel-littleredridinghood',
    character1: 'Rapunzel',
    character2: 'Little Red Riding Hood',
    character1Id: 'rapunzel',
    character2Id: 'littleredridinghood',
    title: 'The Captive Dreamer and the Survivor — Innocent Longing Meets Vigilant Caution',
    subtitle: 'Rapunzel symbolizes resilience, innocence, and the yearning for freedom beyond her tower.',
    compatibilityScore: 80,
    relationshipType: 'A hopeful yet protective bond — thrives when trust and caution are seen as complementary strengths.',
    summary: 'Little Red Riding Hood represents caution, instinct, and the survivor\'s sharp awareness of danger. Together, their relationship blends hope with vigilance. Rapunzel admires Red\'s sharp instincts, while Red is softened by Rapunzel\'s hopefulness. Rapunzel brings optimism to Red\'s guarded heart, and Red protects Rapunzel from naïve trust. Their challenge lies in avoiding imbalance: Rapunzel may seem too trusting, while Red may seem too suspicious.',
    strengths: [
      'Balance of Perspectives → Rapunzel hopes, Red cautions — together they prepare for challenges wisely.',
      'Protective Bond → Red shields Rapunzel; Rapunzel restores Red\'s sense of wonder.',
      'Shared Innocence → Both carry youthful energy, though expressed differently.',
      'Growth Through Contrast → Each archetype helps the other strengthen what they lack.'
    ],
    challenges: [
      'Naivety vs. Suspicion → Rapunzel may ignore danger; Red may assume danger everywhere.',
      'Different Coping Styles → Rapunzel dreams of freedom, Red survives through caution.',
      'Unequal Roles → Red may become overprotective, Rapunzel overly dependent.'
    ],
    communication: 'Protective and uplifting, though may need work to balance different perspectives.',
    emotionalConnection: 'Passionate and growth-filled, built on balance of perspectives and protective bond.',
    sharedValues: 'Innocence, the desire to protect what matters, and the willingness to face challenges.',
    growthPotential: 'Learning to honor both truths and share responsibility equally.',
    advice: [
      'Honor Both Truths → Rapunzel should adopt Red\'s discernment, while Red should soften into Rapunzel\'s trust.',
      'Share Responsibility → Avoid savior–dependent roles by stepping equally into challenges.',
      'Journal Prompt: Rapunzel types: "Where do I ignore risks because I trust too easily?" Red types: "Where do I assume danger and close myself off from joy?"'
    ],
    storyParallel: 'Rapunzel dreamed of freedom while trapped in her tower, vulnerable to deception, while Little Red Riding Hood was nearly deceived by the wolf\'s disguise. Both stories reveal the dangers of misplaced trust. Their pairing highlights the lesson that freedom and survival flourish when innocence and caution blend together.',
    keywords: ['hopeful', 'protective', 'balanced', 'vigilant', 'growth-filled', 'complementary']
  },

  // Gerda × Mulan
  'gerda-mulan': {
    id: 'gerda-mulan',
    character1: 'Gerda',
    character2: 'Mulan',
    character1Id: 'gerda',
    character2Id: 'mulan',
    title: 'The Devoted and the Warrior — Loyalty Meets Bravery',
    subtitle: 'Gerda (*The Snow Queen*) embodies loyalty, devotion, and perseverance in the name of love.',
    compatibilityScore: 80,
    relationshipType: 'A devoted and courageous match — thrives when loyalty and bravery are valued equally.',
    summary: 'Mulan represents courage, action, and the willingness to sacrifice for honor and protection. Together, their relationship is powerful and steady. Gerda admires Mulan\'s boldness, while Mulan respects Gerda\'s quiet, unwavering strength. Both act from integrity and deep care for others, though their approaches differ: Gerda endures with persistence, while Mulan charges forward with decisive bravery. Their bond thrives when they recognize these differences as complementary.',
    strengths: [
      'Shared Integrity → Both are guided by love, loyalty, and responsibility.',
      'Complementary Strengths → Gerda provides devotion and patience; Mulan provides action and courage.',
      'Mutual Admiration → Each archetype honors the other\'s sacrifice.',
      'Protective Bond → Both instinctively shield those they love, creating trust and safety.'
    ],
    challenges: [
      'Endurance vs. Action → Gerda waits and persists, while Mulan acts quickly — friction arises if timing misaligns.',
      'Different Conflict Styles → Gerda approaches with devotion, Mulan with confrontation.',
      'Risk of Imbalance → Gerda may take a supporting role while Mulan dominates decisions.'
    ],
    communication: 'Trustworthy and empowering, though may need work to balance different conflict styles.',
    emotionalConnection: 'Deeply loyal and passionate, built on shared integrity and mutual admiration.',
    sharedValues: 'Love, loyalty, responsibility, and the willingness to sacrifice for what matters.',
    growthPotential: 'Learning to honor both strengths and balance patience with action.',
    advice: [
      'Honor Both Strengths → Endurance and bravery are equally forms of courage.',
      'Balance Patience and Action → Gerda can teach Mulan to slow down, while Mulan encourages Gerda to seize the moment.',
      'Journal Prompt: Gerda types: "Where does my loyalty keep me enduring instead of acting boldly?" Mulan types: "Where does my bravery overlook the quiet strength of persistence?"'
    ],
    storyParallel: 'Gerda braved icy lands to save Kai through steadfast love, while Mulan disguised herself as a soldier to save her father and honor her family. One journeyed with patience, the other with boldness, but both triumphed through devotion. Their pairing reflects the lesson that love is strongest when loyalty and courage walk together.',
    keywords: ['devoted', 'courageous', 'powerful', 'steady', 'protective', 'balanced']
  },

  // Gerda × Alice
  'gerda-alice': {
    id: 'gerda-alice',
    character1: 'Gerda',
    character2: 'Alice',
    character1Id: 'gerda',
    character2Id: 'alice',
    title: 'The Devoted and the Explorer — Loyalty Meets Curiosity',
    subtitle: 'Gerda (*The Snow Queen*) symbolizes loyalty, devotion, and perseverance in love.',
    compatibilityScore: 80,
    relationshipType: 'A tender and balancing match — devotion and curiosity enrich each other when given equal value.',
    summary: 'Alice (*Alice in Wonderland*) represents curiosity, whimsy, and the urge to explore beyond boundaries. Together, their bond is unusual yet enriching. Gerda\'s steady devotion grounds Alice\'s whimsical wanderings, while Alice inspires Gerda to loosen her focus and see the world with more playfulness. Gerda may sometimes find Alice unfocused or impractical, while Alice may see Gerda as overly serious. Yet, their differences can balance beautifully if honored with respect.',
    strengths: [
      'Balance of Stability and Wonder → Gerda offers steadfastness, Alice offers imagination.',
      'Mutual Growth → Gerda learns to play; Alice learns the value of loyalty and constancy.',
      'Shared Innocence → Both carry purity of heart, though expressed differently.',
      'Protective Energy → Gerda safeguards Alice\'s wanderings, Alice keeps Gerda\'s heart light.'
    ],
    challenges: [
      'Seriousness vs. Whimsy → Gerda focuses on devotion; Alice chases novelty — leading to disconnect.',
      'Different Priorities → Gerda stays fixed on goals, Alice delights in detours.',
      'Risk of Imbalance → Gerda may feel she does all the grounding, Alice all the wandering.'
    ],
    communication: 'Loyal yet playful, though may need work to bridge seriousness and whimsy.',
    emotionalConnection: 'Gentle and complementary, built on balance of stability and wonder.',
    sharedValues: 'Innocence, purity of heart, and the desire to experience more than what is given.',
    growthPotential: 'Learning to blend loyalty with curiosity and create shared adventures.',
    advice: [
      'Blend Loyalty and Curiosity → Gerda should allow more play, Alice should honor commitment.',
      'Create Shared Adventures → Use Gerda\'s steady love to guide Alice\'s explorations.',
      'Journal Prompt: Gerda types: "Where does my devotion keep me from embracing playfulness?" Alice types: "Where do I wander without appreciating constancy?"'
    ],
    storyParallel: 'Gerda journeyed across icy lands, steadfast in her devotion to save Kai, while Alice tumbled into Wonderland, following curiosity wherever it led. One was grounded in loyalty, the other in exploration. Together, they show that love and wonder thrive when constancy and curiosity walk side by side.',
    keywords: ['tender', 'balancing', 'loyal', 'playful', 'complementary', 'enriching']
  },

  // Gerda × Dorothy
  'gerda-dorothy': {
    id: 'gerda-dorothy',
    character1: 'Gerda',
    character2: 'Dorothy',
    character1Id: 'gerda',
    character2Id: 'dorothy',
    title: 'The Devoted and the Seeker — Loyalty Meets the Longing for Home',
    subtitle: 'Gerda (*The Snow Queen*) represents loyalty, devotion, and steadfast perseverance.',
    compatibilityScore: 80,
    relationshipType: 'A faithful and nurturing bond — thrives when loyalty and seeking are balanced into shared belonging.',
    summary: 'Dorothy (*The Wizard of Oz*) symbolizes the seeker archetype — longing for belonging, grounding, and the meaning of "home." Together, their relationship is nurturing and deeply sincere. Gerda\'s loyalty reassures Dorothy that she is not alone, while Dorothy\'s seeking reminds Gerda that love can also mean moving forward rather than staying fixed. Their connection is heartfelt and steady, though it risks stagnation if Gerda becomes over-devoted or Dorothy remains caught in longing.',
    strengths: [
      'Shared Purity of Heart → Both act with kindness, loyalty, and sincerity.',
      'Mutual Support → Gerda offers steadfast devotion, Dorothy offers hope and grounding.',
      'Emotional Warmth → Their bond is gentle, safe, and deeply caring.',
      'Balance of Roles → Gerda provides constancy, Dorothy provides direction.'
    ],
    challenges: [
      'Stagnation vs. Wandering → Gerda may cling too tightly, while Dorothy may keep searching instead of settling.',
      'Risk of Imbalance → Gerda may give endlessly, while Dorothy may take comfort without giving equally.',
      'Conflict Avoidance → Both prefer harmony, so problems may remain unspoken.'
    ],
    communication: 'Comforting and supportive, with trust at its core.',
    emotionalConnection: 'Tender and steady, built on shared purity of heart and emotional warmth.',
    sharedValues: 'Kindness, loyalty, sincerity, and the desire to create meaningful connections.',
    growthPotential: 'Learning to balance loyalty with growth and avoid over-reliance.',
    advice: [
      'Balance Loyalty and Growth → Gerda should allow freedom in devotion; Dorothy should recognize home in shared love, not just in longing.',
      'Avoid Over-Reliance → Their bond is strongest when each carries equal weight in nurturing.',
      'Journal Prompt: Gerda types: "Where does my loyalty keep me fixed instead of growing?" Dorothy types: "Where do I search for belonging that devotion already offers me?"'
    ],
    storyParallel: 'Gerda crossed frozen lands to save Kai with unshakable loyalty, while Dorothy traveled through Oz to return home, discovering that her power lay within all along. One endured through devotion, the other through seeking. Together, they embody the lesson that home is built when loyalty and longing unite.',
    keywords: ['faithful', 'nurturing', 'tender', 'steady', 'supportive', 'balanced']
  },

  // Gerda × Wendy
  'gerda-wendy': {
    id: 'gerda-wendy',
    character1: 'Gerda',
    character2: 'Wendy',
    character1Id: 'gerda',
    character2Id: 'wendy',
    title: 'The Devoted and the Caretaker — Loyalty Meets Responsibility',
    subtitle: 'Gerda (*The Snow Queen*) embodies loyalty, devotion, and the willingness to endure hardship for love.',
    compatibilityScore: 80,
    relationshipType: 'A loyal and nurturing match — thrives when devotion and care are balanced with self-growth.',
    summary: 'Wendy (*Peter Pan*) symbolizes youthful caretaking — balancing innocence with responsibility and the instinct to guide and nurture. Together, their relationship is warm, steady, and deeply caring. Both are devoted to the well-being of others, and they admire this quality in each other. Gerda respects Wendy\'s instinct to protect and guide, while Wendy admires Gerda\'s perseverance and faithfulness. Their risk lies in becoming too self-sacrificing, prioritizing others over themselves or each other.',
    strengths: [
      'Mutual Devotion → Both value loyalty, responsibility, and care.',
      'Nurturing Energy → They create a safe, protective space for one another.',
      'Shared Innocence → Their purity of heart makes the bond tender and sincere.',
      'Complementary Roles → Gerda acts with perseverance, Wendy with organization and guidance.'
    ],
    challenges: [
      'Over-Selflessness → Both may give so much that they forget to claim their own needs.',
      'Caretaker Imbalance → They risk competing in who "cares more," rather than allowing reciprocity.',
      'Lack of Adventure → Their shared preference for safety may prevent them from pursuing bold growth.'
    ],
    communication: 'Gentle, nurturing, and supportive, but may feel overly serious at times.',
    emotionalConnection: 'Tender and dependable, built on mutual devotion and nurturing energy.',
    sharedValues: 'Loyalty, responsibility, care, and the desire to protect and nurture others.',
    growthPotential: 'Learning to claim self-care and avoid over-sacrifice.',
    advice: [
      'Claim Self-Care Too → Caring for others is noble, but they must also nurture themselves.',
      'Avoid Over-Sacrifice → Loyalty and caretaking are strongest when balanced equally.',
      'Journal Prompt: Gerda types: "Where does my devotion keep me from pursuing my own growth?" Wendy types: "Where do I mother others instead of letting relationships remain equal?"'
    ],
    storyParallel: 'Gerda\'s journey to rescue Kai was an act of pure devotion, while Wendy cared for the Lost Boys in Neverland, playing the role of mother. Both sacrificed for others, sometimes at their own expense. Their pairing reflects the lesson that care and loyalty should empower, not diminish, one\'s own growth.',
    keywords: ['loyal', 'nurturing', 'tender', 'dependable', 'protective', 'balanced']
  },

  // Gerda × Little Red Riding Hood
  'gerda-littleredridinghood': {
    id: 'gerda-littleredridinghood',
    character1: 'Gerda',
    character2: 'Little Red Riding Hood',
    character1Id: 'gerda',
    character2Id: 'littleredridinghood',
    title: 'The Devoted and the Survivor — Loyalty Meets Instinct',
    subtitle: 'Gerda (*The Snow Queen*) symbolizes loyalty, faithfulness, and the willingness to persevere through hardship for love.',
    compatibilityScore: 80,
    relationshipType: 'A devoted and protective bond — thrives when loyalty and instinct are equally respected.',
    summary: 'Little Red Riding Hood represents caution, instinct, and survivor\'s awareness of danger. Together, their relationship blends steady devotion with sharp vigilance. Gerda admires Red\'s instinct to sense danger, while Red respects Gerda\'s unshakable loyalty. Gerda brings patience and endurance, while Red brings discernment and quick reactions. The challenge lies in Gerda\'s tendency to trust too much and Red\'s tendency to trust too little.',
    strengths: [
      'Balance of Approaches → Gerda trusts and endures; Red questions and protects.',
      'Shared Courage → Both face challenges with determination, though in different ways.',
      'Mutual Protection → Gerda\'s loyalty provides safety; Red\'s instincts guard against deception.',
      'Growth Through Contrast → Red helps Gerda be cautious; Gerda helps Red open her heart.'
    ],
    challenges: [
      'Trust vs. Suspicion → Gerda may overlook danger out of loyalty; Red may see danger everywhere.',
      'Conflict Styles → Gerda relies on devotion and persistence, Red on swift reaction — clashes may occur.',
      'Risk of Imbalance → Gerda may over-give, while Red may hold back in self-protection.'
    ],
    communication: 'Supportive and protective, though may need work to bridge different conflict styles.',
    emotionalConnection: 'Deep and tender, built on balance of approaches and mutual protection.',
    sharedValues: 'Courage, determination, and the willingness to face challenges for what matters.',
    growthPotential: 'Learning to blend trust with caution and avoid extremes.',
    advice: [
      'Blend Trust and Caution → Gerda should adopt some of Red\'s discernment; Red should soften into Gerda\'s faith.',
      'Avoid Extremes → Balance between naïve trust and constant suspicion is key.',
      'Journal Prompt: Gerda types: "Where does my loyalty blind me to risks?" Red types: "Where does my caution prevent me from trusting love?"'
    ],
    storyParallel: 'Gerda crossed icy lands to rescue Kai, trusting in the power of devotion, while Little Red Riding Hood survived danger by learning to distrust the wolf\'s disguise. One triumphed through love\'s faith, the other through caution. Together, they reflect the lesson that survival and devotion are strongest when instinct and faith work hand in hand.',
    keywords: ['devoted', 'protective', 'balanced', 'vigilant', 'tender', 'complementary']
  },

  // Mulan × Alice
  'mulan-alice': {
    id: 'mulan-alice',
    character1: 'Mulan',
    character2: 'Alice',
    character1Id: 'mulan',
    character2Id: 'alice',
    title: 'The Warrior and the Explorer — Bravery Meets Curiosity',
    subtitle: 'Mulan represents courage, responsibility, and decisive action.',
    compatibilityScore: 80,
    relationshipType: 'A courageous and curious match — thrives when action and imagination meet as equals.',
    summary: 'Alice (*Alice in Wonderland*) embodies whimsical curiosity, imagination, and the urge to question reality. Together, their relationship is vibrant and full of contrast. Mulan admires Alice\'s openness to possibility, while Alice is fascinated by Mulan\'s bravery and discipline. Mulan provides grounding and protection, while Alice brings lightness and wonder. Their challenge lies in balance: Alice may see Mulan as too rigid, while Mulan may view Alice as impractical or naive.',
    strengths: [
      'Balance of Energy → Mulan acts boldly, Alice questions playfully — complementary approaches.',
      'Mutual Growth → Alice encourages Mulan to loosen up; Mulan inspires Alice to take things seriously when needed.',
      'Shared Courage → Both are brave in their own ways — Mulan in action, Alice in imagination.',
      'Creative Tension → Their differences spark new ideas and perspectives.'
    ],
    challenges: [
      'Practicality vs. Whimsy → Mulan focuses on reality; Alice thrives in nonsense.',
      'Conflict of Priorities → Mulan is mission-driven; Alice is exploration-driven.',
      'Risk of Frustration → Mulan may feel Alice is distracted; Alice may feel Mulan is too stern.'
    ],
    communication: 'Stimulating and growth-filled, though may need work to bridge different priorities.',
    emotionalConnection: 'Fascinating and lively, built on balance of energy and mutual growth.',
    sharedValues: 'Courage, the willingness to defy expectations, and the desire to explore beyond boundaries.',
    growthPotential: 'Learning to honor both forms of courage and create shared adventures.',
    advice: [
      'Honor Both Forms of Courage → Imagination (Alice) and discipline (Mulan) are equally valuable.',
      'Create Shared Adventures → Blend Mulan\'s direction with Alice\'s curiosity for enriching growth.',
      'Journal Prompt: Mulan types: "Where do I dismiss imagination as weakness instead of strength?" Alice types: "Where do I wander without purpose when bravery is needed?"'
    ],
    storyParallel: 'Mulan disguised herself to fight for her family, defying expectations with bold action. Alice followed curiosity into Wonderland, questioning and exploring a world that made no sense. One transformed reality with bravery, the other with imagination. Together, they reveal the lesson that courage comes in many forms.',
    keywords: ['courageous', 'curious', 'vibrant', 'contrasting', 'growth-filled', 'balanced']
  },

  // Mulan × Dorothy
  'mulan-dorothy': {
    id: 'mulan-dorothy',
    character1: 'Mulan',
    character2: 'Dorothy',
    character1Id: 'mulan',
    character2Id: 'dorothy',
    title: 'The Warrior and the Seeker — Duty Meets Belonging',
    subtitle: 'Mulan represents bravery, responsibility, and decisive action.',
    compatibilityScore: 80,
    relationshipType: 'A courageous yet tender bond — thrives when duty and belonging are balanced into shared purpose.',
    summary: 'Dorothy (*The Wizard of Oz*) symbolizes longing, innocence, and the archetypal search for "home." Together, their relationship is heartfelt and balancing. Mulan admires Dorothy\'s sincerity and grounding, while Dorothy respects Mulan\'s courage and sense of duty. Mulan provides direction and strength, while Dorothy brings warmth and belonging. Their main challenge lies in different priorities: Mulan often acts for family and duty, while Dorothy acts for personal belonging and safety.',
    strengths: [
      'Shared Integrity → Both act from loyalty, kindness, and moral grounding.',
      'Complementary Energy → Mulan pushes forward with boldness; Dorothy steadies with gentleness.',
      'Mutual Growth → Dorothy softens Mulan\'s intensity, Mulan encourages Dorothy to act boldly.',
      'Safe Yet Brave Bond → Mulan protects; Dorothy nurtures.'
    ],
    challenges: [
      'Duty vs. Desire for Home → Mulan may sacrifice herself for duty, while Dorothy may cling to belonging.',
      'Different Tempos → Mulan acts decisively; Dorothy hesitates until she feels safe.',
      'Risk of Dependence → Dorothy may lean too much on Mulan\'s courage, Mulan may shoulder too much responsibility.'
    ],
    communication: 'Strong and loyal, though may need work to balance different priorities.',
    emotionalConnection: 'Tender yet powerful, built on shared integrity and complementary energy.',
    sharedValues: 'Loyalty, kindness, moral grounding, and the willingness to fight for what matters.',
    growthPotential: 'Learning to balance duty with belonging and share responsibility equally.',
    advice: [
      'Balance Duty and Belonging → Mulan should honor her own needs as Dorothy honors home; Dorothy should embrace bravery.',
      'Share Responsibility → Avoid falling into protector–protected roles.',
      'Journal Prompt: Mulan types: "Where does my bravery keep me from acknowledging my own need for safety?" Dorothy types: "Where does my longing for home stop me from stepping boldly into the unknown?"'
    ],
    storyParallel: 'Mulan disguised herself as a warrior to save her father, sacrificing for duty and honor. Dorothy journeyed through Oz longing to return home, finding that safety was within her all along. One prioritized duty, the other belonging. Together, they embody the lesson that true strength arises when loyalty and home walk together.',
    keywords: ['courageous', 'tender', 'heartfelt', 'balancing', 'protective', 'nurturing']
  },

  // Mulan × Wendy
  'mulan-wendy': {
    id: 'mulan-wendy',
    character1: 'Mulan',
    character2: 'Wendy',
    character1Id: 'mulan',
    character2Id: 'wendy',
    title: 'The Warrior and the Caretaker — Bravery Meets Nurture',
    subtitle: 'Mulan symbolizes courage, action, and responsibility.',
    compatibilityScore: 80,
    relationshipType: 'A devoted and supportive bond — thrives when protection and care are shared in balance.',
    summary: 'Wendy (*Peter Pan*) embodies caretaking, innocence, and the instinct to guide and protect others. Together, their bond is protective and heartfelt. Mulan admires Wendy\'s devotion to others, while Wendy respects Mulan\'s strength and determination. Mulan provides direction and boldness, while Wendy creates stability and comfort. The challenge lies in avoiding imbalance: Mulan may take all responsibility for external struggles, while Wendy overextends in caring for emotional ones.',
    strengths: [
      'Protective Energy → Both shield and support those they love, creating a deep sense of safety.',
      'Balance of Roles → Mulan takes action outwardly; Wendy provides inner stability.',
      'Shared Loyalty → Both are devoted to family and loved ones.',
      'Growth Potential → Mulan can learn gentleness from Wendy; Wendy can learn courage from Mulan.'
    ],
    challenges: [
      'Over-Responsibility → Both risk taking on too much — Mulan in external duty, Wendy in emotional caretaking.',
      'Risk of Unequal Roles → Mulan as protector, Wendy as caretaker may feel unequal if not balanced.',
      'Conflict Avoidance → Wendy may avoid confrontation, while Mulan embraces it — leading to tension.'
    ],
    communication: 'Warm and dependable, though may need work to avoid over-responsibility.',
    emotionalConnection: 'Caring and protective, built on shared loyalty and protective energy.',
    sharedValues: 'Devotion to family and loved ones, the instinct to protect and care for others.',
    growthPotential: 'Learning to share the load and avoid over-functioning in their respective roles.',
    advice: [
      'Share the Load → Both must avoid over-functioning in their respective roles.',
      'Encourage Each Other\'s Growth → Wendy should claim more independence, Mulan should allow space for softness.',
      'Journal Prompt: Mulan types: "Where does my bravery cause me to shoulder too much alone?" Wendy types: "Where do I give care at the expense of my own independence?"'
    ],
    storyParallel: 'Mulan disguised herself to fight in her father\'s place, risking everything to protect her family. Wendy became the "mother" of the Lost Boys, sacrificing freedom for responsibility. Both carried heavy roles for others. Their pairing reflects the lesson that protection and nurture are strongest when shared, not one-sided.',
    keywords: ['protective', 'devoted', 'supportive', 'heartfelt', 'caring', 'balanced']
  },

  // Mulan × Little Red Riding Hood
  'mulan-littleredridinghood': {
    id: 'mulan-littleredridinghood',
    character1: 'Mulan',
    character2: 'Little Red Riding Hood',
    character1Id: 'mulan',
    character2Id: 'littleredridinghood',
    title: 'The Warrior and the Survivor — Bravery Meets Instinct',
    subtitle: 'Mulan represents courage, strategy, and the willingness to act boldly in the face of danger.',
    compatibilityScore: 80,
    relationshipType: 'A fierce and protective match — thrives when caution and courage fight side by side instead of against each other.',
    summary: 'Little Red Riding Hood symbolizes instinct, vigilance, and the survivor\'s awareness of hidden threats. Together, their relationship is sharp, protective, and powerful. Mulan admires Red\'s ability to sense danger before it strikes, while Red respects Mulan\'s strength to confront it head-on. Both are attuned to survival but in different ways: Mulan through action and planning, Red through intuition and caution. Their challenge is in balancing caution with boldness — Red may see Mulan as reckless, while Mulan may see Red as overly fearful.',
    strengths: [
      'Shared Courage → Both face danger, though with different tools.',
      'Complementary Skills → Red spots threats, Mulan defeats them.',
      'Protective Bond → Both archetypes prioritize safety for themselves and others.',
      'Mutual Respect → They value each other\'s bravery, even if expressed differently.'
    ],
    challenges: [
      'Caution vs. Action → Red hesitates, Mulan charges forward — potential conflict in timing.',
      'Different Conflict Styles → Red avoids confrontation until necessary, Mulan runs toward it.',
      'Risk of Frustration → Mulan may see Red as hesitant; Red may see Mulan as too rash.'
    ],
    communication: 'Fierce and protective, though may need work to balance caution with boldness.',
    emotionalConnection: 'Passionate and strong, built on shared courage and protective instincts.',
    sharedValues: 'Survival, protection of loved ones, and the willingness to face danger.',
    growthPotential: 'Learning to blend instinct and strategy for stronger outcomes.',
    advice: [
      'Blend Instinct and Strategy → Use Red\'s vigilance with Mulan\'s boldness for stronger outcomes.',
      'Avoid Dismissing Differences → Recognize that caution and courage are complementary, not opposed.',
      'Journal Prompt: Mulan types: "Where does my bravery ignore valuable warnings?" Red types: "Where does my caution hold me back from necessary action?"'
    ],
    storyParallel: 'Mulan disguised herself to take her father\'s place in war, confronting danger through action and sacrifice. Red faced the wolf\'s deception and learned vigilance through instinct. Both stories reflect survival against overwhelming odds. Their pairing teaches that true strength combines intuition and boldness.',
    keywords: ['fierce', 'protective', 'sharp', 'powerful', 'survival', 'complementary']
  },

  // Alice × Dorothy
  'alice-dorothy': {
    id: 'alice-dorothy',
    character1: 'Alice',
    character2: 'Dorothy',
    character1Id: 'alice',
    character2Id: 'dorothy',
    title: 'The Explorer and the Seeker — Curiosity Meets Belonging',
    subtitle: 'Alice (*Alice in Wonderland*) represents whimsical curiosity, questioning, and the urge to wander into the unknown.',
    compatibilityScore: 80,
    relationshipType: 'A hopeful and imaginative bond — thrives when curiosity and belonging meet in balance.',
    summary: 'Dorothy (*The Wizard of Oz*) symbolizes the seeker archetype — longing for belonging, grounding, and the meaning of "home." Together, their bond is gentle, imaginative, and thoughtful. Alice delights in exploring new worlds, while Dorothy longs for the comfort of a familiar one. Alice inspires Dorothy to embrace wonder, while Dorothy reminds Alice of the importance of grounding and belonging. Their challenge lies in direction: Alice may wander aimlessly, while Dorothy may cling too tightly to the idea of home.',
    strengths: [
      'Balance of Wonder and Grounding → Alice brings playful imagination; Dorothy offers steadiness and loyalty.',
      'Shared Innocence → Both carry a youthful, open-hearted spirit.',
      'Mutual Growth → Alice learns the value of home; Dorothy learns to embrace curiosity.',
      'Emotional Warmth → Their relationship is supportive and filled with kindness.'
    ],
    challenges: [
      'Opposing Directions → Alice looks outward for adventure, Dorothy inward for belonging.',
      'Risk of Stagnation or Aimlessness → Dorothy may resist change, Alice may resist grounding.',
      'Different Priorities → Alice questions endlessly, Dorothy seeks closure and safety.'
    ],
    communication: 'Supportive and playful, though sometimes divided in focus.',
    emotionalConnection: 'Sweet and tender, built on shared innocence and emotional warmth.',
    sharedValues: 'Youthful spirit, open-heartedness, and the desire to find meaning in their journeys.',
    growthPotential: 'Learning to blend curiosity with belonging and honor both journeys.',
    advice: [
      'Blend Curiosity with Belonging → Alice should value roots; Dorothy should embrace exploration.',
      'Honor Both Journeys → Their bond thrives when adventure and home are seen as complementary, not opposed.',
      'Journal Prompt: Alice types: "Where do I wander without asking what I truly seek?" Dorothy types: "Where do I long for home without exploring what\'s around me now?"'
    ],
    storyParallel: 'Alice followed the White Rabbit into Wonderland, chasing curiosity and questions, while Dorothy journeyed through Oz seeking to return home, realizing her power to belong was always within her. Together, they reveal the lesson that life is both a quest for wonder and a quest for belonging.',
    keywords: ['hopeful', 'imaginative', 'gentle', 'thoughtful', 'supportive', 'balanced']
  },

  // Alice × Wendy
  'alice-wendy': {
    id: 'alice-wendy',
    character1: 'Alice',
    character2: 'Wendy',
    character1Id: 'alice',
    character2Id: 'wendy',
    title: 'The Explorer and the Caretaker — Curiosity Meets Responsibility',
    subtitle: 'Alice (*Alice in Wonderland*) represents whimsical curiosity, questioning, and the urge to explore.',
    compatibilityScore: 80,
    relationshipType: 'A caring and imaginative bond — thrives when curiosity and nurture support one another instead of clashing.',
    summary: 'Wendy (*Peter Pan*) embodies youthful caretaking, responsibility, and the instinct to nurture. Together, their bond is a mix of wonder and grounding. Alice invites Wendy to step outside of responsibility and embrace imagination, while Wendy provides Alice with stability and emotional safety. Their relationship thrives when curiosity and care balance one another, but it risks imbalance if Wendy feels burdened by Alice\'s wanderings, or if Alice feels constrained by Wendy\'s need for order.',
    strengths: [
      'Balance of Wonder and Care → Alice sparks play; Wendy offers stability.',
      'Shared Innocence → Both maintain youthful, hopeful energy.',
      'Mutual Growth → Alice helps Wendy embrace adventure; Wendy teaches Alice to value responsibility.',
      'Supportive Energy → Wendy steadies Alice\'s restlessness, Alice lightens Wendy\'s seriousness.'
    ],
    challenges: [
      'Responsibility vs. Play → Wendy may see Alice as frivolous; Alice may see Wendy as too strict.',
      'Caretaker Dynamic → Wendy might over-function, treating Alice like someone to guide.',
      'Risk of Frustration → Alice could feel constrained, Wendy could feel unappreciated.'
    ],
    communication: 'Playful yet supportive, though may need work to balance roles.',
    emotionalConnection: 'Sweet and growth-filled, built on shared innocence and supportive energy.',
    sharedValues: 'Youthful spirit, hopeful energy, and the desire to create meaningful experiences.',
    growthPotential: 'Learning to balance curiosity with responsibility and celebrate their differences.',
    advice: [
      'Balance Roles → Wendy must avoid over-caretaking; Alice must take responsibility for her curiosity.',
      'Celebrate Differences → Play and responsibility can enrich each other if respected equally.',
      'Journal Prompt: Alice types: "Where do I escape into wonder without considering responsibility?" Wendy types: "Where do I over-caretake instead of embracing my own freedom?"'
    ],
    storyParallel: 'Alice wandered Wonderland chasing curiosity, while Wendy cared for the Lost Boys, balancing adventure with responsibility. One delighted in exploration, the other in nurturing. Their pairing highlights the lesson that care and curiosity thrive when freedom and responsibility are shared.',
    keywords: ['caring', 'imaginative', 'wonder', 'grounding', 'supportive', 'balanced']
  },

  // Alice × Little Red Riding Hood
  'alice-littleredridinghood': {
    id: 'alice-littleredridinghood',
    character1: 'Alice',
    character2: 'Little Red Riding Hood',
    character1Id: 'alice',
    character2Id: 'littleredridinghood',
    title: 'The Explorer and the Survivor — Curiosity Meets Vigilance',
    subtitle: 'Alice (*Alice in Wonderland*) represents curiosity, imagination, and the drive to explore the unknown.',
    compatibilityScore: 60,
    relationshipType: 'A contrasting yet growth-filled bond — thrives when curiosity and caution walk hand in hand.',
    summary: 'Little Red Riding Hood symbolizes caution, instinct, and the survivor\'s awareness of danger. Together, their relationship is lively yet tense. Alice delights in chasing possibilities without fear, while Red carefully watches for hidden threats. Alice admires Red\'s grounded instincts, while Red is intrigued by Alice\'s openness to wonder — but their different survival strategies can cause friction. Alice may find Red too fearful, while Red may see Alice as reckless.',
    strengths: [
      'Balance of Worldviews → Alice sees potential; Red sees danger — together they create a fuller picture.',
      'Growth Potential → Alice teaches Red playfulness; Red teaches Alice discernment.',
      'Shared Courage → Both face challenges, though with different tools.',
      'Protective Bond → Red shields Alice from risk, while Alice helps Red rediscover joy.'
    ],
    challenges: [
      'Curiosity vs. Caution → Alice leaps into unknowns, Red hesitates until safe.',
      'Different Tempos → Alice moves quickly, Red slows down — can frustrate each other.',
      'Risk of Roles → Red may feel burdened as protector, Alice as the one needing guidance.'
    ],
    communication: 'Stimulating and growth-filled, though prone to tension.',
    emotionalConnection: 'Passionate but fragile, built on balance of worldviews and shared courage.',
    sharedValues: 'Courage in facing challenges, though expressed through different approaches.',
    growthPotential: 'Learning to respect both strengths and blend curiosity with caution.',
    advice: [
      'Respect Both Strengths → Curiosity and caution must be honored as equal virtues.',
      'Blend Perspectives → Alice should pause for discernment; Red should allow more wonder.',
      'Journal Prompt: Alice types: "Where do I leap forward without noticing risks?" Red types: "Where do I focus so much on danger that I miss joy?"'
    ],
    storyParallel: 'Alice tumbled into Wonderland out of curiosity, exploring chaos without hesitation. Red entered the woods and nearly fell prey to the wolf\'s deception. One embraced the unknown, the other survived it. Their pairing reflects the lesson that true wisdom blends courage with awareness.',
    keywords: ['contrasting', 'growth-filled', 'lively', 'tense', 'protective', 'balanced']
  },

  // Dorothy × Wendy
  'dorothy-wendy': {
    id: 'dorothy-wendy',
    character1: 'Dorothy',
    character2: 'Wendy',
    character1Id: 'dorothy',
    character2Id: 'wendy',
    title: 'The Seeker and the Caretaker — Longing Meets Responsibility',
    subtitle: 'Dorothy (*The Wizard of Oz*) symbolizes the seeker archetype — longing for home, belonging, and a sense of grounding.',
    compatibilityScore: 80,
    relationshipType: 'A kind and nurturing match — thrives when belonging and care are balanced with independence.',
    summary: 'Wendy (*Peter Pan*) embodies youthful caretaking, balancing innocence with responsibility and the instinct to nurture others. Together, their relationship is gentle, supportive, and deeply familial. Dorothy admires Wendy\'s ability to provide care and stability, while Wendy respects Dorothy\'s determination to find home and belonging. Their bond is safe and nurturing, but it risks stagnation if both lean too much on comfort and avoid change or adventure.',
    strengths: [
      'Mutual Support → Dorothy offers hope; Wendy provides care.',
      'Shared Innocence → Both archetypes carry purity and sincerity.',
      'Balance of Roles → Dorothy seeks direction, Wendy sustains responsibility.',
      'Emotional Safety → Their connection feels tender, protective, and stable.'
    ],
    challenges: [
      'Over-Reliance on Roles → Wendy may fall into mothering, while Dorothy may lean too much on Wendy for security.',
      'Risk of Stagnation → Both prefer safety and comfort, which may limit growth.',
      'Conflict Avoidance → Neither archetype naturally confronts issues directly.'
    ],
    communication: 'Gentle and loyal, though may feel too safe at times.',
    emotionalConnection: 'Sweet and nurturing, built on mutual support and emotional safety.',
    sharedValues: 'Purity, sincerity, and the desire to create safe, nurturing environments.',
    growthPotential: 'Learning to balance nurture with independence and encourage shared growth.',
    advice: [
      'Balance Nurture and Independence → Wendy must avoid over-caretaking; Dorothy must find belonging within herself.',
      'Encourage Shared Growth → They should push each other toward action and discovery beyond comfort.',
      'Journal Prompt: Dorothy types: "Where do I search for home outside instead of creating it within?" Wendy types: "Where do I give so much care that I lose my own freedom?"'
    ],
    storyParallel: 'Dorothy longed to return home from Oz, while Wendy balanced childhood adventures with her role as caretaker of the Lost Boys. Both stories reflect responsibility and longing, often defined through relationships with others. Their pairing teaches that belonging and care are strongest when shared equally.',
    keywords: ['kind', 'nurturing', 'gentle', 'supportive', 'familial', 'balanced']
  },

  // Dorothy × Little Red Riding Hood
  'dorothy-littleredridinghood': {
    id: 'dorothy-littleredridinghood',
    character1: 'Dorothy',
    character2: 'Little Red Riding Hood',
    character1Id: 'dorothy',
    character2Id: 'littleredridinghood',
    title: 'The Seeker and the Survivor — Longing Meets Vigilance',
    subtitle: 'Dorothy (*The Wizard of Oz*) represents innocence, hope, and the search for belonging and "home."',
    compatibilityScore: 80,
    relationshipType: 'A protective and inspiring match — thrives when hope and caution are valued equally.',
    summary: 'Little Red Riding Hood symbolizes caution, instinct, and the survivor\'s sharp awareness of danger. Together, their relationship is protective yet tender. Dorothy admires Red\'s ability to spot threats and stay safe, while Red respects Dorothy\'s hopeful nature and determination to keep moving forward. Their contrast can create growth: Red teaches Dorothy to be more discerning, while Dorothy helps Red soften her suspicion with hope. The challenge lies in balancing Dorothy\'s trusting optimism with Red\'s wary vigilance.',
    strengths: [
      'Balance of Hope and Caution → Dorothy provides optimism; Red provides discernment.',
      'Mutual Growth → Dorothy inspires Red to trust again; Red teaches Dorothy survival skills.',
      'Shared Courage → Both face trials — Dorothy with faith, Red with instinct.',
      'Protective Bond → Red shields, Dorothy comforts — a supportive pairing.'
    ],
    challenges: [
      'Trust vs. Suspicion → Dorothy may be too trusting, Red too cautious.',
      'Different Tempos → Dorothy follows her heart; Red hesitates until safe.',
      'Risk of Frustration → Red may see Dorothy as naive; Dorothy may see Red as pessimistic.'
    ],
    communication: 'Protective and supportive, though may need work to balance hope and caution.',
    emotionalConnection: 'Tender but potentially stormy, built on balance of hope and caution.',
    sharedValues: 'Courage in facing trials, though expressed through different approaches.',
    growthPotential: 'Learning to blend optimism with vigilance and avoid role imbalance.',
    advice: [
      'Blend Optimism and Vigilance → Dorothy should value caution; Red should embrace hope.',
      'Avoid Role Imbalance → Their bond thrives when neither becomes the sole protector.',
      'Journal Prompt: Dorothy types: "Where do I trust too quickly instead of listening to caution?" Red types: "Where do I guard so tightly that I miss the beauty of trust?"'
    ],
    storyParallel: 'Dorothy traveled through Oz in search of home, often trusting in kindness along the way, while Little Red Riding Hood nearly fell prey to the wolf\'s deception. One embodies hopeful trust, the other cautious survival. Together, they reflect the lesson that belonging requires both vigilance and faith.',
    keywords: ['protective', 'inspiring', 'tender', 'supportive', 'balanced', 'growth-filled']
  },

  // Wendy × Little Red Riding Hood
  'wendy-littleredridinghood': {
    id: 'wendy-littleredridinghood',
    character1: 'Wendy',
    character2: 'Little Red Riding Hood',
    character1Id: 'wendy',
    character2Id: 'littleredridinghood',
    title: 'The Caretaker and the Survivor — Nurture Meets Vigilance',
    subtitle: 'Wendy (*Peter Pan*) symbolizes caretaking, responsibility, and the instinct to nurture.',
    compatibilityScore: 80,
    relationshipType: 'A protective and dependable match — thrives when nurture and vigilance empower instead of restrict.',
    summary: 'Little Red Riding Hood represents caution, instinct, and the survivor\'s sharp awareness of hidden danger. Together, their bond is protective and practical. Wendy provides warmth, emotional safety, and guidance, while Red brings sharp instincts and survival skills. Wendy admires Red\'s ability to sense danger, while Red respects Wendy\'s caring nature. Yet their relationship risks imbalance if Wendy becomes over-responsible and Red overly suspicious.',
    strengths: [
      'Protective Energy → Wendy nurtures, Red safeguards — together they create a strong sense of safety.',
      'Shared Loyalty → Both are devoted to those they love, though in different ways.',
      'Mutual Growth → Wendy helps Red open her guarded heart, Red teaches Wendy discernment.',
      'Balance of Roles → One cares for the inner world, the other defends against external threats.'
    ],
    challenges: [
      'Over-Caretaking vs. Over-Guarding → Wendy may smother with care, Red may overreact with suspicion.',
      'Risk of Fear and Passivity → Both may avoid risk — Wendy for safety, Red for survival.',
      'Conflict Styles → Wendy avoids direct confrontation, Red faces it through instinct — mismatch can cause tension.'
    ],
    communication: 'Strong and loyal, though may need work to balance care and caution.',
    emotionalConnection: 'Supportive but can feel heavy if not balanced with play.',
    sharedValues: 'Devotion to loved ones and the instinct to protect, though expressed differently.',
    growthPotential: 'Learning to balance care and caution and encourage trust.',
    advice: [
      'Balance Care and Caution → Their bond is strongest when nurturing and vigilance empower each other instead of limiting growth.',
      'Encourage Trust → Wendy should respect Red\'s instincts; Red should trust Wendy\'s warmth.',
      'Journal Prompt: Wendy types: "Where do I over-care instead of letting others grow?" Red types: "Where do I over-guard instead of letting myself feel safe?"'
    ],
    storyParallel: 'Wendy cared for the Lost Boys, often sacrificing her own freedom for responsibility, while Red survived the wolf\'s deception by sharpening her awareness. Both took on protective roles in different ways — one emotional, the other instinctual. Their pairing reflects the lesson that nurture and survival both serve love best when shared equally.',
    keywords: ['protective', 'dependable', 'practical', 'loyal', 'supportive', 'balanced']
  },

  // Little Red Riding Hood × Little Red Riding Hood
  'littleredridinghood-littleredridinghood': {
    id: 'littleredridinghood-littleredridinghood',
    character1: 'Little Red Riding Hood',
    character2: 'Little Red Riding Hood',
    character1Id: 'littleredridinghood',
    character2Id: 'littleredridinghood',
    title: 'The Survivor Meets Herself — Instinct Meets Instinct',
    subtitle: 'Little Red Riding Hood symbolizes caution, instinct, and the survivor\'s ability to sense danger and learn from it.',
    compatibilityScore: 60,
    relationshipType: 'A loyal but heavy bond — thrives when survival evolves into trust and shared joy.',
    summary: 'When paired with another Red, the relationship doubles this survival energy — two people highly attuned to potential threats, deeply protective, and quick to react. Together, this pairing is powerful in its awareness but risks becoming overly cautious. Both Reds admire the other\'s vigilance and honesty, but without balance, their bond can become dominated by suspicion, hesitation, or fear of what might go wrong.',
    strengths: [
      'Shared Instinct → Both trust their gut and value protection.',
      'Protective Bond → Each is loyal, committed, and defensive of the other\'s safety.',
      'Deep Empathy → They understand the wounds of innocence tested by danger.',
      'Mutual Respect → Each honors the other\'s resilience and hard-earned wisdom.'
    ],
    challenges: [
      'Over-Vigilance → Both may see threats everywhere, leading to overprotection or fear.',
      'Risk of Stagnation → Their shared caution can hold them back from growth or joy.',
      'Conflict of Control → If both insist on being the protector, power struggles may emerge.'
    ],
    communication: 'Fiercely protective, but risks becoming anxious or overly cautious.',
    emotionalConnection: 'Deep loyalty and understanding, though must avoid stagnation from shared fear.',
    sharedValues: 'Caution, instinct, protection, and the wisdom gained from surviving danger.',
    growthPotential: 'Learning to soften the guard and balance instinct with trust.',
    advice: [
      'Soften the Guard → Learn to relax and let joy in, rather than constantly preparing for danger.',
      'Balance Instinct with Trust → Encourage each other to take risks and not let fear dominate.',
      'Journal Prompt: Red types: "Where do I let my survival instincts block me from fully living?"'
    ],
    storyParallel: 'In her tale, Red encounters the wolf — a danger that forces her to sharpen her instincts and see through deception. Two Reds together create a mirror: both embody the survivor archetype, reminding each other of lessons learned. But survival is only the beginning — together, they must choose to thrive.',
    keywords: ['loyal', 'heavy', 'protective', 'vigilant', 'survival', 'evolving']
  },

  // Cinderella × Cinderella
  'cinderella-cinderella': {
    id: 'cinderella-cinderella',
    character1: 'Cinderella',
    character2: 'Cinderella',
    character1Id: 'cinderella',
    character2Id: 'cinderella',
    title: 'The Resilient Dreamer Meets Herself — Hope Reflects Hope',
    subtitle: 'Cinderella embodies patience, endurance, and the quiet strength to hold onto dreams despite hardship.',
    compatibilityScore: 60,
    relationshipType: 'A kind and supportive bond — thrives when hope evolves into shared initiative.',
    summary: 'When paired with another Cinderella, their relationship is built on shared resilience and a deep belief in eventual transformation. Both admire the other\'s kindness and perseverance, creating a bond of empathy and support. The challenge lies in energy: with two Cinderellas, the partnership may feel stagnant, as both wait for life to change instead of taking bold action themselves. Their shared patience and hope can become passivity if not balanced with initiative.',
    strengths: [
      'Shared Resilience → Both value endurance and faith through difficulty.',
      'Empathy and Kindness → Each understands the other\'s struggles deeply.',
      'Emotional Support → They create a safe space for healing and encouragement.',
      'Hopeful Spirit → Together, they reinforce optimism about brighter days.'
    ],
    challenges: [
      'Risk of Stagnation → Both may rely on waiting for external change rather than creating it.',
      'Conflict Avoidance → Harmony is prized, but issues may be overlooked.',
      'Dependence on "Rescue" → They may look outward (to fate, others, or circumstance) instead of inward for strength.'
    ],
    communication: 'Deeply supportive and empathetic, though can feel stagnant.',
    emotionalConnection: 'Tender and hopeful, but risks falling into passivity.',
    sharedValues: 'Patience, endurance, kindness, and the belief in eventual transformation.',
    growthPotential: 'Learning to step into agency and balance dreaming with doing.',
    advice: [
      'Step Into Agency → Don\'t just wait for transformation — act to create it together.',
      'Balance Dreaming with Doing → Hope must be matched with initiative.',
      'Journal Prompt: Cinderella types: "Where am I waiting for rescue instead of rescuing myself?"'
    ],
    storyParallel: 'Cinderella endured cruelty with patience until her kindness and faith led to transformation. Two Cinderellas together mirror each other\'s resilience, but must be careful not to linger in waiting too long. Their lesson is that shared hope is powerful, but even stronger when it sparks action.',
    keywords: ['kind', 'supportive', 'resilient', 'hopeful', 'empathetic', 'evolving']
  },

  // Aurora × Aurora
  'aurora-aurora': {
    id: 'aurora-aurora',
    character1: 'Aurora',
    character2: 'Aurora',
    character1Id: 'aurora',
    character2Id: 'aurora',
    title: 'The Dreamer Meets Herself — Stillness Mirrors Stillness',
    subtitle: 'Aurora (*Sleeping Beauty*) represents receptivity, intuition, and a dreamlike surrender to fate.',
    compatibilityScore: 60,
    relationshipType: 'A serene and graceful bond — thrives when stillness evolves into shared awakening.',
    summary: 'When paired with another Aurora, the relationship is ethereal, peaceful, and deeply intuitive. Both value harmony and trust, creating a serene and gentle atmosphere. The challenge is inertia: with two Auroras, the bond may drift into passivity. Neither archetype naturally takes initiative, so they may end up waiting for change or outside forces instead of actively shaping their path.',
    strengths: [
      'Deep Harmony → Both value calm, gentleness, and acceptance.',
      'Shared Intuition → They understand each other\'s moods and unspoken feelings.',
      'Peaceful Energy → The relationship feels safe, soothing, and graceful.',
      'Dreamlike Bond → Together, they cultivate imagination and quiet inspiration.'
    ],
    challenges: [
      'Risk of Passivity → Both may wait for life to "happen" instead of acting.',
      'Conflict Avoidance → Hard truths may never be addressed.',
      'Over-Idealization → They may lose themselves in dreams instead of reality.'
    ],
    communication: 'Gentle and intuitive, but may lack momentum.',
    emotionalConnection: 'Dreamy and romantic, though fragile without grounding.',
    sharedValues: 'Harmony, trust, intuition, and the value of peaceful acceptance.',
    growthPotential: 'Learning to bring dreams into action and balance stillness with courage.',
    advice: [
      'Bring Dreams Into Action → Use shared imagination as fuel for real steps forward.',
      'Balance Stillness With Courage → Together, they must encourage each other to wake up to life.',
      'Journal Prompt: Aurora types: "Where do I surrender too much, mistaking waiting for wisdom?"'
    ],
    storyParallel: 'Aurora fell into enchanted sleep, awaiting the moment of awakening. Two Auroras together are like two dreamers in the same slumber — harmonious but vulnerable if no one wakes. Their shared lesson is that stillness is a gift, but transformation requires action.',
    keywords: ['serene', 'graceful', 'ethereal', 'peaceful', 'intuitive', 'evolving']
  },

  // Ariel × Ariel
  'ariel-ariel': {
    id: 'ariel-ariel',
    character1: 'Ariel',
    character2: 'Ariel',
    character1Id: 'ariel',
    character2Id: 'ariel',
    title: 'The Adventurer Meets Herself — Desire Mirrors Desire',
    subtitle: 'Ariel (*The Little Mermaid*) represents restless curiosity, bold desire, and the willingness to risk everything for transformation.',
    compatibilityScore: 80,
    relationshipType: 'A passionate and adventurous bond — thrives when desire is tempered with balance.',
    summary: 'When paired with another Ariel, the relationship is passionate, adventurous, and full of energy. Both inspire each other to chase dreams and explore uncharted waters. The challenge is recklessness: with two Ariels, there\'s plenty of drive but little caution. Both may leap into change without considering consequences, creating instability.',
    strengths: [
      'Shared Passion → Both chase their dreams with boldness and fire.',
      'Excitement and Energy → Their bond feels alive, adventurous, and constantly moving.',
      'Mutual Inspiration → Each pushes the other to go further and dream bigger.',
      'Creative Spark → Together, they generate endless possibilities and new ideas.'
    ],
    challenges: [
      'Impulsiveness Multiplied → Both may take risks without grounding.',
      'Instability → Constant change may leave little room for stability.',
      'Conflict Potential → Strong wills and desires can clash if not aligned.'
    ],
    communication: 'Exciting and adventurous, but may lack stability.',
    emotionalConnection: 'Passionate and fiery, though can burn too hot without balance.',
    sharedValues: 'Restless curiosity, bold desire, and the willingness to risk everything for transformation.',
    growthPotential: 'Learning to introduce grounding and respect boundaries.',
    advice: [
      'Introduce Grounding → Balance passion with planning to avoid burnout.',
      'Respect Boundaries → Learn when to pause instead of chasing everything at once.',
      'Journal Prompt: Ariel types: "Where does my hunger for more risk my sense of stability?"'
    ],
    storyParallel: 'Ariel traded her voice to explore a world beyond her own, led by passion and desire. Two Ariels together are like two dreamers of the sea — constantly reaching for more, but vulnerable to losing their footing in the process. Their shared lesson is that passion needs grounding to become lasting transformation.',
    keywords: ['passionate', 'adventurous', 'energetic', 'creative', 'inspiring', 'balanced']
  },

  // Belle × Belle
  'belle-belle': {
    id: 'belle-belle',
    character1: 'Belle',
    character2: 'Belle',
    character1Id: 'belle',
    character2Id: 'belle',
    title: 'The Thinker Meets Herself — Reflection Mirrors Reflection',
    subtitle: 'Belle (*Beauty and the Beast*) symbolizes intellect, reflection, and the desire to see beyond appearances.',
    compatibilityScore: 80,
    relationshipType: 'A thoughtful and inspiring bond — thrives when wisdom turns into shared action.',
    summary: 'When paired with another Belle, the relationship is deeply thoughtful, curious, and imaginative. Both admire each other\'s wisdom, love for learning, and ability to perceive truths others overlook. The challenge is overthinking: with two Belles, the bond risks becoming overly cerebral, caught in analysis or idealization without enough action. While they inspire each other intellectually, they may forget to bring their dreams and insights into the world.',
    strengths: [
      'Shared Curiosity → Both delight in learning, discovery, and deep reflection.',
      'Mutual Admiration → Each respects the other\'s wisdom and compassion.',
      'Emotional Depth → They create a bond rich in insight and understanding.',
      'Visionary Energy → Their shared imagination sparks endless possibilities.'
    ],
    challenges: [
      'Risk of Over-Intellectualizing → They may talk more than act.',
      'Conflict Avoidance → Both prefer harmony, so issues may be smoothed over.',
      'Idealization → They may hold high standards that are difficult to fulfill.'
    ],
    communication: 'Stimulating and inspiring, though sometimes too theoretical.',
    emotionalConnection: 'Deep and meaningful, but risks becoming overly idealistic.',
    sharedValues: 'Intellect, reflection, curiosity, and the desire to see beyond appearances.',
    growthPotential: 'Learning to balance thought with action and ground imagination.',
    advice: [
      'Balance Thought With Action → Turn insights into real steps forward.',
      'Ground Imagination → Avoid retreating into ideas without testing them.',
      'Journal Prompt: Belle types: "Where do I stay in reflection instead of acting on what I see?"'
    ],
    storyParallel: 'Belle longed for more than her provincial life, seeking truth through books and ultimately finding love by seeing beyond appearances. Two Belles together are like two mirrors of wisdom, but their lesson is that insight must be paired with courage to act.',
    keywords: ['thoughtful', 'inspiring', 'curious', 'imaginative', 'wise', 'balanced']
  },

  // Rapunzel × Rapunzel
  'rapunzel-rapunzel': {
    id: 'rapunzel-rapunzel',
    character1: 'Rapunzel',
    character2: 'Rapunzel',
    character1Id: 'rapunzel',
    character2Id: 'rapunzel',
    title: 'The Captive Dreamer Meets Herself — Longing Mirrors Longing',
    subtitle: 'Rapunzel represents innocence, resilience, and the yearning for freedom from confinement.',
    compatibilityScore: 60,
    relationshipType: 'A tender and hopeful bond — thrives when dreams evolve into shared courage and action.',
    summary: 'When paired with another Rapunzel, their bond is tender, hopeful, and full of shared dreams. Both admire each other\'s optimism and patience, creating an uplifting connection. The challenge is inertia: with two Rapunzels, the relationship risks becoming passive, waiting for rescue or external change rather than claiming freedom together. Their dreams are big, but without action they may remain only dreams.',
    strengths: [
      'Shared Hopefulness → Both believe in brighter horizons beyond their walls.',
      'Emotional Gentleness → They comfort and inspire one another.',
      'Mutual Understanding → Each empathizes with the other\'s longing for more.',
      'Creative Spirit → Their dreams spark imagination and vision.'
    ],
    challenges: [
      'Risk of Passivity → Both may wait too long to act, expecting life to change on its own.',
      'Naivety Multiplied → Their trusting innocence can make them vulnerable.',
      'Conflict Avoidance → They may shy away from uncomfortable truths.'
    ],
    communication: 'Gentle and uplifting, but risks being too stagnant.',
    emotionalConnection: 'Sweet and hopeful, though fragile without decisive steps.',
    sharedValues: 'Innocence, resilience, optimism, and the yearning for freedom from confinement.',
    growthPotential: 'Learning to turn dreams into steps and balance hope with courage.',
    advice: [
      'Turn Dreams Into Steps → Inspire one another to act instead of just waiting.',
      'Balance Hope With Courage → Longing is powerful, but requires bold moves to be fulfilled.',
      'Journal Prompt: Rapunzel types: "Where do I stay confined by dreaming instead of daring?"'
    ],
    storyParallel: 'Rapunzel gazed from her tower window, dreaming of freedom, until she finally took steps to escape and find her place in the world. Two Rapunzels together mirror each other\'s longing, reminding us that true transformation begins when dreams inspire action.',
    keywords: ['tender', 'hopeful', 'innocent', 'resilient', 'dreaming', 'evolving']
  },

  // Gerda × Gerda
  'gerda-gerda': {
    id: 'gerda-gerda',
    character1: 'Gerda',
    character2: 'Gerda',
    character1Id: 'gerda',
    character2Id: 'gerda',
    title: 'The Devoted Meets Herself — Loyalty Mirrors Loyalty',
    subtitle: 'Gerda (*The Snow Queen*) symbolizes devotion, loyalty, and perseverance in the name of love.',
    compatibilityScore: 80,
    relationshipType: 'A faithful and dependable bond — thrives when devotion is balanced with self-care and growth.',
    summary: 'When paired with another Gerda, the relationship is unwavering, dependable, and deeply committed. Both admire each other\'s faithfulness and courage, creating a bond of profound trust. The challenge? With two Gerdas, their relationship risks becoming overly self-sacrificial. Each may give endlessly without asking for their own needs to be met, creating an unbalanced cycle of over-devotion.',
    strengths: [
      'Shared Loyalty → Both value devotion above all, creating lasting trust.',
      'Emotional Depth → They connect through sincerity, kindness, and endurance.',
      'Protective Energy → Each feels safe knowing the other will never give up.',
      'Mutual Admiration → Both honor resilience and faithfulness in love.'
    ],
    challenges: [
      'Over-Selflessness → Both may sacrifice too much, neglecting their own growth.',
      'Risk of Stagnation → Their focus on loyalty may keep them from embracing change.',
      'Conflict Avoidance → They may endure hardship silently rather than confront it.'
    ],
    communication: 'Deeply loyal and safe, though may lack adventure.',
    emotionalConnection: 'Tender and enduring, but risks becoming heavy if both over-sacrifice.',
    sharedValues: 'Devotion, loyalty, perseverance, and the willingness to sacrifice for love.',
    growthPotential: 'Learning to balance giving with receiving and encourage independence.',
    advice: [
      'Balance Giving With Receiving → Loyalty is strongest when both allow themselves to be cared for too.',
      'Encourage Independence → Devotion should empower, not diminish, individuality.',
      'Journal Prompt: Gerda types: "Where do I mistake loyalty for losing myself?"'
    ],
    storyParallel: 'Gerda\'s tale is one of devotion — traveling across frozen lands to rescue Kai through the strength of her love. Two Gerdas together mirror one another\'s loyalty, but their shared lesson is that love must nourish both partners, not only demand sacrifice.',
    keywords: ['faithful', 'dependable', 'loyal', 'devoted', 'enduring', 'balanced']
  },

  // Mulan × Mulan
  'mulan-mulan': {
    id: 'mulan-mulan',
    character1: 'Mulan',
    character2: 'Mulan',
    character1Id: 'mulan',
    character2Id: 'mulan',
    title: 'The Warrior Meets Herself — Bravery Mirrors Bravery',
    subtitle: 'Mulan represents courage, sacrifice, and the strength to act boldly in the face of duty.',
    compatibilityScore: 80,
    relationshipType: 'A courageous and inspiring bond — thrives when bravery is balanced with tenderness and shared responsibility.',
    summary: 'When paired with another Mulan, the relationship is fierce, determined, and deeply respectful. Both admire each other\'s bravery and sense of responsibility, creating a partnership of mutual strength and honor. The challenge? With two Mulans, the bond risks becoming overly intense — both may carry too much responsibility, fight too hard, or neglect emotional softness. Their shared courage is inspiring, but it needs balance with gentleness.',
    strengths: [
      'Mutual Respect → Each values the other\'s integrity and bravery.',
      'Shared Drive → Both act decisively, ensuring progress and protection.',
      'Protective Bond → They create a safe and resilient partnership.',
      'Inspirational Energy → Their combined courage motivates those around them.'
    ],
    challenges: [
      'Over-Responsibility → Both may carry too much duty, leaving little room for rest.',
      'Conflict of Control → Two strong leaders may clash if not aligned.',
      'Emotional Neglect → Focus on duty may overshadow tenderness.'
    ],
    communication: 'Powerful and motivating — a force of inspiration.',
    emotionalConnection: 'Passionate and strong, but risks intensity without softness.',
    sharedValues: 'Courage, sacrifice, integrity, and the strength to act boldly in the face of duty.',
    growthPotential: 'Learning to balance strength with vulnerability and share responsibility.',
    advice: [
      'Balance Strength With Vulnerability → Courage includes showing softness and asking for help.',
      'Share Responsibility → Avoid competing in sacrifice — lean on each other equally.',
      'Journal Prompt: Mulan types: "Where does my bravery keep me from admitting my own needs?"'
    ],
    storyParallel: 'Mulan disguised herself as a warrior to take her father\'s place, saving her family and country through bravery. Two Mulans together mirror that same sense of honor and duty, but their shared lesson is that true courage also means allowing space for love and vulnerability.',
    keywords: ['courageous', 'inspiring', 'fierce', 'determined', 'protective', 'balanced']
  },

  // Alice × Alice
  'alice-alice': {
    id: 'alice-alice',
    character1: 'Alice',
    character2: 'Alice',
    character1Id: 'alice',
    character2Id: 'alice',
    title: 'The Explorer Meets Herself — Curiosity Mirrors Curiosity',
    subtitle: 'Alice (*Alice in Wonderland*) represents whimsical curiosity, imagination, and the drive to question reality.',
    compatibilityScore: 60,
    relationshipType: 'A magical and playful bond — thrives when curiosity is paired with grounding and purpose.',
    summary: 'When paired with another Alice, the relationship is lively, playful, and endlessly surprising. Both inspire each other\'s curiosity and open-mindedness, making their bond feel magical and adventurous. The challenge? With two Alices, the relationship risks becoming chaotic or aimless. Both may wander without direction, constantly chasing novelty without grounding in stability or purpose.',
    strengths: [
      'Shared Curiosity → Both delight in discovery, questions, and imagination.',
      'Playful Energy → Their connection is fun, creative, and adventurous.',
      'Mutual Inspiration → Each fuels the other\'s wonder and creativity.',
      'Innovative Spirit → They generate fresh ideas and perspectives together.'
    ],
    challenges: [
      'Lack of Grounding → Without structure, both may drift endlessly.',
      'Risk of Escapism → They may prefer fantasy to dealing with reality.',
      'Distraction Multiplied → Too much wandering may lead to unfinished paths.'
    ],
    communication: 'Playful, imaginative, and full of laughter — but may lack grounding.',
    emotionalConnection: 'Whimsical and magical, though fragile without direction.',
    sharedValues: 'Whimsical curiosity, imagination, and the drive to question reality.',
    growthPotential: 'Learning to balance wonder with purpose and ground adventures.',
    advice: [
      'Balance Wonder With Purpose → Curiosity should lead to meaningful growth, not just endless questions.',
      'Ground Adventures → Create shared goals to keep exploration from becoming scattered.',
      'Journal Prompt: Alice types: "Where do I wander so freely that I lose sight of what I truly seek?"'
    ],
    storyParallel: 'Alice followed the White Rabbit into Wonderland, discovering a world of confusion and magic. Two Alices together are like two explorers tumbling through endless rabbit holes — enchanting, but vulnerable to chaos. Their shared lesson is that curiosity thrives best when guided by intention.',
    keywords: ['magical', 'playful', 'lively', 'curious', 'imaginative', 'evolving']
  },

  // Dorothy × Dorothy
  'dorothy-dorothy': {
    id: 'dorothy-dorothy',
    character1: 'Dorothy',
    character2: 'Dorothy',
    character1Id: 'dorothy',
    character2Id: 'dorothy',
    title: 'The Seeker Meets Herself — Belonging Mirrors Belonging',
    subtitle: 'Dorothy (*The Wizard of Oz*) embodies innocence, hope, and the longing for home and belonging.',
    compatibilityScore: 60,
    relationshipType: 'A warm and supportive bond — thrives when safety is balanced with shared growth and adventure.',
    summary: 'When paired with another Dorothy, the relationship is warm, nurturing, and filled with empathy. Both understand each other\'s search for safety and comfort, creating a deeply supportive bond. The challenge? With two Dorothys, the relationship risks becoming too inward or dependent. Both may cling to the idea of "home" so tightly that they avoid change, adventure, or the discomfort necessary for growth.',
    strengths: [
      'Shared Innocence → Both approach life with sincerity and openness.',
      'Mutual Empathy → Each deeply understands the other\'s longing for belonging.',
      'Emotional Safety → They create a comforting, loyal, and secure connection.',
      'Grounding Energy → Their bond emphasizes stability and kindness.'
    ],
    challenges: [
      'Over-Attachment → Both may hold too tightly to safety, resisting change.',
      'Risk of Stagnation → Comfort may prevent them from pursuing growth.',
      'Conflict Avoidance → Both may shy away from facing challenges directly.'
    ],
    communication: 'Loyal, nurturing, and kind, though sometimes too safe.',
    emotionalConnection: 'Gentle and supportive, but risks lacking passion or adventure.',
    sharedValues: 'Innocence, hope, and the longing for home and belonging.',
    growthPotential: 'Learning to redefine "home" and encourage adventure.',
    advice: [
      'Redefine "Home" → Recognize that belonging is built within, not only found outside.',
      'Encourage Adventure → Push each other to explore beyond safety and comfort.',
      'Journal Prompt: Dorothy types: "Where do I cling to safety instead of embracing growth?"'
    ],
    storyParallel: 'Dorothy traveled through Oz, longing for home, only to realize that her power to belong was within her all along. Two Dorothys together mirror each other\'s longing, but their shared lesson is that belonging grows stronger when paired with courage to journey outward.',
    keywords: ['warm', 'supportive', 'innocent', 'hopeful', 'nurturing', 'evolving']
  },

  // Wendy × Wendy
  'wendy-wendy': {
    id: 'wendy-wendy',
    character1: 'Wendy',
    character2: 'Wendy',
    character1Id: 'wendy',
    character2Id: 'wendy',
    title: 'The Caretaker Meets Herself — Responsibility Mirrors Responsibility',
    subtitle: 'Wendy (*Peter Pan*) symbolizes youthful caretaking, responsibility, and the instinct to nurture and guide.',
    compatibilityScore: 60,
    relationshipType: 'A loyal and supportive bond — thrives when care is balanced with independence and play.',
    summary: 'When paired with another Wendy, the relationship is gentle, supportive, and deeply loyal. Both admire each other\'s selflessness and devotion, creating a warm and protective connection. The challenge is over-responsibility: with two Wendys, the bond risks becoming heavy, with each partner overextending themselves to care for the other, while neglecting their own independence and desires.',
    strengths: [
      'Shared Nurturing Spirit → Both value loyalty, guidance, and care.',
      'Safe Haven → Their relationship feels protective, tender, and trustworthy.',
      'Mutual Respect → Each honors the other\'s sense of duty and devotion.',
      'Stability → Their bond provides security and comfort.'
    ],
    challenges: [
      'Over-Caretaking → Both may give too much, leaving little space for personal growth.',
      'Risk of Stagnation → Their shared preference for stability may stifle adventure or passion.',
      'Conflict Avoidance → Harmony may come at the expense of honesty.'
    ],
    communication: 'Loyal, dependable, and comforting, but risks feeling too serious.',
    emotionalConnection: 'Gentle and caring, though can become overly safe or one-note.',
    sharedValues: 'Youthful caretaking, responsibility, and the instinct to nurture and guide.',
    growthPotential: 'Learning to encourage independence and balance responsibility with play.',
    advice: [
      'Encourage Independence → Care for each other, but also pursue personal freedom.',
      'Balance Responsibility With Play → Bring levity and adventure into the relationship.',
      'Journal Prompt: Wendy types: "Where do I give so much care that I forget my own freedom?"'
    ],
    storyParallel: 'Wendy became the caretaker of the Lost Boys in Neverland, taking on responsibility at a young age. Two Wendys together mirror this energy of guidance, but their shared lesson is that caretaking must also allow space for self-discovery.',
    keywords: ['loyal', 'supportive', 'gentle', 'caring', 'responsible', 'evolving']
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
