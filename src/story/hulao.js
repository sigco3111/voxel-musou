// 第一章「虎牢關」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 汜水 / 虎牢 / 洛陽 ink map (PL_MAP) and the epilogue.
// History (初平元年 190, per 演義 5): the lords east of the passes rise against 董卓 under 盟主 袁紹; 董卓's vanguard 華雄
// holds 汜水關 and cuts down the coalition's champions until 關羽 — then a mere mounted archer under 劉備 — kills him
// before the cup of wine 曹操 poured him could cool (溫酒斬華雄); at 虎牢關 呂布 routs 公孫瓚, 張飛 takes him on, 關羽 and
// 劉備 join in, and the three sworn brothers drive him back through the gate (三英戰呂布); 董卓 burns 洛陽 and flees west.
// Played as any of the three brothers: `hero` = the chosen one, `ally` = CH.ally[hero]; the other two come onto the field
// as ally actors for the duel with 呂布 (the boss actor, game.actors). The brothers also speak by CHARS id: a line whose
// `who` is the current hero's id is his own.
// Map (world/maps/hulao.js): gates 'gorge' (barricade) and 'hulao' (the gate's doors), shut at the start; anchors
// 'hulao' (the gate's face, z 136), 'outworks' (華雄's palisade gap), 'wine' (the wine table in the camp).
import { CHARS } from '../chars/index.js';


export const CH = {
  id: 'hulao', num: { zh: '제1장', en: 'CHAPTER I' }, title: { zh: '호로관', en: 'Hulao Gate' },
  seal: '동탁 토벌전', era: { zh: '초평 원년', en: '190 AD' }, map: 'hulao',
  heroes: ['liubei', 'guanyu', 'zhangfei'],
  ally: { liubei: 'guanyu', guanyu: 'liubei', zhangfei: 'liubei' },
  army: { foe: 'dong', ally: 'liu' },
  // the brothers' own men drawn up either side of the road inside the camp gate, holding rank until the hero marches out
  van: [{ x: -5.575, z: -131.6, n: 12, cols: 4, hold: true }, { x: 5.575, z: -131.6, n: 12, cols: 4, hold: true }],
  hq: [0, 150],                                    // behind the gate: 呂布
  rank: { kos: [500, 1000, 1700], time: [540, 720, 900] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  yuanshao: { name: { zh: '원소', en: 'Yuan Shao' }, seal: '袁', side: 'shu' },
  yuanshu: { name: { zh: '원술', en: 'Yuan Shu' }, seal: '術', side: 'shu' },
  caocao: { name: { zh: '조조', en: 'Cao Cao' }, seal: '曹', side: 'shu' },
  gongsun: { name: { zh: '공손찬', en: 'Gongsun Zan' }, seal: '瓚', side: 'shu' },
  // the brothers: their pixel portrait once their kits are in CHARS, a seal until then
  liubei: { name: { zh: '유비', en: 'Liu Bei' }, seal: '劉', side: 'shu', char: 'liubei' },
  guanyu: { name: { zh: '관우', en: 'Guan Yu' }, seal: '關', side: 'shu', char: 'guanyu' },
  zhangfei: { name: { zh: '장비', en: 'Zhang Fei' }, seal: '張', side: 'shu', char: 'zhangfei' },
  huaxiong: { name: { zh: '화웅', en: 'Hua Xiong' }, seal: '華', side: 'wei' },
  lijue: { name: { zh: '이각', en: 'Li Jue' }, seal: '傕', side: 'wei' },
  guosi: { name: { zh: '곽사', en: 'Guo Si' }, seal: '汜', side: 'wei' },
  zhangliao: { name: { zh: '장료', en: 'Zhang Liao' }, seal: '遼', side: 'wei' },
  gaoshun: { name: { zh: '고순', en: 'Gao Shun' }, seal: '順', side: 'wei' },
  lubu: { name: { zh: '여포', en: 'Lü Bu' }, seal: '呂', side: 'wei', char: 'lubu' },
  soldier: { name: { zh: '동탁군 병사', en: 'Dong Zhuo\'s Soldier' }, seal: '兵', side: 'wei' },
};

// crowd officers. 華雄 ≈ 2 officers' worth (he has killed four champions); the gate pair are sturdy; the boss is 呂布,
// an actor (BEATS), not a crowd officer. Looks: 董卓軍 lacquer (crowd/armies.js), each his own helm and plume.
export const OFF = {
  huaxiong: { name: { zh: '화웅', en: 'HUA XIONG' }, hp: 1100, look: { helm: 'horn', armor: 0x2a1a1e, trim: 0xe0b450, cape: 0x6e1830, plume: 0x9a2ad0 } },
  lijue: { name: { zh: '이각', en: 'LI JUE' }, hp: 700, look: { helm: 'crest', armor: 0x2e2238, trim: 0xb88a48, cape: 0x3a1a50, plume: 0xc060f0 } },
  guosi: { name: { zh: '곽사', en: 'GUO SI' }, hp: 700, look: { helm: 'wing', armor: 0x28202e, trim: 0xa88048, cape: 0x4a1a3a, plume: 0x8a3ab0 } },
  zhangliao: { name: { zh: '장료', en: 'ZHANG LIAO' }, hp: 1000, look: { helm: 'crest', armor: 0x1e2230, trim: 0xd8b050, cape: 0x3a2a6a, plume: 0xf0f4fa } },
  gaoshun: { name: { zh: '고순', en: 'GAO SHUN' }, hp: 1000, look: { helm: 'horn', armor: 0x1a1a1e, trim: 0x9a9aa4, cape: 0x3a1a2a, plume: 0x6a2a90 } },
};

// 呂布 (boss actor, C5) and the brothers who come to fight him beside the hero (ally actors, invulnerable)
const LUBU = { kit: 'lubu', role: 'boss', at: ['hulao', 0, 16], yaw: Math.PI, hp: 4400, poise: 460, retreatAt: 0.25,
  name: { zh: '여포', en: 'LÜ BU' }, seal: '呂' };
const BRO = {
  liubei: { kit: 'liubei', role: 'ally', name: { zh: '유비', en: 'LIU BEI' }, seal: '劉' },
  guanyu: { kit: 'guanyu', role: 'ally', name: { zh: '관우', en: 'GUAN YU' }, seal: '關' },
  zhangfei: { kit: 'zhangfei', role: 'ally', name: { zh: '장비', en: 'ZHANG FEI' }, seal: '張' },
};
const bros = (a, b) => ({ [a]: { ...BRO[a], at: ['hulao', -7, -26] }, [b]: { ...BRO[b], at: ['hulao', 7, -26] } });

const NAG = { who: 'caocao', zh: '기다리십시오! 화웅을 없애기 전에는 홀로 깊이 들어가면 안 됩니다.', en: 'Hold! Hua Xiong still stands. Don\'t push on alone.' };
const NAG_GORGE = { who: 'gongsun', zh: '협곡에 방책이 있습니다. 먼저 복병을 격파하십시오!', en: 'The gorge is barred. Break the ambush first!' };
const NAG_GATE = { who: 'gongsun', zh: '관문이 닫혔습니다. 먼저 수장을 격파하십시오!', en: 'The gate is shut fast. Beat its guards first!' };

// Pacing (default difficulty): a bot that attacks nonstop clears in ≈ 6 min with ≈ 2800 KOs (plain + 華雄 70 s · gorge
// ambush 70 s · forecourt pair 80 s · 呂布 ≈ 2.5 min); a human reading the dialogue and steering lands at ≈ 9-12 min.
// Officers come forward only after the hero has fought a while (kos / wait), so rushing never skips a stage.
// 溫酒斬華雄 (關羽 only): 曹操 pours the wine as 華雄 comes out, obj.timer counts it cooling (150 s). Killed in time: the
// banner and 曹操's「其酒尚溫」; the timer out first: 曹操 remarks the wine has gone cold (no fail).
export const BEATS = [
  // ---- 聯軍本陣: the war council, then the plain
  {
    when: { wait: 30 },
    obj: { zh: '사수관 앞 동탁군 격파', en: 'Break Dong Zhuo\'s army on the plain', go: ['plain', 0, 0.1] },
    squads: [{ at: ['plain', -0.5, -0.4], n: 22 }, { at: ['plain', 0.45, -0.3], n: 22 }, { at: ['plain', -0.25, 0.15], n: 24 }, { at: ['plain', 0.35, 0.4], n: 22 }],
    limit: { z: ['gorge', 0, -1], nag: NAG },
    morale: 0,
    say: [
      { who: 'yuanshao', zh: '화웅이 포충·조무·유섭·반봉을 연달아 베어 연합군의 기세가 꺾였다...', en: 'Hua Xiong has cut down Bao Zhong, Zu Mao, Yu She and Pan Feng. The coalition has lost its nerve...' },
      { who: 'yuanshao', zh: '안량과 문추가 아직 오지 않아 아쉽구나! 한 명만 있어도 화웅이 두렵겠느냐!', en: 'If only Yan Liang or Wen Chou were here! With either of them, who would fear Hua Xiong?' },
      { who: 'hero', liubei: ['제가 부족하지만 두 아우와 함께 가서 맹주의 근심을 덜겠습니다!', 'Unworthy as I am, my brothers and I will go, and lift this burden from you!'],
        guanyu: ['소장이 가서 화웅의 목을 베어 바치겠습니다!', 'Let this humble soldier go. I will lay Hua Xiong\'s head before your tent!'],
        zhangfei: ['화웅 하나가 대수냐? 내가 머리를 뽑아오겠다!', 'One Hua Xiong? I\'ll go and twist his head off!'] },
      { who: 'yuanshu', guanyu: ['활잡이 따위가 감히! 밖으로 끌어내라!', 'A mere archer, talking out of turn? Throw him out!'],
        liubei: ['평원 현령 따위가 제후 앞에서 큰소리를 치느냐?', 'A petty magistrate of Pingyuan, boasting before the lords?'],
        zhangfei: ['평원 현령의 부하 따위가 제후 앞에서 큰소리를 치느냐?', 'A petty magistrate\'s man, boasting before the lords?'] },
      { who: 'caocao', zh: '공로, 진정하시오. 큰말을 했으니 용기와 지략이 있겠지. 이기지 못하면 그때 문책해도 늦지 않소.', en: 'Calm yourself, Gonglu. A man who speaks so boldly must have the courage to match. If he fails, blame him then.' },
    ],
  },
  {
    when: [{ zone: 'plain' }, { kos: 60 }],
    waves: true,
    say: [{ who: 'soldier', zh: '연합군이 또 죽으러 왔구나! 화 장군의 칼은 아직 피가 부족하다!', en: 'More coalition fools come to die! General Hua\'s blade is still thirsty!' }],
  },
  {
    hero: ['guanyu'],
    when: [{ kos: 60, wait: 15 * 60 }, { wait: 60 * 60 }],
    officers: { huaxiong: { at: ['outworks', 0, -9], engaged: true } },
    obj: { zh: '술이 식기 전에 화웅 격파', en: 'Slay Hua Xiong before the wine cools', go: 'huaxiong', timer: 150 },
    say: [
      { who: 'caocao', zh: '장군, 이 뜨거운 술을 마시고 말에 올라도 늦지 않소.', en: 'General, drink this cup of warm wine before you ride.' },
      { who: 'guanyu', zh: '술은 따라두시오. 금방 다녀오겠소.', en: 'Pour it and leave it. I\'ll be back before it cools.' },
      { who: 'huaxiong', zh: '또 죽으러 왔구나! 이름을 밝혀라!', en: 'Another one come to die! Name yourself!' },
    ],
  },
  {
    hero: ['liubei', 'zhangfei'],
    when: [{ kos: 60, wait: 15 * 60 }, { wait: 60 * 60 }],
    officers: { huaxiong: { at: ['outworks', 0, -9], engaged: true } },
    obj: { zh: '동탁군 선봉 화웅 격파', en: 'Defeat Dong Zhuo\'s vanguard, Hua Xiong', go: 'huaxiong' },
    say: [
      { who: 'huaxiong', zh: '나는 화웅이다! 연합군 장수들은 모두 내 칼 아래 죽었다!', en: 'I am Hua Xiong! Every champion the coalition sends dies on my blade!' },
      { who: 'hero', liubei: ['화웅, 날뛰지 마라! 탁군 유현덕이 여기 있다!', 'Enough boasting, Hua Xiong! Liu Xuande of Zhuo is here!'],
        zhangfei: ['연인 장익덕이 여기 있다! 화웅, 내 창을 받아라!', 'Zhang Yide of Yan is here! Hua Xiong, taste my spear!'] },
    ],
  },
  {
    hero: ['guanyu'],
    when: { timer: true },
    skip: { down: 'huaxiong' },
    say: [{ who: 'caocao', zh: '...술이 식었소. 운장, 헛되이 기다리게 하지 마시오!', en: '...The wine has gone cold. Yunchang, don\'t keep me waiting!' }],
  },
  {
    hero: ['guanyu'],
    when: { down: 'huaxiong' },
    skip: { timer: true },
    hush: true,
    banner: { html: '<em>술이 식기 전에 화웅을 베다</em>', en: 'Hua Xiong slain before the wine could cool', dur: 260, big: true },
    say: [{ who: 'caocao', zh: '술이 아직 따뜻하군! 운장은 참으로 신인이오!', en: 'The wine is still warm! Yunchang, you are a god of war!' }],
  },
  {
    hero: ['liubei', 'zhangfei'],
    when: { down: 'huaxiong' },
    hush: true,
    banner: { html: '적장 <em>화웅</em> 토벌!', en: 'Hua Xiong has fallen!', dur: 200 },
  },
  {
    when: { down: 'huaxiong' },
    heal: 0.35, morale: 0.12, waves: false, retire: true,
    obj: { zh: '협곡을 돌파해 호로관으로 진격', en: 'Push through the gorge toward Hulao Gate', go: ['gorge', 0, -0.3] },
    limit: { z: ['gorge', 0, 0.62], nag: NAG_GORGE },                 // just short of the 'gorge' barricade (z 58.5)
    say: [
      { who: 'hero', liubei: ['화웅이 죽었다! 두 아우는 나와 함께 협곡으로 가자!', 'Hua Xiong is dead! Brothers, into the gorge with me!'],
        guanyu: ['화웅의 목이 여기 있소. 여러분, 진격하시오.', 'Here is Hua Xiong\'s head. My lords, advance.'],
        zhangfei: ['하하! 화웅도 별것 아니구나!', 'Ha! So much for Hua Xiong!'] },
      { who: 'yuanshao', zh: '동탁의 선봉이 무너졌다! 전군 진격, 호로관을 쳐라!', en: 'Dong Zhuo\'s vanguard is broken! All armies advance on Hulao Gate!' },
    ],
  },

  // ---- 峽谷: the ambush from both walls (the mid-battle twist)
  {
    when: { zone: 'gorge' },
    squads: [{ at: ['gorge', -0.3, -0.55], n: 18 }, { at: ['gorge', 0.25, -0.35], n: 20 }],
    waves: true,
    say: [{ who: 'soldier', zh: '연합군이 협곡에 들어왔다! 이 장군과 곽 장군께 알려라!', en: 'The coalition is in the gorge! Warn General Li and General Guo!' }],
  },
  {
    when: [{ at: ['gorge', 0, -0.05] }, { kos: 150 }],
    banner: { html: '<em>복병</em>！동탁군이 협곡 양쪽에서 나타났다', en: 'Ambush! Dong Zhuo\'s troops pour down both walls of the gorge', dur: 170 },
    squads: [{ at: ['gorge', -0.3, 0.05], n: 16, charge: true }, { at: ['gorge', 0.3, 0.1], n: 16, charge: true },
      { at: ['gorge', 0, -0.35], n: 18, charge: true }, { at: ['gorge', 0.05, 0.3], n: 18, charge: true }],
    officers: { lijue: { at: ['gorge', -0.25, 0.22], engaged: true }, guosi: { at: ['gorge', 0.25, 0.26], engaged: true } },
    morale: -0.1,
    obj: { zh: '매복 장수 이각·곽사 격파', en: 'Defeat the ambush leaders, Li Jue and Guo Si', go: 'lijue' },
    say: [
      { who: 'lijue', zh: '하하! 협곡 양쪽에 우리 군이 있다. 어디로 달아날 셈이냐!', en: 'Ha! Both walls are ours. Where will you run now?' },
      { who: 'guosi', zh: '쏴라! 하나도 놓치지 마라!', en: 'Loose! Let none of them through!' },
      { who: 'ally', liubei: ['형님, 조심하십시오. 적장을 베면 복병도 무너집니다!', 'Careful, brother! Cut down their leaders and the rest will break!'],
        guanyu: ['아우야, 이각과 곽사가 앞에 있다. 서둘러 베어라!', 'Brother, Li Jue and Guo Si lead them. Strike them down!'],
        zhangfei: ['셋째야, 싸움에 매달리지 말고 적장을 먼저 치자!', 'Don\'t get bogged down, brother. Take their leaders first!'] },
    ],
  },
  {
    when: { down: 'lijue' },
    obj: { zh: '매복 장수 곽사 격파', en: 'Defeat the ambush leader, Guo Si', go: 'guosi' },
    say: [{ who: 'lijue', zh: '젠장... 곽사, 여기는 네게 맡긴다!', en: 'Curse it... Guo Si, it\'s yours now!' }],
  },
  {
    when: { down: 'guosi' },
    banner: { html: '<em>협곡</em> 복병 격퇴!', en: 'The ambush is broken — the gorge is open', dur: 160 },
    heal: 0.3, morale: 0.12, retire: true, hush: true, gate: 'gorge',
    obj: { zh: '호로관으로 진격', en: 'Advance on Hulao Gate', go: ['fore', 0, 0.2] },
    limit: { z: ['hulao', 0, -4], nag: NAG_GATE },
    say: [{ who: 'gongsun', zh: '복병이 물러났다! 앞이 호로관이다. 내가 군을 이끌고 먼저 가겠다!', en: 'The ambush is beaten! Hulao Gate lies ahead. I\'ll lead my riders on first!' }],
  },

  // ---- 關前: 張遼 and 高順 hold the gate; 公孫瓚 comes back past, routed by 呂布
  {
    when: { zone: 'fore' },
    officers: { zhangliao: { at: ['hulao', -9, -15] }, gaoshun: { at: ['hulao', 9, -15] } },
    squads: [{ at: ['fore', -0.5, -0.1], n: 20 }, { at: ['fore', 0.5, 0], n: 20 }, { at: ['fore', 0, 0.45], n: 18 }],
    waves: true,
    obj: { zh: '관문 수장 장료·고순 격파', en: 'Defeat the gate\'s guardians, Zhang Liao and Gao Shun', go: 'zhangliao' },
    say: [
      { who: 'zhangliao', zh: '나는 안문 장료다! 내가 있는 한 이 관문을 지나갈 수 없다!', en: 'I am Zhang Liao of Yanmen! While I hold this gate, none pass!' },
      { who: 'gaoshun', zh: '진을 깨겠다는 뜻, 죽음은 있어도 물러섬은 없다!', en: 'The Vanguard Breakers know no retreat — only death!' },
    ],
  },
  {
    when: [{ kos: 70, wait: 12 * 60 }, { wait: 40 * 60 }, { down: 'zhangliao' }, { down: 'gaoshun' }],   // (a guard falling brings 呂布 on)
    banner: { html: '<em>공손찬</em> 패퇴. 여포가 다가온다', en: 'Gongsun Zan falls back — Lü Bu is coming', dur: 170 },
    morale: -0.08,
    squads: [{ at: ['hulao', -6, -12], n: 16, charge: true }, { at: ['hulao', 6, -12], n: 16, charge: true }],
    say: [
      { who: 'gongsun', zh: '여포가 너무 용맹해 상대할 수 없다! 어서 물러나라!', en: 'That Lü Bu is too strong! I can\'t hold him — fall back!' },
      { who: 'hero', liubei: ['백규 형님, 당황하지 마시오. 유비가 왔소!', 'Hold fast, Bogui! Liu Bei is here!'],
        guanyu: ['공손 장군, 물러나시오. 관우가 여기 있소!', 'Fall back, General Gongsun. Guan Yu stands here!'],
        zhangfei: ['공손 장군, 걱정 마시오! 여포가 나오면 삼백 합을 겨뤄보겠소!', 'Don\'t panic, General! If Lü Bu shows his face, I\'ll fight him three hundred bouts!'] },
    ],
  },
  {
    when: { down: 'zhangliao' },
    obj: { zh: '관문 수장 고순 격파', en: 'Defeat the gate\'s guardian, Gao Shun', go: 'gaoshun' },
    say: [{ who: 'zhangliao', zh: '...훌륭한 솜씨군. 고순, 관문은 네게 맡긴다!', en: '...Well fought. Gao Shun, the gate is yours!' }],
  },

  // ---- 虎牢關: the gate opens and 呂布 rides out; the brothers fight him together
  {
    when: { down: 'gaoshun' },
    gate: 'hulao', hush: true, retire: true, waves: false, heal: 0.3, morale: 0.1,
    actors: { lubu: LUBU },
    banner: { html: '사람 중<em>여포</em>　말 중<em>적토</em>', en: 'Among men, Lü Bu; among horses, Red Hare', dur: 240, big: true },
    obj: { zh: '여포 격퇴', en: 'Drive back Lü Bu', go: 'lubu' },
    limit: { z: ['hulao', 0, 2] },
    say: [
      { who: 'lubu', zh: '누가 감히 나 여봉선을 막느냐!', en: 'Who dares stand before Lü Fengxian!' },
      { who: 'hero', liubei: ['여포의 용맹은 비할 데 없다. 얕보면 안 된다...', 'Lü Bu has no equal. We cannot take him lightly...'],
        guanyu: ['여포, 관우가 상대해주마!', 'Lü Bu. Guan Yu will face you!'],
        zhangfei: ['여봉선, 천하의 영웅을 얕보지 마라! 내 창이 가만있지 않는다!', 'Fengxian, you have judged every man here too lightly. My spear will correct you!'] },
    ],
  },
  {
    hero: ['liubei'],
    when: { wait: 7 * 60 },
    actors: bros('guanyu', 'zhangfei'),
    banner: { html: '<em>세 영웅과 여포의 싸움</em>', en: 'Three heroes against Lü Bu', dur: 200, big: true },
    say: [
      { who: 'zhangfei', zh: '형님! 내가 왔소!', en: 'Brother! I\'m here!' },
      { who: 'guanyu', zh: '형님, 걱정 마십시오. 관우와 셋째가 함께 왔습니다!', en: 'Fear not, brother. Yide and I are with you!' },
    ],
  },
  {
    hero: ['guanyu'],
    when: { wait: 7 * 60 },
    actors: bros('liubei', 'zhangfei'),
    banner: { html: '<em>세 영웅과 여포의 싸움</em>', en: 'Three heroes against Lü Bu', dur: 200, big: true },
    say: [
      { who: 'zhangfei', zh: '둘째 형님! 여포를 내게도 좀 남겨주시오!', en: 'Brother! Save half of Lü Bu for me!' },
      { who: 'liubei', zh: '우리 삼형제, 오늘 마음을 모아 적을 무찌르자!', en: 'We three brothers fight as one today!' },
    ],
  },
  {
    hero: ['zhangfei'],
    when: { wait: 7 * 60 },
    actors: bros('liubei', 'guanyu'),
    banner: { html: '<em>세 영웅과 여포의 싸움</em>', en: 'Three heroes against Lü Bu', dur: 200, big: true },
    say: [
      { who: 'guanyu', zh: '셋째야, 내가 돕겠다!', en: 'Yide! I\'m with you!' },
      { who: 'liubei', zh: '우리 삼형제, 오늘 마음을 모아 적을 무찌르자!', en: 'We three brothers fight as one today!' },
    ],
  },
  {
    when: { below: ['lubu', 0.5] },
    skip: { down: 'lubu' },
    banner: { html: '<em>여포</em> 분노. 동탁군 지원병이 도착했다!', en: 'Lü Bu rages — Dong Zhuo\'s reinforcements pour out!', dur: 170 },
    waves: true, morale: -0.1,
    squads: [{ at: ['hulao', -14, -10], n: 16, charge: true }, { at: ['hulao', 14, -10], n: 16, charge: true }, { at: ['fore', 0, -0.3], n: 16, charge: true }],
    say: [
      { who: 'lubu', zh: '좋다! 좋아! 이렇게 통쾌한 싸움은 오랜만이구나!', en: 'Good! Good! It\'s been too long since I had a real fight!' },
      { who: 'ally', liubei: ['형님, 지원병은 제가 맡겠습니다. 여포와 싸우십시오!', 'Leave their reinforcements to me, brother. Keep at Lü Bu!'],
        guanyu: ['둘째야, 조금만 더 힘내라!', 'Brother, press him harder!'],
        zhangfei: ['셋째야, 조금만 더 힘내라!', 'Brother, press him harder!'] },
    ],
  },
  {
    when: { below: ['lubu', 0.3] },
    skip: { down: 'lubu' },
    actor: { key: 'lubu', do: 'retreat', at: ['hulao', 0, 18] },      // (his withdrawal counts as down: the win beat follows)
  },
  {
    when: { down: 'lubu' },
    win: true, waves: false, morale: 1,
    banner: { html: '<em>세 영웅과 여포의 싸움</em> — 여포가 관문 안으로 패주했다!', en: 'Three heroes against Lü Bu — Lü Bu flees behind the gate!', dur: 280, big: true },
    say: [{ who: 'lubu', zh: '...셋이 덤비다니 무슨 영웅이냐! 오늘은 살려주겠다!', en: '...Three on one — some heroes! I\'ll spare you today!' },
      { who: 'hero', liubei: ['여포가 패주했다! 동탁의 운이 다했구나!', 'Lü Bu runs! Dong Zhuo\'s fortune is spent!'],
      guanyu: ['여포도 별것 아니군.', 'So that is Lü Bu.'],
      zhangfei: ['여포, 달아나지 마라! 삼백 합 더 싸우자!', 'Come back, Lü Bu! Three hundred more bouts!'] }],
  },
];

// ---- prologue ink map of the 洛陽 – 虎牢 – 酸棗 country (viewBox 1600×900): 黃河 across the north, 邙山 over 洛陽,
// 嵩山 to the south, the pass between them, 汜水 running up into the river, the coalition's camp at 酸棗 in the east
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
const HE = 'M-20 190 C180 235 400 160 620 205 S960 262 1180 205 S1480 160 1620 214';
const SI = 'M932 760 C918 650 940 560 918 470 S902 330 924 222';
const LUO = 'M-20 610 C140 585 250 575 420 598 S600 640 700 610';
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[150, 360, 0.9], [260, 340, 1.1], [380, 355], [500, 345, 0.9], [610, 370, 0.8]], 110, 80)}
    ${peaks([[480, 820, 1.1], [620, 790, 1.3], [760, 815, 1.1], [900, 800, 1.2], [1040, 830, 0.9], [1200, 850, 1.1], [1380, 870]], 140, 100)}
    ${peaks([[1240, 150, 0.7], [1380, 140, 0.8], [1500, 160, 0.7]], 90, 70)}
  </g>
  <g class="pl-mark" data-id="hulao" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[720, 520, 0.9], [790, 505, 1.2], [860, 530, 0.8]], 130, 70)}</g>
  <g class="pl-mark" data-id="he" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${HE}" stroke="#6f7c78" stroke-width="44" opacity=".35"/><path d="${HE}" stroke="#46524f" stroke-width="9" opacity=".7"/>
  </g>
  <g class="pl-mark" data-id="sishui" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${SI}" stroke="#6f7c78" stroke-width="16" opacity=".35"/><path d="${SI}" stroke="#46524f" stroke-width="4" opacity=".7"/>
  </g>
  <g class="pl-mark" data-id="luoyang" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${LUO}" stroke="#6f7c78" stroke-width="18" opacity=".3"/><path d="${LUO}" stroke="#46524f" stroke-width="4" opacity=".6"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark wei" data-id="luoyang"><rect x="262" y="486" width="40" height="40" rx="3"/><text x="236" y="566">낙양</text><text class="sm" x="236" y="610">동탁</text></g>
    <g class="pl-mark wei" data-id="hulao"><rect x="772" y="452" width="30" height="30" rx="3"/><text x="728" y="420">호로관</text></g>
    <g class="pl-mark wei" data-id="sishui"><text x="956" y="520">사수관</text><text class="sm" x="956" y="562">화웅</text></g>
    <g class="pl-mark" data-id="suanzao"><rect x="1330" y="330" width="34" height="34" rx="3"/><text x="1300" y="410">산조</text><text class="sm" x="1300" y="452">맹주 원소</text></g>
    <g class="pl-mark" data-id="he"><text class="sm river" x="520" y="168">황하</text></g>
    <g class="pl-mark" data-id="lubu"><text class="sm" x="720" y="640">여포</text></g>
  </g>`,
  arrows: [
    ['dong0', 'wei', 'M320 500 C440 480 600 470 760 470'],
    ['dong1', 'wei', 'M810 470 C860 480 900 490 944 492'],
    ['coal', 'shu', 'M1330 360 C1240 380 1120 430 1010 480'],
    ['liu', 'shu', 'M1560 70 C1500 150 1440 250 1372 322'],
    ['shu1', 'shu', 'M1000 500 C960 505 920 506 880 500'],
    ['lubu1', 'wei', 'M790 490 C790 540 760 580 730 612'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['초평 원년', '동탁이 천자를 끼고', '수도에서 폭정을 일삼는다'], en: '190 AD. Dong Zhuo holds the boy emperor hostage and rules the capital by terror.',
    show: ['luoyang', 'he'], focus: [420, 440, 1.2] },
  { cols: ['조조가 격문을 돌리자', '관동 제후들이 군을 일으켜', '원소를 맹주로 추대한다'], en: 'Cao Cao sends out the call; the lords east of the passes rise and name Yuan Shao their leader.',
    show: ['suanzao', 'coal'], focus: [1180, 420, 1.2] },
  { cols: ['동탁은 화웅을 보내', '사수관을 지키게 한다', '연합군 장수들을 연달아 베자'], en: 'Dong Zhuo sends Hua Xiong to hold Sishui Pass. General after general of the coalition falls to him.',
    show: ['dong0', 'dong1', 'sishui', 'hulao'], focus: [760, 500, 1.15] },
  { liubei: { cols: ['평원 현령 유비가', '관우와 장비를 이끌고', '공손찬을 따라 합류한다'], en: 'Liu Bei, magistrate of Pingyuan, rides in with Gongsun Zan, his sworn brothers Guan Yu and Zhang Fei at his side.' },
    guanyu: { cols: ['유비의 막하에서', '마궁수 관우가', '화웅을 베겠다고 나선다'], en: 'Guan Yu, a mere mounted archer under Liu Bei, asks leave to cut down Hua Xiong.' },
    zhangfei: { cols: ['연인 장비가', '형 유비를 따라', '연합군에 합류한다'], en: 'Zhang Fei of Yan rides with his elder brother Liu Bei to join the coalition.' },
    show: ['liu', 'shu1'], focus: [1180, 330, 1.3] },
  { cols: ['호로관 위에서', '여포가 군을 이끈다', '천하무쌍'], en: 'And on Hulao Gate waits Lü Bu — the mightiest warrior under heaven.',
    show: ['lubu', 'lubu1'], focus: [780, 520, 1.4] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  liubei: {
    zh: ['세 영웅과 싸운 여포는 관문 안으로 패주했다. 동탁은 연합군을 두려워해 낙양을 불태우고 천자를 데리고 장안으로 옮겼다.', '유비·관우·장비의 이름이 천하에 알려졌다. 하지만 제후들은 뜻이 달라 연합군은 결국 흩어졌다.'],
    en: ['Lü Bu fled behind the gate. Fearing the coalition, Dong Zhuo burned Luoyang and dragged the emperor west to Chang\'an.',
      'From that day the names of Liu, Guan and Zhang were known across the land — but the lords, each with his own ambitions, soon went their separate ways.'],
  },
  guanyu: {
    zh: ['술이 식기 전에 화웅을 벤 한 칼에 제후들이 놀랐다. 호로관에서는 세 영웅이 여포를 물리쳤다.', '동탁은 낙양을 불태우고 장안으로 갔다. 관운장의 이름은 천하에 알려졌다.'],
    en: ['One stroke over a cup of warm wine made Guan Yu the talk of the lords; before Hulao Gate the three brothers drove Lü Bu back.',
      'Dong Zhuo burned Luoyang and fled west to Chang\'an. The name of Guan Yunchang was known across the land.'],
  },
  zhangfei: {
    zh: ['장비가 장팔사모로 여포와 오십 합을 겨뤘다. 관우와 유비도 합세하자 여포는 패주했다.', '동탁은 낙양을 불태우고 장안으로 천도했다. 연인 장비의 이름은 천하에 울려 퍼졌다.'],
    en: ['Zhang Fei took on Lü Bu with his serpent spear for fifty bouts; Guan Yu and Liu Bei joined him, and Lü Bu fled.',
      'Dong Zhuo burned Luoyang and moved the capital to Chang\'an. The name "Zhang Fei of Yan" rang across the land.'],
  },
};
