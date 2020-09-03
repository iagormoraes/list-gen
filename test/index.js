const List = require('./main.js');

let lines = [
    'zombocom',
    'the-oracle',
    'simonikers-chill-zone',
    'not-tonight-fanpage',
    'rosies-hideout',
    'supa-hot-fire',
    'ðŸ˜Žmikes-cool-pageðŸ˜Ž',
    'activys-amazing-facts-ðŸŒ',
    'hypno-guide',
    'hot-dads-hot-planet-world',
    'gate-to-heaven',
    'trigger-words-wiki',
    'the-most-amazing-website-on-the-internet',
    'later-the-greater',
    'dog-pics',
    'hypno-how',
    'ðŸ•µfsociologyðŸ•µ',
    'destroy-hypnowaste-today',
    'fishi',
    'homepage-of-the-moon',
    'smoocha-lucha-yo',
    'spanish-penguin-club',
    'tiny-gardenðŸŒ¼',
    'aÌ´Ì“Í lÌµÍ‹ÍwÌ·Ì‹ÌaÌµÌ¿Ì€yÌ´ÌšÌsÌµÍ†Ì-Ì·ÍÌwÌ´Í‚ÌŽaÌ¸ÌƒÍŠtÌµÍ†Ì‡cÌ¶ÌˆÌ‘hÌ¶Í€ÌiÌµÍÌˆnÌ¸Í Ì½gÌ¶Í‘Ìƒ',
    'dedmall',
    'old-church-pub',
    'descenders-fan-club',
    'twaunlounge',
    'ultima-online-rares',
    'tricky-leaks',
    'mikes-bargain-basement',
    'screensaver-simulator',
    'ðŸ¥”potatoðŸ¥”zoneðŸ¥”',
    'the-cool-corner',
    'kobolds-dojo',
    'mabelðŸŒ shrine',
    'mythicalbeasts',
    '_-xxx-ultimate-pogs-xxx-_',
    'black-hat-industries',
    'best-of-the-internet',
    'ðŸŒŒðŸ—£h3adsp8ceðŸ‘¥ðŸŒŒ',
    'poetry-zone',
    '90s-internet-chat',
    'cube-earthers-society',
    'h',
    'spartans-cyberdiver-collection',
    'garlicbread',
    'hmm',
    'dw4ynextasis-1337cybershack',
    'â­-the-â™-s-den-â­',
    'ðŸ“ƒ-â€¢-team-scroll',
    'pixelboomers',
    'interviews-and-songs',
    'jeeks-basement-funtime-show',
    'lammys-games',
    'ðŸ•¯-are-you-with-us-ðŸ•¯',
    'fsociology-challenge-talk',
    'free-hypnos-wallpapers',
    'high-quality-rips',
    'gross',
    'poland-stronk',
    'the-autistic-trio',
    'sniping-the-69th-entry',
    'guinea-pigs-fanclub',
    'cat-pics',
    'shaved-bees-95',
    'insane-ramblings',
    'kmod',
    null,
    'xx_s3m1c1rcl3_xxs-c00l-web-site',
    'leafguy1999s-cool-website',
    'cult-of-rghaul',
    'ðŸ‡²ike-is-the-lie',
    'interesting-indie-games',
    'the-underdark-hangout',
    'loi',
    'pizza-verification',
    'the-y2k-information-centre',
    'mathsucksorghelpkids',
    'experiment-342',
    'hypnocrates-public',
    'totally-not-crate-farming',
    'to-the-great-milton-erickson',
    'hello-world',
    'campspace',
    'borkin-good-dogs',
    'squaresite',
    'freemoney',
    'the-weeping-domain',
    'zettabot',
    'dank-memes',
    'im-not-a-bad-guy',
    'moles',
    'kittykat-dance',
    'somnatube_100',
    'squisherzostfreedownloadnovirus',
    'ðŸ«-jakes-place-ðŸ«',
    'the-outside-job',
    'ðŸ¦ amoe-baesðŸ¦ ',
    'the-pizza-zone',
    'the-danger-zone',
    'youâ€™ve-got-mail',
    'fight-the-power',
    'the-screaming-zone',
    'standers-hub',
    'hsdpp-idk',
    'fundmego',
    null,
    'aneidorus-page',
    'the-hallway',
    'the-kitchen',
    'the-stairway',
    'the-basement',
    'the-ladder',
    'the-attic',
    'and-it-has-started',
    'the-room',
    'sandy-hill-weather',
    'finding-zapper-maths-2',
    'it-be-happen-todey',
    'hypnospace-cheats',
    'do-you-see-the-users-type',
    'ðŸ’°-5khc-for-page-slot-ðŸ’°',
    'space-station-13-goonstation',
    'space-teens',
    'the-perfect-peppermile-pizza',
    'aldens-blog',
    'dial-in-like-its-88',
    'hypnospace-addicts-anonymous',
    'f000147',
    'roborights',
    'lzsoft',
    'badcitizenmcgee',
    'nothing-really-here',
    'squisherz-theme-parodies',
    'sfonline',
    'poems-to-another-world',
    'skeletonz',
    'software-reviews',
    'eye-patch-space',
    'flist',
    'bakuâ€™s-abode',
    'cookie-of-the-week',
    'dylan-merchant-unofficial',
    'merlins-tower',
    'nothing-really',
    'sprite-art-and-game-dev-emporium',
    'h',
    null,
    'less-page',
    'epic-hypnospace-page',
    'pizza-heroes-official-webpage',
    'tsukis-page',
    'y-window-system',
    'dankrift',
    'hypnospace-beta-project',
    'ðŸ‡¸-ðŸ‡­-ðŸ‡¦-ðŸ‡¬-ðŸ‡¸',
    'getting-gravy-at-the-store',
    'chatstick',
    'shagsfriends-dms',
    'webpage',
    'hspa'
];

const config = {
    lines,
    fontPath: './resources/hypnoverse.fnt',
    outputFolder: './output/',
    first: {
        background: './resources/first.png',
        maxLines: 41,
        offset: {
            x: 60,
            y: 240
        },
        interval: {
            x: 0,
            y: 40
        }
    },
    extra: {
        background: './resources/extra.png',
        maxLines: 48,
        offset: {
            x: 60,
            y: -30
        },
        interval: {
            x: 0,
            y: 40
        }
    }
};

const list = new List(config);
list.generate();
