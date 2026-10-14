// 第三章「赤壁」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 赤壁 ink map (PL_MAP) and the epilogue.
// History (winter 208 AD, 赤壁之戰): 曹操, master of 荊州, sails down the Yangtze and chains his fleet at 烏林; 孫權 and
// 劉備 ally; 周瑜 plans a fire attack with 黃蓋's feigned surrender, but the winter wind blows from the north-west — 諸葛亮
// raises the 七星壇 on 南屏山 and "borrows" the south-east wind (借東風); 周瑜 sends 丁奉 and 徐盛 to kill him, but he
// slips away on 趙雲's boat; 黃蓋's fire ships ram the chained fleet (火燒연환선), the fire spreads to the camps ashore,
// and 曹操 flees by 烏林 and the 華容道 (趙雲's ambush west of 烏林, 張遼 covering him). Played as either officer: `hero` =
// the chosen one, `ally` = the other one (his pixel portrait). Everyone else speaks under a seal portrait.
// Map (src/world/maps/chibi.js): anchors altar / gate / boat / tent / mouth / road; gate 'shuizhai'; set pieces 'wind'
// (the east wind), 'ignite' (黃蓋's fire boats and the burning fleet), 'forest' (烏林 catches).

export const CH = {
  id: 'chibi', num: { zh: '제3장', en: 'CHAPTER III' }, title: { zh: '적벽', en: 'Red Cliffs' },
  seal: '연환선 화공', era: { zh: '건안 13년 겨울', en: 'Winter, 208 AD' }, map: 'chibi',
  heroes: ['zhugeliang', 'zhaoyun'],
  ally: { zhugeliang: 'zhaoyun', zhaoyun: 'zhugeliang' },
  army: { foe: 'cao', ally: 'liu' },
  // the altar guard drawn up either side of the altar, holding rank until the hero leaves the mesa
  van: [{ x: -24, z: -158, n: 10, cols: 5, hold: true }, { x: 12, z: -166, n: 10, cols: 5, hold: true }],
  hq: [-12, 130],                                  // 曹操's command pavilion at 烏林
  rank: { kos: [600, 1200, 2000], time: [600, 780, 960] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  zhouyu: { name: { zh: '주유', en: 'Zhou Yu' }, seal: '瑜', side: 'shu' },
  huanggai: { name: { zh: '황개', en: 'Huang Gai' }, seal: '蓋', side: 'shu' },
  lusu: { name: { zh: '노숙', en: 'Lu Su' }, seal: '肅', side: 'shu' },
  caocao: { name: { zh: '조조', en: 'Cao Cao' }, seal: '操', side: 'wei' },
  caihe: { name: { zh: '채화', en: 'Cai He' }, seal: '和', side: 'wei' },
  dingfeng: { name: { zh: '정봉', en: 'Ding Feng' }, seal: '奉', side: 'wei' },
  xusheng: { name: { zh: '서성', en: 'Xu Sheng' }, seal: '盛', side: 'wei' },
  zhangnan: { name: { zh: '장남', en: 'Zhang Nan' }, seal: '南', side: 'wei' },
  maojie: { name: { zh: '모개', en: 'Mao Jie' }, seal: '玠', side: 'wei' },
  yujin: { name: { zh: '우금', en: 'Yu Jin' }, seal: '禁', side: 'wei' },
  caoren: { name: { zh: '조인', en: 'Cao Ren' }, seal: '仁', side: 'wei' },
  xuhuang: { name: { zh: '서황', en: 'Xu Huang' }, seal: '晃', side: 'wei' },
  zhangliao: { name: { zh: '장료', en: 'Zhang Liao' }, seal: '遼', side: 'wei' },
  soldier: { name: { zh: '조조군 병사', en: 'Cao Soldier' }, seal: '兵', side: 'wei' },
};

// officers (crowd.spawnOfficer). 丁奉 / 徐盛 are 周瑜's men (吳 red lacquer), sent for Kongming: no KO banner, the
// script says they fall back. The admirals and 烏林's generals ≈ 2 combos more than a default officer each.
const WU = { armor: 0x4a1a14, trim: 0xd8b050, cape: 0x8a2418 };
export const OFF = {
  caihe: { name: { zh: '채화', en: 'CAI HE' }, hp: 600, look: { helm: 'cap', armor: 0x243048, trim: 0xc0c8d4, cape: 0x1a2a50, plume: 0x3c7cf0 } },
  dingfeng: { name: { zh: '정봉', en: 'DING FENG' }, hp: 520, boss: true, look: { ...WU, helm: 'wing', plume: 0xe8c050 } },
  xusheng: { name: { zh: '서성', en: 'XU SHENG' }, hp: 520, boss: true, look: { ...WU, helm: 'crest', plume: 0xf0e0c0 } },
  zhangnan: { name: { zh: '장남', en: 'ZHANG NAN' }, hp: 700 },
  maojie: { name: { zh: '모개', en: 'MAO JIE' }, hp: 850, look: { helm: 'cap', armor: 0x243048, trim: 0xc0c8d4, cape: 0x1a2a50, plume: 0x3c7cf0 } },
  yujin: { name: { zh: '우금', en: 'YU JIN' }, hp: 1000, look: { helm: 'crest', armor: 0x1e2436, trim: 0xe0b450, cape: 0x2a3a7a, plume: 0xe8eef8 } },
  caoren: { name: { zh: '조인', en: 'CAO REN' }, hp: 1100, look: { helm: 'horn', armor: 0x2a2a34, trim: 0xb08a50, cape: 0x3a2e44, plume: 0x2a64dc } },
  xuhuang: { name: { zh: '서황', en: 'XU HUANG' }, hp: 1100, look: { helm: 'crest', armor: 0x28304a, trim: 0xc0c8d4, cape: 0x1a2a50, plume: 0x3c7cf0 } },
  guard: { name: { zh: '친위대장', en: 'GUARD CAPTAIN' }, hp: 320 },
};

const NAG = { who: 'lusu', zh: '장군, 기다리십시오! 동풍이 불기 전까지 칠성단을 지켜야 합니다!', en: 'Wait, General! The wind has not risen yet — the altar must not fall!' };
const NAG_BANK = { who: 'zhouyu', zh: '홀로 깊이 들어가지 마십시오! 먼저 강기슭에서 황개와 합류하십시오.', en: 'Don\'t press on alone! Join Huang Gai at the landing first.' };
const NAG_GATE = { who: 'huanggai', zh: '수상 진영 문이 닫혔습니다! 수장 모개와 우금을 먼저 베십시오!', en: 'The water camp gate is barred! Cut down Mao Jie and Yu Jin who hold it!' };
const NAG_WOOD = { who: 'zhouyu', zh: '오림에 아직 조인과 서황이 있습니다. 함부로 나아가면 안 됩니다!', en: 'Cao Ren and Xu Huang still hold Wulin. Don\'t push on yet!' };
// The altar anchor lies inside its solid base. Guard its walkable south stair, within reach of a close-range sweep.
const ALTAR_GUARD = ['altar', 0, -15];

// Pacing (default difficulty): a scripted bot that attacks nonstop clears in ≈ 7.5 min with ≈ 3000 KOs (altar 2 min
// fixed by the wind's timer · the pursuers and the landing 70 s · the fire and the gate 90 s · camp and 烏林 80 s ·
// 張遼 2 min); a human reading the dialogue lands at ≈ 10-13 min. Rank thresholds: CH.rank.
export const BEATS = [
  // ---- 南屏山 七星壇: hold the altar until the third watch, when the wind turns
  {
    when: { wait: 30 },
    obj: { zh: '동풍이 불 때까지 칠성단 지키기', en: 'Guard the Altar of the Seven Stars until the east wind rises', go: ALTAR_GUARD, timer: 120 },
    defend: { key: 'altar', at: ALTAR_GUARD, r: 6, hp: 600, name: { zh: '칠성단', en: 'Seven Stars Altar' } },
    fail: { when: { hp: ['altar', 0.001] }, zh: '칠성단이 함락됐다. 동풍은 끝내 불지 않았다...', en: 'The altar has fallen — and the east wind never came.' },
    limit: { z: ['altar', 0, 13], nag: NAG },
    squads: [{ at: ['altar', 22, 2], n: 14 }, { at: ['altar', -24, -4], n: 14 }],
    morale: 0,
    say: [
      { who: 'lusu', zh: '삼경이 다가오는데 강에는 아직 북서풍이 붑니다... 공명 선생, 정말 바람을 빌릴 수 있습니까?', en: 'The third watch is near, and still the wind blows from the north-west... Master Kongming, can you truly borrow the wind?' },
      { who: 'hero', zhugeliang: ['자경, 안심하게. 오늘 밤 삼경에 반드시 동남풍이 불 것이네.', 'Rest easy, Zijing. At the third watch tonight, the south-east wind will rise.'],
        zhaoyun: ['군사께서 단 위에서 의식을 치르신다. 자룡이 있는 한 아무도 다가오지 못한다!', 'The Strategist works his rite above. While Zilong stands here, no one comes one step nearer!'] },
      { who: 'ally', zhugeliang: ['군사께서는 바람에만 집중하십시오. 단 아래는 제가 맡겠습니다!', 'Call the wind, Strategist. Leave the foot of the altar to me!'],
        zhaoyun: ['자룡, 조조의 첩자가 이 단을 알아냈네. 누구도 올라오지 못하게 지켜주게.', 'Zilong, Cao Cao\'s spies know of this altar. Hold it — let no one set foot on it.'] },
    ],
  },
  {
    when: [{ kos: 30 }, { wait: 20 * 60 }],
    waves: true,
    say: [{ who: 'soldier', zh: '남병산 위에 요술 단이 있다! 불태워라!', en: 'There\'s a witch\'s altar on the hill! Burn it!' }],
  },
  {
    when: [{ kos: 50, wait: 10 * 60 }, { wait: 45 * 60 }],
    skip: { timer: true },
    officers: { caihe: { at: ['altar', 20, 8], engaged: true } },
    squads: [{ at: ['altar', 18, 11], n: 12, charge: true }],
    obj: { zh: '첩자 채화 격파', en: 'Cut down the spy, Cai He', go: 'caihe', keepTimer: true },
    say: [
      { who: 'caihe', zh: '승상의 밀명이다. 이 요술 단을 파괴하라!', en: 'By the Chancellor\'s secret order — tear down this witch\'s altar!' },
      { who: 'hero', zhugeliang: ['채화? 네 거짓 항복은 주유가 이미 꿰뚫어 보았다.', 'Cai He? Zhou Yu saw through your false surrender long ago.'],
        zhaoyun: ['단을 부수려느냐? 먼저 자룡을 넘어야 할 것이다!', 'You want the altar? Get past me first!'] },
    ],
  },
  {
    when: { down: 'caihe' },
    skip: { timer: true },
    banner: { html: '첩자 <em>채화</em> 토벌!', en: 'The spy Cai He is cut down', dur: 150 },
    obj: { zh: '동풍이 불 때까지 칠성단 지키기', en: 'Guard the Altar of the Seven Stars until the east wind rises', go: ALTAR_GUARD, keepTimer: true },
    heal: 0.25, morale: 0.1, hush: true,
    say: [{ who: 'lusu', zh: '좋습니다! 단 앞은 안정됐습니다. 하지만 바람이...', en: 'Well fought! The altar holds. But the wind...' }],
  },
  // the third watch: the wind turns (set 'wind'); 周瑜, afraid of such a man, sends 丁奉 and 徐盛 to kill him
  {
    when: { timer: true },
    set: 'wind', defend: null, fail: null, waves: false, heal: 0.3, morale: 0.2, hush: true,
    banner: { html: '<em>동남풍</em> 분다!', en: 'The south-east wind rises!', dur: 260, big: true },
    obj: { zh: '강기슭으로 이동', en: 'Make for the riverbank', go: ['beach', 0.25, -0.7] },
    limit: { z: ['beach', 0, -0.62], nag: NAG_BANK },
    say: [
      { who: 'lusu', zh: '바람... 바람이 바뀌었습니다! 정말 동남풍입니다!', en: 'The wind... the wind has turned! It truly blows from the south-east!' },
      { who: 'hero', zhugeliang: ['강의 바람이 바뀌었네. 황 노장에게 계획대로 배를 보내라 하게.', 'The gusts favor our course. Send Huang Gai the signal and put the plan in motion.'],
        zhaoyun: ['군사께서는 참으로 신인이십니다!', 'The Strategist commands heaven itself!'] },
      { who: 'zhouyu', zh: '저자는 천지의 이치를 다루는구나... 살려두면 동오의 화근이 된다. 정봉, 서성, 남병산으로 가라!', en: 'This man bends heaven and earth to his will... Leave him alive and he will ruin Wu. Ding Feng, Xu Sheng — to the altar!' },
      { who: 'ally', zhugeliang: ['군사, 주 도독의 군대가 단으로 옵니다! 배가 강가에 있으니 서두르십시오!', 'Strategist, Zhou Yu\'s men are coming up the hill! My boat waits at the river — quickly!'],
        zhaoyun: ['자룡, 주유가 나를 용납하지 않는군. 배가 강가에 있으니 서둘러 가세.', 'Zilong, Zhou Yu will not suffer me to live. The boat is at the river — let us go.'] },
    ],
  },
  {
    when: { wait: 6 * 60 },
    officers: { dingfeng: { at: ['altar', 17, 12], engaged: true }, xusheng: { at: ['altar', 11, 14], engaged: true } },
    obj: { zh: '정봉·서성 격퇴', en: 'Drive off Ding Feng and Xu Sheng', go: 'dingfeng' },
    say: [
      { who: 'dingfeng', zh: '도독의 명령이다. 제갈량의 목을 가져와라!', en: 'By the Commander\'s order — Zhuge Liang\'s head!' },
      { who: 'hero', zhugeliang: ['주유가 역시 왔군. 하지만 나는 함께할 수 없네.', 'So Zhou Yu sends for me after all. A pity — I shan\'t be staying.'],
        zhaoyun: ['군사를 해치려거든 내 창부터 상대해라!', 'Harm the Strategist? Ask my spear first!'] },
      { who: 'xusheng', zh: '도망치지 마라!', en: 'Don\'t let him get away!' },
    ],
  },
  {
    when: { down: 'dingfeng' },
    say: [{ who: 'dingfeng', zh: '너무 강하다... 서 장군, 물러나세!', en: 'Too strong... General Xu, fall back!' }],
  },
  {
    when: { down: 'xusheng' },
    banner: { html: '<em>정봉・서성</em> 퇴각', en: 'Ding Feng and Xu Sheng fall back', dur: 150 },
    heal: 0.2, morale: 0.1, hush: true, retire: true,
    obj: { zh: '강기슭에 상륙해 황개와 합류', en: 'Join Huang Gai at the riverbank landing', go: ['boat', -8, 0] },
    limit: { z: ['gate', 0, -12], nag: NAG_BANK },
    say: [
      { who: 'xusheng', zh: '제갈량이 미리 준비했구나... 도독께 보고하라!', en: 'Zhuge Liang was ready for us... Report to the Commander!' },
      { who: 'ally', zhugeliang: ['군사, 황 노장의 선단이 강기슭에 도착했습니다!', 'Strategist, old General Huang\'s boats are at the landing!'],
        zhaoyun: ['자룡, 강기슭으로 가세. 황공복의 화선은 이 바람만 기다렸네.', 'To the riverbank, Zilong. Huang Gongfu\'s fire ships wait only for this wind.'] },
    ],
  },

  // ---- 江岸: 張南's pickets on the landing, then 黃蓋's fire ships
  {
    when: { zone: 'beach' },
    squads: [{ at: ['beach', -0.5, -0.35], n: 20 }, { at: ['beach', 0.3, -0.15], n: 20 }, { at: ['beach', -0.3, 0.3], n: 22 }, { at: ['beach', 0.4, 0.55], n: 20 }],
    officers: { zhangnan: { at: ['beach', 0.1, 0.6] } },
    waves: true,
    obj: { zh: '강기슭 수장 장남 격파', en: 'Defeat the riverbank commander, Zhang Nan', go: 'zhangnan' },
    say: [
      { who: 'huanggai', zh: '조조군 정찰선이 우릴 봤네! 강기슭을 정리해야 화선을 보낼 수 있네!', en: 'Cao\'s picket boats have spotted us! Clear the bank so the fire ships can put out!' },
      { who: 'zhangnan', zh: '오나라 개들은 수상 진영에 한 발짝도 다가오지 못한다!', en: 'Not one step nearer the water camp, Wu dogs!' },
    ],
  },
  {
    when: { down: 'zhangnan' },
    banner: { html: '<em>강기슭</em> 탈취!', en: 'The riverbank is ours', dur: 150 },
    heal: 0.3, morale: 0.15, hush: true, retire: true, waves: false,
    set: 'ignite',
    obj: { zh: '화선 도착 기다리기', en: 'Watch the fire ships go in', go: ['gate', 0, -14] },
    say: [
      { who: 'zhouyu', zh: '동남풍이 거세다! 황공복, 배를 보내라!', en: 'The south-east wind is strong! Huang Gongfu — loose the ships!' },
      { who: 'huanggai', zh: '명을 받들겠습니다! 화선 일제 출발, 조조의 연환선에 들이받아라!', en: 'At your command! All fire ships — into Cao\'s chained fleet!' },
      { who: 'hero', zhugeliang: ['쇠사슬로 연결된 배는 하나만 불타도 백 척이 함께 타지.', 'Ships chained together: set one alight, and a hundred burn.'],
        zhaoyun: ['보십시오! 화선이 바람을 타고 화살처럼 나아갑니다!', 'Look! The fire ships run before the wind like arrows!'] },
    ],
  },
  {
    when: { wait: 9 * 60 },
    banner: { html: '<em>연환선 화공</em>', en: 'Fire on the chained fleet!', dur: 300, big: true },
    morale: 0.25, waves: true,
    officers: { maojie: { at: ['gate', -8, -7] }, yujin: { at: ['gate', 8, -7] } },
    squads: [{ at: ['gate', -10, -13], n: 18 }, { at: ['gate', 10, -13], n: 18 }, { at: ['beach', 0.2, 0.3], n: 18, charge: true }],
    obj: { zh: '모개·우금을 격파하고 수상 진영 돌파', en: 'Defeat Mao Jie and Yu Jin and break into the water camp', go: 'maojie' },
    limit: { z: ['gate', 0, -3], nag: NAG_GATE },
    say: [
      { who: 'soldier', zh: '배... 배가 모두 불탄다! 쇠사슬이 연결돼 풀 수가 없다!', en: 'The ships... the ships are burning! They\'re chained — we can\'t cut them loose!' },
      { who: 'maojie', zh: '당황하지 마라! 문을 지켜라, 누구도 들어오지 못하게 하라!', en: 'Hold your nerve! Hold the gate — let no one through!' },
      { who: 'yujin', zh: '우금이 여기 있다. 이 진영은 쉽게 무너지지 않는다!', en: 'Yu Jin stands here. This camp will not fall easily!' },
    ],
  },
  {
    when: { down: 'maojie' },
    obj: { zh: '우금을 격파하고 수상 진영 돌파', en: 'Defeat Yu Jin and break into the water camp', go: 'yujin' },
    say: [{ who: 'yujin', zh: '모개!... 젠장, 불길이 진영 앞까지 왔다!', en: 'Mao Jie!... Curse it, the fire is at the stockade!' }],
  },
  {
    when: { down: 'yujin' },
    gate: 'shuizhai', heal: 0.3, morale: 0.15, retire: true, hush: true,
    banner: { html: '<em>조조군 수상 진영</em> 돌파!', en: 'The Cao water camp is broken open!', dur: 180 },
    obj: { zh: '수상 진영을 돌파해 오림으로 진격', en: 'Cut through the water camp to Wulin', go: ['wulin', 0, -0.8] },
    limit: { z: ['wulin', 0, 0.1], nag: NAG_WOOD },
    squads: [{ at: ['shuizhai', -0.3, -0.5], n: 18 }, { at: ['shuizhai', 0.3, -0.1], n: 18 }, { at: ['shuizhai', -0.2, 0.4], n: 20 }],
    say: [
      { who: 'huanggai', zh: '하하하! 조조, 이 늙은이의 거짓 항복이 어떤가!', en: 'Ha! Cao, you traitor — how do you like the old man\'s false surrender now?' },
      { who: 'ally', zhugeliang: ['군사, 불이 강기슭까지 번져 조조군이 혼란에 빠졌습니다!', 'Strategist, the fire has spread ashore — Cao\'s army is in chaos!'],
        zhaoyun: ['자룡, 오림으로 진격하게! 조조는 반드시 그곳으로 달아날 것이네.', 'Zilong, straight on to Wulin! That is where Cao Cao will run.'] },
    ],
  },

  // ---- 烏林: the woods catch (set 'forest'); 曹仁 and 徐晃 hold the land camp
  {
    when: { zone: 'wulin' },
    set: 'forest', waves: true,
    banner: { html: '바람이 불길을 키워 <em>오림</em> 불이 번진다!', en: 'The wind drives the fire into the woods of Wulin!', dur: 200 },
    officers: { caoren: { at: ['wulin', -0.35, 0.05] }, xuhuang: { at: ['wulin', 0.4, 0.15] } },
    squads: [{ at: ['wulin', -0.4, -0.2], n: 20 }, { at: ['wulin', 0.35, -0.1], n: 20 }, { at: ['wulin', 0, 0.35], n: 22 }],
    obj: { zh: '조인·서황 격파', en: 'Defeat Cao Ren and Xu Huang', go: 'caoren' },
    say: [
      { who: 'caoren', zh: '오림을 사수하라! 승상의 본진에 적을 들일 수 없다!', en: 'Hold Wulin to the death! No enemy sets foot in the Chancellor\'s camp!' },
      { who: 'xuhuang', zh: '숲이 불타고 있다... 대열을 유지하라!', en: 'The woods are burning... hold your ranks!' },
    ],
  },
  {
    when: { down: 'caoren' },
    obj: { zh: '서황 격파', en: 'Defeat Xu Huang', go: 'xuhuang' },
    say: [{ who: 'xuhuang', zh: '조인 장군!... 제가 갑니다!', en: 'General Cao Ren!... I\'m coming!' }],
  },
  {
    when: { down: 'xuhuang' },
    heal: 0.3, morale: 0.15, retire: true, hush: true, waves: false,
    banner: { html: '<em>오림</em> 본진 돌파!', en: 'The camp at Wulin is taken!', dur: 170 },
    // 曹操 (npc actor: he never fights) stands before his pavilion and laughs at his enemies — then the ambush
    actors: { caocao: { kit: 'caocao', role: 'npc', at: ['tent', 0, -9], name: { zh: '조조', en: 'CAO CAO' }, seal: '操' } },
    actor: { key: 'caocao', do: 'hold', at: ['tent', 0, -9] },
    obj: { zh: '조조 추격', en: 'Pursue Cao Cao', go: 'caocao' },
    limit: { z: ['mouth', 0, 2], nag: NAG_WOOD },
    say: [
      { who: 'caocao', zh: '하하하... 다들 주유와 제갈량이 지혜롭다지만, 내 눈에는 무능한 자들이다. 여기에 군사를 매복시켰다면 우린 모두 사로잡혔을 텐데!', en: 'Ha ha ha... They call Zhou Yu and Zhuge Liang masters of strategy. Fools! Had they set one ambush here, we would all be taken.' },
      { who: 'hero', zhugeliang: ['승상, 웃음이 너무 이릅니다. 제가 여기서 오래 기다렸습니다.', 'You laugh too soon, Chancellor. I have been waiting for you.'],
        zhaoyun: ['조자룡이 군사의 명을 받아 여기서 오래 기다렸다!', 'Zhao Zilong, by the Strategist\'s order — I have been waiting for you!'] },
    ],
  },
  {
    when: [{ near: [['tent', 0, -9], 18] }, { wait: 14 * 60 }],
    actors: { zhangliao: { kit: 'zhangliao', role: 'boss', at: ['mouth', 0, -4], hp: 2600, name: { zh: '장료', en: 'ZHANG LIAO' }, seal: '遼',
      retreatAt: 0.3, intro: { zh: '소요진을 떨게 한 장문원', en: 'Zhang Wenyuan, terror of the south' } } },
    actor: { key: 'caocao', do: 'retreat', at: ['road', 0, 0] },
    banner: { html: '<em>장료</em> 후위를 맡는다!', en: 'Zhang Liao covers the retreat!', dur: 170, big: true },
    obj: { zh: '장료 격퇴', en: 'Drive back Zhang Liao', go: 'zhangliao' },
    waves: true,
    say: [
      { who: 'caocao', zh: '문원, 뒤를 맡아라! 화용도로 간다!', en: 'Wenyuan, hold the rear! We take the Huarong road!' },
      { who: 'zhangliao', zh: '승상, 먼저 가십시오! 장료가 있는 한 아무도 지나갈 수 없다!', en: 'Go, my lord! While Zhang Liao holds this road, no one passes!' },
      { who: 'hero', zhugeliang: ['장문원, 충성과 용기는 훌륭하네. 다만 주인을 잘못 골랐군.', 'Zhang Wenyuan — loyal and brave. What a pity about the master you serve.'],
        zhaoyun: ['장료, 비켜라!', 'Out of my way, Zhang Liao!'] },
    ],
  },
  {
    when: { below: ['zhangliao', 0.6] },
    skip: { down: 'zhangliao' },
    banner: { html: '조조군 잔당 <em>목숨을 걸고</em> 지원한다!', en: 'Cao\'s last men throw themselves into the fight!', dur: 160 },
    morale: -0.1,
    squads: [{ at: ['mouth', -8, 10], n: 16, charge: true }, { at: ['mouth', 8, 6], n: 16, charge: true }, { at: ['mouth', 0, -16], n: 16, charge: true }],
    officers: { guard1: { at: ['mouth', -4, 8], engaged: true, like: 'guard' }, guard2: { at: ['mouth', 4, 8], engaged: true, like: 'guard' } },
    say: [
      { who: 'zhangliao', zh: '승상께서 멀리 가셨는가... 조금만 더 버티자!', en: 'Is the Chancellor clear yet?... A little longer!' },
      { who: 'ally', zhugeliang: ['군사, 지원군은 제가 맡겠습니다. 장료에게 집중하십시오!', 'Strategist, leave their reinforcements to me — you take Zhang Liao!'],
        zhaoyun: ['자룡, 싸움에 매달리지 말게. 장료를 물리치면 조조는 운장에게 걸릴 것이네.', 'Zilong, don\'t tarry. Drive Zhang Liao off — Cao Cao runs straight into Yunchang\'s hands.'] },
    ],
  },
  {
    when: { down: 'zhangliao' },
    win: true, waves: false, morale: 1,
    banner: { html: '<em>조조</em> 패주！', en: 'Cao Cao is put to flight!', dur: 260, big: true },
    say: [{ who: 'hero', zhugeliang: ['팔십만 대군이 하룻밤에 재가 되었다. 천하삼분은 여기서 시작된다.', 'Eight hundred thousand, gone to ash in a night. So begins the land\'s division in three.'],
      zhaoyun: ['조조가 화용도로 패주했다! 이번 싸움은 대승이다!', 'Cao Cao flees down the Huarong road! The day is ours!'] }],
  },
];

// ---- prologue ink map of the middle Yangtze (viewBox 1600×900, north up): 江陵 upstream, the river bending past 赤壁
// (south bank) and 烏林 (north bank) to 하구, the 雲夢 marshes, the road north-west from 烏林 through 華容
const JIANG = 'M-20 330 C120 318 220 350 320 392 S520 520 640 548 S800 600 900 580 S1080 470 1200 430 S1420 372 1620 360';
const HAN = 'M1240 120 C1260 220 1238 320 1262 402';
const marsh = (list) => list.map(([x, y, w]) => `<path d="M${x - w} ${y} q${w * 0.5} -9 ${w} 0 t${w} 0"/>`).join('');
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[90, 160, 1.1], [240, 140], [380, 170, 0.9], [1360, 150, 1.1], [1500, 170], [1580, 140, 0.9]], 110, 90)}
    ${peaks([[160, 900, 1.2], [360, 880], [560, 905, 1.1], [1060, 890, 0.9], [1260, 905, 1.2], [1460, 885]], 120, 100)}
  </g>
  <g class="pl-mark" data-id="chibi" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[780, 660, 0.7], [840, 650, 0.9], [900, 668, 0.6]], 90, 60)}</g>
  <g class="pl-mark" data-id="yunmeng" filter="url(#pl-ink)" fill="none" stroke="#56625e" stroke-width="3" opacity=".55" stroke-linecap="round">
    ${marsh([[430, 420, 26], [520, 440, 22], [470, 470, 30], [600, 470, 24], [380, 460, 20], [560, 405, 18], [650, 440, 20]])}
  </g>
  <g class="pl-mark" data-id="jiang" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${JIANG}" stroke="#6f7c78" stroke-width="42" opacity=".32"/><path d="${JIANG}" stroke="#46524f" stroke-width="8" opacity=".7"/>
    <path d="${HAN}" stroke="#6f7c78" stroke-width="18" opacity=".3"/><path d="${HAN}" stroke="#46524f" stroke-width="5" opacity=".6"/>
  </g>
  <g class="pl-mark" data-id="huarong" filter="url(#pl-ink)" fill="none" stroke="#3e3430" stroke-width="4" stroke-dasharray="3 11" stroke-linecap="round" opacity=".7">
    <path d="M760 520 C660 470 560 380 470 330 S300 318 214 318"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark wei" data-id="jiangling"><rect x="186" y="290" width="32" height="32" rx="3"/><text x="146" y="274">강릉</text></g>
    <g class="pl-mark wei" data-id="huarong"><rect x="456" y="300" width="26" height="26" rx="3"/><text x="440" y="284">화용</text></g>
    <g class="pl-mark wei" data-id="wulin"><text x="700" y="488">오림</text><text class="sm" x="742" y="530">연환선</text></g>
    <g class="pl-mark" data-id="chibi"><text x="800" y="718">적벽</text></g>
    <g class="pl-mark" data-id="xiakou"><rect x="1250" y="412" width="30" height="30" rx="3"/><text x="1234" y="480">하구</text></g>
    <g class="pl-mark" data-id="yunmeng"><text class="sm" x="470" y="520">운몽택</text></g>
    <g class="pl-mark" data-id="jiang"><text class="sm river" x="1020" y="560">장강</text></g>
  </g>`,
  arrows: [
    ['cao1', 'wei', 'M214 336 C340 376 520 470 700 500'],
    ['ally1', 'shu', 'M1250 440 C1130 490 1000 590 880 626'],
    ['fire', 'shu', 'M880 640 C900 600 870 562 800 530'],
    ['flee', 'wei', 'M740 500 C640 450 560 372 482 326'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['건안 13년 겨울', '조조가 형주를 얻고', '강을 따라 동쪽으로 내려온다'], en: 'Winter, 208 AD. Master of Jingzhou, Cao Cao sails east down the Yangtze from Jiangling.',
    show: ['jiang', 'jiangling', 'cao1'], focus: [470, 420, 1.12] },
  { cols: ['북군은 수전에 익숙하지 않아', '쇠사슬로 배를 연결하고', '오림에 주둔한다'], en: 'His northerners are no sailors: he chains his ships together with iron and moors them at Wulin.',
    show: ['wulin', 'yunmeng'], focus: [720, 480, 1.3] },
  { cols: ['손권과 유비가 동맹을 맺고', '주유는 적벽에 군을 주둔시킨다', '황개가 화공을 제안한다'], en: 'Sun Quan and Liu Bei join hands. Zhou Yu holds the Red Cliffs, and Huang Gai proposes an attack by fire.',
    show: ['ally1', 'chibi', 'xiakou'], focus: [980, 540, 1.15] },
  { zhugeliang: { cols: ['모든 준비가 끝났으나', '동풍만 부족하다', '공명이 단을 쌓고 바람을 기원한다'], en: '"All is ready — all but the east wind." Kongming raises an altar on Nanping Hill to call it.' },
    zhaoyun: { cols: ['상산 조운은', '명을 받아 군사를 호위하고', '칠성단을 지킨다'], en: 'Zhao Yun of Changshan is ordered to guard the Strategist at the Altar of the Seven Stars.' },
    show: ['fire'], focus: [830, 590, 1.42] },
  { cols: ['이 싸움의 승패와', '천하삼분이', '하룻밤에 결정된다'], en: 'Win or lose, a single night will decide whether the land splits in three.',
    show: ['flee', 'huarong'], focus: [700, 460, 1.04] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  zhugeliang: {
    zh: ['동남풍이 거세게 불자 황개의 화선이 조조군에 돌입했다. 연환선이 모두 불바다가 되고 기슭의 진영까지 불길이 번졌다.', '조조는 화용도로 패주했다. 관우는 옛 은혜를 떠올려 조조를 놓아주었다. 공명은 웃으며 말했다. "조조의 명이 아직 다하지 않았으니, 운장이 은혜를 갚게 한 것도 좋은 일이지."'],
    en: ['The south-east wind roared. Huang Gai\'s fire ships drove into Cao\'s lines; the chained fleet became a sea of flame that spread to the camps ashore.',
      'Cao Cao fled by the Huarong road, where Guan Yu, remembering an old debt, let him pass. Kongming only smiled: "His time has not yet come. Let Yunchang repay his kindness — that too is well."'],
  },
  zhaoyun: {
    zh: ['조운이 오림 서쪽에 매복해 조조군을 막았다. 조조는 겨우 몸만 빠져나와 화용도로 달아났다.', '관우는 화용도에서 조조를 놓아주었다. 조조가 북쪽으로 돌아가고 손권과 유비가 형주를 나눠 차지하자 천하삼분의 형세가 이루어졌다.'],
    en: ['Zhao Yun sprang his ambush west of Wulin and cut the fleeing army to pieces; Cao Cao escaped with his life alone, down the Huarong road.',
      'There Guan Yu, remembering an old debt, let him go. Cao Cao went north, Sun and Liu divided Jingzhou — and the land was set to split in three.'],
  },
};
