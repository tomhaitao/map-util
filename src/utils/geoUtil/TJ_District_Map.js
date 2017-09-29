/**
 * Created by chencheng on 17-7-6.
 */

const TJDistrictMap = [
    {
        name: '北京市',
        adcode: 110000,
        center: [
            116.24,
            39.55
        ],
        districts: []
    },
    {
        name: '天津市',
        adcode: 120000,
        center: [
            117.12,
            39.02
        ],
        districts: []
    },
    {
        name: '上海市',
        adcode: 310000,
        center: [
            121.29,
            31.14
        ],
        districts: []
    },
    {
        name: '重庆市',
        adcode: 500000,
        center: [
            106.33,
            29.35
        ],
        districts: []
    },
    {
        name: '香港特别行政区',
        adcode: 810000,
        center: [
            115.12,
            21.23
        ],
        districts: []
    },
    {
        name: '澳门特别行政区',
        adcode: 820000,
        center: [
            115.07,
            21.33
        ],
        districts: []
    },
    {
        name: '台湾省',
        adcode: 710000,
        center: [
            121.3,
            25.03
        ],
        districts: [
            {
                name: '台北市',
                center: [
                    121.3,
                    25.03
                ],
                districts: []
            }
        ]
    },
    {
        name: '西藏自治区',
        adcode: 540000,
        center: [
            91.08,
            29.39
        ],
        districts: [
            {
                name: '拉萨',
                center: [
                    91.08,
                    29.39
                ],
                districts: []
            },
            {
                name: '日喀则',
                center: [
                    88.51,
                    29.16
                ],
                districts: []
            }
        ]
    },
    {
        name: '湖北省',
        adcode: 420000,
        center: [
            114.17,
            30.35
        ],
        districts: [
            {
                name: '武汉',
                center: [
                    114.17,
                    30.35
                ],
                districts: []
            },
            {
                name: '安陆',
                center: [
                    113.41,
                    31.15
                ],
                districts: []
            },
            {
                name: '当阳',
                center: [
                    111.47,
                    30.5
                ],
                districts: []
            },
            {
                name: '丹江口',
                center: [
                    108.3,
                    32.33
                ],
                districts: []
            },
            {
                name: '大冶',
                center: [
                    114.58,
                    30.06
                ],
                districts: []
            },
            {
                name: '恩施',
                center: [
                    109.29,
                    30.16
                ],
                districts: []
            },
            {
                name: '鄂州',
                center: [
                    114.52,
                    30.23
                ],
                districts: []
            },
            {
                name: '广水',
                center: [
                    113.48,
                    31.37
                ],
                districts: []
            },
            {
                name: '洪湖',
                center: [
                    113.27,
                    29.48
                ],
                districts: []
            },
            {
                name: '黄石',
                center: [
                    115.06,
                    30.12
                ],
                districts: []
            },
            {
                name: '黄州',
                center: [
                    114.52,
                    30.27
                ],
                districts: []
            },
            {
                name: '荆门',
                center: [
                    112.12,
                    31.02
                ],
                districts: []
            },
            {
                name: '荆沙',
                center: [
                    112.16,
                    30.18
                ],
                districts: []
            },
            {
                name: '老河口',
                center: [
                    111.4,
                    32.23
                ],
                districts: []
            },
            {
                name: '利川',
                center: [
                    108.56,
                    30.18
                ],
                districts: []
            },
            {
                name: '麻城',
                center: [
                    115.01,
                    31.1
                ],
                districts: []
            },
            {
                name: '浦圻',
                center: [
                    113.51,
                    29.42
                ],
                districts: []
            },
            {
                name: '潜江',
                center: [
                    112.53,
                    30.26
                ],
                districts: []
            },
            {
                name: '石首',
                center: [
                    112.24,
                    29.43
                ],
                districts: []
            },
            {
                name: '十堰',
                center: [
                    110.47,
                    32.4
                ],
                districts: []
            },
            {
                name: '随州',
                center: [
                    113.22,
                    31.42
                ],
                districts: []
            },
            {
                name: '天门',
                center: [
                    113.1,
                    60.39
                ],
                districts: []
            },
            {
                name: '武穴',
                center: [
                    115.33,
                    29.51
                ],
                districts: []
            },
            {
                name: '襄樊',
                center: [
                    112.08,
                    32.02
                ],
                districts: []
            },
            {
                name: '咸宁',
                center: [
                    114.17,
                    29.53
                ],
                districts: []
            },
            {
                name: '仙桃',
                center: [
                    113.27,
                    30.22
                ],
                districts: []
            },
            {
                name: '孝感',
                center: [
                    113.54,
                    30.56
                ],
                districts: []
            },
            {
                name: '宜昌',
                center: [
                    111.17,
                    30.42
                ],
                districts: []
            },
            {
                name: '宜城',
                center: [
                    112.15,
                    31.42
                ],
                districts: []
            },
            {
                name: '应城',
                center: [
                    113.33,
                    30.57
                ],
                districts: []
            },
            {
                name: '枣阳',
                center: [
                    112.44,
                    32.07
                ],
                districts: []
            },
            {
                name: '枝城',
                center: [
                    111.27,
                    30.23
                ],
                districts: []
            },
            {
                name: '钟祥',
                center: [
                    112.34,
                    31.1
                ],
                districts: []
            }
        ]
    },
    {
        name: '湖南省',
        adcode: 430000,
        center: [
            112.59,
            28.12
        ],
        districts: [
            {
                name: '长沙',
                center: [
                    112.59,
                    28.12
                ],
                districts: []
            },
            {
                name: '常德',
                center: [
                    111.51,
                    29.02
                ],
                districts: []
            },
            {
                name: '郴州',
                center: [
                    113.02,
                    25.46
                ],
                districts: []
            },
            {
                name: '衡阳',
                center: [
                    112.37,
                    26.53
                ],
                districts: []
            },
            {
                name: '洪江',
                center: [
                    109.59,
                    27.07
                ],
                districts: []
            },
            {
                name: '怀化',
                center: [
                    109.58,
                    27.33
                ],
                districts: []
            },
            {
                name: '津市',
                center: [
                    111.52,
                    29.38
                ],
                districts: []
            },
            {
                name: '吉首',
                center: [
                    109.43,
                    28.18
                ],
                districts: []
            },
            {
                name: '耒阳',
                center: [
                    112.51,
                    26.24
                ],
                districts: []
            },
            {
                name: '冷水江',
                center: [
                    111.26,
                    27.42
                ],
                districts: []
            },
            {
                name: '冷水滩',
                center: [
                    111.35,
                    26.26
                ],
                districts: []
            },
            {
                name: '涟源',
                center: [
                    111.41,
                    27.41
                ],
                districts: []
            },
            {
                name: '醴陵',
                center: [
                    113.3,
                    27.4
                ],
                districts: []
            },
            {
                name: '临湘',
                center: [
                    113.27,
                    29.29
                ],
                districts: []
            },
            {
                name: '浏阳',
                center: [
                    113.37,
                    28.09
                ],
                districts: []
            },
            {
                name: '娄底',
                center: [
                    111.59,
                    27.44
                ],
                districts: []
            },
            {
                name: '汨罗',
                center: [
                    113.03,
                    28.49
                ],
                districts: []
            },
            {
                name: '韶山',
                center: [
                    112.29,
                    27.54
                ],
                districts: []
            },
            {
                name: '邵阳',
                center: [
                    111.28,
                    27.14
                ],
                districts: []
            },
            {
                name: '武冈',
                center: [
                    110.37,
                    26.43
                ],
                districts: []
            },
            {
                name: '湘潭',
                center: [
                    112.53,
                    27.52
                ],
                districts: []
            },
            {
                name: '湘乡',
                center: [
                    112.31,
                    27.44
                ],
                districts: []
            },
            {
                name: '益阳',
                center: [
                    112.2,
                    28.36
                ],
                districts: []
            },
            {
                name: '永州',
                center: [
                    111.37,
                    26.13
                ],
                districts: []
            },
            {
                name: '沅江',
                center: [
                    112.22,
                    28.5
                ],
                districts: []
            },
            {
                name: '岳阳',
                center: [
                    113.06,
                    29.22
                ],
                districts: []
            },
            {
                name: '张家界',
                center: [
                    110.29,
                    29.08
                ],
                districts: []
            },
            {
                name: '株洲',
                center: [
                    113.09,
                    27.51
                ],
                districts: []
            },
            {
                name: '资兴',
                center: [
                    113.13,
                    25.58
                ],
                districts: []
            }
        ]
    },
    {
        name: '广东省',
        adcode: 440000,
        center: [
            113.14,
            23.08
        ],
        districts: [
            {
                name: '广州',
                center: [
                    113.14,
                    23.08
                ],
                districts: []
            },
            {
                name: '潮阳',
                center: [
                    116.36,
                    23.16
                ],
                districts: []
            },
            {
                name: '潮州',
                center: [
                    116.38,
                    23.4
                ],
                districts: []
            },
            {
                name: '澄海',
                center: [
                    116.46,
                    23.28
                ],
                districts: []
            },
            {
                name: '从化',
                center: [
                    113.33,
                    23.33
                ],
                districts: []
            },
            {
                name: '东莞',
                center: [
                    113.45,
                    23.02
                ],
                districts: []
            },
            {
                name: '恩平',
                center: [
                    112.19,
                    22.12
                ],
                districts: []
            },
            {
                name: '佛山',
                center: [
                    113.06,
                    23.02
                ],
                districts: []
            },
            {
                name: '高明',
                center: [
                    112.5,
                    22.53
                ],
                districts: []
            },
            {
                name: '高要',
                center: [
                    112.26,
                    23.02
                ],
                districts: []
            },
            {
                name: '高州',
                center: [
                    110.5,
                    21.54
                ],
                districts: []
            },
            {
                name: '鹤山',
                center: [
                    112.57,
                    22.46
                ],
                districts: []
            },
            {
                name: '河源',
                center: [
                    114.41,
                    23.43
                ],
                districts: []
            },
            {
                name: '花都',
                center: [
                    113.12,
                    23.23
                ],
                districts: []
            },
            {
                name: '化州',
                center: [
                    110.37,
                    21.39
                ],
                districts: []
            },
            {
                name: '惠阳',
                center: [
                    114.28,
                    22.48
                ],
                districts: []
            },
            {
                name: '惠州',
                center: [
                    114.22,
                    23.05
                ],
                districts: []
            },
            {
                name: '江门',
                center: [
                    113.04,
                    22.35
                ],
                districts: []
            },
            {
                name: '揭阳',
                center: [
                    116.21,
                    22.32
                ],
                districts: []
            },
            {
                name: '开平',
                center: [
                    112.4,
                    22.22
                ],
                districts: []
            },
            {
                name: '乐昌',
                center: [
                    113.21,
                    25.09
                ],
                districts: []
            },
            {
                name: '雷州',
                center: [
                    110.04,
                    20.54
                ],
                districts: []
            },
            {
                name: '廉江',
                center: [
                    110.17,
                    21.37
                ],
                districts: []
            },
            {
                name: '连州',
                center: [
                    112.23,
                    24.48
                ],
                districts: []
            },
            {
                name: '罗定',
                center: [
                    111.33,
                    22.46
                ],
                districts: []
            },
            {
                name: '茂名',
                center: [
                    110.53,
                    21.4
                ],
                districts: []
            },
            {
                name: '梅州',
                center: [
                    116.07,
                    24.19
                ],
                districts: []
            },
            {
                name: '南海',
                center: [
                    113.09,
                    23.01
                ],
                districts: []
            },
            {
                name: '番禺',
                center: [
                    113.22,
                    22.57
                ],
                districts: []
            },
            {
                name: '普宁',
                center: [
                    116.1,
                    23.18
                ],
                districts: []
            },
            {
                name: '清远',
                center: [
                    113.01,
                    23.42
                ],
                districts: []
            },
            {
                name: '三水',
                center: [
                    112.52,
                    23.1
                ],
                districts: []
            },
            {
                name: '汕头',
                center: [
                    116.41,
                    23.22
                ],
                districts: []
            },
            {
                name: '汕尾',
                center: [
                    115.21,
                    22.47
                ],
                districts: []
            },
            {
                name: '韶关',
                center: [
                    113.37,
                    24.48
                ],
                districts: []
            },
            {
                name: '深圳',
                center: [
                    114.07,
                    22.33
                ],
                districts: []
            },
            {
                name: '顺德',
                center: [
                    113.15,
                    22.5
                ],
                districts: []
            },
            {
                name: '四会',
                center: [
                    112.41,
                    23.21
                ],
                districts: []
            },
            {
                name: '台山',
                center: [
                    112.48,
                    22.15
                ],
                districts: []
            },
            {
                name: '吴川',
                center: [
                    110.47,
                    21.26
                ],
                districts: []
            },
            {
                name: '新会',
                center: [
                    113.01,
                    22.32
                ],
                districts: []
            },
            {
                name: '兴宁',
                center: [
                    115.43,
                    24.09
                ],
                districts: []
            },
            {
                name: '阳春',
                center: [
                    111.48,
                    22.1
                ],
                districts: []
            },
            {
                name: '阳江',
                center: [
                    111.58,
                    21.5
                ],
                districts: []
            },
            {
                name: '英德',
                center: [
                    113.22,
                    24.1
                ],
                districts: []
            },
            {
                name: '云浮',
                center: [
                    112.02,
                    22.57
                ],
                districts: []
            },
            {
                name: '增城',
                center: [
                    113.49,
                    23.18
                ],
                districts: []
            },
            {
                name: '湛江',
                center: [
                    110.24,
                    21.11
                ],
                districts: []
            },
            {
                name: '肇庆',
                center: [
                    112.27,
                    23.03
                ],
                districts: []
            },
            {
                name: '中山',
                center: [
                    113.22,
                    22.31
                ],
                districts: []
            },
            {
                name: '珠海',
                center: [
                    113.34,
                    22.17
                ],
                districts: []
            }
        ]
    },
    {
        name: '广西壮族自治区',
        adcode: 450000,
        center: [
            108.19,
            22.48
        ],
        districts: [
            {
                name: '南宁',
                center: [
                    108.19,
                    22.48
                ],
                districts: []
            },
            {
                name: '北海',
                center: [
                    109.07,
                    21.28
                ],
                districts: []
            },
            {
                name: '北流',
                center: [
                    110.21,
                    22.42
                ],
                districts: []
            },
            {
                name: '百色',
                center: [
                    106.36,
                    23.54
                ],
                districts: []
            },
            {
                name: '防城港',
                center: [
                    108.2,
                    21.37
                ],
                districts: []
            },
            {
                name: '贵港',
                center: [
                    109.36,
                    23.06
                ],
                districts: []
            },
            {
                name: '桂林',
                center: [
                    110.17,
                    25.17
                ],
                districts: []
            },
            {
                name: '桂平',
                center: [
                    110.04,
                    23.22
                ],
                districts: []
            },
            {
                name: '河池',
                center: [
                    108.03,
                    24.42
                ],
                districts: []
            },
            {
                name: '合山',
                center: [
                    108.52,
                    23.47
                ],
                districts: []
            },
            {
                name: '柳州',
                center: [
                    109.24,
                    23.19
                ],
                districts: []
            },
            {
                name: '赁祥',
                center: [
                    106.44,
                    22.07
                ],
                districts: []
            },
            {
                name: '钦州',
                center: [
                    108.37,
                    21.57
                ],
                districts: []
            },
            {
                name: '青塘',
                center: [
                    108.82,
                    22.26
                ],
                districts: []
            },
            {
                name: '梧州',
                center: [
                    111.2,
                    23.29
                ],
                districts: []
            },
            {
                name: '玉林',
                center: [
                    110.09,
                    22.38
                ],
                districts: []
            },
            {
                name: '宜州',
                center: [
                    108.4,
                    24.28
                ],
                districts: []
            }
        ]
    },
    {
        name: '四川省',
        adcode: 510000,
        center: [
            104.04,
            30.4
        ],
        districts: [
            {
                name: '成都',
                center: [
                    104.04,
                    30.4
                ],
                districts: []
            },
            {
                name: '巴中',
                center: [
                    106.43,
                    31.51
                ],
                districts: []
            },
            {
                name: '崇州',
                center: [
                    103.4,
                    30.39
                ],
                districts: []
            },
            {
                name: '达川',
                center: [
                    107.29,
                    31.14
                ],
                districts: []
            },
            {
                name: '德阳',
                center: [
                    104.22,
                    31.09
                ],
                districts: []
            },
            {
                name: '都江堰',
                center: [
                    103.37,
                    31.01
                ],
                districts: []
            },
            {
                name: '峨眉山',
                center: [
                    103.29,
                    29.36
                ],
                districts: []
            },
            {
                name: '涪陵',
                center: [
                    107.22,
                    29.42
                ],
                districts: []
            },
            {
                name: '广汉',
                center: [
                    104.15,
                    30.58
                ],
                districts: []
            },
            {
                name: '广元',
                center: [
                    105.51,
                    32.28
                ],
                districts: []
            },
            {
                name: '华蓥',
                center: [
                    106.44,
                    30.26
                ],
                districts: []
            },
            {
                name: '简阳',
                center: [
                    104.32,
                    30.24
                ],
                districts: []
            },
            {
                name: '江油',
                center: [
                    104.42,
                    31.48
                ],
                districts: []
            },
            {
                name: '阆中',
                center: [
                    105.58,
                    31.36
                ],
                districts: []
            },
            {
                name: '乐山',
                center: [
                    103.44,
                    29.36
                ],
                districts: []
            },
            {
                name: '泸州',
                center: [
                    105.24,
                    28.54
                ],
                districts: []
            },
            {
                name: '绵阳',
                center: [
                    104.42,
                    31.3
                ],
                districts: []
            },
            {
                name: '南充',
                center: [
                    106.04,
                    30.49
                ],
                districts: []
            },
            {
                name: '内江',
                center: [
                    105.02,
                    29.36
                ],
                districts: []
            },
            {
                name: '攀枝花',
                center: [
                    101.43,
                    26.34
                ],
                districts: []
            },
            {
                name: '彭州',
                center: [
                    103.57,
                    30.59
                ],
                districts: []
            },
            {
                name: '邛崃',
                center: [
                    103.28,
                    30.26
                ],
                districts: []
            },
            {
                name: '遂宁',
                center: [
                    105.33,
                    30.31
                ],
                districts: []
            },
            {
                name: '万县',
                center: [
                    108.21,
                    30.5
                ],
                districts: []
            },
            {
                name: '万源',
                center: [
                    108.03,
                    32.03
                ],
                districts: []
            },
            {
                name: '西昌',
                center: [
                    102.16,
                    27.54
                ],
                districts: []
            },
            {
                name: '雅安',
                center: [
                    102.59,
                    29.59
                ],
                districts: []
            },
            {
                name: '宜宾',
                center: [
                    104.34,
                    28.47
                ],
                districts: []
            },
            {
                name: '自贡',
                center: [
                    104.46,
                    29.23
                ],
                districts: []
            },
            {
                name: '资阳',
                center: [
                    104.38,
                    30.09
                ],
                districts: []
            }
        ]
    },
    {
        name: '浙江省',
        adcode: 330000,
        center: [
            120.1,
            30.16
        ],
        districts: [
            {
                name: '杭州',
                center: [
                    120.1,
                    30.16
                ],
                districts: []
            },
            {
                name: '慈溪',
                center: [
                    121.15,
                    30.11
                ],
                districts: []
            },
            {
                name: '东阳',
                center: [
                    120.14,
                    29.16
                ],
                districts: []
            },
            {
                name: '奉化',
                center: [
                    121.24,
                    29.39
                ],
                districts: []
            },
            {
                name: '富阳',
                center: [
                    119.57,
                    30.03
                ],
                districts: []
            },
            {
                name: '海宁',
                center: [
                    120.42,
                    30.32
                ],
                districts: []
            },
            {
                name: '湖州',
                center: [
                    120.06,
                    30.52
                ],
                districts: []
            },
            {
                name: '建德',
                center: [
                    119.16,
                    29.29
                ],
                districts: []
            },
            {
                name: '江山',
                center: [
                    118.37,
                    28.45
                ],
                districts: []
            },
            {
                name: '嘉兴',
                center: [
                    120.45,
                    30.46
                ],
                districts: []
            },
            {
                name: '金华',
                center: [
                    119.39,
                    29.07
                ],
                districts: []
            },
            {
                name: '兰溪',
                center: [
                    119.28,
                    29.12
                ],
                districts: []
            },
            {
                name: '临海',
                center: [
                    121.08,
                    28.51
                ],
                districts: []
            },
            {
                name: '丽水',
                center: [
                    119.54,
                    28.27
                ],
                districts: []
            },
            {
                name: '龙泉',
                center: [
                    119.08,
                    28.04
                ],
                districts: []
            },
            {
                name: '宁波',
                center: [
                    121.33,
                    29.52
                ],
                districts: []
            },
            {
                name: '平湖',
                center: [
                    121.01,
                    30.42
                ],
                districts: []
            },
            {
                name: '衢州',
                center: [
                    118.52,
                    28.58
                ],
                districts: []
            },
            {
                name: '瑞安',
                center: [
                    120.38,
                    27.48
                ],
                districts: []
            },
            {
                name: '上虞',
                center: [
                    120.52,
                    30.01
                ],
                districts: []
            },
            {
                name: '绍兴',
                center: [
                    120.34,
                    30
                ],
                districts: []
            },
            {
                name: '台州',
                center: [
                    121.27,
                    28.41
                ],
                districts: []
            },
            {
                name: '桐乡',
                center: [
                    120.32,
                    30.38
                ],
                districts: []
            },
            {
                name: '温岭',
                center: [
                    121.21,
                    28.22
                ],
                districts: []
            },
            {
                name: '温州',
                center: [
                    120.39,
                    28.01
                ],
                districts: []
            },
            {
                name: '萧山',
                center: [
                    120.16,
                    30.09
                ],
                districts: []
            },
            {
                name: '义乌',
                center: [
                    120.04,
                    29.18
                ],
                districts: []
            },
            {
                name: '乐清',
                center: [
                    120.58,
                    28.08
                ],
                districts: []
            },
            {
                name: '余杭',
                center: [
                    120.18,
                    30.26
                ],
                districts: []
            },
            {
                name: '余姚',
                center: [
                    121.1,
                    30.02
                ],
                districts: []
            },
            {
                name: '永康',
                center: [
                    120.01,
                    29.54
                ],
                districts: []
            },
            {
                name: '舟山',
                center: [
                    122.06,
                    30.01
                ],
                districts: []
            },
            {
                name: '诸暨',
                center: [
                    120.14,
                    29.43
                ],
                districts: []
            }
        ]
    },
    {
        name: '陕西省',
        adcode: 610000,
        center: [
            108.57,
            34.17
        ],
        districts: [
            {
                name: '西安',
                center: [
                    108.57,
                    34.17
                ],
                districts: []
            },
            {
                name: '安康',
                center: [
                    109.01,
                    32.41
                ],
                districts: []
            },
            {
                name: '宝鸡',
                center: [
                    107.09,
                    34.22
                ],
                districts: []
            },
            {
                name: '韩城',
                center: [
                    110.27,
                    35.28
                ],
                districts: []
            },
            {
                name: '汉中',
                center: [
                    107.01,
                    33.04
                ],
                districts: []
            },
            {
                name: '华阴',
                center: [
                    110.05,
                    34.34
                ],
                districts: []
            },
            {
                name: '商州',
                center: [
                    109.57,
                    33.52
                ],
                districts: []
            },
            {
                name: '铜川',
                center: [
                    109.07,
                    35.06
                ],
                districts: []
            },
            {
                name: '渭南',
                center: [
                    109.3,
                    34.3
                ],
                districts: []
            },
            {
                name: '咸阳',
                center: [
                    108.43,
                    34.2
                ],
                districts: []
            },
            {
                name: '兴平',
                center: [
                    108.29,
                    34.18
                ],
                districts: []
            },
            {
                name: '延安',
                center: [
                    109.28,
                    36.35
                ],
                districts: []
            },
            {
                name: '榆林',
                center: [
                    109.47,
                    38.18
                ],
                districts: []
            }
        ]
    },
    {
        name: '甘肃省',
        adcode: 620000,
        center: [
            103.51,
            36.04
        ],
        districts: [
            {
                name: '兰州',
                center: [
                    103.51,
                    36.04
                ],
                districts: []
            },
            {
                name: '白银',
                center: [
                    104.12,
                    36.33
                ],
                districts: []
            },
            {
                name: '敦煌',
                center: [
                    94.41,
                    40.08
                ],
                districts: []
            },
            {
                name: '嘉峪关',
                center: [
                    98.14,
                    39.48
                ],
                districts: []
            },
            {
                name: '金昌',
                center: [
                    102.1,
                    38.28
                ],
                districts: []
            },
            {
                name: '酒泉',
                center: [
                    98.31,
                    39.44
                ],
                districts: []
            },
            {
                name: '临夏',
                center: [
                    103.12,
                    35.37
                ],
                districts: []
            },
            {
                name: '平凉',
                center: [
                    106.4,
                    35.32
                ],
                districts: []
            },
            {
                name: '天水',
                center: [
                    105.42,
                    34.37
                ],
                districts: []
            },
            {
                name: '武威',
                center: [
                    102.39,
                    37.56
                ],
                districts: []
            },
            {
                name: '西峰',
                center: [
                    107.4,
                    35.45
                ],
                districts: []
            },
            {
                name: '玉门',
                center: [
                    97.35,
                    39.49
                ],
                districts: []
            },
            {
                name: '张掖',
                center: [
                    100.26,
                    38.56
                ],
                districts: []
            }
        ]
    },
    {
        name: '重庆市',
        adcode: 500000,
        center: [
            106.15,
            30.02
        ],
        districts: [
            {
                name: '合川市',
                center: [
                    106.15,
                    30.02
                ],
                districts: []
            },
            {
                name: '江津市',
                center: [
                    106.16,
                    29.18
                ],
                districts: []
            },
            {
                name: '南川市',
                center: [
                    107.05,
                    29.1
                ],
                districts: []
            },
            {
                name: '永川市',
                center: [
                    105.53,
                    29.23
                ],
                districts: []
            }
        ]
    },
    {
        name: '宁夏回族自治区',
        adcode: 640000,
        center: [
            106.16,
            38.27
        ],
        districts: [
            {
                name: '银川',
                center: [
                    106.16,
                    38.27
                ],
                districts: []
            },
            {
                name: '青铜峡',
                center: [
                    105.59,
                    37.56
                ],
                districts: []
            },
            {
                name: '石嘴山',
                center: [
                    106.22,
                    39.02
                ],
                districts: []
            },
            {
                name: '吴忠',
                center: [
                    106.11,
                    37.59
                ],
                districts: []
            }
        ]
    },
    {
        name: '内蒙古自治区',
        adcode: 150000,
        center: [
            111.41,
            40.48
        ],
        districts: [
            {
                name: '呼和浩特',
                center: [
                    111.41,
                    40.48
                ],
                districts: []
            },
            {
                name: '包头',
                center: [
                    109.49,
                    40.39
                ],
                districts: []
            },
            {
                name: '兴安盟',
                center: [
                    122.070317,
                    46.076268
                ],
                districts: []
            },
            {
                name: '呼伦贝尔市',
                center: [
                    119.758168,
                    49.215333
                ],
                districts: []
            },
            {
                name: '赤峰',
                center: [
                    118.58,
                    42.17
                ],
                districts: []
            },
            {
                name: '东胜',
                center: [
                    109.59,
                    39.48
                ],
                districts: []
            },
            {
                name: '二连浩特',
                center: [
                    111.58,
                    43.38
                ],
                districts: []
            },
            {
                name: '额尔古纳',
                center: [
                    120.11,
                    50.13
                ],
                districts: []
            },
            {
                name: '丰镇',
                center: [
                    113.09,
                    40.27
                ],
                districts: []
            },
            {
                name: '根河',
                center: [
                    121.29,
                    50.48
                ],
                districts: []
            },
            {
                name: '海拉尔',
                center: [
                    119.39,
                    49.12
                ],
                districts: []
            },
            {
                name: '霍林郭勒',
                center: [
                    119.38,
                    45.32
                ],
                districts: []
            },
            {
                name: '集宁',
                center: [
                    113.06,
                    41.02
                ],
                districts: []
            },
            {
                name: '临河',
                center: [
                    107.22,
                    40.46
                ],
                districts: []
            },
            {
                name: '满洲里',
                center: [
                    117.23,
                    49.35
                ],
                districts: []
            },
            {
                name: '通辽',
                center: [
                    122.16,
                    43.37
                ],
                districts: []
            },
            {
                name: '乌兰浩特',
                center: [
                    122.03,
                    46.03
                ],
                districts: []
            },
            {
                name: '乌海',
                center: [
                    106.48,
                    39.4
                ],
                districts: []
            },
            {
                name: '锡林浩特',
                center: [
                    116.03,
                    43.57
                ],
                districts: []
            },
            {
                name: '牙克石',
                center: [
                    120.4,
                    49.17
                ],
                districts: []
            },
            {
                name: '扎兰屯',
                center: [
                    122.47,
                    48
                ],
                districts: []
            }
        ]
    },
    {
        name: '青海省',
        adcode: 630000,
        center: [
            101.48,
            36.38
        ],
        districts: [
            {
                name: '西宁',
                center: [
                    101.48,
                    36.38
                ],
                districts: []
            },
            {
                name: '德令哈',
                center: [
                    97.23,
                    37.22
                ],
                districts: []
            },
            {
                name: '格尔木',
                center: [
                    94.55,
                    36.26
                ],
                districts: []
            }
        ]
    },
    {
        name: '江西省',
        adcode: 360000,
        center: [
            115.55,
            28.4
        ],
        districts: [
            {
                name: '南昌',
                center: [
                    115.55,
                    28.4
                ],
                districts: []
            },
            {
                name: '德兴',
                center: [
                    117.35,
                    28.57
                ],
                districts: []
            },
            {
                name: '丰城',
                center: [
                    115.48,
                    28.12
                ],
                districts: []
            },
            {
                name: '赣州',
                center: [
                    114.56,
                    28.52
                ],
                districts: []
            },
            {
                name: '高安',
                center: [
                    115.22,
                    28.25
                ],
                districts: []
            },
            {
                name: '吉安',
                center: [
                    114.58,
                    27.07
                ],
                districts: []
            },
            {
                name: '景德镇',
                center: [
                    117.13,
                    29.17
                ],
                districts: []
            },
            {
                name: '井冈山',
                center: [
                    114.1,
                    26.34
                ],
                districts: []
            },
            {
                name: '九江',
                center: [
                    115.58,
                    29.43
                ],
                districts: []
            },
            {
                name: '乐平',
                center: [
                    117.08,
                    28.58
                ],
                districts: []
            },
            {
                name: '临川',
                center: [
                    116.21,
                    27.59
                ],
                districts: []
            },
            {
                name: '萍乡',
                center: [
                    113.5,
                    27.37
                ],
                districts: []
            },
            {
                name: '瑞昌',
                center: [
                    115.38,
                    29.4
                ],
                districts: []
            },
            {
                name: '瑞金',
                center: [
                    116.01,
                    25.53
                ],
                districts: []
            },
            {
                name: '上饶',
                center: [
                    117.58,
                    25.27
                ],
                districts: []
            },
            {
                name: '新余',
                center: [
                    114.56,
                    27.48
                ],
                districts: []
            },
            {
                name: '宜春',
                center: [
                    114.23,
                    27.47
                ],
                districts: []
            },
            {
                name: '鹰潭',
                center: [
                    117.03,
                    28.14
                ],
                districts: []
            },
            {
                name: '樟树',
                center: [
                    115.32,
                    28.03
                ],
                districts: []
            }
        ]
    },
    {
        name: '安徽省',
        adcode: 340000,
        center: [
            117.17,
            31.52
        ],
        districts: [
            {
                name: '合肥',
                center: [
                    117.17,
                    31.52
                ],
                districts: []
            },
            {
                name: '安庆',
                center: [
                    117.02,
                    30.31
                ],
                districts: []
            },
            {
                name: '蚌埠',
                center: [
                    117.21,
                    32.56
                ],
                districts: []
            },
            {
                name: '亳州',
                center: [
                    115.47,
                    33.52
                ],
                districts: []
            },
            {
                name: '巢湖',
                center: [
                    117.52,
                    31.36
                ],
                districts: []
            },
            {
                name: '滁州',
                center: [
                    118.18,
                    32.18
                ],
                districts: []
            },
            {
                name: '阜阳',
                center: [
                    115.48,
                    32.54
                ],
                districts: []
            },
            {
                name: '贵池',
                center: [
                    117.28,
                    30.39
                ],
                districts: []
            },
            {
                name: '淮北',
                center: [
                    116.47,
                    33.57
                ],
                districts: []
            },
            {
                name: '淮南',
                center: [
                    116.58,
                    32.37
                ],
                districts: []
            },
            {
                name: '黄山',
                center: [
                    118.18,
                    29.43
                ],
                districts: []
            },
            {
                name: '界首',
                center: [
                    115.21,
                    33.15
                ],
                districts: []
            },
            {
                name: '六安',
                center: [
                    116.28,
                    31.44
                ],
                districts: []
            },
            {
                name: '马鞍山',
                center: [
                    118.28,
                    31.43
                ],
                districts: []
            },
            {
                name: '明光',
                center: [
                    117.58,
                    32.47
                ],
                districts: []
            },
            {
                name: '宿州',
                center: [
                    116.58,
                    33.38
                ],
                districts: []
            },
            {
                name: '天长',
                center: [
                    118.59,
                    32.41
                ],
                districts: []
            },
            {
                name: '铜陵',
                center: [
                    117.48,
                    30.56
                ],
                districts: []
            },
            {
                name: '芜湖',
                center: [
                    118.22,
                    31.19
                ],
                districts: []
            },
            {
                name: '宣州',
                center: [
                    118.44,
                    30.57
                ],
                districts: []
            }
        ]
    },
    {
        name: '贵州省',
        adcode: 520000,
        center: [
            106.42,
            26.35
        ],
        districts: [
            {
                name: '贵阳',
                center: [
                    106.42,
                    26.35
                ],
                districts: []
            },
            {
                name: '安顺',
                center: [
                    105.55,
                    26.14
                ],
                districts: []
            },
            {
                name: '毕节',
                center: [
                    105.18,
                    27.18
                ],
                districts: []
            },
            {
                name: '赤水',
                center: [
                    105.42,
                    28.34
                ],
                districts: []
            },
            {
                name: '都匀',
                center: [
                    107.31,
                    26.15
                ],
                districts: []
            },
            {
                name: '凯里',
                center: [
                    107.58,
                    26.35
                ],
                districts: []
            },
            {
                name: '六盘水',
                center: [
                    104.5,
                    26.35
                ],
                districts: []
            },
            {
                name: '清镇',
                center: [
                    106.27,
                    26.33
                ],
                districts: []
            },
            {
                name: '铜仁',
                center: [
                    109.12,
                    27.43
                ],
                districts: []
            },
            {
                name: '兴义',
                center: [
                    104.53,
                    25.05
                ],
                districts: []
            },
            {
                name: '遵义',
                center: [
                    106.55,
                    27.42
                ],
                districts: []
            }
        ]
    },
    {
        name: '辽宁省',
        adcode: 210000,
        center: [
            123.25,
            41.48
        ],
        districts: [
            {
                name: '沈阳',
                center: [
                    123.25,
                    41.48
                ],
                districts: []
            },
            {
                name: '鞍山',
                center: [
                    123,
                    41.07
                ],
                districts: []
            },
            {
                name: '北票',
                center: [
                    120.47,
                    41.48
                ],
                districts: []
            },
            {
                name: '本溪',
                center: [
                    123.46,
                    41.18
                ],
                districts: []
            },
            {
                name: '朝阳',
                center: [
                    120.27,
                    41.34
                ],
                districts: []
            },
            {
                name: '大连',
                center: [
                    121.36,
                    38.55
                ],
                districts: []
            },
            {
                name: '丹东',
                center: [
                    124.22,
                    40.08
                ],
                districts: []
            },
            {
                name: '大石桥',
                center: [
                    122.31,
                    40.37
                ],
                districts: []
            },
            {
                name: '东港',
                center: [
                    124.08,
                    39.53
                ],
                districts: []
            },
            {
                name: '凤城',
                center: [
                    124.02,
                    40.28
                ],
                districts: []
            },
            {
                name: '抚顺',
                center: [
                    123.54,
                    41.51
                ],
                districts: []
            },
            {
                name: '阜新',
                center: [
                    121.39,
                    42.01
                ],
                districts: []
            },
            {
                name: '盖州',
                center: [
                    122.21,
                    40.24
                ],
                districts: []
            },
            {
                name: '海城',
                center: [
                    122.43,
                    40.51
                ],
                districts: []
            },
            {
                name: '葫芦岛',
                center: [
                    120.51,
                    40.45
                ],
                districts: []
            },
            {
                name: '锦州',
                center: [
                    121.09,
                    41.07
                ],
                districts: []
            },
            {
                name: '开原',
                center: [
                    124.02,
                    42.32
                ],
                districts: []
            },
            {
                name: '辽阳',
                center: [
                    123.12,
                    41.16
                ],
                districts: []
            },
            {
                name: '凌海',
                center: [
                    121.21,
                    41.1
                ],
                districts: []
            },
            {
                name: '凌源',
                center: [
                    119.22,
                    41.14
                ],
                districts: []
            },
            {
                name: '盘锦',
                center: [
                    122.03,
                    41.07
                ],
                districts: []
            },
            {
                name: '普兰店',
                center: [
                    121.58,
                    39.23
                ],
                districts: []
            },
            {
                name: '铁法',
                center: [
                    123.32,
                    42.28
                ],
                districts: []
            },
            {
                name: '铁岭',
                center: [
                    123.51,
                    42.18
                ],
                districts: []
            },
            {
                name: '瓦房店',
                center: [
                    122,
                    39.37
                ],
                districts: []
            },
            {
                name: '兴城',
                center: [
                    120.41,
                    40.37
                ],
                districts: []
            },
            {
                name: '新民',
                center: [
                    122.49,
                    41.59
                ],
                districts: []
            },
            {
                name: '营口',
                center: [
                    122.13,
                    40.39
                ],
                districts: []
            },
            {
                name: '庄河',
                center: [
                    122.58,
                    39.41
                ],
                districts: []
            }
        ]
    },
    {
        name: '河北省',
        adcode: 130000,
        center: [
            114.3,
            38.02
        ],
        districts: [
            {
                name: '石家庄',
                center: [
                    114.3,
                    38.02
                ],
                districts: []
            },
            {
                name: '安国',
                center: [
                    115.2,
                    38.24
                ],
                districts: []
            },
            {
                name: '保定',
                center: [
                    115.3,
                    38.51
                ],
                districts: []
            },
            {
                name: '霸州',
                center: [
                    116.24,
                    39.06
                ],
                districts: []
            },
            {
                name: '泊头',
                center: [
                    116.34,
                    38.04
                ],
                districts: []
            },
            {
                name: '沧州',
                center: [
                    116.52,
                    38.18
                ],
                districts: []
            },
            {
                name: '承德',
                center: [
                    117.57,
                    40.59
                ],
                districts: []
            },
            {
                name: '定州',
                center: [
                    115,
                    38.3
                ],
                districts: []
            },
            {
                name: '丰南',
                center: [
                    118.06,
                    39.34
                ],
                districts: []
            },
            {
                name: '高碑店',
                center: [
                    115.51,
                    39.2
                ],
                districts: []
            },
            {
                name: '蒿城',
                center: [
                    114.5,
                    38.02
                ],
                districts: []
            },
            {
                name: '邯郸',
                center: [
                    114.28,
                    36.36
                ],
                districts: []
            },
            {
                name: '河间',
                center: [
                    116.05,
                    38.26
                ],
                districts: []
            },
            {
                name: '衡水',
                center: [
                    115.42,
                    37.44
                ],
                districts: []
            },
            {
                name: '黄骅',
                center: [
                    117.21,
                    38.21
                ],
                districts: []
            },
            {
                name: '晋州',
                center: [
                    115.02,
                    38.02
                ],
                districts: []
            },
            {
                name: '冀州',
                center: [
                    115.33,
                    37.34
                ],
                districts: []
            },
            {
                name: '廓坊',
                center: [
                    116.42,
                    39.31
                ],
                districts: []
            },
            {
                name: '鹿泉',
                center: [
                    114.19,
                    38.04
                ],
                districts: []
            },
            {
                name: '南宫',
                center: [
                    115.23,
                    37.22
                ],
                districts: []
            },
            {
                name: '秦皇岛',
                center: [
                    119.35,
                    39.55
                ],
                districts: []
            },
            {
                name: '任丘',
                center: [
                    116.07,
                    38.42
                ],
                districts: []
            },
            {
                name: '三河',
                center: [
                    117.04,
                    39.58
                ],
                districts: []
            },
            {
                name: '沙河',
                center: [
                    114.3,
                    36.51
                ],
                districts: []
            },
            {
                name: '深州',
                center: [
                    115.32,
                    38.01
                ],
                districts: []
            },
            {
                name: '唐山',
                center: [
                    118.11,
                    39.36
                ],
                districts: []
            },
            {
                name: '武安',
                center: [
                    114.11,
                    36.42
                ],
                districts: []
            },
            {
                name: '邢台',
                center: [
                    114.3,
                    37.04
                ],
                districts: []
            },
            {
                name: '辛集',
                center: [
                    115.12,
                    37.54
                ],
                districts: []
            },
            {
                name: '新乐',
                center: [
                    114.41,
                    38.2
                ],
                districts: []
            },
            {
                name: '张家口',
                center: [
                    114.53,
                    40.48
                ],
                districts: []
            },
            {
                name: '涿州',
                center: [
                    115.59,
                    39.29
                ],
                districts: []
            },
            {
                name: '遵化',
                center: [
                    117.58,
                    40.11
                ],
                districts: []
            }
        ]
    },
    {
        name: '河南省',
        adcode: 410000,
        center: [
            113.4,
            34.46
        ],
        districts: [
            {
                name: '郑州',
                center: [
                    113.4,
                    34.46
                ],
                districts: []
            },
            {
                name: '安阳',
                center: [
                    114.21,
                    36.06
                ],
                districts: []
            },
            {
                name: '长葛',
                center: [
                    113.47,
                    34.12
                ],
                districts: []
            },
            {
                name: '登封',
                center: [
                    113.02,
                    34.27
                ],
                districts: []
            },
            {
                name: '邓州',
                center: [
                    112.05,
                    32.42
                ],
                districts: []
            },
            {
                name: '巩义',
                center: [
                    112.58,
                    34.46
                ],
                districts: []
            },
            {
                name: '鹤壁',
                center: [
                    114.11,
                    35.54
                ],
                districts: []
            },
            {
                name: '辉县',
                center: [
                    113.47,
                    35.27
                ],
                districts: []
            },
            {
                name: '焦作',
                center: [
                    113.12,
                    35.14
                ],
                districts: []
            },
            {
                name: '济源',
                center: [
                    112.35,
                    35.04
                ],
                districts: []
            },
            {
                name: '开封',
                center: [
                    114.21,
                    34.47
                ],
                districts: []
            },
            {
                name: '灵宝',
                center: [
                    110.52,
                    34.31
                ],
                districts: []
            },
            {
                name: '林州',
                center: [
                    113.49,
                    36.03
                ],
                districts: []
            },
            {
                name: '漯河',
                center: [
                    114.02,
                    33.33
                ],
                districts: []
            },
            {
                name: '洛阳',
                center: [
                    112.27,
                    34.41
                ],
                districts: []
            },
            {
                name: '南阳',
                center: [
                    112.32,
                    33
                ],
                districts: []
            },
            {
                name: '平顶山',
                center: [
                    113.17,
                    33.44
                ],
                districts: []
            },
            {
                name: '濮阳',
                center: [
                    115.01,
                    35.44
                ],
                districts: []
            },
            {
                name: '沁阳',
                center: [
                    112.57,
                    35.05
                ],
                districts: []
            },
            {
                name: '汝州',
                center: [
                    112.5,
                    34.09
                ],
                districts: []
            },
            {
                name: '三门峡',
                center: [
                    111.12,
                    34.47
                ],
                districts: []
            },
            {
                name: '商丘',
                center: [
                    115.38,
                    34.26
                ],
                districts: []
            },
            {
                name: '卫辉',
                center: [
                    114.03,
                    35.24
                ],
                districts: []
            },
            {
                name: '舞钢',
                center: [
                    113.3,
                    33.17
                ],
                districts: []
            },
            {
                name: '项城',
                center: [
                    114.54,
                    33.26
                ],
                districts: []
            },
            {
                name: '荥阳',
                center: [
                    113.21,
                    34.46
                ],
                districts: []
            },
            {
                name: '新密',
                center: [
                    113.22,
                    34.31
                ],
                districts: []
            },
            {
                name: '新乡',
                center: [
                    113.52,
                    35.18
                ],
                districts: []
            },
            {
                name: '信阳',
                center: [
                    114.04,
                    32.07
                ],
                districts: []
            },
            {
                name: '新郑',
                center: [
                    113.43,
                    34.24
                ],
                districts: []
            },
            {
                name: '许昌',
                center: [
                    113.49,
                    34.01
                ],
                districts: []
            },
            {
                name: '偃师',
                center: [
                    112.47,
                    34.43
                ],
                districts: []
            },
            {
                name: '义马',
                center: [
                    111.55,
                    34.43
                ],
                districts: []
            },
            {
                name: '禹州',
                center: [
                    113.28,
                    34.09
                ],
                districts: []
            },
            {
                name: '周口',
                center: [
                    114.38,
                    33.37
                ],
                districts: []
            },
            {
                name: '驻马店',
                center: [
                    114.01,
                    32.58
                ],
                districts: []
            }
        ]
    },
    {
        name: '山东省',
        adcode: 370000,
        center: [
            117,
            36.4
        ],
        districts: [
            {
                name: '济南',
                center: [
                    117,
                    36.4
                ],
                districts: []
            },
            {
                name: '安丘',
                center: [
                    119.12,
                    36.25
                ],
                districts: []
            },
            {
                name: '滨州',
                center: [
                    118.02,
                    37.22
                ],
                districts: []
            },
            {
                name: '昌邑',
                center: [
                    119.24,
                    39.52
                ],
                districts: []
            },
            {
                name: '德州',
                center: [
                    116.17,
                    37.26
                ],
                districts: []
            },
            {
                name: '东营',
                center: [
                    118.3,
                    37.27
                ],
                districts: []
            },
            {
                name: '肥城',
                center: [
                    116.46,
                    36.14
                ],
                districts: []
            },
            {
                name: '高密',
                center: [
                    119.44,
                    36.22
                ],
                districts: []
            },
            {
                name: '菏泽',
                center: [
                    115.26,
                    35.14
                ],
                districts: []
            },
            {
                name: '胶南',
                center: [
                    119.58,
                    35.53
                ],
                districts: []
            },
            {
                name: '胶州',
                center: [
                    120,
                    36.17
                ],
                districts: []
            },
            {
                name: '即墨',
                center: [
                    120.28,
                    36.22
                ],
                districts: []
            },
            {
                name: '济宁',
                center: [
                    116.33,
                    35.23
                ],
                districts: []
            },
            {
                name: '莱芜',
                center: [
                    117.4,
                    36.12
                ],
                districts: []
            },
            {
                name: '莱西',
                center: [
                    120.31,
                    36.52
                ],
                districts: []
            },
            {
                name: '莱阳',
                center: [
                    120.42,
                    36.58
                ],
                districts: []
            },
            {
                name: '莱州',
                center: [
                    119.57,
                    37.1
                ],
                districts: []
            },
            {
                name: '乐陵',
                center: [
                    117.12,
                    37.44
                ],
                districts: []
            },
            {
                name: '聊城',
                center: [
                    115.57,
                    36.26
                ],
                districts: []
            },
            {
                name: '临清',
                center: [
                    115.42,
                    36.51
                ],
                districts: []
            },
            {
                name: '临沂',
                center: [
                    118.2,
                    35.03
                ],
                districts: []
            },
            {
                name: '龙口',
                center: [
                    120.21,
                    37.39
                ],
                districts: []
            },
            {
                name: '蓬莱',
                center: [
                    120.45,
                    37.48
                ],
                districts: []
            },
            {
                name: '平度',
                center: [
                    119.58,
                    36.47
                ],
                districts: []
            },
            {
                name: '青岛',
                center: [
                    120.18,
                    36.03
                ],
                districts: []
            },
            {
                name: '青州',
                center: [
                    118.28,
                    36.42
                ],
                districts: []
            },
            {
                name: '曲阜',
                center: [
                    116.58,
                    35.36
                ],
                districts: []
            },
            {
                name: '日照',
                center: [
                    119.32,
                    35.23
                ],
                districts: []
            },
            {
                name: '荣成',
                center: [
                    122.25,
                    37.1
                ],
                districts: []
            },
            {
                name: '乳山',
                center: [
                    121.31,
                    36.54
                ],
                districts: []
            },
            {
                name: '寿光',
                center: [
                    118.44,
                    36.53
                ],
                districts: []
            },
            {
                name: '泰安',
                center: [
                    117.08,
                    36.11
                ],
                districts: []
            },
            {
                name: '滕州',
                center: [
                    117.09,
                    35.06
                ],
                districts: []
            },
            {
                name: '潍坊',
                center: [
                    119.06,
                    36.43
                ],
                districts: []
            },
            {
                name: '威海',
                center: [
                    122.07,
                    37.31
                ],
                districts: []
            },
            {
                name: '文登',
                center: [
                    122.03,
                    37.12
                ],
                districts: []
            },
            {
                name: '新泰',
                center: [
                    117.45,
                    35.54
                ],
                districts: []
            },
            {
                name: '烟台',
                center: [
                    121.24,
                    37.32
                ],
                districts: []
            },
            {
                name: '兖州',
                center: [
                    116.49,
                    35.32
                ],
                districts: []
            },
            {
                name: '禹城',
                center: [
                    116.39,
                    36.56
                ],
                districts: []
            },
            {
                name: '枣庄',
                center: [
                    117.33,
                    34.52
                ],
                districts: []
            },
            {
                name: '章丘',
                center: [
                    117.32,
                    36.43
                ],
                districts: []
            },
            {
                name: '招远',
                center: [
                    120.23,
                    37.21
                ],
                districts: []
            },
            {
                name: '诸城',
                center: [
                    119.24,
                    35.59
                ],
                districts: []
            },
            {
                name: '淄博',
                center: [
                    118.03,
                    36.48
                ],
                districts: []
            },
            {
                name: '邹城',
                center: [
                    116.58,
                    35.24
                ],
                districts: []
            }
        ]
    },
    {
        name: '山西省',
        adcode: 140000,
        center: [
            112.17,
            37.37
        ],
        districts: [
            {
                name: '中阳',
                center: [
                    112.17,
                    37.37
                ],
                districts: []
            },
            {
                name: '太原',
                center: [
                    112.33,
                    37.54
                ],
                districts: []
            },
            {
                name: '长治',
                center: [
                    113.06,
                    36.11
                ],
                districts: []
            },
            {
                name: '大同',
                center: [
                    113.17,
                    40.06
                ],
                districts: []
            },
            {
                name: '高平',
                center: [
                    112.55,
                    35.48
                ],
                districts: []
            },
            {
                name: '古交',
                center: [
                    112.09,
                    37.54
                ],
                districts: []
            },
            {
                name: '河津',
                center: [
                    110.41,
                    35.35
                ],
                districts: []
            },
            {
                name: '侯马',
                center: [
                    111.21,
                    35.37
                ],
                districts: []
            },
            {
                name: '霍州',
                center: [
                    111.42,
                    36.34
                ],
                districts: []
            },
            {
                name: '介休',
                center: [
                    111.55,
                    37.02
                ],
                districts: []
            },
            {
                name: '晋城',
                center: [
                    112.51,
                    35.3
                ],
                districts: []
            },
            {
                name: '临汾',
                center: [
                    111.31,
                    36.05
                ],
                districts: []
            },
            {
                name: '潞城',
                center: [
                    113.14,
                    36.21
                ],
                districts: []
            },
            {
                name: '朔州',
                center: [
                    112.26,
                    39.19
                ],
                districts: []
            },
            {
                name: '孝义',
                center: [
                    111.48,
                    37.08
                ],
                districts: []
            },
            {
                name: '忻州',
                center: [
                    112.43,
                    38.24
                ],
                districts: []
            },
            {
                name: '阳泉',
                center: [
                    113.34,
                    37.51
                ],
                districts: []
            },
            {
                name: '永济',
                center: [
                    110.27,
                    34.52
                ],
                districts: []
            },
            {
                name: '原平',
                center: [
                    112.42,
                    38.43
                ],
                districts: []
            },
            {
                name: '榆次',
                center: [
                    112.43,
                    37.41
                ],
                districts: []
            },
            {
                name: '运城',
                center: [
                    110.59,
                    35.02
                ],
                districts: []
            }
        ]
    },
    {
        name: '江苏省',
        adcode: 320000,
        center: [
            118.46,
            32.03
        ],
        districts: [
            {
                name: '南京',
                center: [
                    118.46,
                    32.03
                ],
                districts: []
            },
            {
                name: '常熟',
                center: [
                    120.43,
                    31.39
                ],
                districts: []
            },
            {
                name: '常州',
                center: [
                    119.58,
                    31.47
                ],
                districts: []
            },
            {
                name: '丹阳',
                center: [
                    119.32,
                    32
                ],
                districts: []
            },
            {
                name: '东台',
                center: [
                    120.19,
                    32.51
                ],
                districts: []
            },
            {
                name: '高邮',
                center: [
                    119.27,
                    32.47
                ],
                districts: []
            },
            {
                name: '海门',
                center: [
                    121.09,
                    31.53
                ],
                districts: []
            },
            {
                name: '淮安',
                center: [
                    119.09,
                    33.3
                ],
                districts: []
            },
            {
                name: '淮阴',
                center: [
                    119.02,
                    33.36
                ],
                districts: []
            },
            {
                name: '江都',
                center: [
                    119.32,
                    32.26
                ],
                districts: []
            },
            {
                name: '姜堰',
                center: [
                    120.08,
                    32.34
                ],
                districts: []
            },
            {
                name: '江阴',
                center: [
                    120.17,
                    31.54
                ],
                districts: []
            },
            {
                name: '靖江',
                center: [
                    120.17,
                    32.02
                ],
                districts: []
            },
            {
                name: '金坛',
                center: [
                    119.33,
                    31.46
                ],
                districts: []
            },
            {
                name: '昆山',
                center: [
                    120.57,
                    31.23
                ],
                districts: []
            },
            {
                name: '连去港',
                center: [
                    119.1,
                    34.36
                ],
                districts: []
            },
            {
                name: '溧阳',
                center: [
                    119.29,
                    31.26
                ],
                districts: []
            },
            {
                name: '南通',
                center: [
                    120.51,
                    32.01
                ],
                districts: []
            },
            {
                name: '邳州',
                center: [
                    117.59,
                    34.19
                ],
                districts: []
            },
            {
                name: '启乐',
                center: [
                    121.39,
                    31.48
                ],
                districts: []
            },
            {
                name: '如皋',
                center: [
                    120.33,
                    32.23
                ],
                districts: []
            },
            {
                name: '宿迁',
                center: [
                    118.18,
                    33.58
                ],
                districts: []
            },
            {
                name: '苏州',
                center: [
                    120.37,
                    31.19
                ],
                districts: []
            },
            {
                name: '太仓',
                center: [
                    121.06,
                    31.27
                ],
                districts: []
            },
            {
                name: '泰兴',
                center: [
                    120.01,
                    32.1
                ],
                districts: []
            },
            {
                name: '泰州',
                center: [
                    119.54,
                    32.3
                ],
                districts: []
            },
            {
                name: '通州',
                center: [
                    121.03,
                    32.05
                ],
                districts: []
            },
            {
                name: '吴江',
                center: [
                    120.39,
                    31.1
                ],
                districts: []
            },
            {
                name: '无锡',
                center: [
                    120.18,
                    31.34
                ],
                districts: []
            },
            {
                name: '兴化',
                center: [
                    119.5,
                    32.56
                ],
                districts: []
            },
            {
                name: '新沂',
                center: [
                    118.2,
                    34.22
                ],
                districts: []
            },
            {
                name: '徐州',
                center: [
                    117.11,
                    34.15
                ],
                districts: []
            },
            {
                name: '盐在',
                center: [
                    120.08,
                    33.22
                ],
                districts: []
            },
            {
                name: '扬中',
                center: [
                    119.49,
                    32.14
                ],
                districts: []
            },
            {
                name: '扬州',
                center: [
                    119.26,
                    32.23
                ],
                districts: []
            },
            {
                name: '宜兴',
                center: [
                    119.49,
                    31.21
                ],
                districts: []
            },
            {
                name: '仪征',
                center: [
                    119.1,
                    32.16
                ],
                districts: []
            },
            {
                name: '张家港',
                center: [
                    120.32,
                    31.52
                ],
                districts: []
            },
            {
                name: '镇江',
                center: [
                    119.27,
                    32.11
                ],
                districts: []
            }
        ]
    },
    {
        name: '新疆维吾尔自治区',
        adcode: 650000,
        center: [
            87.36,
            43.45
        ],
        districts: [
            {
                name: '乌鲁木齐',
                center: [
                    87.36,
                    43.45
                ],
                districts: []
            },
            {
                name: '阿克苏',
                center: [
                    80.19,
                    41.09
                ],
                districts: []
            },
            {
                name: '阿勒泰',
                center: [
                    88.12,
                    47.5
                ],
                districts: []
            },
            {
                name: '阿图什',
                center: [
                    76.08,
                    39.42
                ],
                districts: []
            },
            {
                name: '博乐',
                center: [
                    82.08,
                    44.57
                ],
                districts: []
            },
            {
                name: '昌吉',
                center: [
                    87.18,
                    44.02
                ],
                districts: []
            },
            {
                name: '阜康',
                center: [
                    87.58,
                    44.09
                ],
                districts: []
            },
            {
                name: '哈密',
                center: [
                    93.28,
                    42.5
                ],
                districts: []
            },
            {
                name: '和田',
                center: [
                    79.55,
                    37.09
                ],
                districts: []
            },
            {
                name: '克拉玛依',
                center: [
                    84.51,
                    45.36
                ],
                districts: []
            },
            {
                name: '喀什',
                center: [
                    75.59,
                    39.3
                ],
                districts: []
            },
            {
                name: '库尔勒',
                center: [
                    86.07,
                    41.46
                ],
                districts: []
            },
            {
                name: '奎屯',
                center: [
                    84.56,
                    44.27
                ],
                districts: []
            },
            {
                name: '石河子',
                center: [
                    86,
                    44.18
                ],
                districts: []
            },
            {
                name: '塔城',
                center: [
                    82.59,
                    46.46
                ],
                districts: []
            },
            {
                name: '吐鲁番',
                center: [
                    89.11,
                    42.54
                ],
                districts: []
            },
            {
                name: '伊宁',
                center: [
                    81.2,
                    43.55
                ],
                districts: []
            }
        ]
    },
    {
        name: '云南省',
        adcode: 530000,
        center: [
            102.42,
            25.04
        ],
        districts: [
            {
                name: '昆明',
                center: [
                    102.42,
                    25.04
                ],
                districts: []
            },
            {
                name: '保山',
                center: [
                    99.1,
                    25.08
                ],
                districts: []
            },
            {
                name: '楚雄',
                center: [
                    101.32,
                    25.01
                ],
                districts: []
            },
            {
                name: '大理',
                center: [
                    100.13,
                    25.34
                ],
                districts: []
            },
            {
                name: '东川',
                center: [
                    103.12,
                    26.06
                ],
                districts: []
            },
            {
                name: '个旧',
                center: [
                    103.09,
                    23.21
                ],
                districts: []
            },
            {
                name: '景洪',
                center: [
                    100.48,
                    22.01
                ],
                districts: []
            },
            {
                name: '开远',
                center: [
                    103.13,
                    23.43
                ],
                districts: []
            },
            {
                name: '曲靖',
                center: [
                    103.48,
                    25.3
                ],
                districts: []
            },
            {
                name: '瑞丽',
                center: [
                    97.5,
                    24
                ],
                districts: []
            },
            {
                name: '思茅',
                center: [
                    100.58,
                    22.48
                ],
                districts: []
            },
            {
                name: '畹町',
                center: [
                    98.04,
                    24.06
                ],
                districts: []
            },
            {
                name: '宣威',
                center: [
                    104.06,
                    26.13
                ],
                districts: []
            },
            {
                name: '玉溪',
                center: [
                    102.32,
                    24.22
                ],
                districts: []
            },
            {
                name: '昭通',
                center: [
                    103.42,
                    27.2
                ],
                districts: []
            }
        ]
    },
    {
        name: '吉林省',
        adcode: 220000,
        center: [
            125.19,
            43.54
        ],
        districts: [
            {
                name: '长春',
                center: [
                    125.19,
                    43.54
                ],
                districts: []
            },
            {
                name: '白城',
                center: [
                    122.5,
                    45.38
                ],
                districts: []
            },
            {
                name: '白山',
                center: [
                    126.26,
                    41.56
                ],
                districts: []
            },
            {
                name: '大安',
                center: [
                    124.18,
                    45.3
                ],
                districts: []
            },
            {
                name: '德惠',
                center: [
                    125.42,
                    44.32
                ],
                districts: []
            },
            {
                name: '敦化',
                center: [
                    128.13,
                    43.22
                ],
                districts: []
            },
            {
                name: '公主岭',
                center: [
                    124.49,
                    43.31
                ],
                districts: []
            },
            {
                name: '和龙',
                center: [
                    129,
                    42.32
                ],
                districts: []
            },
            {
                name: '桦甸',
                center: [
                    126.44,
                    42.58
                ],
                districts: []
            },
            {
                name: '珲春',
                center: [
                    130.22,
                    42.52
                ],
                districts: []
            },
            {
                name: '集安',
                center: [
                    126.11,
                    41.08
                ],
                districts: []
            },
            {
                name: '蛟河',
                center: [
                    127.21,
                    43.42
                ],
                districts: []
            },
            {
                name: '吉林',
                center: [
                    126.33,
                    43.52
                ],
                districts: []
            },
            {
                name: '九台',
                center: [
                    125.51,
                    44.09
                ],
                districts: []
            },
            {
                name: '辽源',
                center: [
                    125.09,
                    42.54
                ],
                districts: []
            },
            {
                name: '临江',
                center: [
                    126.53,
                    41.49
                ],
                districts: []
            },
            {
                name: '龙井',
                center: [
                    129.26,
                    42.46
                ],
                districts: []
            },
            {
                name: '梅河口',
                center: [
                    125.4,
                    42.32
                ],
                districts: []
            },
            {
                name: '舒兰',
                center: [
                    126.57,
                    44.24
                ],
                districts: []
            },
            {
                name: '四平',
                center: [
                    124.22,
                    43.1
                ],
                districts: []
            },
            {
                name: '松原',
                center: [
                    124.49,
                    45.11
                ],
                districts: []
            },
            {
                name: '洮南',
                center: [
                    122.47,
                    45.2
                ],
                districts: []
            },
            {
                name: '通化',
                center: [
                    125.56,
                    41.43
                ],
                districts: []
            },
            {
                name: '图们',
                center: [
                    129.51,
                    42.57
                ],
                districts: []
            },
            {
                name: '延吉',
                center: [
                    129.3,
                    42.54
                ],
                districts: []
            },
            {
                name: '愉树',
                center: [
                    126.32,
                    44.49
                ],
                districts: []
            }
        ]
    },
    {
        name: '黑龙江省',
        adcode: 230000,
        center: [
            126.36,
            45.44
        ],
        districts: [
            {
                name: '哈尔滨',
                center: [
                    126.36,
                    45.44
                ],
                districts: []
            },
            {
                name: '阿城',
                center: [
                    126.58,
                    45.32
                ],
                districts: []
            },
            {
                name: '安达',
                center: [
                    125.18,
                    46.24
                ],
                districts: []
            },
            {
                name: '北安',
                center: [
                    126.31,
                    48.15
                ],
                districts: []
            },
            {
                name: '大庆',
                center: [
                    125.01,
                    46.36
                ],
                districts: []
            },
            {
                name: '富锦',
                center: [
                    132.02,
                    47.15
                ],
                districts: []
            },
            {
                name: '海林',
                center: [
                    129.21,
                    44.35
                ],
                districts: []
            },
            {
                name: '海伦',
                center: [
                    126.57,
                    47.28
                ],
                districts: []
            },
            {
                name: '鹤岗',
                center: [
                    130.16,
                    47.2
                ],
                districts: []
            },
            {
                name: '黑河',
                center: [
                    127.29,
                    50.14
                ],
                districts: []
            },
            {
                name: '佳木斯',
                center: [
                    130.22,
                    46.47
                ],
                districts: []
            },
            {
                name: '鸡西',
                center: [
                    130.57,
                    45.17
                ],
                districts: []
            },
            {
                name: '密山',
                center: [
                    131.5,
                    45.32
                ],
                districts: []
            },
            {
                name: '牡丹江',
                center: [
                    129.36,
                    44.35
                ],
                districts: []
            },
            {
                name: '讷河',
                center: [
                    124.51,
                    48.29
                ],
                districts: []
            },
            {
                name: '宁安',
                center: [
                    129.28,
                    44.21
                ],
                districts: []
            },
            {
                name: '齐齐哈尔',
                center: [
                    123.57,
                    47.2
                ],
                districts: []
            },
            {
                name: '七台河',
                center: [
                    130.49,
                    45.48
                ],
                districts: []
            },
            {
                name: '双城',
                center: [
                    126.15,
                    45.22
                ],
                districts: []
            },
            {
                name: '尚志',
                center: [
                    127.55,
                    45.14
                ],
                districts: []
            },
            {
                name: '双鸭山',
                center: [
                    131.11,
                    46.38
                ],
                districts: []
            },
            {
                name: '绥芬河',
                center: [
                    131.11,
                    44.25
                ],
                districts: []
            },
            {
                name: '绥化',
                center: [
                    126.59,
                    46.38
                ],
                districts: []
            },
            {
                name: '铁力',
                center: [
                    128.01,
                    46.59
                ],
                districts: []
            },
            {
                name: '同江',
                center: [
                    132.3,
                    47.39
                ],
                districts: []
            },
            {
                name: '五常',
                center: [
                    127.11,
                    44.55
                ],
                districts: []
            },
            {
                name: '五大连池',
                center: [
                    126.07,
                    48.38
                ],
                districts: []
            },
            {
                name: '伊春',
                center: [
                    128.56,
                    47.42
                ],
                districts: []
            },
            {
                name: '大兴安岭地区',
                center: [
                    '124.71',
                    '52.33'
                ],
                districts: []
            },
            {
                name: '肇东',
                center: [
                    125.58,
                    46.04
                ],
                districts: []
            }
        ]
    },
    {
        name: '福建省',
        adcode: 350000,
        center: [
            119.18,
            26.05
        ],
        districts: [
            {
                name: '福州',
                center: [
                    119.18,
                    26.05
                ],
                districts: []
            },
            {
                name: '长乐',
                center: [
                    119.31,
                    25.58
                ],
                districts: []
            },
            {
                name: '福安',
                center: [
                    119.39,
                    27.06
                ],
                districts: []
            },
            {
                name: '福清',
                center: [
                    119.23,
                    25.42
                ],
                districts: []
            },
            {
                name: '建瓯',
                center: [
                    118.2,
                    27.03
                ],
                districts: []
            },
            {
                name: '建阳',
                center: [
                    118.07,
                    27.21
                ],
                districts: []
            },
            {
                name: '晋江',
                center: [
                    118.35,
                    24.49
                ],
                districts: []
            },
            {
                name: '龙海',
                center: [
                    117.48,
                    24.26
                ],
                districts: []
            },
            {
                name: '龙岩',
                center: [
                    117.01,
                    25.06
                ],
                districts: []
            },
            {
                name: '南安',
                center: [
                    118.23,
                    24.57
                ],
                districts: []
            },
            {
                name: '南平',
                center: [
                    118.1,
                    26.38
                ],
                districts: []
            },
            {
                name: '宁德',
                center: [
                    119.31,
                    26.39
                ],
                districts: []
            },
            {
                name: '莆田',
                center: [
                    119.01,
                    24.26
                ],
                districts: []
            },
            {
                name: '泉州',
                center: [
                    118.36,
                    24.56
                ],
                districts: []
            },
            {
                name: '三明',
                center: [
                    117.36,
                    26.13
                ],
                districts: []
            },
            {
                name: '邵武',
                center: [
                    117.29,
                    27.2
                ],
                districts: []
            },
            {
                name: '石狮',
                center: [
                    118.38,
                    24.44
                ],
                districts: []
            },
            {
                name: '武夷山',
                center: [
                    118.02,
                    27.46
                ],
                districts: []
            },
            {
                name: '厦门',
                center: [
                    118.06,
                    24.27
                ],
                districts: []
            },
            {
                name: '永安',
                center: [
                    117.23,
                    25.58
                ],
                districts: []
            },
            {
                name: '漳平',
                center: [
                    117.24,
                    25.17
                ],
                districts: []
            },
            {
                name: '漳州',
                center: [
                    117.39,
                    24.31
                ],
                districts: []
            }
        ]
    },
    {
        name: '海南省',
        adcode: 460000,
        center: [
            110.2,
            20.02
        ],
        districts: [
            {
                name: '海口',
                center: [
                    110.2,
                    20.02
                ],
                districts: []
            },
            {
                name: '儋州',
                center: [
                    109.34,
                    19.31
                ],
                districts: []
            },
            {
                name: '琼海',
                center: [
                    110.28,
                    19.14
                ],
                districts: []
            },
            {
                name: '琼山',
                center: [
                    110.21,
                    19.59
                ],
                districts: []
            },
            {
                name: '三亚',
                center: [
                    109.31,
                    18.14
                ],
                districts: []
            },
            {
                name: '通什',
                center: [
                    109.31,
                    18.46
                ],
                districts: []
            }
        ]
    }
];

export default TJDistrictMap;

