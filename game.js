// Cyber Security Arcade Quiz Game - Enhanced Engine v2.0 (with KZ Support)

// 1. LANGUAGE DICTIONARY
const TRANSLATIONS = {
    EN: {
        introTitle: "SYSTEM INTRUSION DETECTED!",
        introText: "A highly dangerous trojan virus has bypassed the main firewall and is corrupting core system data. As the Bit Guard, you must engage the malware in cyberspace. Answer cyber security questions correctly to fire protective patches. The battle continues until you DEFEAT THE VIRUS — you cannot lose, only keep fighting!",
        bootBtn: "BOOT GAME PROTOCOL",
        threatLevel: "THREAT LEVEL: HIGH",
        sysSec: "SYS_SEC // PORT_443",
        playerLabel: "PLAYER: BIT_GUARD",
        enemyLabel: "ENEMY: MALWARE_VIRU$",
        continueBtn: "CONTINUE BATTLE",
        restartBtn: "REPLAY TRAINING PROTOCOL",
        checkpointTitle: "SHIELD DEPLETED!",
        checkpointText: "Your firewall shield has been compromised — but the mission continues! Emergency backup systems activated. Your shield is restored. The virus damage remains. You MUST defeat the virus to end the battle!",
        checkpointBtn: "RESTORE SHIELD & FIGHT ON",
        victoryTitle: "🏆 SYSTEM SECURED! 🏆",
        victoryText: "OUTSTANDING! The Malware Virus has been completely disintegrated. All firewalls are fully operational, and system core memory is intact. You have successfully defended the network!",
        intrusionTitle: "⚠️ ALERTS: VIRUS INTRUSION ⚠️",
        intrusionMsg: "ENGAGE FIREWALL PROTOCOLS IMMEDIATELY",
        correctTitle: "CORRECT PROTOCOL!",
        correctText: "Applying cyber security counter-measures...",
        incorrectTitle: "PROTOCOL FAILED!",
        incorrectText: "Security breach! The Malware Virus bypassed your firewall...",
        questionLabel: "QUESTION",
        topicLabel: "TOPIC"
    },
    RU: {
        introTitle: "ОБНАРУЖЕНО ВТОРЖЕНИЕ В СИСТЕМУ!",
        introText: "Опасный вирус обошел брандмауэр и заражает системные сектора. В роли Bit Guard вы должны сразиться с вредоносным ПО в киберпространстве. Отвечайте правильно на вопросы по ИБ, чтобы атаковать вирус. Битва продолжается до тех пор, пока вы не ПОБЕДИТЕ ВИРУС!",
        bootBtn: "ЗАПУСТИТЬ ИГРУ",
        threatLevel: "УГРОЗА: ВЫСОКАЯ",
        sysSec: "СИС_ЗАЩ // ПОРТ_443",
        playerLabel: "ИГРОК: BIT_GUARD",
        enemyLabel: "ВИРУС: MALWARE_VIRU$",
        continueBtn: "ПРОДОЛЖИТЬ БИТВУ",
        restartBtn: "ИГРАТЬ СНОВА",
        checkpointTitle: "ЩИТ УНИЧТОЖЕН!",
        checkpointText: "Ваш щит брандмауэра пробит — но миссия продолжается! Аварийные системы восстановления активированы. Щит восстановлен. Урон, нанесённый вирусу, сохраняется. Вы ДОЛЖНЫ победить вирус!",
        checkpointBtn: "ВОССТАНОВИТЬ ЩИТ И ПРОДОЛЖИТЬ",
        victoryTitle: "🏆 СИСТЕМА ЗАЩИЩЕНА! 🏆",
        victoryText: "ПРЕВОСХОДНО! Вирус был полностью уничтожен. Все брандмауэры функционируют в штатном режиме, целостность ядра восстановлена. Вы успешно защитили сеть!",
        intrusionTitle: "⚠️ ВНИМАНИЕ: АТАКА ВИРУСА ⚠️",
        intrusionMsg: "НЕМЕДЛЕННО АКТИВИРУЙТЕ СЕТЕВОЙ ЭКРАН",
        correctTitle: "ПРОТОКОЛ ВЕРЕН!",
        correctText: "Применение защитного патча прошло успешно...",
        incorrectTitle: "СБОЙ ПРОТОКОЛА!",
        incorrectText: "Угроза безопасности! Вирус пробил вашу защиту...",
        questionLabel: "ВОПРОС",
        topicLabel: "ТЕМА"
    },
    KZ: {
        introTitle: "ЖҮЙЕГЕ БҰЗЫП КІРУ АНЫҚТАЛДЫ!",
        introText: "Өте қауіпті троян вирусы негізгі желіаралық қалқанды (firewall) бұзып өтіп, жүйенің негізгі деректерін зақымдауда. Bit Guard ретінде сіз киберкеңістікте зиянды бағдарламамен күресуіңіз керек. Қорғаныс патчтарын іске қосу үшін киберқауіпсіздік сұрақтарына дұрыс жауап беріңіз. Күрес ВИРУСТЫ ЖЕҢГЕНГЕ дейін жалғасады — сіз ұтыла алмайсыз, тек күресті жалғастырыңыз!",
        bootBtn: "ОЙЫН ХАТТАМАСЫН ІСКЕ ҚОСУ",
        threatLevel: "ҚАУІП ДЕҢГЕЙІ: ЖОҒАРЫ",
        sysSec: "ЖҮЙЕ_ҚОРҒ // 443_ПОРТ",
        playerLabel: "ОЙЫНШЫ: BIT_GUARD",
        enemyLabel: "ЖАУ: MALWARE_VIRU$",
        continueBtn: "КҮРЕСТІ ЖАЛҒАСТЫРУ",
        restartBtn: "ЖАТТЫҒУДЫ ҚАЙТА БАСТАУ",
        checkpointTitle: "ҚАЛҚАН ТАУЫСЫЛДЫ!",
        checkpointText: "Желіаралық қалқаныңыз бұзылды — бірақ миссия жалғасуда! Қосалқы жүйелер іске қосылды. Қалқаныңыз қалпына келтірілді. Вирусқа келтірілген нұқсан сақталады. Вирусты міндетті түрде жеңуіңіз керек!",
        checkpointBtn: "ҚАЛҚАНДЫ ҚАЛПЫНА КЕЛТІРІП ЖАЛҒАСТЫРУ",
        victoryTitle: "🏆 ЖҮЙЕ ҚОРҒАЛДЫ! 🏆",
        victoryText: "КЕРЕМЕТ! Зиянды вирус толығымен жойылды. Барлық желіаралық қалқандар қалыпты жұмыс істеуде және жүйенің негізгі жады аман қалды. Сіз желіні сәтті қорғап қалдыңыз!",
        intrusionTitle: "⚠️ ЕСКЕРТУ: ВИРУС ШАБУЫЛЫ ⚠️",
        intrusionMsg: "ЖЕЛІАРАЛЫҚ ҚАЛҚАН ХАТТАМАЛАРЫН ТЕЗ АРАДА ІСКЕ ҚОСЫҢЫЗ",
        correctTitle: "ХАТТАМА ДҰРЫС!",
        correctText: "Киберқауіпсіздік шаралары қолданылуда...",
        incorrectTitle: "ХАТТАМА ҚАТЕ!",
        incorrectText: "Қауіпсіздік бұзылды! Зиянды вирус қалқанды бұзып өтті...",
        questionLabel: "СҰРАҚ",
        topicLabel: "ТАҚЫРЫП"
    }
};

// 2. QUESTIONS DATABASE
const QUESTIONS_POOL = [
    {
        id: 1,
        topic: { EN: "PHISHING", RU: "ФИШИНГ", KZ: "ФИШИНГ" },
        text: {
            EN: "You received an email: 'Urgent! Confirm your password via link, or your account will be blocked!'. What should you do?",
            RU: "Вам пришло письмо: «Срочно подтвердите пароль по ссылке, иначе ваш аккаунт заблокируют!». Что делать?",
            KZ: "Сізге хат келді: 'Шұғыл! Сілтеме арқылы құпия сөзіңізді растаңыз, әйтпесе аккаунтыңыз бұғатталады!'. Не істеу керек?"
        },
        options: {
            EN: [
                { text: "Check the sender's address and link domain (do not click).", correct: true },
                { text: "Immediately click the link and enter password to avoid blocking.", correct: false },
                { text: "Forward the email to all colleagues to ask their advice.", correct: false }
            ],
            RU: [
                { text: "Проверить адрес отправителя и домен ссылки (не переходить).", correct: true },
                { text: "Сразу перейти по ссылке и ввести пароль, чтобы избежать блокировки.", correct: false },
                { text: "Переслать письмо всем коллегам, чтобы спросить их совета.", correct: false }
            ],
            KZ: [
                { text: "Жіберушінің мекенжайын және сілтеме доменін тексеру (сілтемеге өтпеу).", correct: true },
                { text: "Бұғаттауды болдырмау үшін бірден сілтемеге өтіп, құпия сөзді енгізу.", correct: false },
                { text: "Кеңес сұрау үшін хатты барлық әріптестеріңізге қайта жіберу.", correct: false }
            ]
        }
    },
    {
        id: 2,
        topic: { EN: "PASSWORDS", RU: "ПАРОЛИ", KZ: "ҚҰПИЯ СӨЗДЕР" },
        text: {
            EN: "Which password is the most secure for a work account?",
            RU: "Какой пароль является наиболее надежным для рабочей учетной записи?",
            KZ: "Жұмыс аккаунты үшін қай құпия сөз ең сенімді болып табылады?"
        },
        options: {
            EN: [
                { text: "P@ssw0rd2026! - a complex password that is easy to remember.", correct: false },
                { text: "Tr0ub1e4.Ch0c01ate.S1ide - a long passphrase made of random words.", correct: true },
                { text: "Pet's name combined with birth year (e.g., Barsik2015).", correct: false }
            ],
            RU: [
                { text: "P@ssw0rd2026! - сложный пароль, который легко запомнить.", correct: false },
                { text: "Tr0ub1e4.Ch0c01ate.S1ide - длинная фраза из случайных слов.", correct: true },
                { text: "Имя домашнего питомца с годом рождения (например, Barsik2015).", correct: false }
            ],
            KZ: [
                { text: "P@ssw0rd2026! - есте сақтауға оңай күрделі құпия сөз.", correct: false },
                { text: "Tr0ub1e4.Ch0c01ate.S1ide - кездейсоқ сөздерден тұратын ұзын құпия сөз тіркесі.", correct: true },
                { text: "Үй жануарының аты мен туған жылының қосындысы (мысалы, Barsik2015).", correct: false }
            ]
        }
    },
    {
        id: 3,
        topic: { EN: "2FA", RU: "ДВУХФАКТОРНАЯ АУТЕНТИФИКАЦИЯ", KZ: "ЕКІ ФАКТОРЛЫ АУТЕНТИФИКАЦИЯ" },
        text: {
            EN: "You received a 2FA SMS code, but you didn't try to log in. What should you do?",
            RU: "Вам пришел SMS-код подтверждения входа, но вы не пытались войти. Ваши действия?",
            KZ: "Сізге 2FA SMS коды келді, бірақ сіз кіруге әрекет жасаған жоқсыз. Не істеу керек?"
        },
        options: {
            EN: [
                { text: "Ignore it, since no one can log in without my physical phone.", correct: false },
                { text: "Immediately change your account password and notify security.", correct: true },
                { text: "Send the code in a reply SMS if you receive a verification request.", correct: false }
            ],
            RU: [
                { text: "Проигнорировать, так как без моего телефона никто не войдет.", correct: false },
                { text: "Срочно сменить пароль от аккаунта и сообщить в службу безопасности.", correct: true },
                { text: "Отправить код в ответном SMS, если придет запрос на отмену.", correct: false }
            ],
            KZ: [
                { text: "Елемеу, өйткені менің телефонымсыз ешкім кіре алмайды.", correct: false },
                { text: "Шұғыл түрде аккаунттың құпия сөзін өзгертіп, қауіпсіздік қызметіне хабарлау.", correct: true },
                { text: "Егер растау сұрауы келсе, кодты жауап SMS-те жіберу.", correct: false }
            ]
        }
    },
    {
        id: 4,
        topic: { EN: "PUBLIC WI-FI", RU: "ОБЩЕСТВЕННЫЙ WI-FI", KZ: "ҚОҒАМДЫҚ WI-FI" },
        text: {
            EN: "You need to work with confidential data at a cafe using public Wi-Fi. How should you proceed?",
            RU: "Вам нужно поработать с конфиденциальными данными в кафе через публичный Wi-Fi. Как поступить?",
            KZ: "Дәмханада қоғамдық Wi-Fi арқылы құпия деректермен жұмыс істеу керек. Қалай әрекет ету керек?"
        },
        options: {
            EN: [
                { text: "Connect to a VPN before accessing corporate systems.", correct: true },
                { text: "Work as usual, modern browsers encrypt everything anyway.", correct: false },
                { text: "Disable your firewall to make the connection faster.", correct: false }
            ],
            RU: [
                { text: "Подключить VPN перед началом работы с корпоративными системами.", correct: true },
                { text: "Работать как обычно, современные браузеры и так всё шифруют.", correct: false },
                { text: "Отключить брандмауэр, чтобы соединение работало быстрее.", correct: false }
            ],
            KZ: [
                { text: "Корпоративтік жүйелерге кірмес бұрын VPN қосу.", correct: true },
                { text: "Әдеттегідей жұмыс істеу, заманауи браузерлер бәрін шифрлайды.", correct: false },
                { text: "Жылдамдықты арттыру үшін желіаралық қалқанды өшіру.", correct: false }
            ]
        }
    },
    {
        id: 5,
        topic: { EN: "PHYSICAL SECURITY", RU: "ФИЗИЧЕСКАЯ БЕЗОПАСНОСТЬ", KZ: "ФИЗИКАЛЫҚ ҚАУІПСІЗДІК" },
        text: {
            EN: "You found a USB flash drive in the office parking lot labeled 'Salaries 2026'. What do you do?",
            RU: "Вы нашли USB-флешку на парковке офиса с надписью «Зарплаты 2026». Что вы сделаете?",
            KZ: "Кеңсе тұрағында 'Жалақы 2026' деген жазуы бар USB-флешка таптыңыз. Не істейсіз?"
        },
        options: {
            EN: [
                { text: "Plug it into my work laptop to see what files are on it.", correct: false },
                { text: "Hand the flash drive to the IT security department without plugging it in.", correct: true },
                { text: "Plug it into my home computer, since there are no critical work files.", correct: false }
            ],
            RU: [
                { text: "Вставлю в свой рабочий компьютер, чтобы посмотреть файлы.", correct: false },
                { text: "Передам флешку в отдел ИТ-безопасности, не подключая ее.", correct: true },
                { text: "Вставлю в домашний компьютер, там нет важных рабочих данных.", correct: false }
            ],
            KZ: [
                { text: "Қандай файлдар бар екенін көру үшін жұмыс компьютеріне қосу.", correct: false },
                { text: "Флешканы қоспай, АТ қауіпсіздігі бөліміне тапсыру.", correct: true },
                { text: "Үй компьютеріне қосу, себебі онда маңызды жұмыс деректері жоқ.", correct: false }
            ]
        }
    },
    {
        id: 6,
        topic: { EN: "UPDATES", RU: "ОБНОВЛЕНИЯ ПО", KZ: "БЖ ЖАҢАРТУЛАРЫ" },
        text: {
            EN: "Your OS prompts you to install a security update, but you are busy. What should you do?",
            RU: "Операционная система предлагает установить обновление безопасности, но вы заняты. Что делать?",
            KZ: "Операциялық жүйе қауіпсіздік жаңартуын орнатуды сұрайды, бірақ сіз бос емессіз. Не істеу керек?"
        },
        options: {
            EN: [
                { text: "Postpone the update indefinitely as long as everything runs stably.", correct: false },
                { text: "Schedule the updates to install at the earliest non-working time.", correct: true },
                { text: "Disable automatic updates completely so they don't interrupt your work.", correct: false }
            ],
            RU: [
                { text: "Отложить обновление на неопределенный срок, пока всё работает.", correct: false },
                { text: "Запланировать установку обновлений на ближайшее нерабочее время.", correct: true },
                { text: "Отключить автоматические обновления совсем, чтобы они не мешали.", correct: false }
            ],
            KZ: [
                { text: "Бәрі тұрақты жұмыс істеп тұрған кезде жаңартуды белгісіз мерзімге қалдыру.", correct: false },
                { text: "Жаңартуларды жақын арадағы жұмыстан тыс уақытқа жоспарлау.", correct: true },
                { text: "Жұмысқа кедергі келтірмеуі үшін автоматты жаңартуларды мүлдем өшіріп тастау.", correct: false }
            ]
        }
    },
    {
        id: 7,
        topic: { EN: "SOCIAL ENGINEERING", RU: "СОЦИАЛЬНАЯ ИНЖЕНЕРИЯ", KZ: "ӘЛЕУМЕТТІК ИНЖЕНЕРИЯ" },
        text: {
            EN: "The 'CEO' messages you on Telegram from a personal account asking to urgently transfer funds. What to do?",
            RU: "В Telegram пишет «генеральный директор» с личного аккаунта и просит срочно перевести деньги. Что делать?",
            KZ: "Telegram-да «бас директор» жеке аккаунтынан жазып, шұғыл ақша аударуды сұрайды. Не істеу керек?"
        },
        options: {
            EN: [
                { text: "Contact the CEO via official work channels to verify the request.", correct: true },
                { text: "Quickly transfer the money to avoid angering the management.", correct: false },
                { text: "Ask the CEO to send a photo of their passport to verify identity.", correct: false }
            ],
            RU: [
                { text: "Связаться с директором по официальному рабочему каналу для проверки.", correct: true },
                { text: "Срочно отправить деньги, чтобы не злить руководство.", correct: false },
                { text: "Попросить директора прислать фото паспорта в чат для подтверждения.", correct: false }
            ],
            KZ: [
                { text: "Сұрауды тексеру үшін директормен ресми жұмыс арнасы арқылы байланысу.", correct: true },
                { text: "Басшылықты ашуландырмау үшін ақшаны тез аудару.", correct: false },
                { text: "Растау үшін директордан чатқа паспортының суретін жіберуді сұрау.", correct: false }
            ]
        }
    },
    {
        id: 8,
        topic: { EN: "BROWSER WARNINGS", RU: "ПРЕДУПРЕЖДЕНИЯ БРАУЗЕРА", KZ: "БРАУЗЕР ЕСКЕРТУЛЕРІ" },
        text: {
            EN: "Your browser shows a warning: 'Your connection is not private, attackers might steal your info'. What to do?",
            RU: "Браузер показывает предупреждение: «Подключение не защищено, злоумышленники могут похитить данные». Ваши действия?",
            KZ: "Браузер ескерту көрсетеді: «Қосылым қорғалмаған, алаяқтар деректерді ұрлауы мүмкін». Әрекетіңіз?"
        },
        options: {
            EN: [
                { text: "Click 'Advanced' -> 'Proceed to website' because warnings are often false.", correct: false },
                { text: "Immediately close the tab and do not enter any data on that site.", correct: true },
                { text: "Try accessing the site via Incognito mode to bypass the block.", correct: false }
            ],
            RU: [
                { text: "Нажать «Дополнительно» -> «Перейти на сайт», предупреждения врут.", correct: false },
                { text: "Немедленно закрыть вкладку и не вводить на этом сайте никаких данных.", correct: true },
                { text: "Попробовать зайти через режим инкогнито, чтобы обойти блокировку.", correct: false }
            ],
            KZ: [
                { text: "«Қосымша» -> «Сайтқа өту» түймесін басу, ескертулер жиі қателеседі.", correct: false },
                { text: "Бетті бірден жауып, ол сайтқа ешқандай деректерді енгізбеу.", correct: true },
                { text: "Бұғаттауды айналып өту үшін инкогнито режимі арқылы кіруге тырысу.", correct: false }
            ]
        }
    }
];

// 3. SOUND SYNTH
class SoundSynth {
    constructor() { this.ctx = null; this.enabled = true; }
    init() { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }

    playClick() {
        if (!this.enabled) return; this.init();
        const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.type = 'square';
        o.frequency.setValueAtTime(800, this.ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.08);
        g.gain.setValueAtTime(0.05, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        o.start(); o.stop(this.ctx.currentTime + 0.08);
    }

    playSuccess() {
        if (!this.enabled) return; this.init();
        const t = this.ctx.currentTime;
        [[523.25,0],[659.25,0.1],[783.99,0.2],[1046.50,0.3]].forEach(([f,d]) => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.connect(g); g.connect(this.ctx.destination);
            o.type = 'triangle'; o.frequency.setValueAtTime(f, t+d);
            g.gain.setValueAtTime(0.07, t+d); g.gain.exponentialRampToValueAtTime(0.001, t+d+0.1);
            o.start(t+d); o.stop(t+d+0.14);
        });
    }

    playFail() {
        if (!this.enabled) return; this.init();
        const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(220, this.ctx.currentTime);
        o.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.35);
        g.gain.setValueAtTime(0.08, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
        o.start(); o.stop(this.ctx.currentTime + 0.35);
    }

    playLaser() {
        if (!this.enabled) return; this.init();
        const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(880, this.ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.18);
        g.gain.setValueAtTime(0.06, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
        o.start(); o.stop(this.ctx.currentTime + 0.18);
    }

    playLaserVirus() {
        if (!this.enabled) return; this.init();
        const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.type = 'square';
        o.frequency.setValueAtTime(330, this.ctx.currentTime);
        o.frequency.linearRampToValueAtTime(55, this.ctx.currentTime + 0.25);
        g.gain.setValueAtTime(0.06, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
        o.start(); o.stop(this.ctx.currentTime + 0.25);
    }

    playKamehamehaCharge(dur) {
        if (!this.enabled) return; this.init();
        [0, 2].forEach(offset => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.connect(g); g.connect(this.ctx.destination);
            o.type = offset === 0 ? 'sine' : 'triangle';
            o.frequency.setValueAtTime(80 + offset, this.ctx.currentTime);
            o.frequency.exponentialRampToValueAtTime(440 + offset * 1.5, this.ctx.currentTime + dur);
            g.gain.setValueAtTime(0.01, this.ctx.currentTime);
            g.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + dur);
            o.start(); o.stop(this.ctx.currentTime + dur);
        });
    }

    playKamehamehaFire(dur) {
        if (!this.enabled) return; this.init();
        const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(250, this.ctx.currentTime);
        o.frequency.linearRampToValueAtTime(60, this.ctx.currentTime + dur);
        g.gain.setValueAtTime(0.15, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
        o.start(); o.stop(this.ctx.currentTime + dur);

        const bufSize = this.ctx.sampleRate * dur;
        const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass'; filter.frequency.value = 180;
        const ng = this.ctx.createGain();
        ng.gain.setValueAtTime(0.12, this.ctx.currentTime);
        ng.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
        noise.connect(filter); filter.connect(ng); ng.connect(this.ctx.destination);
        noise.start(); noise.stop(this.ctx.currentTime + dur);
    }

    playVictoryTheme() {
        if (!this.enabled) return; this.init();
        const t = this.ctx.currentTime;
        const notes = [
            [523.25,0.15],[523.25,0.15],[523.25,0.15],[523.25,0.3],
            [415.30,0.3],[466.16,0.3],[523.25,0.2],[466.16,0.15],[523.25,0.6]
        ];
        let acc = 0;
        notes.forEach(([f, d]) => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.connect(g); g.connect(this.ctx.destination);
            o.type = 'triangle'; o.frequency.setValueAtTime(f, t + acc);
            g.gain.setValueAtTime(0.08, t+acc); g.gain.exponentialRampToValueAtTime(0.001, t+acc+d-0.02);
            o.start(t+acc); o.stop(t+acc+d);
            acc += d;
        });
    }
}

const sfx = new SoundSynth();

// 4. PIXEL RENDERING
const PX = 4;

const SPRITE_PALETTE = {
    '.': null,
    // Player (cyber warrior)
    'H': '#0a0a14',   // Dark hair
    'h': '#1a1a30',   // Hair highlight
    'S': '#f5c5a0',   // Skin
    'K': '#e0a07a',   // Shadow skin
    'R': '#ff2244',   // Red accent (headband/belt/trim)
    'Q': '#881122',   // Dark red
    'W': '#e8eaf6',   // White armor
    'A': '#c5cae9',   // Light armor
    'D': '#7986cb',   // Mid armor (blue-tinted)
    'B': '#1a237e',   // Dark armor (deep blue)
    'C': '#00e5ff',   // Cyan energy
    'c': '#00bcd4',   // Teal energy
    'Y': '#ffe57f',   // Yellow spark
    'G': '#69f0ae',   // Green spark
    'T': '#ff6e40',   // Orange energy
    // Virus enemy
    'V': '#6a1b9a',   // Core purple
    'v': '#4a148c',   // Dark purple
    'L': '#ce93d8',   // Light purple
    'l': '#ab47bc',   // Mid purple
    'O': '#3e0054',   // Deep shadow
    'E': '#ff1744',   // Red eye glow
    'e': '#ff6090',   // Eye highlight
    'X': '#f8f8ff',   // White detail
    'Z': '#00e5ff',   // Virus cyan corruption
    'z': '#00acc1',   // Virus teal
    'M': '#ff6d00',   // Virus orange glitch
    // Platform
    'g': '#050608',   // Outline
    'p': '#00e5ff',   // Cyan trim
    't': '#0097a7',   // Teal body
    'm': '#37474f',   // Metal
    'd': '#263238',   // Dark metal
    'u': '#546e7a',   // Light metal
    'y': '#ffd600',   // Yellow indicator
    'r': '#ff1744',   // Red indicator
};

const PLATFORM_SPRITE = [
    "...........gggggggggggggggggggggggggggg...........",
    ".......ggggppppppppppppppppppppppppppppppgggg.......",
    ".....ggptttmmmmpppptttmmmmpppptttmmmmpppptttmgg.....",
    "...ggggggggggggggggggggggggggggggggggggggggggggg....",
    "...gduuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuudg....",
    "...gdymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmydmg....",
    "...gdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmg ....",
    ".....gdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmddg......",
    ".......ggddddddddddddddddddddddddddddddddgg........",
    ".........gggggggggggggggggggggggggggggggg..........",
    "...............gddddddddddddddddg.................",
    ".................gddddddddddddg...................",
    "...................gggggggggg.....................",
    ".......................gdg........................",
    ".......................gdg........................",
    ".....................gggdggg......................"
];

const SPRITES = {
    player: {
        idle1: [
            "........................",
            "..........HHHHHH........",
            ".........HhHHhHHH.......",
            "........HHhHHHhHHH......",
            "........RRRHHHhH........",
            ".......RRRSSKKS.........",
            ".......R.RKKSS..........",
            ".........KSSSK..........",
            "..........SSSS..........",
            ".......WWWWWWWWWW.......",
            "......WAAAAAAAAAAAW.....",
            ".....WDDDDDDDDDDDDW.....",
            ".....WDBBBBBBBBBBBDW....",
            ".....WDBBCCCCCBBBBDW....",
            "......WAABBCCCBBAAW.....",
            "......RRRABBBBAARR......",
            ".....RQQQDDDDDDQQQR.....",
            "......QQDDDDDDDDQQ......",
            ".......DDDD..DDDD.......",
            ".......WWW....WWW.......",
            "......AWWA....AWWA......",
            "......SSS......SSS......",
            ".....SSS........SSS.....",
            "........................"
        ],
        idle2: [
            "........................",
            "........................",
            "..........HHHHHH........",
            ".........HhHHhHHH.......",
            "........RRRHHHhH........",
            ".......RRRSSKKS.........",
            ".......R.RKKSS..........",
            ".........KSSSK..........",
            "..........SSSS..........",
            ".......WWWWWWWWWW.......",
            "......WAAAAAAAAAAW......",
            ".....WDDDDDDDDDDDDW.....",
            ".....WDBBBBBBBBBBBDW....",
            ".....WDBBCCCCCBBBBDW....",
            "......WAABBCCCBBAAW.....",
            "......RRRABBBBAARR......",
            ".....RQQQDDDDDDQQQR.....",
            "......QQDDDDDDDDQQ......",
            ".......DDDD..DDDD.......",
            "......WWW......WWW......",
            "......SSS......SSS......",
            ".....SSS........SSS.....",
            "........................",
            "........................"
        ],
        charge1: [
            "........................",
            "..........HHHHHH........",
            ".........HhHHhHHH.......",
            "........RRRHHHhH........",
            ".......RRRSSKKS.........",
            ".......R.RKKSS..........",
            ".........KSSSK..........",
            "..........SSSS..........",
            ".......WWWWWWWWWW.......",
            "......WAAAAAAAAAAW......",
            ".....WDDDDDDDDDDDW......",
            "....YWDBBBBBBBBBBDWY....",
            "...YYYWDBBCCCBBBBDWYYY..",
            "....YYYRABBCCCBBARYYY...",
            "....CCCRRRBBBBRRRCCC....",
            ".....CCCQQDDDDQQCCC.....",
            "......QQDDDDDDDDQQ......",
            ".......DDDD..DDDD.......",
            ".......WWW....WWW.......",
            "......AWWA....AWWA......",
            "......SSS......SSS......",
            ".....SSS........SSS.....",
            "........................",
            "........................"
        ],
        charge2: [
            "........................",
            "..........HHHHHH........",
            ".........HhHHhHHH.......",
            "........RRRHHHhH........",
            ".......RRRSSKKS.........",
            ".......R.RKKSS..........",
            ".........KSSSK..........",
            "..........SSSS..........",
            "..C....WWWWWWWWWW...C...",
            ".CCC..WAAAAAAAAAAW.CCC..",
            "..C..WDDDDDDDDDDDW..C...",
            "...YCWDBBBBBBBBBBDWCY...",
            "...YYWDBBCCCBBBBDWYY....",
            "....YRABBCCCBBBARY......",
            "....CCRRRBBBBRRCC.......",
            ".....CCQQDDDDQQCC.......",
            "......QQDDDDDDQQ........",
            ".......DDDD..DDDD.......",
            ".......WWW....WWW.......",
            "......AWWA....AWWA......",
            "......SSS......SSS......",
            ".....SSS........SSS.....",
            "........................",
            "........................"
        ],
        attack: [
            "........................",
            "..........HHHHHH........",
            ".........HhHHhHHH.......",
            "........RRRHHHhH........",
            ".......RRRSSKKS.........",
            ".......R.RKKSS..........",
            ".........KSSSK..........",
            "..........SSSS..........",
            ".......WWWWWWWWWWWWW....",
            "......WAAAAAAAAAAAAW....",
            ".....WDDDDDDDDDDDDDDDW..",
            ".....WDBBBBBBBBBBBBBDW..",
            ".....WDBBCCCCCCCBBBBDWW.",
            ".....WDBBCCCCCCCBBBBBW..",
            "......WAABBCCCCCBBAAW...",
            ".......RRRABBBBAARR.....",
            "......RQQQDDDDDDQQQR....",
            ".......DDDD..DDDD.......",
            ".......WWW....WWW.......",
            "......AWWA....AWWA......",
            "........................",
            "........................",
            "........................",
            "........................"
        ],
        hit: [
            "........................",
            "..........HHHHHH........",
            ".........HhHHhHHH.......",
            "........RRRHHHhH........",
            ".......RRRSSKKS.........",
            ".......R.RKKSS..........",
            ".........KSSSK..........",
            "..........SSSS..........",
            ".......WWWWWWWWWW.......",
            "......WAAAAAAAAAAW......",
            ".....WDDDDDDDDDDDW......",
            ".....WDBBBBBBBBBDW......",
            ".....WDBBWWWWWBBDW......",
            ".....WDBBWWWWWBBDW......",
            "......WAABBBBBAAW.......",
            "......RRRABBBAARR.......",
            ".....RQQQDDDDDDQQQR.....",
            "......QQDDDDDDDDQQ......",
            ".......DDDD..DDDD.......",
            ".......WWW....WWW.......",
            "......AWWA....AWWA......",
            "......SSS......SSS......",
            ".....SSS........SSS.....",
            "........................"
        ]
    },
    virus: {
        idle1: [
            "........LL........LL........",
            ".......LLLL......LLLL.......",
            "......LLVVVV....VVVVll......",
            ".....lVVVVVVVVVVVVVVVVl.....",
            "....lVVVVVVVVVVVVVVVVVVl....",
            "...lVVVOOOOOOOOOOOOOVVVl...",
            "...lVVOOXXXXXXXXXXXXOOVl...",
            "..lVVVOOXXEeEXXXEeEXXOOVVl.",
            "..lVVVOOXXEeEXXXEeEXXOOVVl.",
            "..lVVVOOXXXXXXXXXXXXOOVVl..",
            "...lVVVOOOlllllllVOOOVVl...",
            "...lVVVVZZZZZZZZZZZVVVl....",
            "....lVVVZZMMMMMMMZZVVVl.....",
            "....lVVVVVVVVVVVVVVVl.......",
            "......VVVVVVVVVVVVVl........",
            "......VVVVVV..VVVVVV........",
            ".....VVVVV......VVVVv.......",
            "....VVVV..........VVVv......",
            "....VV..............VV......",
            "............................"
        ],
        idle2: [
            "........LL........LL........",
            ".......LLLL......LLLL.......",
            "......LLvVVV....VVVvll......",
            ".....lVVVVVVVVVVVVVVVVl.....",
            "....lVVVVVVVVVVVVVVVVVVl....",
            "...lVVVOOOOOOOOOOOOOVVVl...",
            "...lVVOOXXXXXXXXXXXXOOVl...",
            "..lVVVOOXXEeEXXXEeEXXOOVVl.",
            "..lVVVOOXXEeEXXXEeEXXOOVVl.",
            "..lVVVOOXXXXXXXXXXXXOOVVl..",
            "...lVVVOOOlllllllVOOOVVl...",
            "...lVVVVZZZZZZZZZZZVVVl....",
            "....lVVVZzMMMMMMMzZVVVl.....",
            "....lVVVVVVVVVVVVVVVl.......",
            "......VVVVVVVVVVVVl.........",
            ".....VVVVVl......VVVVv......",
            "....VVVVl..........VVVv.....",
            "....VVl..............VV.....",
            "............................"
        ],
        attack: [
            ".......LLL.......LLL........",
            "......LLLLL.....LLLLL.......",
            ".....LLvVVVVV.VVVVvLL.......",
            "....lVVVVVVVVVVVVVVVVVl.....",
            "...lVVVVVVVVVVVVVVVVVVVl....",
            "..lVVVOOOOOOOOOOOOOOVVVl...",
            "..lVVOOXXZZZXXXXZZZXXOOVl..",
            ".lVVVOOXXEeEXXXEeEXXOOVVl..",
            ".lVVVOOXXEeEXXXEeEXXOOVVl..",
            ".lVVVOOXZZZZZZZZZZZXOOVVl..",
            "..lVVVOOOlllllllVOOOVVl....",
            "..lVVVVZZZZZZZZZZZZVVVl....",
            "...lVVVZZMMMMMMMMZZVVVl.....",
            "...lVVVVVVMMMMMMMVVVVVl.....",
            "....lVVVVVMMMMMMMVVVVl......",
            ".....VVVVVVVVVVVVVVl........",
            ".....VVVVV......VVVVv.......",
            "....VVVV..........VVVv......",
            "....VV..............VV......",
            "............................"
        ]
    }
};

function drawPixelSprite(ctx, spriteArray, x, y, size, flashColor = null, flipped = false) {
    const rows = spriteArray.length;
    const cols = spriteArray[0].length;
    ctx.save();
    ctx.translate(x, y);
    if (flipped) { ctx.scale(-1, 1); ctx.translate(-cols * size, 0); }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const ch = spriteArray[r][c];
            const color = SPRITE_PALETTE[ch];
            if (color) {
                ctx.fillStyle = flashColor || color;
                ctx.fillRect(c * size, r * size, size, size);
            }
        }
    }
    ctx.restore();
}

// 5. GAME ENGINE
class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.lang = 'RU'; // Default set to RU to match the HTML layout default
        this.activeTheme = 'CITY';

        this.gameState = 'INTRO';
        this.playerHp = 3;
        this.maxPlayerHp = 3;
        this.enemyHp = 5;
        this.maxEnemyHp = 5;

        this.selectedQuestions = [];
        this.currentQuestionIdx = 0;
        this.correctAnswersCount = 0;

        this.player = {
            x: 120, y: 172,
            width: 96, height: 96,
            state: 'idle',
            frameTimer: 0, frame: 0, flashTimer: 0
        };

        this.enemy = {
            x: 570, y: 148,
            width: 112, height: 80,
            state: 'idle',
            frameTimer: 0, frame: 0, flashTimer: 0,
            floatOffset: 0
        };

        this.projectiles = [];
        this.particles = [];
        this.damageNumbers = [];
        this.shakeIntensity = 0;
        this.shakeDecay = 0.88;

        this.circuitPulses = [
            { x: 50, y: 286, progress: 0, speed: 0.008, color: '#00f3ff' },
            { x: 200, y: 286, progress: 0.4, speed: 0.006, color: '#39ff14' },
            { x: 600, y: 286, progress: 0.2, speed: 0.007, color: '#ff007f' }
        ];

        this.kamehameha = { active: false, stage: 0, timer: 0, beamWidth: 0, beamGlow: 0 };

        this.initMatrixStreams();
        this.initStars();
        this.initEventListeners();
        this.applyLanguage();
        this.startLoop();
    }

    initMatrixStreams() {
        this.matrixStreams = [];
        for (let i = 0; i < 40; i++) {
            this.matrixStreams.push({
                x: i * 20, y: Math.random() * -400,
                speed: 1.5 + Math.random() * 3,
                length: 8 + Math.floor(Math.random() * 8),
                chars: []
            });
        }
    }

    updateMatrixStreams() {
        this.matrixStreams.forEach(s => {
            s.y += s.speed;
            if (s.y > 320) { s.y = Math.random() * -200; s.speed = 1.5 + Math.random() * 3; }
            if (Math.random() > 0.85 || !s.chars.length) {
                s.chars = Array.from({length: s.length}, () => Math.random() > 0.5 ? '1' : '0');
            }
        });
    }

    initStars() {
        this.stars = Array.from({length: 60}, () => ({
            x: Math.random() * 800,
            y: Math.random() * 200,
            speed: 0.15 + Math.random() * 0.6,
            size: 0.5 + Math.random() * 1.8,
            twinkle: Math.random() * Math.PI * 2
        }));
    }

    updateStars() {
        this.stars.forEach(s => {
            s.x -= s.speed;
            s.twinkle += 0.05;
            if (s.x < 0) { s.x = 800; s.y = Math.random() * 200; }
        });
    }

    initEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => { sfx.playClick(); this.startGame(); });
        document.getElementById('nextBtn').addEventListener('click', () => { sfx.playClick(); this.proceedAfterFeedback(); });
        document.getElementById('checkpointBtn').addEventListener('click', () => { sfx.playClick(); this.restoreCheckpoint(); });
        document.getElementById('restartBtn').addEventListener('click', () => { sfx.playClick(); this.startGame(); });

        const audioBtn = document.getElementById('audioToggleBtn');
        audioBtn.addEventListener('click', () => {
            sfx.enabled = !sfx.enabled;
            audioBtn.textContent = sfx.enabled ? 'ON' : 'OFF';
            audioBtn.classList.toggle('toggle-active', sfx.enabled);
            sfx.playClick();
        });

        // Language toggle cycling EN -> RU -> KZ -> EN...
        const langBtn = document.getElementById('langToggleBtn');
        langBtn.addEventListener('click', () => {
            const langs = ['EN', 'RU', 'KZ'];
            const nextIdx = (langs.indexOf(this.lang) + 1) % langs.length;
            this.lang = langs[nextIdx];
            langBtn.textContent = this.lang;
            sfx.playClick();
            this.applyLanguage();
        });

        const themeBtn = document.getElementById('themeToggleBtn');
        themeBtn.addEventListener('click', () => {
            sfx.playClick();
            const themes = ['CITY', 'MATRIX', 'SPACE'];
            const classes = { CITY: 'theme-neon-city', MATRIX: 'theme-matrix', SPACE: 'theme-space' };
            const idx = (themes.indexOf(this.activeTheme) + 1) % themes.length;
            this.activeTheme = themes[idx];
            document.body.className = classes[this.activeTheme];
            this.applyLanguage();
        });
    }

    applyLanguage() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('threatIndicator').textContent = t.threatLevel;
        document.querySelector('.status-code').textContent = t.sysSec;
        document.querySelector('.hud-label').textContent = t.playerLabel;
        document.querySelector('.enemy-label').textContent = t.enemyLabel;
        document.querySelector('#introScreen h2').textContent = t.introTitle;
        document.getElementById('introText').textContent = t.introText;
        document.getElementById('startBtn').textContent = t.bootBtn;
        document.querySelector('#checkpointScreen h2').textContent = t.checkpointTitle;
        document.getElementById('checkpointText').textContent = t.checkpointText;
        document.getElementById('checkpointBtn').textContent = t.checkpointBtn;
        document.querySelector('#victoryScreen h2').textContent = t.victoryTitle;
        document.getElementById('victoryText').textContent = t.victoryText;
        document.getElementById('restartBtn').textContent = t.restartBtn;
        document.getElementById('intrusionAlert').querySelector('.alert-title').textContent = t.intrusionTitle;
        document.getElementById('intrusionAlert').querySelector('.alert-message').textContent = t.intrusionMsg;
        document.getElementById('nextBtn').textContent = t.continueBtn;

        const themeNames = {
            CITY: { EN: "NEON CITY", RU: "НЕОН-СИТИ", KZ: "НЕОН ҚАЛАСЫ" },
            MATRIX: { EN: "MATRIX CODE", RU: "МАТРИЦА", KZ: "МАТРИЦА" },
            SPACE: { EN: "SPACE DEEP", RU: "КОСМОС", KZ: "ҒАРЫШ" }
        };
        document.getElementById('themeToggleBtn').textContent = themeNames[this.activeTheme][this.lang];

        if (this.gameState === 'PLAYING') this.displayQuestion();
    }

    startGame() {
        this.playerHp = 3;
        this.enemyHp = 5;
        this.currentQuestionIdx = 0;
        this.correctAnswersCount = 0;
        this.projectiles = [];
        this.particles = [];
        this.damageNumbers = [];
        this.kamehameha = { active: false, stage: 0, timer: 0, beamWidth: 0, beamGlow: 0 };
        this.player.state = 'idle';
        this.enemy.state = 'idle';
        document.getElementById('intrusionAlert').classList.add('hidden');
        const shuffled = [...QUESTIONS_POOL].sort(() => 0.5 - Math.random());
        this.selectedQuestions = shuffled.slice(0, 5);
        this.updateHearts();
        this.updateEnemyHpBar();
        this.switchScreen('quizScreen');
        this.gameState = 'PLAYING';
        this.displayQuestion();
    }

    restoreCheckpoint() {
        // Restore hearts but keep enemy HP
        this.playerHp = 3;
        this.updateHearts();
        this.currentQuestionIdx++;
        if (this.currentQuestionIdx >= 5) {
            const shuffled = [...QUESTIONS_POOL].sort(() => 0.5 - Math.random());
            this.selectedQuestions = shuffled.slice(0, 5);
            this.currentQuestionIdx = 0;
        }
        this.switchScreen('quizScreen');
        this.gameState = 'PLAYING';
        this.displayQuestion();
    }

    switchScreen(screenId) {
        ['introScreen','quizScreen','feedbackScreen','checkpointScreen','victoryScreen'].forEach(s => {
            document.getElementById(s).classList.toggle('hidden', s !== screenId);
        });
    }

    updateHearts() {
        const c = document.getElementById('playerHearts');
        c.innerHTML = '';
        for (let i = 0; i < this.maxPlayerHp; i++) {
            const h = document.createElement('span');
            h.className = `heart ${i < this.playerHp ? 'active' : ''}`;
            h.textContent = '❤️';
            c.appendChild(h);
        }
    }

    updateEnemyHpBar() {
        const bar = document.getElementById('enemyHpBar');
        bar.innerHTML = '';
        for (let i = 0; i < this.maxEnemyHp; i++) {
            const seg = document.createElement('div');
            seg.className = `hp-segment ${i < this.enemyHp ? 'active' : ''}`;
            bar.appendChild(seg);
        }
    }

    displayQuestion() {
        const t = TRANSLATIONS[this.lang];
        const q = this.selectedQuestions[this.currentQuestionIdx];
        document.getElementById('questionNum').textContent = `${t.questionLabel} ${this.currentQuestionIdx + 1}/5`;
        document.getElementById('secTopic').textContent = `${t.topicLabel}: ${q.topic[this.lang]}`;
        document.getElementById('questionText').textContent = q.text[this.lang];
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';
        ['A','B','C'].forEach((letter, idx) => {
            const opt = q.options[this.lang][idx];
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = `<span class="option-marker">${letter}</span>${opt.text}`;
            card.addEventListener('click', () => {
                if (this.gameState !== 'PLAYING') return;
                this.handleAnswer(opt.correct);
            });
            container.appendChild(card);
        });
    }

    handleAnswer(isCorrect) {
        this.gameState = 'ANIMATING';
        const t = TRANSLATIONS[this.lang];
        const fTitle = document.getElementById('feedbackTitle');
        const fText = document.getElementById('feedbackText');

        if (isCorrect) {
            this.correctAnswersCount++;
            fTitle.className = 'feedback-title glow-text-green';
            fTitle.textContent = t.correctTitle;
            fText.textContent = t.correctText;
            if (this.correctAnswersCount === 5) {
                this.triggerKamehameha();
            } else {
                this.triggerPlayerAttack();
            }
        } else {
            fTitle.className = 'feedback-title glow-text-red blink';
            fTitle.textContent = t.incorrectTitle;
            fText.textContent = t.incorrectText;
            this.triggerEnemyAttack();
        }
    }

    triggerPlayerAttack() {
        sfx.playLaser();
        this.player.state = 'attack';
        setTimeout(() => {
            this.projectiles.push({ type: 'player', x: this.player.x + 90, y: this.player.y + 48, speed: 9, radius: 13, color: '#00e5ff' });
            this.spawnExplosionParticles(this.player.x + 90, this.player.y + 48, '#00e5ff', 10);
        }, 120);
        setTimeout(() => { if (this.player.state === 'attack') this.player.state = 'idle'; }, 600);
    }

    triggerEnemyAttack() {
        sfx.playLaserVirus();
        this.enemy.state = 'attack';
        const alert = document.getElementById('intrusionAlert');
        alert.classList.remove('hidden');
        sfx.playFail();
        setTimeout(() => {
            this.projectiles.push({ type: 'enemy', x: this.enemy.x + 10, y: this.enemy.y + 48 + this.enemy.floatOffset, speed: -7, radius: 15, color: '#ff1744' });
            this.spawnExplosionParticles(this.enemy.x + 10, this.enemy.y + 48, '#ff1744', 10);
        }, 200);
        setTimeout(() => {
            alert.classList.add('hidden');
            if (this.enemy.state === 'attack') this.enemy.state = 'idle';
        }, 800);
    }

    triggerKamehameha() {
        this.kamehameha = { active: true, stage: 1, timer: 0, beamWidth: 0, beamGlow: 0 };
        this.player.state = 'charge';
        sfx.playKamehamehaCharge(2.0);
    }

    proceedAfterFeedback() {
        if (this.playerHp <= 0) {
            this.gameState = 'CHECKPOINT';
            this.switchScreen('checkpointScreen');
            return;
        }
        this.currentQuestionIdx++;
        if (this.enemyHp <= 0) {
            this.gameState = 'VICTORY';
            sfx.playVictoryTheme();
            this.switchScreen('victoryScreen');
        } else if (this.currentQuestionIdx >= 5) {
            const shuffled = [...QUESTIONS_POOL].sort(() => 0.5 - Math.random());
            this.selectedQuestions = shuffled.slice(0, 5);
            this.currentQuestionIdx = 0;
            this.gameState = 'PLAYING';
            this.switchScreen('quizScreen');
            this.displayQuestion();
        } else {
            this.gameState = 'PLAYING';
            this.switchScreen('quizScreen');
            this.displayQuestion();
        }
    }

    spawnExplosionParticles(x, y, color, count) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 4;
            this.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, radius: 1.5 + Math.random() * 3, color, alpha: 1, decay: 0.022 + Math.random() * 0.03 });
        }
    }

    spawnKamehamehaChargeParticles() {
        const tx = this.player.x + 90, ty = this.player.y + 52;
        for (let i = 0; i < 4; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 40 + Math.random() * 80;
            this.particles.push({
                x: tx + Math.cos(angle) * dist, y: ty + Math.sin(angle) * dist,
                vx: -Math.cos(angle) * (2.5 + Math.random() * 2.5),
                vy: -Math.sin(angle) * (2.5 + Math.random() * 2.5),
                radius: 1.5 + Math.random() * 2.5,
                color: Math.random() > 0.4 ? '#00e5ff' : '#ffffff',
                alpha: 0.9, decay: 0.012
            });
        }
    }

    startLoop() {
        const loop = () => { this.update(); this.render(); requestAnimationFrame(loop); };
        requestAnimationFrame(loop);
    }

    update() {
        if (this.activeTheme === 'MATRIX') this.updateMatrixStreams();
        else if (this.activeTheme === 'SPACE') this.updateStars();

        this.player.frameTimer++;
        if (this.player.frameTimer >= 15) { this.player.frame = (this.player.frame + 1) % 2; this.player.frameTimer = 0; }
        this.enemy.frameTimer++;
        if (this.enemy.frameTimer >= 12) { this.enemy.frame = (this.enemy.frame + 1) % 2; this.enemy.frameTimer = 0; }

        this.enemy.floatOffset = Math.sin(Date.now() * 0.0028) * 10;
        if (this.player.flashTimer > 0) this.player.flashTimer--;
        if (this.enemy.flashTimer > 0) this.enemy.flashTimer--;
        this.shakeIntensity *= this.shakeDecay;
        if (this.shakeIntensity < 0.1) this.shakeIntensity = 0;
        this.circuitPulses.forEach(p => { p.progress += p.speed; if (p.progress > 1) p.progress = 0; });

        // Kamehameha sequencer
        if (this.kamehameha.active) {
            this.kamehameha.timer++;
            if (this.kamehameha.stage === 1) {
                this.shakeIntensity = Math.min(this.kamehameha.timer / 15, 5);
                this.spawnKamehamehaChargeParticles();
                if (this.kamehameha.timer >= 100) {
                    this.kamehameha.stage = 2;
                    this.kamehameha.timer = 0;
                    this.player.state = 'attack';
                    this.enemy.state = 'hit';
                    this.enemy.flashTimer = 100;
                    sfx.playKamehamehaFire(1.8);
                }
            } else if (this.kamehameha.stage === 2) {
                this.shakeIntensity = 12;
                this.kamehameha.beamWidth = Math.min(this.kamehameha.beamWidth + 12, 100);
                this.kamehameha.beamGlow = Math.sin(Date.now() * 0.2) * 15 + 22;
                const hx = this.enemy.x + 55, hy = this.enemy.y + 44 + this.enemy.floatOffset;
                this.spawnExplosionParticles(hx, hy, '#00e5ff', 4);
                this.spawnExplosionParticles(hx, hy, '#ffffff', 2);
                if (Math.random() > 0.2) {
                    this.particles.push({
                        x: this.enemy.x + Math.random() * 90, y: this.enemy.y + Math.random() * 80 + this.enemy.floatOffset,
                        vx: 3 + Math.random() * 4, vy: -2 + Math.random() * 4,
                        radius: 2 + Math.random() * 3, color: '#ce93d8', alpha: 1, decay: 0.015
                    });
                }
                if (this.kamehameha.timer >= 90) {
                    this.kamehameha.stage = 3;
                    this.kamehameha.timer = 0;
                    this.enemy.state = 'idle';
                    this.enemyHp = 0;
                    this.updateEnemyHpBar();
                }
            } else if (this.kamehameha.stage === 3) {
                this.kamehameha.beamWidth *= 0.7;
                if (this.kamehameha.beamWidth < 1) {
                    this.kamehameha.active = false;
                    this.kamehameha.stage = 0;
                    this.player.state = 'idle';
                    this.spawnExplosionParticles(this.enemy.x + 55, this.enemy.y + 44, '#ce93d8', 40);
                    this.spawnExplosionParticles(this.enemy.x + 55, this.enemy.y + 44, '#00e5ff', 25);
                    this.switchScreen('feedbackScreen');
                }
            }
        }

        // Projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];
            proj.x += proj.speed;
            if (Math.random() > 0.4) {
                this.particles.push({
                    x: proj.x, y: proj.y,
                    vx: -proj.speed * 0.2, vy: (Math.random() - 0.5) * 2,
                    radius: 2 + Math.random() * 2, color: proj.color, alpha: 0.7, decay: 0.05
                });
            }
            if (proj.type === 'enemy' && proj.x <= this.player.x + 80) {
                this.playerHp = Math.max(this.playerHp - 1, 0);
                this.updateHearts();
                this.player.state = 'hit';
                this.player.flashTimer = 18;
                sfx.playFail();
                this.shakeIntensity = 9;
                this.damageNumbers.push({ text: "-1 HP", x: this.player.x + 40, y: this.player.y - 10, alpha: 1, color: '#ff3c3c' });
                this.spawnExplosionParticles(proj.x, proj.y, '#ff1744', 18);
                this.projectiles.splice(i, 1);
                setTimeout(() => {
                    if (this.player.state === 'hit') this.player.state = 'idle';
                    this.switchScreen('feedbackScreen');
                }, 800);
                continue;
            }
            if (proj.type === 'player' && proj.x >= this.enemy.x) {
                this.enemyHp = Math.max(this.enemyHp - 1, 0);
                this.updateEnemyHpBar();
                this.enemy.state = 'hit';
                this.enemy.flashTimer = 18;
                sfx.playSuccess();
                this.shakeIntensity = 6;
                this.damageNumbers.push({ text: "-20%", x: this.enemy.x + 45, y: this.enemy.y - 10, alpha: 1, color: '#69f0ae' });
                this.spawnExplosionParticles(proj.x, proj.y, '#00e5ff', 18);
                this.projectiles.splice(i, 1);
                setTimeout(() => {
                    if (this.enemy.state === 'hit') this.enemy.state = 'idle';
                    this.switchScreen('feedbackScreen');
                }, 800);
                continue;
            }
            if (proj.x > 820 || proj.x < -20) this.projectiles.splice(i, 1);
        }

        // Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx; p.y += p.vy; p.alpha -= p.decay;
            if (p.alpha <= 0) this.particles.splice(i, 1);
        }

        // Damage numbers
        for (let i = this.damageNumbers.length - 1; i >= 0; i--) {
            const dn = this.damageNumbers[i];
            dn.y -= 1; dn.alpha -= 0.02;
            if (dn.alpha <= 0) this.damageNumbers.splice(i, 1);
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        if (this.shakeIntensity > 0) {
            this.ctx.translate(
                (Math.random() - 0.5) * this.shakeIntensity,
                (Math.random() - 0.5) * this.shakeIntensity
            );
        }

        // 1. Background
        if (this.activeTheme === 'CITY') this.renderCityBackground();
        else if (this.activeTheme === 'MATRIX') this.renderMatrixBackground();
        else this.renderSpaceBackground();

        // 2. Platforms
        drawPixelSprite(this.ctx, PLATFORM_SPRITE, 85, 255, 3);
        drawPixelSprite(this.ctx, PLATFORM_SPRITE, 530, 255, 3);

        // 3. Player
        let playerSprite = SPRITES.player.idle1;
        if (this.player.state === 'idle') playerSprite = this.player.frame === 0 ? SPRITES.player.idle1 : SPRITES.player.idle2;
        else if (this.player.state === 'charge') playerSprite = this.player.frame === 0 ? SPRITES.player.charge1 : SPRITES.player.charge2;
        else if (this.player.state === 'attack') playerSprite = SPRITES.player.attack;
        else if (this.player.state === 'hit') playerSprite = SPRITES.player.hit;

        const playerFlash = this.player.flashTimer > 0 ? (this.player.flashTimer % 4 < 2 ? '#ff3c3c' : '#ffffff') : null;
        drawPixelSprite(this.ctx, playerSprite, this.player.x, this.player.y, PX, playerFlash);

        // Player charge glow
        if (this.player.state === 'charge') {
            this.ctx.save();
            const pulse = Math.sin(Date.now() * 0.12) * 6;
            this.ctx.shadowBlur = 25;
            this.ctx.shadowColor = '#00e5ff';
            this.ctx.strokeStyle = `rgba(0, 229, 255, 0.5)`;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(this.player.x + 50, this.player.y + 52, 48 + pulse, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.strokeStyle = `rgba(0, 229, 255, 0.2)`;
            this.ctx.lineWidth = 8;
            this.ctx.beginPath();
            this.ctx.arc(this.player.x + 50, this.player.y + 52, 55 + pulse, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();
        }

        // 4. Enemy Virus
        if (this.enemyHp > 0) {
            let enemySprite = this.enemy.frame === 0 ? SPRITES.virus.idle1 : SPRITES.virus.idle2;
            if (this.enemy.state === 'attack') enemySprite = SPRITES.virus.attack;

            const enemyFlash = this.enemy.flashTimer > 0 ? (this.enemy.flashTimer % 4 < 2 ? '#ffffff' : '#ff1744') : null;
            drawPixelSprite(this.ctx, enemySprite, this.enemy.x, this.enemy.y + this.enemy.floatOffset, PX, enemyFlash, true);

            // Virus aura
            this.ctx.save();
            const vAura = Math.sin(Date.now() * 0.004) * 5;
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = '#6a1b9a';
            this.ctx.strokeStyle = `rgba(186, 104, 200, ${0.25 + vAura * 0.01})`;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(this.enemy.x + 56, this.enemy.y + 44 + this.enemy.floatOffset, 58 + vAura, 38 + vAura * 0.5, 0, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();

            this.renderVirusGlitches();
        }

        // 5. Projectiles
        this.projectiles.forEach(proj => {
            this.ctx.save();
            this.ctx.shadowBlur = 14;
            this.ctx.shadowColor = proj.color;
            if (proj.type === 'player') {
                const grad = this.ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, proj.radius);
                grad.addColorStop(0, '#ffffff');
                grad.addColorStop(0.4, proj.color);
                grad.addColorStop(1, 'rgba(0,229,255,0)');
                this.ctx.fillStyle = grad;
                this.ctx.beginPath();
                this.ctx.arc(proj.x, proj.y, proj.radius + 4, 0, Math.PI * 2);
                this.ctx.fill();
            } else {
                const sz = proj.radius * 2;
                this.ctx.fillStyle = '#1a0010';
                this.ctx.strokeStyle = proj.color;
                this.ctx.lineWidth = 2;
                this.ctx.fillRect(proj.x - sz/2, proj.y - sz/2, sz, sz);
                this.ctx.strokeRect(proj.x - sz/2, proj.y - sz/2, sz, sz);
                this.ctx.font = '10px "Share Tech Mono"';
                this.ctx.fillStyle = proj.color;
                this.ctx.textAlign = 'center';
                this.ctx.fillText(Math.random() > 0.5 ? '1' : '0', proj.x, proj.y + 4);
            }
            this.ctx.restore();
        });

        // 6. Kamehameha beam
        if (this.kamehameha.active && this.kamehameha.stage >= 2) {
            const sx = this.player.x + 96, sy = this.player.y + 52;
            const w = this.kamehameha.beamWidth;
            this.ctx.save();
            this.ctx.shadowBlur = this.kamehameha.beamGlow;
            this.ctx.shadowColor = '#00e5ff';

            const beamGrad = this.ctx.createLinearGradient(sx, 0, 820, 0);
            beamGrad.addColorStop(0, 'rgba(0,229,255,0.6)');
            beamGrad.addColorStop(0.5, 'rgba(0,229,255,0.3)');
            beamGrad.addColorStop(1, 'rgba(0,229,255,0.05)');
            this.ctx.fillStyle = beamGrad;
            this.ctx.fillRect(sx, sy - w/2 - 14, 820 - sx, w + 28);

            this.ctx.fillStyle = '#00e5ff';
            this.ctx.fillRect(sx, sy - w/2, 820 - sx, w);

            this.ctx.fillStyle = 'rgba(255,255,255,0.85)';
            this.ctx.fillRect(sx, sy - w/4, 820 - sx, w/2);

            this.ctx.restore();
        }

        // 7. Particles
        this.particles.forEach(p => {
            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;
            this.ctx.shadowBlur = 4;
            this.ctx.shadowColor = p.color;
            this.ctx.fillRect(p.x, p.y, p.radius * 2, p.radius * 2);
            this.ctx.restore();
        });

        // 8. Damage numbers
        this.ctx.save();
        this.ctx.font = 'bold 11px "Press Start 2P"';
        this.damageNumbers.forEach(dn => {
            this.ctx.fillStyle = dn.color;
            this.ctx.globalAlpha = dn.alpha;
            this.ctx.shadowBlur = 6;
            this.ctx.shadowColor = dn.color;
            this.ctx.fillText(dn.text, dn.x, dn.y);
        });
        this.ctx.restore();

        this.ctx.restore();
    }

    renderCityBackground() {
        const w = this.canvas.width, h = this.canvas.height;
        const sky = this.ctx.createLinearGradient(0, 0, 0, h);
        sky.addColorStop(0, '#040610');
        sky.addColorStop(0.55, '#0a0b1a');
        sky.addColorStop(1, '#07080f');
        this.ctx.fillStyle = sky;
        this.ctx.fillRect(0, 0, w, h);

        this.ctx.save();
        const moonGrad = this.ctx.createRadialGradient(680, 50, 2, 680, 50, 45);
        moonGrad.addColorStop(0, 'rgba(0,229,255,0.15)');
        moonGrad.addColorStop(0.5, 'rgba(0,229,255,0.06)');
        moonGrad.addColorStop(1, 'rgba(0,229,255,0)');
        this.ctx.fillStyle = moonGrad;
        this.ctx.beginPath();
        this.ctx.arc(680, 50, 45, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(0,229,255,0.4)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(680, 50, 18, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.restore();

        this.ctx.save();
        const buildings = [
            { x: 10, w: 55, h: 95, c: 'rgba(0,229,255,0.18)' },
            { x: 75, w: 70, h: 125, c: 'rgba(255,0,127,0.14)' },
            { x: 160, w: 50, h: 108, c: 'rgba(0,229,255,0.16)' },
            { x: 290, w: 45, h: 80, c: 'rgba(255,0,127,0.12)' },
            { x: 480, w: 80, h: 140, c: 'rgba(0,229,255,0.18)' },
            { x: 570, w: 60, h: 90, c: 'rgba(255,0,127,0.12)' },
            { x: 680, w: 90, h: 110, c: 'rgba(0,229,255,0.16)' },
            { x: 775, w: 50, h: 130, c: 'rgba(255,0,127,0.14)' },
        ];
        buildings.forEach(b => {
            const by = 160 - b.h;
            this.ctx.fillStyle = 'rgba(6,7,16,0.95)';
            this.ctx.fillRect(b.x, by, b.w, b.h);
            this.ctx.strokeStyle = b.c;
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(b.x, by, b.w, b.h);
            this.ctx.fillStyle = b.c;
            for (let wy = by + 8; wy < 155; wy += 14) {
                for (let wx = b.x + 6; wx < b.x + b.w - 6; wx += 12) {
                    if (Math.sin(wx * 7 + wy * 3) > 0.1) {
                        this.ctx.fillRect(wx, wy, 5, 7);
                    }
                }
            }
        });
        this.ctx.restore();

        this.ctx.save();
        this.ctx.strokeStyle = 'rgba(0, 229, 255, 0.055)';
        this.ctx.lineWidth = 1;
        for (let y = 160; y < h; y += 15) {
            this.ctx.beginPath(); this.ctx.moveTo(0, y); this.ctx.lineTo(w, y); this.ctx.stroke();
        }
        const cx = w / 2;
        for (let x = -180; x <= w + 180; x += 55) {
            this.ctx.beginPath(); this.ctx.moveTo(x, h); this.ctx.lineTo(cx + (x - cx) * 0.08, 160); this.ctx.stroke();
        }
        this.ctx.restore();

        this.ctx.save();
        this.ctx.font = '7px "Press Start 2P"';
        this.ctx.fillStyle = 'rgba(0, 229, 255, 0.18)';
        this.ctx.fillText("DATA_PATH", 60, 88);
        this.ctx.fillText("DATA_PATH", 310, 75);
        this.ctx.fillStyle = 'rgba(255, 0, 127, 0.18)';
        this.ctx.fillText("FIREWALL", 460, 92);
        this.ctx.fillText("FIREWALL", 655, 65);
        this.ctx.restore();
    }

    renderMatrixBackground() {
        this.ctx.fillStyle = '#020603';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        this.ctx.strokeStyle = 'rgba(0, 255, 102, 0.06)';
        this.ctx.lineWidth = 1;
        for (let y = 160; y < 320; y += 15) {
            this.ctx.beginPath(); this.ctx.moveTo(0, y); this.ctx.lineTo(800, y); this.ctx.stroke();
        }
        const cx = 400;
        for (let x = -200; x <= 1000; x += 55) {
            this.ctx.beginPath(); this.ctx.moveTo(x, 320); this.ctx.lineTo(cx + (x - cx) * 0.08, 160); this.ctx.stroke();
        }
        this.ctx.restore();

        this.ctx.save();
        this.ctx.font = '9px "Share Tech Mono"';
        this.matrixStreams.forEach(s => {
            s.chars.forEach((ch, j) => {
                const cy = s.y - j * 12;
                if (cy < 0 || cy > 320) return;
                const alpha = 1.0 - (j / s.length);
                this.ctx.fillStyle = j === 0 ? `rgba(200,255,200,${alpha})` : `rgba(0,255,102,${alpha * 0.8})`;
                this.ctx.fillText(ch, s.x, cy);
            });
        });
        this.ctx.restore();
    }

    renderSpaceBackground() {
        this.ctx.fillStyle = '#05030d';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        [
            { x: 240, y: 90, r: 180, c: 'rgba(188, 19, 254, 0.14)' },
            { x: 560, y: 115, r: 160, c: 'rgba(255, 0, 127, 0.1)' },
            { x: 720, y: 60, r: 100, c: 'rgba(0, 200, 255, 0.08)' }
        ].forEach(n => {
            const g = this.ctx.createRadialGradient(n.x, n.y, 5, n.x, n.y, n.r);
            g.addColorStop(0, n.c); g.addColorStop(1, 'rgba(0,0,0,0)');
            this.ctx.fillStyle = g;
            this.ctx.beginPath(); this.ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); this.ctx.fill();
        });
        this.ctx.restore();

        this.ctx.save();
        this.stars.forEach(s => {
            const twinkleAlpha = 0.5 + Math.sin(s.twinkle) * 0.4;
            this.ctx.globalAlpha = twinkleAlpha;
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillRect(s.x, s.y, s.size, s.size);
        });
        this.ctx.restore();

        this.ctx.save();
        this.ctx.strokeStyle = 'rgba(188, 19, 254, 0.055)';
        this.ctx.lineWidth = 1;
        for (let y = 160; y < 320; y += 15) {
            this.ctx.beginPath(); this.ctx.moveTo(0, y); this.ctx.lineTo(800, y); this.ctx.stroke();
        }
        const cx = 400;
        for (let x = -200; x <= 1000; x += 55) {
            this.ctx.beginPath(); this.ctx.moveTo(x, 320); this.ctx.lineTo(cx + (x - cx) * 0.08, 160); this.ctx.stroke();
        }
        this.ctx.restore();
    }

    renderVirusGlitches() {
        const vX = this.enemy.x;
        const vY = this.enemy.y + this.enemy.floatOffset;
        const drawTag = (text, rx, ry, color = '#ff1744') => {
            this.ctx.save();
            this.ctx.font = 'bold 7px "Press Start 2P"';
            const pad = 4;
            const tw = this.ctx.measureText(text).width;
            const tagW = tw + pad * 2, tagH = 12;
            this.ctx.fillStyle = 'rgba(10,0,20,0.9)';
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 1;
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = color;
            this.ctx.fillRect(vX + rx, vY + ry, tagW, tagH);
            this.ctx.strokeRect(vX + rx, vY + ry, tagW, tagH);
            this.ctx.shadowBlur = 0;
            this.ctx.fillStyle = color;
            this.ctx.fillText(text, vX + rx + pad, vY + ry + 9);
            this.ctx.restore();
        };

        const t = Date.now();
        if (Math.sin(t * 0.01) > 0.0) {
            drawTag("ERR", -26, 8);
            drawTag("ERR", 102, 8);
        }
        if (Math.sin(t * 0.008) < 0.2) {
            drawTag("CRIT", 20, 22, '#ff6d00');
            drawTag("CRIT", 20, 72, '#ff6d00');
        }
        if (Math.sin(t * 0.013) > 0.3) {
            drawTag("0xDEAD", 30, 48, '#bc13fe');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.gameEngine = new GameEngine();
});
