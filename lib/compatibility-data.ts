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
