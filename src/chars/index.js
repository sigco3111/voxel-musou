// Character registry: metadata for the title / select / HUD / story screens, plus each character's kit (what the generic
// hero, combat, musou, vfx and audio code reads from game.hero.kit instead of importing a character's modules).
//
// char = {
//   id
//   name {zh, en}, courtesy {zh, en}, seal (red HUD seal: 2 glyphs), title {zh, en} (epithet), motto (HUD intro subline)
//   weapon {zh, en}, bio {zh: [2 lines], en: [2 lines]}, stats {atk, def, speed, range} 1-5, musou {zh, en} (Musou name)
//   accent             CSS colour of the character (select screen / HUD highlights)
//   side?              {zh, en} faction on the select screen (default 蜀 Shu Han)
//   lines              voice lines the HUD / story show: intro (battle start), musouEnd (shout after the Musou) {zh, en};
//                      copy: [2 short lines] of vertical calligraphy shown while the Musou plays
//   portrait {face, pal} 20×20 pixel portrait: rows of palette keys ('.' = clear), shared by the HUD badge, dialogue and
//                      select screen (paintPortrait below)
//   kit                see below
// }
//
// kit = {
//   moves              move table (format: src/hero/moves.js header), prepared with prepMoves (src/hero/moveset.js); every
//                      kit has n1 c1 dash jatk jc (combo.js starts these from neutral); an `aim` move = aim mode (hud.js)
//   airChainMax        air-string length per jump
//   clips              clip registry sampled by heroPose (attack + locomotion + musou clips; ids = move ids / states:
//                      idle run dodge air airFall land hurt + whatever the musou sets in h.musouClip); a clip id that
//                      is a move id is an attack clip (short 5-frame blend in)
//   feet               { moveId: (u, pose) => void } baked feet applied over a borrowed clip (moves.js `anim`)
//   runPose(phase, k, out, lean), rollPose(u, out)   procedural run / dive roll poses
//   dashPlant          dash move frame where the lunge lands (footstep dust), or -1
//   model(rig) → { material, meshes }            voxel model on the shared rig (src/hero/rig.js)
//   secondary(scene, rig, material, hero?) → { update(dt), reset() }   cloth / hair chains (hero: the battle view's)
//   trail              weapon ribbon {base, baseHeavy, tip} (m along the rig's weapon, vfx.js spearWorld) or a bow limb
//                      {axis: 'y', …} (never null)
//   fx?                vfx.js palette (complete: spread vfx.js ZY_FX; musou 'dragon' | 'own', ghost, mu — vfx.js header)
//   scale?, reach?     body scale (default rig.js HERO_SCALE), weapon ground contact {tip, butt} (rig.js spearElev)
//   weight?            camera kick × (camera.js)            voice?  {pitch, fk, growl, gain} his kiai (audio/bank.js)
//   view?(model, hero, dt, rig)   per-frame render hook after IK (hero.js createHeroView)
//   createMusou(game) → musou sim (interface: src/musou/musou.js createMusou — active, t, reset, start(inp),
//                      stepHero(inp), shot(), ready(), step(), optional aimShot() (camera.js aim shot), wave(hit, moveId)
//                      (moves.js `proj` windows: src/musou/scripted.js); emits musou:* events; hits via
//                      game.combat.strike(..., 'musou'))
//   createMusouView(scene, game, camera) → { update(dt), dispose() }   render-only
// }
// Officers written as data (a model def + a moveset) get their kit from src/chars/defkit.js (its header: the def contract).
import { ZHAOYUN_KIT } from './zhaoyun/kit.js';
import { HUANGZHONG_KIT } from './huangzhong/kit.js';
import { ZHANGFEI_KIT } from './zhangfei/kit.js';
import { FACE as ZF_FACE, PAL as ZF_PAL } from './zhangfei/model.js';
import { GUANYU_KIT } from './guanyu/kit.js';
import { FACE as GY_FACE, PAL as GY_PAL } from './guanyu/model.js';
import { LIUBEI_KIT } from './liubei/kit.js';
import { FACE as LB_FACE, PAL as LB_PAL } from './liubei/model.js';
import { ZHUGELIANG_KIT } from './zhugeliang/kit.js';
import { FACE as ZG_FACE, PAL as ZG_PAL } from './zhugeliang/model.js';
import { LUBU_KIT } from './lubu/kit.js';
import { FACE as LU_FACE, PAL as LU_PAL } from './lubu/model.js';

const ZY_FACE = [
  '....................',
  '.......KKKKK........',
  '.....KKKKKKKKK......',
  '....KKKKKKKKKKKK....',
  '...KKKkkKKKKKKKKK...',
  '...KKKKKKKKKKKKKKKK.',
  '...KTTTTTTTTTTTTKKTt',
  '...KKKKKKKKKKKKKKKtT',
  '...KKKSKKKKKSKKKKKKt',
  '...KKSSSSSSSSSSKKKKK',
  '...KKEESSSSSSEEKKKK.',
  '...KKSwESSSSwESKKKK.',
  '...KKSSSSSsSSSSKKK..',
  '....KSSSSSsSSSSKKK..',
  '....KsSSSSSSSSsKK...',
  '.....sSSSMMSSSsKK...',
  '......ssSSSSssKK....',
  '...WWTtssssssTtWW...',
  '.WWWWWWTWWWWTWWWWW..',
  'WWwwWWWWTWWTWWWWwwW.',
];
// Huang Zhong: grey topknot, red headband, heavy brows, white moustache and long beard, gold lamellar collar
const HZ_FACE = [
  '....................',
  '.......GGGGG........',
  '.....GGGGGGGGG......',
  '....GGGGGGGGGGGG....',
  '...GGGggGGGGGGGGG...',
  '...GGGGGGGGGGGGGGG..',
  '...GRRRRRRRRRRRRGGRr',
  '...GGGGGGGGGGGGGGGrR',
  '...GGSSSSSSSSSSGGGGr',
  '...GGSkkSSSSkkSGGGG.',
  '...GGEESSSSSSEEGGGG.',
  '...GGSwESSSSwESGGG..',
  '...GGSSSSSsSSSSGGG..',
  '....GSSggGGggSSGG...',
  '....GSGGGMMGGGSG....',
  '.....GGGGGGGGGGG....',
  '......GgGGGGGgG.....',
  '...YYyGGGGGGGyYY....',
  '.YYYYYYyGgGyYYYYY...',
  'YYyyYYYYyGyYYYYyyY..',
];
const PAL = { K: '#1d1514', k: '#4a3834', S: '#efc3a0', s: '#c38a6c', E: '#140c0c', M: '#7e3a2e', T: '#3fb8b0', t: '#1f5f5c',
  W: '#efe8de', w: '#ffffff', G: '#dcd6cc', g: '#9a948a', R: '#b3261e', r: '#6e1712', Y: '#d9a53a', y: '#8a5a1a' };

export const CHARS = {
  liubei: {
    id: 'liubei',
    name: { zh: '유비', en: 'Liu Bei' }, courtesy: { zh: '현덕', en: 'Xuande' }, seal: '황숙',
    title: { zh: '인덕의 군주', en: 'The Benevolent Lord' }, motto: '중산정왕의 후손 · 도원결의 · 인덕소열',
    weapon: { zh: '쌍고검', en: 'Twin Swords' },
    bio: {
      zh: ['탁군 출신, 중산정왕의 후손. 두 귀는 어깨에 닿고 두 손은 무릎 아래까지 내려왔다.', '관우·장비와 도원에서 생사를 함께하기로 맹세했다. 인덕으로 사람을 대하여 백성의 마음을 얻었다.'],
      en: ['A man of Zhuo descended from Prince Jing of Zhongshan, his earlobes reaching his shoulders, his hands his knees.',
        'Sworn brother to Guan Yu and Zhang Fei in the peach garden, he won the people with benevolence.'],
    },
    stats: { atk: 3, def: 3, speed: 4, range: 3 }, musou: { zh: '소열 · 쌍룡참', en: 'Twin Dragons' }, accent: '#6cb24e',
    lines: {
      intro: { zh: '나는 중산정왕의 후손, 유현덕이다!', en: 'I am Liu Xuande, descendant of Prince Jing of Zhongshan!' },
      musouEnd: { zh: '천하의 백성을 위해, 반드시 이기겠다!', en: 'For the people of the realm — this battle is ours!' },
      copy: ['인덕이 닿는 곳', '만민의 마음이 돌아온다'],
    },
    portrait: { face: LB_FACE, pal: LB_PAL },
    kit: LIUBEI_KIT,
  },
  zhaoyun: {
    id: 'zhaoyun',
    name: { zh: '조운', en: 'Zhao Yun' }, courtesy: { zh: '자룡', en: 'Zilong' }, seal: '상산',
    title: { zh: '상산용담', en: 'The Dragon of Changshan' }, motto: '상산용담 · 단기무쌍 · 의관운천',
    weapon: { zh: '용담창', en: 'Dragon-Heart Spear' },
    bio: {
      zh: ['상산 진정 출신. 장창 한 자루로 장판파에서 홀로 주군의 아들을 구했다.', '유비는 칭찬했다. "자룡은 온몸이 담력으로 가득하구나."'],
      en: ['A spearman of Changshan who rode alone through Cao Cao\'s host at Changban.', 'Liu Bei said of him: "Zilong is courage through and through."'],
    },
    stats: { atk: 4, def: 3, speed: 5, range: 3 }, musou: { zh: '창룡파진', en: 'Azure Dragon Breach' }, accent: '#3fb8b0',
    lines: {
      intro: { zh: '주공의 아드님이 여기 계신다. 목숨을 걸고 지키겠다!', en: 'My lord\'s son is in my care. None of you shall pass!' },
      musouEnd: { zh: '나는 상산 조자룡이다!', en: 'I am Zhao Zilong of Changshan!' },
      copy: ['장창이 향하는 곳', '모든 군세가 무너진다'],
    },
    portrait: { face: ZY_FACE, pal: PAL },
    kit: ZHAOYUN_KIT,
  },
  huangzhong: {
    id: 'huangzhong',
    name: { zh: '황충', en: 'Huang Zhong' }, courtesy: { zh: '한승', en: 'Hansheng' }, seal: '노장',
    title: { zh: '노당익장', en: 'The Veteran Who Never Ages' }, motto: '노당익장 · 백보천양 · 정군참장',
    weapon: { zh: '파군궁', en: 'Army-Breaker Longbow' },
    bio: {
      zh: ['남양 출신. 칠순에 가까운 나이에도 강궁을 당겨 백발백중을 자랑했다.', '정군산 전투에서 하후연을 베어 한중에 이름을 떨쳤다.'],
      en: ['A Nanyang veteran near seventy whose great bow never misses.', 'At Mount Dingjun he cut down Xiahou Yuan and shook all Hanzhong.'],
    },
    stats: { atk: 4, def: 3, speed: 2, range: 5 }, musou: { zh: '백보천양', en: 'Hundred-Pace Volley' }, accent: '#d9a53a',
    lines: {
      intro: { zh: '노장 황충이 여기 있다! 누가 감히 맞서겠느냐?', en: 'Old Huang Zhong stands here! Who dares face me?' },
      musouEnd: { zh: '이 늙은이의 칼은 아직 녹슬지 않았다!', en: 'This old blade has not dulled!' },
      copy: ['화살 하나가 나아가니', '만군이 물러선다'],
    },
    portrait: { face: HZ_FACE, pal: PAL },
    kit: HUANGZHONG_KIT,
  },
  zhangfei: {
    id: 'zhangfei',
    name: { zh: '장비', en: 'Zhang Fei' }, courtesy: { zh: '익덕', en: 'Yide' }, seal: '연인',
    title: { zh: '만인지적', en: 'A Match for Ten Thousand' }, motto: '연인 장익덕 · 당양일갈 · 만부막당',
    weapon: { zh: '장팔사모', en: 'Eighteen-Foot Serpent Spear' },
    bio: {
      zh: ['탁군 출신. 표범 머리와 둥근 눈, 제비턱과 호랑이 수염에 목소리는 우레 같았다.', '장판교에서 창을 가로들고 외치자, 백만 조조군도 감히 다가오지 못했다.'],
      en: ['A man of Zhuo with a leopard\'s head, round glaring eyes and a tiger\'s bristling beard; his voice is thunder.',
        'Alone on the bridge at Changban he levelled his spear and roared — and Cao Cao\'s host dared not come on.'],
    },
    stats: { atk: 5, def: 4, speed: 2, range: 4 }, musou: { zh: '연인포효', en: 'Roar of the Man of Yan' }, accent: '#d4552a',
    lines: {
      intro: { zh: '연인 장익덕이 여기 있다! 누가 목숨을 걸고 싸우겠느냐?', en: 'Zhang Yide of Yan stands here! Who dares fight me to the death?' },
      musouEnd: { zh: '싸우지도 물러나지도 않으니, 도대체 무슨 까닭이냐!', en: 'You will not fight, you will not flee — what are you waiting for?!' },
      copy: ['한 번의 포효에', '만군이 물러선다'],
    },
    portrait: { face: ZF_FACE, pal: ZF_PAL },
    kit: ZHANGFEI_KIT,
  },
  guanyu: {
    id: 'guanyu', side: { zh: '蜀', en: 'Shu Han' },
    name: { zh: '관우', en: 'Guan Yu' }, courtesy: { zh: '운장', en: 'Yunchang' }, seal: '무성',
    title: { zh: '미염공', en: 'Lord of the Magnificent Beard' }, motto: '하동 관운장 · 온주참장 · 의관고금',
    weapon: { zh: '청룡언월도', en: 'Green Dragon Blade' },
    bio: {
      zh: ['하동 해량 출신. 얼굴은 붉은 대추 같고, 봉황 눈에 누에 같은 눈썹을 가졌다.', '술이 식기 전에 화웅을 베고, 홀로 천 리를 달렸다. 그 의로움이 하늘에 닿았다.'],
      en: ['Of Hedong: a face red as a ripe jujube, phoenix eyes, silkworm brows.',
        'He slew Hua Xiong before the wine went cold and rode a thousand li alone.'],
    },
    stats: { atk: 5, def: 4, speed: 3, range: 4 }, musou: { zh: '청룡언월 · 천참', en: 'Sky Cleaver' }, accent: '#3cae6e',
    lines: {
      intro: { zh: '관운장이 여기 있다! 목을 내놓을 자들은 어서 나와라!', en: 'Guan Yunchang is here! Come, you who wear your heads for sale!' },
      musouEnd: { zh: '마음에는 충의, 손에는 청룡!', en: 'Loyalty in my heart, the Green Dragon in my hand!' },
      copy: ['청룡을 한 번 휘두르니', '천군이 모두 베인다'],
    },
    portrait: { face: GY_FACE, pal: GY_PAL },
    kit: GUANYU_KIT,
  },
  zhugeliang: {
    id: 'zhugeliang', side: { zh: '蜀', en: 'Shu Han' },
    name: { zh: '제갈량', en: 'Zhuge Liang' }, courtesy: { zh: '공명', en: 'Kongming' }, seal: '와룡',
    title: { zh: '와룡', en: 'The Sleeping Dragon' }, motto: '우선윤건 · 운주유악 · 결승천리',
    weapon: { zh: '백우선', en: 'White Feather Fan' },
    bio: {
      zh: ['낭야 양도 출신. 남양에서 농사를 지으며 스스로 관중과 악의에 견주었다.', '유비가 세 번 초려를 찾았다. 융중의 대화로 천하삼분의 계책을 세웠다.'],
      en: ['A scholar of Langya who farmed at Nanyang and likened himself to the great ministers of old.',
        'Liu Bei called on his cottage three times; in one talk at Longzhong he laid out the realm divided in three.'],
    },
    stats: { atk: 3, def: 2, speed: 3, range: 5 }, musou: { zh: '동풍 · 팔진', en: 'East Wind · Eight Formations' }, accent: '#9c8cf0',
    lines: {
      intro: { zh: '동풍이 불기 시작했다. 오늘 적을 무찌르리라.', en: 'The east wind has risen. Today the enemy breaks.' },
      musouEnd: { zh: '막사 안에서 계책을 세워, 천 리 밖의 승리를 정한다.', en: 'Plans laid in the tent decide battles a thousand li away.' },
      copy: ['깃털 부채를 휘두르니', '팔진도가 펼쳐진다'],
    },
    portrait: { face: ZG_FACE, pal: ZG_PAL },
    kit: ZHUGELIANG_KIT,
  },
  lubu: {
    id: 'lubu', side: { zh: '群', en: 'Warlords' },
    name: { zh: '여포', en: 'Lü Bu' }, courtesy: { zh: '봉선', en: 'Fengxian' }, seal: '비장',
    title: { zh: '비장', en: 'The Flying General' }, motto: '사람 중 여포 · 말 중 적토 · 천하무쌍',
    weapon: { zh: '방천화극', en: 'Sky-Piercer Halberd' },
    bio: {
      zh: ['오원 구원 출신. 활과 기마에 능하고 힘이 뛰어나 비장이라 불렸다.', '호로관 앞을 홀로 지켜 유비·관우·장비 세 영웅이 함께 맞서야 막아낼 수 있었다.'],
      en: ['A rider of Jiuyuan on the northern frontier, peerless with bow and horse — they called him the Flying General.',
        'Before Hulao Gate he held the pass alone with his halberd; it took Liu, Guan and Zhang together to hold him off.'],
    },
    stats: { atk: 5, def: 4, speed: 4, range: 4 }, musou: { zh: '천하무쌍 · 신귀난무', en: 'Peerless: Dance of Gods and Demons' }, accent: '#d8283c',
    lines: {
      intro: { zh: '여봉선이 여기 있다! 쥐 같은 놈들, 누가 먼저 죽으러 오겠느냐?', en: 'Lü Fengxian stands here! Which of you rats dies first?' },
      musouEnd: { zh: '천하무쌍은 오직 나 여포뿐이다!', en: 'Peerless under heaven — there is only Lü Bu!' },
      copy: ['극을 한 번 휘둘러', '천하무쌍'],
    },
    portrait: { face: LU_FACE, pal: LU_PAL },
    kit: LUBU_KIT,
  },
};
export const CHAR_ORDER = ['liubei', 'guanyu', 'zhangfei', 'zhaoyun', 'zhugeliang', 'huangzhong', 'lubu'].filter((id) => CHARS[id]);

/** Paint a char's 20×20 portrait into a canvas (width/height 20; scale it with CSS, image-rendering: pixelated). */
export function paintPortrait(cv, char) {
  const g = cv.getContext('2d'), { face, pal } = char.portrait;
  g.clearRect(0, 0, cv.width, cv.height);
  face.forEach((row, y) => [...row].forEach((ch, x) => { if (pal[ch]) { g.fillStyle = pal[ch]; g.fillRect(x, y, 1, 1); } }));
}
