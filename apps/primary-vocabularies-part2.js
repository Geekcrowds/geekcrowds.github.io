// 人教版小学语文3-6年级字库数据（第二部分）
// Vocabulary Data for Primary Grades 3-6 (Part 2)

const primarySchoolVocabulariesPart2 = {
    
    // ==================== 三年级下册 ====================
    primaryGrade3_2: {
        id: 'primaryGrade3_2',
        name: '人教版三年级下册',
        nameEn: 'Primary Grade 3 Vol.2',
        description: '小学语文三年级下册生字',
        icon: '📔',
        color: 'pink',
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
            { id: 601, char: "融", pinyin: "róng", meaning: "融化；融合", english: "Melt / blend", example: "融化。", exampleEn: "Melt.", level: 1, category: "动词", radical: "虫" },
            { id: 602, char: "燕", pinyin: "yàn", meaning: "燕子", english: "Swallow (bird)", example: "燕子。", exampleEn: "Swallow.", level: 1, category: "名词", radical: "灬" },
            { id: 603, char: "鸳", pinyin: "yuān", meaning: "鸳鸯", english: "Mandarin duck", example: "鸳鸯。", exampleEn: "Mandarin ducks.", level: 1, category: "名词", radical: "鸟" },
            { id: 604, char: "鸯", pinyin: "yāng", meaning: "鸳鸯", english: "Mandarin duck", example: "鸳鸯。", exampleEn: "Mandarin ducks.", level: 1, category: "名词", radical: "鸟" },
            { id: 605, char: "惠", pinyin: "huì", meaning: "恩惠；好处", english: "Favor / benefit", example: "恩惠。", exampleEn: "Favor.", level: 1, category: "名词", radical: "心" },
            { id: 606, char: "崇", pinyin: "chóng", meaning: "高；尊敬", english: "Lofty / worship", example: "崇高。", exampleEn: "Lofty.", level: 1, category: "形容词", radical: "山" },
            { id: 607, char: "芦", pinyin: "lú", meaning: "芦苇", english: "Reed", example: "芦苇。", exampleEn: "Reed.", level: 1, category: "名词", radical: "艹" },
            { id: 608, char: "芽", pinyin: "yá", meaning: "植物的幼芽", english: "Sprout / bud", example: "发芽。", exampleEn: "Sprout.", level: 1, category: "名词", radical: "艹" },
            { id: 609, char: "短", pinyin: "duǎn", meaning: "长度小；时间少", english: "Short", example: "短发。", exampleEn: "Short hair.", level: 1, category: "形容词", radical: "矢" },
            { id: 610, char: "梅", pinyin: "méi", meaning: "梅花；梅树", english: "Plum / plum blossom", example: "梅花。", exampleEn: "Plum blossom.", level: 1, category: "名词", radical: "木" },
            { id: 611, char: "溪", pinyin: "xī", meaning: "小河", english: "Stream / brook", example: "小溪。", exampleEn: "Stream.", level: 2, category: "名词", radical: "氵" },
            { id: 612, char: "泛", pinyin: "fàn", meaning: "漂浮；广泛", english: "Float / extensive", example: "泛舟。", exampleEn: "Boat ride.", level: 2, category: "动词", radical: "氵" },
            { id: 613, char: "减", pinyin: "jiǎn", meaning: "减少；降低", english: "Reduce / subtract", example: "减少。", exampleEn: "Reduce.", level: 2, category: "动词", radical: "冫" },
            { id: 614, char: "愿", pinyin: "yuàn", meaning: "愿望；希望", english: "Wish / hope", example: "愿望。", exampleEn: "Wish.", level: 2, category: "名词", radical: "心" },
            { id: 615, char: "华", pinyin: "huá", meaning: "华丽；中华", english: "Magnificent / China", example: "中华。", exampleEn: "China.", level: 2, category: "形容词", radical: "十" },
            { id: 616, char: "仇", pinyin: "chóu", meaning: "仇恨；仇人", english: "Hatred / enemy", example: "仇人。", exampleEn: "Enemy.", level: 3, category: "名词", radical: "亻" },
            { id: 617, char: "恨", pinyin: "hèn", meaning: "仇恨；遗憾", english: "Hate / regret", example: "恨意。", exampleEn: "Hatred.", level: 3, category: "动词", radical: "心" },
            { id: 618, char: "怒", pinyin: "nù", meaning: "生气；发怒", english: "Angry / rage", example: "愤怒。", exampleEn: "Angry.", level: 3, category: "形容词", radical: "心" },
            { id: 619, char: "批", pinyin: "pī", meaning: "批评；批示", english: "Criticize / approve", example: "批评。", exampleEn: "Criticize.", level: 3, category: "动词", radical: "扌" },
            { id: 620, char: "诉", pinyin: "sù", meaning: "告诉；诉说", english: "Tell / complain", example: "诉说。", exampleEn: "Tell.", level: 3, category: "动词", radical: "讠" },
            { id: 621, char: "俊", pinyin: "jùn", meaning: "俊俏；才智出众", english: "Handsome / talented", example: "俊俏。", exampleEn: "Handsome.", level: 4, category: "形容词", radical: "亻" },
            { id: 622, char: "拢", pinyin: "lǒng", meaning: "靠近；聚拢", english: "Approach / gather", example: "聚拢。", exampleEn: "Gather.", level: 4, category: "动词", radical: "扌" },
            { id: 623, char: "稻", pinyin: "dào", meaning: "水稻", english: "Rice / paddy", example: "稻田。", exampleEn: "Rice field.", level: 4, category: "名词", radical: "禾" },
            { id: 624, char: "寿", pinyin: "shòu", meaning: "寿命；长寿", english: "Longevity / lifespan", example: "长寿。", exampleEn: "Longevity.", level: 4, category: "名词", radical: "寸" },
            { id: 625, char: "疆", pinyin: "jiāng", meaning: "边界；疆域", english: "Border / territory", example: "边疆。", exampleEn: "Border.", level: 4, category: "名词", radical: "田" }
        ]
    },
    
    // ==================== 四年级上册 ====================
    primaryGrade4_1: {
        id: 'primaryGrade4_1',
        name: '人教版四年级上册',
        nameEn: 'Primary Grade 4 Vol.1',
        description: '小学语文四年级上册生字',
        icon: '📓',
        color: 'indigo',
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
            { id: 701, char: "潮", pinyin: "cháo", meaning: "潮水；潮湿", english: "Tide / damp", example: "潮水。", exampleEn: "Tide.", level: 1, category: "名词", radical: "氵" },
            { id: 702, char: "称", pinyin: "chēng", meaning: "称呼；叫做", english: "Call / name", example: "称呼。", exampleEn: "Call.", level: 1, category: "动词", radical: "禾" },
            { id: 703, char: "盐", pinyin: "yán", meaning: "食盐", english: "Salt", example: "盐水。", exampleEn: "Salt water.", level: 1, category: "名词", radical: "皿" },
            { id: 704, char: "笼", pinyin: "lóng", meaning: "笼子；笼罩", english: "Cage / cover", example: "鸟笼。", exampleEn: "Bird cage.", level: 1, category: "名词", radical: "竹" },
            { id: 705, char: "罩", pinyin: "zhào", meaning: "罩住；覆盖", english: "Cover / hood", example: "笼罩。", exampleEn: "Cover.", level: 1, category: "动词", radical: "罒" },
            { id: 706, char: "蒙", pinyin: "méng", meaning: "覆盖；蒙蔽", english: "Cover / deceive", example: "蒙住。", exampleEn: "Cover.", level: 1, category: "动词", radical: "艹" },
            { id: 707, char: "薄", pinyin: "báo", meaning: "厚度小；薄弱", english: "Thin / weak", example: "薄雾。", exampleEn: "Thin fog.", level: 1, category: "形容词", radical: "艹" },
            { id: 708, char: "雾", pinyin: "wù", meaning: "雾气", english: "Fog / mist", example: "大雾。", exampleEn: "Heavy fog.", level: 1, category: "名词", radical: "雨" },
            { id: 709, char: "昂", pinyin: "áng", meaning: "高；昂贵", english: "High / expensive", example: "昂贵。", exampleEn: "Expensive.", level: 1, category: "形容词", radical: "日" },
            { id: 710, char: "沸", pinyin: "fèi", meaning: "液体沸腾", english: "Boil", example: "沸腾。", exampleEn: "Boiling.", level: 1, category: "动词", radical: "氵" },
            { id: 711, char: "贯", pinyin: "guàn", meaning: "贯穿；连贯", english: "Penetrate / consistent", example: "贯穿。", exampleEn: "Penetrate.", level: 2, category: "动词", radical: "贝" },
            { id: 712, char: "旧", pinyin: "jiù", meaning: "过去的；陈旧", english: "Old / former", example: "旧书。", exampleEn: "Old book.", level: 2, category: "形容词", radical: "臼" },
            { id: 713, char: "帐", pinyin: "zhàng", meaning: "帐篷；帐簿", english: "Tent / account", example: "帐篷。", exampleEn: "Tent.", level: 2, category: "名词", radical: "巾" },
            { id: 714, char: "蓬", pinyin: "péng", meaning: "蓬松；蓬勃", english: "Fluffy / vigorous", example: "蓬松。", exampleEn: "Fluffy.", level: 2, category: "形容词", radical: "艹" },
            { id: 715, char: "隙", pinyin: "xì", meaning: "缝隙；空隙", english: "Gap / crack", example: "缝隙。", exampleEn: "Gap.", level: 2, category: "名词", radical: "阝" },
            { id: 716, char: "暇", pinyin: "xiá", meaning: "空闲", english: "Leisure / spare time", example: "空暇。", exampleEn: "Leisure.", level: 2, category: "名词", radical: "日" },
            { id: 717, char: "均", pinyin: "jūn", meaning: "平均；都", english: "Average / all", example: "平均。", exampleEn: "Average.", level: 3, category: "形容词", radical: "土" },
            { id: 718, char: "柄", pinyin: "bǐng", meaning: "器物的把", english: "Handle", example: "刀柄。", exampleEn: "Knife handle.", level: 3, category: "名词", radical: "木" },
            { id: 719, char: "缘", pinyin: "yuán", meaning: "缘故；缘分", english: "Reason / fate", example: "缘分。", exampleEn: "Fate.", level: 3, category: "名词", radical: "纟" },
            { id: 720, char: "赖", pinyin: "lài", meaning: "依赖；抵赖", english: "Rely / deny", example: "依赖。", exampleEn: "Rely on.", level: 3, category: "动词", radical: "贝" },
            { id: 721, char: "惩", pinyin: "chéng", meaning: "惩罚；处罚", english: "Punish", example: "惩罚。", exampleEn: "Punish.", level: 4, category: "动词", radical: "心" },
            { id: 722, char: "警", pinyin: "jǐng", meaning: "警察；警告", english: "Police / warn", example: "警告。", exampleEn: "Warning.", level: 4, category: "动词", radical: "言" },
            { id: 723, char: "践", pinyin: "jiàn", meaning: "踩；实践", english: "Step on / practice", example: "实践。", exampleEn: "Practice.", level: 4, category: "动词", radical: "足" },
            { id: 724, char: "敏", pinyin: "mǐn", meaning: "敏捷；灵敏", english: "Quick / sensitive", example: "敏捷。", exampleEn: "Agile.", level: 4, category: "形容词", radical: "攴" },
            { id: 725, char: "析", pinyin: "xī", meaning: "分析", english: "Analyze", example: "分析。", exampleEn: "Analyze.", level: 4, category: "动词", radical: "木" }
        ]
    },
    
    // ==================== 四年级下册 ====================
    primaryGrade4_2: {
        id: 'primaryGrade4_2',
        name: '人教版四年级下册',
        nameEn: 'Primary Grade 4 Vol.2',
        description: '小学语文四年级下册生字',
        icon: '📒',
        color: 'teal',
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
            { id: 801, char: "亭", pinyin: "tíng", meaning: "亭子；停留", english: "Pavilion", example: "凉亭。", exampleEn: "Pavilion.", level: 1, category: "名词", radical: "亠" },
            { id: 802, char: "潭", pinyin: "tán", meaning: "水潭；深池", english: "Pool / pond", example: "水潭。", exampleEn: "Pool.", level: 1, category: "名词", radical: "氵" },
            { id: 803, char: "螺", pinyin: "luó", meaning: "螺蛳；螺旋", english: "Snail / spiral", example: "田螺。", exampleEn: "Snail.", level: 1, category: "名词", radical: "虫" },
            { id: 804, char: "谙", pinyin: "ān", meaning: "熟悉", english: "Familiar", example: "谙熟。", exampleEn: "Familiar.", level: 1, category: "形容词", radical: "讠" },
            { id: 805, char: "澜", pinyin: "lán", meaning: "波澜；大波浪", english: "Wave / ripple", example: "波澜。", exampleEn: "Waves.", level: 1, category: "名词", radical: "氵" },
            { id: 806, char: "瑕", pinyin: "xiá", meaning: "玉上的斑点；缺点", english: "Flaw / blemish", example: "瑕疵。", exampleEn: "Flaw.", level: 1, category: "名词", radical: "玉" },
            { id: 807, char: "攀", pinyin: "pān", meaning: "抓住东西往上爬", english: "Climb", example: "攀登。", exampleEn: "Climb.", level: 1, category: "动词", radical: "手" },
            { id: 808, char: "峦", pinyin: "luán", meaning: "小山；山峰", english: "Mountain range", example: "山峦。", exampleEn: "Mountain.", level: 1, category: "名词", radical: "山" },
            { id: 809, char: "泰", pinyin: "tài", meaning: "平安；泰山", english: "Safe / Mount Tai", example: "泰山。", exampleEn: "Mount Tai.", level: 1, category: "形容词", radical: "水" },
            { id: 810, char: "骆", pinyin: "luò", meaning: "骆驼", english: "Camel", example: "骆驼。", exampleEn: "Camel.", level: 1, category: "名词", radical: "马" },
            { id: 811, char: "驼", pinyin: "tuó", meaning: "骆驼；驼背", english: "Camel / hump", example: "骆驼。", exampleEn: "Camel.", level: 2, category: "名词", radical: "马" },
            { id: 812, char: "屏", pinyin: "píng", meaning: "屏风；屏障", english: "Screen / barrier", example: "屏风。", exampleEn: "Screen.", level: 2, category: "名词", radical: "尸" },
            { id: 813, char: "涧", pinyin: "jiàn", meaning: "山间流水", english: "Mountain stream", example: "山涧。", exampleEn: "Mountain stream.", level: 2, category: "名词", radical: "氵" },
            { id: 814, char: "狭", pinyin: "xiá", meaning: "窄小", english: "Narrow", example: "狭窄。", exampleEn: "Narrow.", level: 2, category: "形容词", radical: "犭" },
            { id: 815, char: "饮", pinyin: "yǐn", meaning: "喝；饮料", english: "Drink", example: "饮水。", exampleEn: "Drink water.", level: 2, category: "动词", radical: "饣" },
            { id: 816, char: "拆", pinyin: "chāi", meaning: "拆开；拆毁", english: "Dismantle / tear down", example: "拆开。", exampleEn: "Open.", level: 3, category: "动词", radical: "扌" },
            { id: 817, char: "卸", pinyin: "xiè", meaning: "卸下；卸货", english: "Unload", example: "卸货。", exampleEn: "Unload.", level: 3, category: "动词", radical: "卩" },
            { id: 818, char: "募", pinyin: "mù", meaning: "招募；募集", english: "Recruit / raise", example: "募捐。", exampleEn: "Fundraise.", level: 3, category: "动词", radical: "力" },
            { id: 819, char: "捐", pinyin: "juān", meaning: "捐献；捐赠", english: "Donate", example: "捐款。", exampleEn: "Donate money.", level: 3, category: "动词", radical: "扌" },
            { id: 820, char: "伪", pinyin: "wěi", meaning: "假的；虚伪", english: "False / fake", example: "虚伪。", exampleEn: "Hypocritical.", level: 3, category: "形容词", radical: "亻" },
            { id: 821, char: "疑", pinyin: "yí", meaning: "怀疑；不信", english: "Doubt / suspect", example: "怀疑。", exampleEn: "Doubt.", level: 4, category: "动词", radical: "疋" },
            { id: 822, char: "痕", pinyin: "hén", meaning: "痕迹；印记", english: "Trace / mark", example: "痕迹。", exampleEn: "Trace.", level: 4, category: "名词", radical: "疒" },
            { id: 823, char: "碗", pinyin: "wǎn", meaning: "盛饭的器具", english: "Bowl", example: "饭碗。", exampleEn: "Rice bowl.", level: 4, category: "名词", radical: "石" },
            { id: 824, char: "筷", pinyin: "kuài", meaning: "筷子", english: "Chopsticks", example: "筷子。", exampleEn: "Chopsticks.", level: 4, category: "名词", radical: "竹" },
            { id: 825, char: "蚀", pinyin: "shí", meaning: "腐蚀；侵蚀", english: "Corrode / erode", example: "侵蚀。", exampleEn: "Erode.", level: 4, category: "动词", radical: "虫" }
        ]
    },
    
    // ==================== 五年级上册 ====================
    primaryGrade5_1: {
        id: 'primaryGrade5_1',
        name: '人教版五年级上册',
        nameEn: 'Primary Grade 5 Vol.1',
        description: '小学语文五年级上册生字',
        icon: '📚',
        color: 'violet',
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
            { id: 901, char: "窃", pinyin: "qiè", meaning: "偷；窃取", english: "Steal / secretly", example: "窃窃私语。", exampleEn: "Whisper.", level: 1, category: "动词", radical: "穴" },
            { id: 902, char: "炒", pinyin: "chǎo", meaning: "烹调方法", english: "Stir-fry", example: "炒菜。", exampleEn: "Stir-fry.", level: 1, category: "动词", radical: "火" },
            { id: 903, char: "锅", pinyin: "guō", meaning: "炊具", english: "Pot / wok", example: "铁锅。", exampleEn: "Iron pot.", level: 1, category: "名词", radical: "钅" },
            { id: 904, char: "踮", pinyin: "diǎn", meaning: "踮脚", english: "Stand on tiptoe", example: "踮起脚。", exampleEn: "Stand on tiptoe.", level: 1, category: "动词", radical: "足" },
            { id: 905, char: "哟", pinyin: "yō", meaning: "叹词", english: "Interjection", example: "哟，真棒！", exampleEn: "Wow, great!", level: 1, category: "叹词", radical: "口" },
            { id: 906, char: "婉", pinyin: "wǎn", meaning: "委婉；和顺", english: "Tactful / gentle", example: "委婉。", exampleEn: "Tactful.", level: 1, category: "形容词", radical: "女" },
            { id: 907, char: "酸", pinyin: "suān", meaning: "酸味；心里难受", english: "Sour / sad", example: "心酸。", exampleEn: "Sad.", level: 1, category: "形容词", radical: "酉" },
            { id: 908, char: "撑", pinyin: "chēng", meaning: "支撑；撑船", english: "Support / prop up", example: "撑伞。", exampleEn: "Hold umbrella.", level: 1, category: "动词", radical: "扌" },
            { id: 909, char: "倾", pinyin: "qīng", meaning: "倾斜；倾向", english: "Incline / pour", example: "倾听。", exampleEn: "Listen attentively.", level: 1, category: "动词", radical: "亻" },
            { id: 910, char: "瞧", pinyin: "qiáo", meaning: "看", english: "Look / see", example: "瞧一瞧。", exampleEn: "Take a look.", level: 1, category: "动词", radical: "目" },
            { id: 911, char: "鲸", pinyin: "jīng", meaning: "鲸鱼", english: "Whale", example: "蓝鲸。", exampleEn: "Blue whale.", level: 2, category: "名词", radical: "鱼" },
            { id: 912, char: "肺", pinyin: "fèi", meaning: "呼吸器官", english: "Lung", example: "肺部。", exampleEn: "Lung.", level: 2, category: "名词", radical: "月" },
            { id: 913, char: "胎", pinyin: "tāi", meaning: "胎儿；轮胎", english: "Fetus / tire", example: "轮胎。", exampleEn: "Tire.", level: 2, category: "名词", radical: "月" },
            { id: 914, char: "矮", pinyin: "ǎi", meaning: "身材短小", english: "Short / low", example: "矮小。", exampleEn: "Short.", level: 2, category: "形容词", radical: "矢" },
            { id: 915, char: "瞄", pinyin: "miáo", meaning: "瞄准", english: "Aim", example: "瞄准。", exampleEn: "Aim.", level: 2, category: "动词", radical: "目" },
            { id: 916, char: "蹲", pinyin: "dūn", meaning: "蹲下", english: "Squat", example: "蹲下。", exampleEn: "Squat down.", level: 3, category: "动词", radical: "足" },
            { id: 917, char: "酿", pinyin: "niàng", meaning: "酿造；引起", english: "Brew / cause", example: "酿酒。", exampleEn: "Brew wine.", level: 3, category: "动词", radical: "酉" },
            { id: 918, char: "徒", pinyin: "tú", meaning: "徒弟；只是", english: "Apprentice / only", example: "徒弟。", exampleEn: "Apprentice.", level: 3, category: "名词", radical: "彳" },
            { id: 919, char: "番", pinyin: "fān", meaning: "次；种类", english: "Time / kind", example: "一番话。", exampleEn: "Some words.", level: 3, category: "量词", radical: "田" },
            { id: 920, char: "租", pinyin: "zū", meaning: "租用；出租", english: "Rent / lease", example: "租房。", exampleEn: "Rent house.", level: 3, category: "动词", radical: "禾" },
            { id: 921, char: "慕", pinyin: "mù", meaning: "羡慕；思慕", english: "Admire / yearn for", example: "羡慕。", exampleEn: "Admire.", level: 4, category: "动词", radical: "心" },
            { id: 922, char: "娱", pinyin: "yú", meaning: "娱乐；快乐", english: "Entertainment", example: "娱乐。", exampleEn: "Entertainment.", level: 4, category: "动词", radical: "女" },
            { id: 923, char: "魂", pinyin: "hún", meaning: "灵魂；精神", english: "Soul / spirit", example: "灵魂。", exampleEn: "Soul.", level: 4, category: "名词", radical: "鬼" },
            { id: 924, char: "幽", pinyin: "yōu", meaning: "幽静；隐蔽", english: "Quiet / secluded", example: "幽静。", exampleEn: "Quiet.", level: 4, category: "形容词", radical: "山" },
            { id: 925, char: "葬", pinyin: "zàng", meaning: "埋葬", english: "Bury", example: "埋葬。", exampleEn: "Bury.", level: 4, category: "动词", radical: "艹" }
        ]
    },
    
    // ==================== 五年级下册 ====================
    primaryGrade5_2: {
        id: 'primaryGrade5_2',
        name: '人教版五年级下册',
        nameEn: 'Primary Grade 5 Vol.2',
        description: '小学语文五年级下册生字',
        icon: '📙',
        color: 'amber',
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
            { id: 1001, char: "蓑", pinyin: "suō", meaning: "蓑衣", english: "Straw raincoat", example: "蓑衣。", exampleEn: "Raincoat.", level: 1, category: "名词", radical: "艹" },
            { id: 1002, char: "遮", pinyin: "zhē", meaning: "遮挡；掩盖", english: "Cover / block", example: "遮住。", exampleEn: "Cover.", level: 1, category: "动词", radical: "辶" },
            { id: 1003, char: "醉", pinyin: "zuì", meaning: "喝酒过量", english: "Drunk / intoxicated", example: "陶醉。", exampleEn: "Intoxicated.", level: 1, category: "形容词", radical: "酉" },
            { id: 1004, char: "锄", pinyin: "chú", meaning: "锄头；除草", english: "Hoe / weed", example: "锄地。", exampleEn: "Hoe the field.", level: 1, category: "名词", radical: "钅" },
            { id: 1005, char: "剥", pinyin: "bāo", meaning: "去掉外皮", english: "Peel / shell", example: "剥皮。", exampleEn: "Peel.", level: 1, category: "动词", radical: "刀" },
            { id: 1006, char: "笋", pinyin: "sǔn", meaning: "竹笋", english: "Bamboo shoot", example: "竹笋。", exampleEn: "Bamboo shoot.", level: 1, category: "名词", radical: "竹" },
            { id: 1007, char: "倚", pinyin: "yǐ", meaning: "倚靠；依靠", english: "Lean on / rely on", example: "倚靠。", exampleEn: "Lean on.", level: 1, category: "动词", radical: "亻" },
            { id: 1008, char: "唇", pinyin: "chún", meaning: "嘴唇", english: "Lip", example: "嘴唇。", exampleEn: "Lip.", level: 1, category: "名词", radical: "口" },
            { id: 1009, char: "榴", pinyin: "liú", meaning: "石榴", english: "Pomegranate", example: "石榴。", exampleEn: "Pomegranate.", level: 1, category: "名词", radical: "木" },
            { id: 1010, char: "绽", pinyin: "zhàn", meaning: "裂开；开放", english: "Burst / bloom", example: "绽放。", exampleEn: "Bloom.", level: 1, category: "动词", radical: "纟" },
            { id: 1011, char: "矫", pinyin: "jiǎo", meaning: "纠正；强壮", english: "Correct / strong", example: "矫健。", exampleEn: "Vigorous.", level: 2, category: "形容词", radical: "矢" },
            { id: 1012, char: "杆", pinyin: "gān", meaning: "杆子；棍子", english: "Pole / rod", example: "旗杆。", exampleEn: "Flagpole.", level: 2, category: "名词", radical: "木" },
            { id: 1013, char: "拄", pinyin: "zhǔ", meaning: "用手扶着", english: "Lean on / support", example: "拄拐。", exampleEn: "Use a cane.", level: 2, category: "动词", radical: "扌" },
            { id: 1014, char: "趟", pinyin: "tàng", meaning: "来回一次", english: "Trip / time", example: "走一趟。", exampleEn: "Make a trip.", level: 2, category: "量词", radical: "走" },
            { id: 1015, char: "碌", pinyin: "lù", meaning: "忙碌", english: "Busy", example: "忙碌。", exampleEn: "Busy.", level: 2, category: "形容词", radical: "石" },
            { id: 1016, char: "拖", pinyin: "tuō", meaning: "拉着走；拖延", english: "Drag / delay", example: "拖地。", exampleEn: "Mop floor.", level: 3, category: "动词", radical: "扌" },
            { id: 1017, char: "锅", pinyin: "guō", meaning: "炊具", english: "Pot / pan", example: "锅铲。", exampleEn: "Spatula.", level: 3, category: "名词", radical: "钅" },
            { id: 1018, char: "砖", pinyin: "zhuān", meaning: "砖块", english: "Brick", example: "砖头。", exampleEn: "Brick.", level: 3, category: "名词", radical: "石" },
            { id: 1019, char: "揉", pinyin: "róu", meaning: "用手来回擦或搓", english: "Rub / knead", example: "揉面。", exampleEn: "Knead dough.", level: 3, category: "动词", radical: "扌" },
            { id: 1020, char: "裹", pinyin: "guǒ", meaning: "包；缠绕", english: "Wrap / bind", example: "包裹。", exampleEn: "Package.", level: 3, category: "动词", radical: "衣" },
            { id: 1021, char: "酱", pinyin: "jiàng", meaning: "用发酵方法制成的糊状食品", english: "Sauce / paste", example: "酱油。", exampleEn: "Soy sauce.", level: 4, category: "名词", radical: "酉" },
            { id: 1022, char: "蘸", pinyin: "zhàn", meaning: "在液体、粉末或糊状物中沾", english: "Dip", example: "蘸酱。", exampleEn: "Dip in sauce.", level: 4, category: "动词", radical: "艹" },
            { id: 1023, char: "寇", pinyin: "kòu", meaning: "强盗；入侵", english: "Bandit / invade", example: "贼寇。", exampleEn: "Bandit.", level: 4, category: "名词", radical: "宀" },
            { id: 1024, char: "蜻", pinyin: "qīng", meaning: "蜻蜓", english: "Dragonfly", example: "蜻蜓。", exampleEn: "Dragonfly.", level: 4, category: "名词", radical: "虫" },
            { id: 1025, char: "蜓", pinyin: "tíng", meaning: "蜻蜓", english: "Dragonfly", example: "蜻蜓。", exampleEn: "Dragonfly.", level: 4, category: "名词", radical: "虫" }
        ]
    },
    
    // ==================== 六年级上册 ====================
    primaryGrade6_1: {
        id: 'primaryGrade6_1',
        name: '人教版六年级上册',
        nameEn: 'Primary Grade 6 Vol.1',
        description: '小学语文六年级上册生字',
        icon: '🎓',
        color: 'cyan',
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
            { id: 1101, char: "邀", pinyin: "yāo", meaning: "邀请", english: "Invite", example: "邀请。", exampleEn: "Invite.", level: 1, category: "动词", radical: "辶" },
            { id: 1102, char: "俯", pinyin: "fǔ", meaning: "向下；低头", english: "Bow / overlook", example: "俯视。", exampleEn: "Look down.", level: 1, category: "动词", radical: "亻" },
            { id: 1103, char: "瀑", pinyin: "pù", meaning: "瀑布", english: "Waterfall", example: "瀑布。", exampleEn: "Waterfall.", level: 1, category: "名词", radical: "氵" },
            { id: 1104, char: "峭", pinyin: "qiào", meaning: "陡峭", english: "Steep", example: "陡峭。", exampleEn: "Steep.", level: 1, category: "形容词", radical: "山" },
            { id: 1105, char: "躯", pinyin: "qū", meaning: "身体", english: "Body / trunk", example: "躯体。", exampleEn: "Body.", level: 1, category: "名词", radical: "身" },
            { id: 1106, char: "津", pinyin: "jīn", meaning: "津液；渡口", english: "Saliva / ferry", example: "津津有味。", exampleEn: "With relish.", level: 1, category: "名词", radical: "氵" },
            { id: 1107, char: "蕴", pinyin: "yùn", meaning: "蕴含；蕴藏", english: "Contain / accumulate", example: "蕴含。", exampleEn: "Contain.", level: 1, category: "动词", radical: "艹" },
            { id: 1108, char: "侠", pinyin: "xiá", meaning: "侠客；见义勇为", english: "Chivalrous", example: "侠客。", exampleEn: "Chivalrous person.", level: 1, category: "名词", radical: "亻" },
            { id: 1109, char: "谧", pinyin: "mì", meaning: "安静", english: "Quiet / tranquil", example: "宁谧。", exampleEn: "Tranquil.", level: 1, category: "形容词", radical: "讠" },
            { id: 1110, char: "巷", pinyin: "xiàng", meaning: "小街道", english: "Alley / lane", example: "小巷。", exampleEn: "Alley.", level: 1, category: "名词", radical: "巳" },
            { id: 1111, char: "俺", pinyin: "ǎn", meaning: "我（方言）", english: "I / me (dialect)", example: "俺们。", exampleEn: "We.", level: 2, category: "代词", radical: "亻" },
            { id: 1112, char: "搁", pinyin: "gē", meaning: "放置", english: "Put / place", example: "搁置。", exampleEn: "Put aside.", level: 2, category: "动词", radical: "扌" },
            { id: 1113, char: "腻", pinyin: "nì", meaning: "油腻；腻烦", english: "Greasy / bored", example: "油腻。", exampleEn: "Greasy.", level: 2, category: "形容词", radical: "月" },
            { id: 1114, char: "撇", pinyin: "piě", meaning: "丢开；汉字笔画", english: "Throw away / stroke", example: "撇开。", exampleEn: "Put aside.", level: 2, category: "动词", radical: "扌" },
            { id: 1115, char: "缎", pinyin: "duàn", meaning: "缎子", english: "Satin", example: "绸缎。", exampleEn: "Satin.", level: 2, category: "名词", radical: "纟" },
            { id: 1116, char: "帕", pinyin: "pà", meaning: "手帕", english: "Handkerchief", example: "手帕。", exampleEn: "Handkerchief.", level: 3, category: "名词", radical: "巾" },
            { id: 1117, char: "戎", pinyin: "róng", meaning: "军队；兵器", english: "Military / army", example: "戎装。", exampleEn: "Military uniform.", level: 3, category: "名词", radical: "戈" },
            { id: 1118, char: "匪", pinyin: "fěi", meaning: "强盗；土匪", english: "Bandit", example: "土匪。", exampleEn: "Bandit.", level: 3, category: "名词", radical: "匚" },
            { id: 1119, char: "淌", pinyin: "tǎng", meaning: "流下；趟过", english: "Flow / wade", example: "流淌。", exampleEn: "Flow.", level: 3, category: "动词", radical: "氵" },
            { id: 1120, char: "喉", pinyin: "hóu", meaning: "咽喉", english: "Throat", example: "喉咙。", exampleEn: "Throat.", level: 3, category: "名词", radical: "口" },
            { id: 1121, char: "胯", pinyin: "kuà", meaning: "腰和大腿之间", english: "Crotch / hip", example: "胯下。", exampleEn: "Under the crotch.", level: 4, category: "名词", radical: "月" },
            { id: 1122, char: "揪", pinyin: "jiū", meaning: "用手抓住", english: "Clutch / grab", example: "揪住。", exampleEn: "Grab.", level: 4, category: "动词", radical: "扌" },
            { id: 1123, char: "呻", pinyin: "shēn", meaning: "呻吟", english: "Moan / groan", example: "呻吟。", exampleEn: "Moan.", level: 4, category: "动词", radical: "口" },
            { id: 1124, char: "吟", pinyin: "yín", meaning: "呻吟；吟诵", english: "Groan / chant", example: "呻吟。", exampleEn: "Moan.", level: 4, category: "动词", radical: "口" },
            { id: 1125, char: "懦", pinyin: "nuò", meaning: "懦弱", english: "Cowardly / weak", example: "懦弱。", exampleEn: "Cowardly.", level: 4, category: "形容词", radical: "心" }
        ]
    },
    
    // ==================== 六年级下册 ====================
    primaryGrade6_2: {
        id: 'primaryGrade6_2',
        name: '人教版六年级下册',
        nameEn: 'Primary Grade 6 Vol.2',
        description: '小学语文六年级下册生字',
        icon: '🏆',
        color: 'lime',
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
            { id: 1201, char: "挪", pinyin: "nuó", meaning: "移动", english: "Move / shift", example: "挪动。", exampleEn: "Move.", level: 1, category: "动词", radical: "扌" },
            { id: 1202, char: "蒸", pinyin: "zhēng", meaning: "蒸发；蒸煮", english: "Steam / evaporate", example: "蒸发。", exampleEn: "Evaporate.", level: 1, category: "动词", radical: "艹" },
            { id: 1203, char: "仅", pinyin: "jǐn", meaning: "只；不过", english: "Only / merely", example: "仅有。", exampleEn: "Only have.", level: 1, category: "副词", radical: "亻" },
            { id: 1204, char: "桨", pinyin: "jiǎng", meaning: "划船的工具", english: "Oar / paddle", example: "船桨。", exampleEn: "Oar.", level: 1, category: "名词", radical: "木" },
            { id: 1205, char: "秧", pinyin: "yāng", meaning: "秧苗", english: "Rice seedling", example: "插秧。", exampleEn: "Transplant rice.", level: 1, category: "名词", radical: "禾" },
            { id: 1206, char: "箩", pinyin: "luó", meaning: "盛东西的竹器", english: "Bamboo basket", example: "箩筐。", exampleEn: "Basket.", level: 1, category: "名词", radical: "竹" },
            { id: 1207, char: "筐", pinyin: "kuāng", meaning: "盛物的竹器", english: "Basket / crate", example: "竹筐。", exampleEn: "Bamboo basket.", level: 1, category: "名词", radical: "竹" },
            { id: 1208, char: "荒", pinyin: "huāng", meaning: "荒芜；荒凉", english: "Barren / wild", example: "荒地。", exampleEn: "Wasteland.", level: 1, category: "形容词", radical: "艹" },
            { id: 1209, char: "蚕", pinyin: "cán", meaning: "蚕虫", english: "Silkworm", example: "养蚕。", exampleEn: "Raise silkworms.", level: 1, category: "名词", radical: "虫" },
            { id: 1210, char: "吁", pinyin: "yù", meaning: "叹息；呼吁", english: "Sigh / appeal", example: "呼吁。", exampleEn: "Appeal.", level: 1, category: "动词", radical: "口" },
            { id: 1211, char: "拘", pinyin: "jū", meaning: "拘束；拘留", english: "Restrict / detain", example: "拘束。", exampleEn: "Restrained.", level: 2, category: "动词", radical: "扌" },
            { id: 1212, char: "婶", pinyin: "shěn", meaning: "婶婶", english: "Aunt (father's younger brother's wife)", example: "婶婶。", exampleEn: "Aunt.", level: 2, category: "名词", radical: "女" },
            { id: 1213, char: "哼", pinyin: "hēng", meaning: "鼻音；轻蔑", english: "Hum / snort", example: "哼一声。", exampleEn: "Snort.", level: 2, category: "动词", radical: "口" },
            { id: 1214, char: "嗅", pinyin: "xiù", meaning: "用鼻子闻", english: "Smell / sniff", example: "嗅觉。", exampleEn: "Sense of smell.", level: 2, category: "动词", radical: "口" },
            { id: 1215, char: "笨", pinyin: "bèn", meaning: "不聪明；笨拙", english: "Stupid / clumsy", example: "笨拙。", exampleEn: "Clumsy.", level: 2, category: "形容词", radical: "竹" },
            { id: 1216, char: "恍", pinyin: "huǎng", meaning: "恍惚；好像", english: "Seemingly / as if", example: "恍惚。", exampleEn: "In a trance.", level: 3, category: "形容词", radical: "心" },
            { id: 1217, char: "怨", pinyin: "yuàn", meaning: "怨恨；埋怨", english: "Complain / resent", example: "埋怨。", exampleEn: "Complain.", level: 3, category: "动词", radical: "心" },
            { id: 1218, char: "艇", pinyin: "tǐng", meaning: "小船；舰艇", english: "Boat / vessel", example: "游艇。", exampleEn: "Yacht.", level: 3, category: "名词", radical: "舟" },
            { id: 1219, char: "泣", pinyin: "qì", meaning: "哭泣", english: "Weep / sob", example: "哭泣。", exampleEn: "Cry.", level: 3, category: "动词", radical: "氵" },
            { id: 1220, char: "彷", pinyin: "páng", meaning: "彷徨", english: "Hesitant / wander", example: "彷徨。", exampleEn: "Hesitant.", level: 3, category: "形容词", radical: "彳" },
            { id: 1221, char: "徨", pinyin: "huáng", meaning: "彷徨；不定", english: "Hesitant / uncertain", example: "彷徨。", exampleEn: "Hesitant.", level: 4, category: "形容词", radical: "彳" },
            { id: 1222, char: "霉", pinyin: "méi", meaning: "霉菌；倒霉", english: "Mold / unlucky", example: "发霉。", exampleEn: "Moldy.", level: 4, category: "名词", radical: "雨" },
            { id: 1223, char: "蜜", pinyin: "mì", meaning: "蜂蜜；甜", english: "Honey / sweet", example: "蜂蜜。", exampleEn: "Honey.", level: 4, category: "名词", radical: "虫" },
            { id: 1224, char: "糕", pinyin: "gāo", meaning: "糕点", english: "Cake / pastry", example: "蛋糕。", exampleEn: "Cake.", level: 4, category: "名词", radical: "米" },
            { id: 1225, char: "眷", pinyin: "juàn", meaning: "眷属；眷恋", english: "Family / be attached to", example: "眷恋。", exampleEn: "Be attached to.", level: 4, category: "动词", radical: "目" }
        ]
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = primarySchoolVocabulariesPart2;
}
