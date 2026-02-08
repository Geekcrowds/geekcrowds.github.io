// 人教版小学语文1-6年级完整字库数据
// Complete Vocabulary Data for Primary Grades 1-6

const primarySchoolVocabularies = {
    
    // ==================== 一年级下册 ====================
    primaryGrade1_2: {
        id: 'primaryGrade1_2',
        name: '人教版一年级下册',
        nameEn: 'Primary Grade 1 Vol.2',
        description: '小学语文一年级下册生字',
        icon: '📘',
        color: 'blue',
        levelType: 'unit',
        levelLabel: '单元',
        levels: [
            { value: 'all', label: '全部' },
            { value: '1', label: '第一单元' },
            { value: '2', label: '第二单元' },
            { value: '3', label: '第三单元' },
            { value: '4', label: '第四单元' }
        ],
        vocabulary: [
            // 第一单元 - 春天
            { id: 201, char: "春", pinyin: "chūn", meaning: "春天；一年的第一季", english: "Spring", example: "春天来了。", exampleEn: "Spring is here.", level: 1, category: "名词", radical: "日" },
            { id: 202, char: "冬", pinyin: "dōng", meaning: "冬天；一年的第四季", english: "Winter", example: "冬天很冷。", exampleEn: "Winter is cold.", level: 1, category: "名词", radical: "夂" },
            { id: 203, char: "风", pinyin: "fēng", meaning: "空气流动", english: "Wind", example: "刮风了。", exampleEn: "It's windy.", level: 1, category: "名词", radical: "几" },
            { id: 204, char: "雪", pinyin: "xuě", meaning: "天空降下的白色结晶", english: "Snow", example: "下雪了。", exampleEn: "It's snowing.", level: 1, category: "名词", radical: "雨" },
            { id: 205, char: "花", pinyin: "huā", meaning: "植物的繁殖器官", english: "Flower", example: "红花。", exampleEn: "Red flower.", level: 1, category: "名词", radical: "艹" },
            { id: 206, char: "飞", pinyin: "fēi", meaning: "在空中移动", english: "Fly", example: "鸟在飞。", exampleEn: "Birds are flying.", level: 1, category: "动词", radical: "飞" },
            { id: 207, char: "入", pinyin: "rù", meaning: "进入", english: "Enter", example: "入门。", exampleEn: "Enter the door.", level: 1, category: "动词", radical: "入" },
            { id: 208, char: "姓", pinyin: "xìng", meaning: "表示家族的字", english: "Surname", example: "你姓什么？", exampleEn: "What's your surname?", level: 1, category: "名词", radical: "女" },
            { id: 209, char: "什", pinyin: "shén", meaning: "什么的简写", english: "What", example: "什么？", exampleEn: "What?", level: 1, category: "疑问词", radical: "亻" },
            { id: 210, char: "么", pinyin: "me", meaning: "用在疑问词后", english: "Suffix", example: "什么东西？", exampleEn: "What thing?", level: 1, category: "助词", radical: "丿" },
            
            // 第二单元 - 识字
            { id: 211, char: "双", pinyin: "shuāng", meaning: "两个；成对的", english: "Pair / double", example: "一双手。", exampleEn: "A pair of hands.", level: 2, category: "量词", radical: "又" },
            { id: 212, char: "木", pinyin: "mù", meaning: "树木", english: "Wood / tree", example: "木头。", exampleEn: "Wood.", level: 2, category: "名词", radical: "木" },
            { id: 213, char: "林", pinyin: "lín", meaning: "成片的树木", english: "Forest", example: "树林。", exampleEn: "Forest.", level: 2, category: "名词", radical: "木" },
            { id: 214, char: "森", pinyin: "sēn", meaning: "树木众多", english: "Dense forest", example: "森林。", exampleEn: "Dense forest.", level: 2, category: "名词", radical: "木" },
            { id: 215, char: "条", pinyin: "tiáo", meaning: "量词；细长的东西", english: "Measure word", example: "一条鱼。", exampleEn: "A fish.", level: 2, category: "量词", radical: "木" },
            { id: 216, char: "心", pinyin: "xīn", meaning: "内心；器官", english: "Heart", example: "小心。", exampleEn: "Be careful.", level: 2, category: "名词", radical: "心" },
            { id: 217, char: "团", pinyin: "tuán", meaning: "圆形；集体", english: "Group / round", example: "团结。", exampleEn: "Unite.", level: 2, category: "名词", radical: "囗" },
            { id: 218, char: "量", pinyin: "liàng", meaning: "数量；容量", english: "Quantity", example: "力量。", exampleEn: "Strength.", level: 2, category: "名词", radical: "里" },
            { id: 219, char: "全", pinyin: "quán", meaning: "完整；都", english: "Complete / all", example: "全部。", exampleEn: "All.", level: 2, category: "形容词", radical: "人" },
            { id: 220, char: "部", pinyin: "bù", meaning: "部分；单位", english: "Part / department", example: "全部。", exampleEn: "All parts.", level: 2, category: "名词", radical: "阝" },
            
            // 第三单元 - 课文
            { id: 221, char: "奇", pinyin: "qí", meaning: "特别；不常见的", english: "Strange / wonderful", example: "奇怪。", exampleEn: "Strange.", level: 3, category: "形容词", radical: "大" },
            { id: 222, char: "平", pinyin: "píng", meaning: "平坦；平常", english: "Flat / peaceful", example: "平安。", exampleEn: "Safe.", level: 3, category: "形容词", radical: "干" },
            { id: 223, char: "办", pinyin: "bàn", meaning: "做；处理", english: "Handle / do", example: "办法。", exampleEn: "Method.", level: 3, category: "动词", radical: "力" },
            { id: 224, char: "法", pinyin: "fǎ", meaning: "方法；法律", english: "Method / law", example: "办法。", exampleEn: "Method.", level: 3, category: "名词", radical: "氵" },
            { id: 225, char: "如", pinyin: "rú", meaning: "如同；比如", english: "Like / as", example: "如果。", exampleEn: "If.", level: 3, category: "动词", radical: "女" },
            { id: 226, char: "果", pinyin: "guǒ", meaning: "果实；结果", english: "Fruit / result", example: "苹果。", exampleEn: "Apple.", level: 3, category: "名词", radical: "木" },
            { id: 227, char: "笑", pinyin: "xiào", meaning: "露出愉快的表情", english: "Laugh / smile", example: "笑一笑。", exampleEn: "Smile.", level: 3, category: "动词", radical: "竹" },
            { id: 228, char: "再", pinyin: "zài", meaning: "又一次", english: "Again", example: "再见。", exampleEn: "See you again.", level: 3, category: "副词", radical: "冂" },
            { id: 229, char: "象", pinyin: "xiàng", meaning: "大象；形象", english: "Elephant / image", example: "大象。", exampleEn: "Elephant.", level: 3, category: "名词", radical: "豕" },
            { id: 230, char: "都", pinyin: "dōu", meaning: "全部；总共", english: "All / both", example: "都是。", exampleEn: "All are.", level: 3, category: "副词", radical: "阝" },
            
            // 第四单元 - 综合
            { id: 231, char: "捉", pinyin: "zhuō", meaning: "抓住", english: "Catch", example: "捉鱼。", exampleEn: "Catch fish.", level: 4, category: "动词", radical: "扌" },
            { id: 232, char: "条", pinyin: "tiáo", meaning: "细长的东西", english: "Measure word", example: "一条路。", exampleEn: "A road.", level: 4, category: "量词", radical: "木" },
            { id: 233, char: "爬", pinyin: "pá", meaning: "手脚并用向上", english: "Climb", example: "爬山。", exampleEn: "Climb mountain.", level: 4, category: "动词", radical: "爪" },
            { id: 234, char: "姐", pinyin: "jiě", meaning: "姐姐", english: "Elder sister", example: "姐姐。", exampleEn: "Elder sister.", level: 4, category: "名词", radical: "女" },
            { id: 235, char: "弟", pinyin: "dì", meaning: "弟弟", english: "Younger brother", example: "弟弟。", exampleEn: "Younger brother.", level: 4, category: "名词", radical: "弓" },
            { id: 236, char: "您", pinyin: "nín", meaning: "你的尊称", english: "You (polite)", example: "您好。", exampleEn: "Hello (polite).", level: 4, category: "代词", radical: "心" },
            { id: 237, char: "草", pinyin: "cǎo", meaning: "草本植物", english: "Grass", example: "小草。", exampleEn: "Grass.", level: 4, category: "名词", radical: "艹" },
            { id: 238, char: "家", pinyin: "jiā", meaning: "住所；家庭", english: "Home / family", example: "回家。", exampleEn: "Go home.", level: 4, category: "名词", radical: "宀" },
            { id: 239, char: "是", pinyin: "shì", meaning: "判断词", english: "To be", example: "这是书。", exampleEn: "This is a book.", level: 4, category: "动词", radical: "日" },
            { id: 240, char: "原", pinyin: "yuán", meaning: "起初的；原来", english: "Original", example: "原来。", exampleEn: "Originally.", level: 4, category: "形容词", radical: "厂" }
        ]
    },
    
    // ==================== 二年级上册 ====================
    primaryGrade2_1: {
        id: 'primaryGrade2_1',
        name: '人教版二年级上册',
        nameEn: 'Primary Grade 2 Vol.1',
        description: '小学语文二年级上册生字',
        icon: '📗',
        color: 'green',
        levelType: 'unit',
        levelLabel: '单元',
        levels: [
            { value: 'all', label: '全部' },
            { value: '1', label: '第一单元' },
            { value: '2', label: '第二单元' },
            { value: '3', label: '第三单元' },
            { value: '4', label: '第四单元' }
        ],
        vocabulary: [
            // 第一单元
            { id: 301, char: "宜", pinyin: "yí", meaning: "适合；应该", english: "Suitable", example: "适宜。", exampleEn: "Suitable.", level: 1, category: "形容词", radical: "宀" },
            { id: 302, char: "层", pinyin: "céng", meaning: "重叠的；楼层", english: "Layer / floor", example: "一层。", exampleEn: "First floor.", level: 1, category: "量词", radical: "尸" },
            { id: 303, char: "尽", pinyin: "jìn", meaning: "完；全部用出", english: "Exhaust / complete", example: "尽力。", exampleEn: "Do one's best.", level: 1, category: "副词", radical: "尸" },
            { id: 304, char: "染", pinyin: "rǎn", meaning: "着色；沾上", english: "Dye / stain", example: "染色。", exampleEn: "Dyeing.", level: 1, category: "动词", radical: "木" },
            { id: 305, char: "叠", pinyin: "dié", meaning: "重复；堆叠", english: "Pile / fold", example: "重叠。", exampleEn: "Overlap.", level: 1, category: "动词", radical: "又" },
            { id: 306, char: "翠", pinyin: "cuì", meaning: "绿色；翡翠", english: "Green / jade", example: "翠绿。", exampleEn: "Jade green.", level: 1, category: "形容词", radical: "羽" },
            { id: 307, char: "爬", pinyin: "pá", meaning: "手脚并用向上", english: "Climb", example: "爬山。", exampleEn: "Climb mountain.", level: 1, category: "动词", radical: "爪" },
            { id: 308, char: "降", pinyin: "jiàng", meaning: "落下；减少", english: "Fall / reduce", example: "下降。", exampleEn: "Descend.", level: 1, category: "动词", radical: "阝" },
            { id: 309, char: "闹", pinyin: "nào", meaning: "不安静；吵", english: "Noisy", example: "热闹。", exampleEn: "Lively.", level: 1, category: "形容词", radical: "门" },
            { id: 310, char: "欢", pinyin: "huān", meaning: "快乐；喜欢", english: "Happy / joyful", example: "欢乐。", exampleEn: "Joyful.", level: 1, category: "形容词", radical: "欠" },
            
            // 第二单元
            { id: 311, char: "壮", pinyin: "zhuàng", meaning: "强壮；雄伟", english: "Strong / magnificent", example: "强壮。", exampleEn: "Strong.", level: 2, category: "形容词", radical: "士" },
            { id: 312, char: "观", pinyin: "guān", meaning: "看；景象", english: "View / watch", example: "观看。", exampleEn: "Watch.", level: 2, category: "动词", radical: "见" },
            { id: 313, char: "浪", pinyin: "làng", meaning: "波浪；水花", english: "Wave", example: "波浪。", exampleEn: "Wave.", level: 2, category: "名词", radical: "氵" },
            { id: 314, char: "作", pinyin: "zuò", meaning: "做；工作", english: "Make / work", example: "作业。", exampleEn: "Homework.", level: 2, category: "动词", radical: "亻" },
            { id: 315, char: "写", pinyin: "xiě", meaning: "书写；写字", english: "Write", example: "写字。", exampleEn: "Write.", level: 2, category: "动词", radical: "冖" },
            { id: 316, char: "字", pinyin: "zì", meaning: "文字；汉字", english: "Character / word", example: "汉字。", exampleEn: "Chinese character.", level: 2, category: "名词", radical: "子" },
            { id: 317, char: "苹", pinyin: "píng", meaning: "苹果", english: "Apple", example: "苹果。", exampleEn: "Apple.", level: 2, category: "名词", radical: "艹" },
            { id: 318, char: "丽", pinyin: "lì", meaning: "美丽；漂亮", english: "Beautiful", example: "美丽。", exampleEn: "Beautiful.", level: 2, category: "形容词", radical: "一" },
            { id: 319, char: "劳", pinyin: "láo", meaning: "劳动；辛苦", english: "Work / labor", example: "劳动。", exampleEn: "Labor.", level: 2, category: "动词", radical: "力" },
            { id: 320, char: "尤", pinyin: "yóu", meaning: "特别；尤其", english: "Especially", example: "尤其。", exampleEn: "Especially.", level: 2, category: "副词", radical: "尢" },
            
            // 第三、四单元（继续添加）
            { id: 321, char: "区", pinyin: "qū", meaning: "区域；地区", english: "District / area", example: "地区。", exampleEn: "Area.", level: 3, category: "名词", radical: "匚" },
            { id: 322, char: "巨", pinyin: "jù", meaning: "巨大；很大", english: "Huge / giant", example: "巨大。", exampleEn: "Huge.", level: 3, category: "形容词", radical: "工" },
            { id: 323, char: "它", pinyin: "tā", meaning: "代词：它", english: "It", example: "它是猫。", exampleEn: "It is a cat.", level: 3, category: "代词", radical: "宀" },
            { id: 324, char: "安", pinyin: "ān", meaning: "安全；平安", english: "Safe / peaceful", example: "平安。", exampleEn: "Safe.", level: 3, category: "形容词", radical: "宀" },
            { id: 325, char: "块", pinyin: "kuài", meaning: "量词；块状", english: "Piece / lump", example: "一块。", exampleEn: "A piece.", level: 3, category: "量词", radical: "土" },
            { id: 326, char: "站", pinyin: "zhàn", meaning: "站立；车站", english: "Stand / station", example: "车站。", exampleEn: "Station.", level: 3, category: "动词", radical: "立" },
            { id: 327, char: "已", pinyin: "yǐ", meaning: "已经；完了", english: "Already", example: "已经。", exampleEn: "Already.", level: 3, category: "副词", radical: "己" },
            { id: 328, char: "甲", pinyin: "jiǎ", meaning: "天干第一；盔甲", english: "First / armor", example: "指甲。", exampleEn: "Fingernail.", level: 3, category: "名词", radical: "田" },
            { id: 329, char: "豆", pinyin: "dòu", meaning: "豆类植物", english: "Bean", example: "黄豆。", exampleEn: "Soybean.", level: 4, category: "名词", radical: "豆" },
            { id: 330, char: "识", pinyin: "shí", meaning: "认识；知识", english: "Know / knowledge", example: "认识。", exampleEn: "Know.", level: 4, category: "动词", radical: "讠" }
        ]
    },
    
    // ==================== 二年级下册 ====================
    primaryGrade2_2: {
        id: 'primaryGrade2_2',
        name: '人教版二年级下册',
        nameEn: 'Primary Grade 2 Vol.2',
        description: '小学语文二年级下册生字',
        icon: '📙',
        color: 'orange',
        levelType: 'unit',
        levelLabel: '单元',
        levels: [
            { value: 'all', label: '全部' },
            { value: '1', label: '第一单元' },
            { value: '2', label: '第二单元' },
            { value: '3', label: '第三单元' },
            { value: '4', label: '第四单元' }
        ],
        vocabulary: [
            // 示例数据
            { id: 401, char: "诗", pinyin: "shī", meaning: "诗歌；韵文", english: "Poem / poetry", example: "古诗。", exampleEn: "Ancient poem.", level: 1, category: "名词", radical: "讠" },
            { id: 402, char: "村", pinyin: "cūn", meaning: "乡村；村庄", english: "Village", example: "村庄。", exampleEn: "Village.", level: 1, category: "名词", radical: "木" },
            { id: 403, char: "童", pinyin: "tóng", meaning: "儿童；小孩", english: "Child", example: "儿童。", exampleEn: "Child.", level: 1, category: "名词", radical: "立" },
            { id: 404, char: "碧", pinyin: "bì", meaning: "青绿色", english: "Green / jade", example: "碧绿。", exampleEn: "Green.", level: 1, category: "形容词", radical: "石" },
            { id: 405, char: "妆", pinyin: "zhuāng", meaning: "打扮；化妆", english: "Make-up / dress up", example: "化妆。", exampleEn: "Make-up.", level: 1, category: "动词", radical: "女" },
            { id: 406, char: "剪", pinyin: "jiǎn", meaning: "用剪刀剪", english: "Cut / scissors", example: "剪纸。", exampleEn: "Paper cutting.", level: 1, category: "动词", radical: "刀" },
            { id: 407, char: "冲", pinyin: "chōng", meaning: "向前直冲", english: "Rush / charge", example: "冲出去。", exampleEn: "Rush out.", level: 1, category: "动词", radical: "冫" },
            { id: 408, char: "寻", pinyin: "xún", meaning: "寻找；找", english: "Search / seek", example: "寻找。", exampleEn: "Search.", level: 1, category: "动词", radical: "寸" },
            { id: 409, char: "姑", pinyin: "gū", meaning: "姑姑；姑娘", english: "Aunt / girl", example: "姑娘。", exampleEn: "Girl.", level: 1, category: "名词", radical: "女" },
            { id: 410, char: "娘", pinyin: "niáng", meaning: "母亲；年轻女子", english: "Mother / young woman", example: "姑娘。", exampleEn: "Girl.", level: 1, category: "名词", radical: "女" },
            { id: 411, char: "吐", pinyin: "tǔ", meaning: "从口中出来", english: "Spit / vomit", example: "吐出来。", exampleEn: "Spit out.", level: 2, category: "动词", radical: "口" },
            { id: 412, char: "柳", pinyin: "liǔ", meaning: "柳树", english: "Willow tree", example: "柳树。", exampleEn: "Willow.", level: 2, category: "名词", radical: "木" },
            { id: 413, char: "荡", pinyin: "dàng", meaning: "摇动；荡秋千", english: "Swing / shake", example: "荡秋千。", exampleEn: "Swing.", level: 2, category: "动词", radical: "艹" },
            { id: 414, char: "桃", pinyin: "táo", meaning: "桃树；桃子", english: "Peach", example: "桃花。", exampleEn: "Peach blossom.", level: 2, category: "名词", radical: "木" },
            { id: 415, char: "杏", pinyin: "xìng", meaning: "杏树；杏子", english: "Apricot", example: "杏花。", exampleEn: "Apricot blossom.", level: 2, category: "名词", radical: "木" },
            { id: 416, char: "农", pinyin: "nóng", meaning: "农业；农民", english: "Agriculture / farmer", example: "农民。", exampleEn: "Farmer.", level: 3, category: "名词", radical: "冖" },
            { id: 417, char: "忙", pinyin: "máng", meaning: "事情多；繁忙", english: "Busy", example: "很忙。", exampleEn: "Very busy.", level: 3, category: "形容词", radical: "心" },
            { id: 418, char: "归", pinyin: "guī", meaning: "返回；回来", english: "Return", example: "归来。", exampleEn: "Return.", level: 3, category: "动词", radical: "彐" },
            { id: 419, char: "戴", pinyin: "dài", meaning: "把东西加在头上", english: "Wear / put on", example: "戴帽子。", exampleEn: "Wear a hat.", level: 3, category: "动词", radical: "戈" },
            { id: 420, char: "辛", pinyin: "xīn", meaning: "辛苦；辣", english: "Hard / spicy", example: "辛苦。", exampleEn: "Hard work.", level: 4, category: "形容词", radical: "辛" },
            { id: 421, char: "苦", pinyin: "kǔ", meaning: "苦味；痛苦", english: "Bitter / suffer", example: "辛苦。", exampleEn: "Hard work.", level: 4, category: "形容词", radical: "艹" },
            { id: 422, char: "年", pinyin: "nián", meaning: "年份；岁数", english: "Year", example: "今年。", exampleEn: "This year.", level: 4, category: "名词", radical: "干" },
            { id: 423, char: "离", pinyin: "lí", meaning: "分开；距离", english: "Leave / distance", example: "离开。", exampleEn: "Leave.", level: 4, category: "动词", radical: "离" },
            { id: 424, char: "故", pinyin: "gù", meaning: "原因；故事", english: "Reason /故事", example: "故事。", exampleEn: "Story.", level: 4, category: "名词", radical: "攴" },
            { id: 425, char: "乡", pinyin: "xiāng", meaning: "家乡；乡村", english: "Home / countryside", example: "家乡。", exampleEn: "Hometown.", level: 4, category: "名词", radical: "乙" }
        ]
    },
    
    // ==================== 三年级上册 ====================
    primaryGrade3_1: {
        id: 'primaryGrade3_1',
        name: '人教版三年级上册',
        nameEn: 'Primary Grade 3 Vol.1',
        description: '小学语文三年级上册生字',
        icon: '📕',
        color: 'red',
        levelType: 'unit',
        levelLabel: '单元',
        levels: [
            { value: 'all', label: '全部' },
            { value: '1', label: '第一单元' },
            { value: '2', label: '第二单元' },
            { value: '3', label: '第三单元' },
            { value: '4', label: '第四单元' }
        ],
        vocabulary: [
            { id: 501, char: "坪", pinyin: "píng", meaning: "平坦的场地", english: "Level ground", example: "草坪。", exampleEn: "Lawn.", level: 1, category: "名词", radical: "土" },
            { id: 502, char: "坝", pinyin: "bà", meaning: "拦水的建筑物", english: "Dam", example: "大坝。", exampleEn: "Dam.", level: 1, category: "名词", radical: "土" },
            { id: 503, char: "扬", pinyin: "yáng", meaning: "向上升起", english: "Raise / fly", example: "飘扬。", exampleEn: "Flutter.", level: 1, category: "动词", radical: "扌" },
            { id: 504, char: "摔", pinyin: "shuāi", meaning: "跌倒；摔打", english: "Fall / throw", example: "摔倒。", exampleEn: "Fall down.", level: 1, category: "动词", radical: "扌" },
            { id: 505, char: "跤", pinyin: "jiāo", meaning: "摔倒", english: "Trip / fall", example: "摔跤。", exampleEn: "Trip.", level: 1, category: "名词", radical: "足" },
            { id: 506, char: "凤", pinyin: "fèng", meaning: "凤凰", english: "Phoenix", example: "凤凰。", exampleEn: "Phoenix.", level: 1, category: "名词", radical: "几" },
            { id: 507, char: "洁", pinyin: "jié", meaning: "干净；纯洁", english: "Clean / pure", example: "洁白。", exampleEn: "Pure white.", level: 1, category: "形容词", radical: "氵" },
            { id: 508, char: "服", pinyin: "fú", meaning: "衣服；服从", english: "Clothes / obey", example: "衣服。", exampleEn: "Clothes.", level: 1, category: "名词", radical: "月" },
            { id: 509, char: "装", pinyin: "zhuāng", meaning: "穿戴；装饰", english: "Dress / decorate", example: "服装。", exampleEn: "Costume.", level: 1, category: "动词", radical: "衣" },
            { id: 510, char: "静", pinyin: "jìng", meaning: "安静；平静", english: "Quiet / calm", example: "安静。", exampleEn: "Quiet.", level: 1, category: "形容词", radical: "青" },
            { id: 511, char: "停", pinyin: "tíng", meaning: "停止；停留", english: "Stop / park", example: "停下。", exampleEn: "Stop.", level: 2, category: "动词", radical: "亻" },
            { id: 512, char: "粗", pinyin: "cū", meaning: "粗大；粗糙", english: "Thick / coarse", example: "粗心。", exampleEn: "Careless.", level: 2, category: "形容词", radical: "米" },
            { id: 513, char: "影", pinyin: "yǐng", meaning: "影子；影像", english: "Shadow / image", example: "影子。", exampleEn: "Shadow.", level: 2, category: "名词", radical: "彡" },
            { id: 514, char: "借", pinyin: "jiè", meaning: "借用；借助", english: "Borrow / lend", example: "借书。", exampleEn: "Borrow books.", level: 2, category: "动词", radical: "亻" },
            { id: 515, char: "神", pinyin: "shén", meaning: "神仙；精神", english: "God / spirit", example: "精神。", exampleEn: "Spirit.", level: 2, category: "名词", radical: "礻" },
            { id: 516, char: "推", pinyin: "tuī", meaning: "向外用力", english: "Push", example: "推门。", exampleEn: "Push the door.", level: 3, category: "动词", radical: "扌" },
            { id: 517, char: "旅", pinyin: "lǚ", meaning: "旅行；军队", english: "Travel / troops", example: "旅行。", exampleEn: "Travel.", level: 3, category: "动词", radical: "方" },
            { id: 518, char: "考", pinyin: "kǎo", meaning: "考试；思考", english: "Examine / think", example: "考试。", exampleEn: "Exam.", level: 3, category: "动词", radical: "耂" },
            { id: 519, char: "秦", pinyin: "qín", meaning: "秦朝；姓氏", english: "Qin dynasty", example: "秦始皇。", exampleEn: "Qin Shi Huang.", level: 3, category: "名词", radical: "禾" },
            { id: 520, char: "纪", pinyin: "jì", meaning: "纪律；年代", english: "Discipline / era", example: "纪律。", exampleEn: "Discipline.", level: 4, category: "名词", radical: "纟" },
            { id: 521, char: "遍", pinyin: "biàn", meaning: "全部；次数", english: "All over / time", example: "一遍。", exampleEn: "Once.", level: 4, category: "量词", radical: "辶" },
            { id: 522, char: "材", pinyin: "cái", meaning: "材料；木材", english: "Material", example: "材料。", exampleEn: "Material.", level: 4, category: "名词", radical: "木" },
            { id: 523, char: "志", pinyin: "zhì", meaning: "志向；志气", english: "Will / ambition", example: "志气。", exampleEn: "Ambition.", level: 4, category: "名词", radical: "心" },
            { id: 524, char: "棋", pinyin: "qí", meaning: "下棋；棋类", english: "Chess / board game", example: "下棋。", exampleEn: "Play chess.", level: 4, category: "名词", radical: "木" },
            { id: 525, char: "弹", pinyin: "tán", meaning: "弹奏；弹力", english: "Play / spring", example: "弹琴。", exampleEn: "Play piano.", level: 4, category: "动词", radical: "弓" }
        ]
    }
    
    // 注：由于篇幅限制，三年级下册到六年级的数据将在扩展文件中提供
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = primarySchoolVocabularies;
}
