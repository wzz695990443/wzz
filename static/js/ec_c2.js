var ec_c2=echarts.init(document.getElementById("c2"));
colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
bgColor = '#2E2733';
itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};
data = [
    {
        name: '字母',
        itemStyle: {
            color: colors[0]
        },
        children: [
            {
                name: '字母表',
                children: [
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '英文字母表'
                            }
                        ]
                    }
                ]
            },
            {
                name: '名言名句',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '长难句'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '生僻词'
                            },
                            {
                                name: '经典名言'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '普通句子'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '数字',
        itemStyle: {
            color: colors[1]
        },
        children: [
            {
                name: '奇偶数',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '奇偶排序'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '偶数逆序'
                            },
                            {
                                name: '奇数逆序'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '奇偶顺序'
                            }
                        ]
                    }
                ]
            },
            {
                name: '自然数',
                children: [
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '自然数逆序'
                            },
                            {
                                name: '自然数乱序'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '自然数顺序'
                            }
                        ]
                    }
                ]
            },
            {
                name: '其它',
                children: [
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '质数逆序'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '质数顺序'
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: '汉字',
        itemStyle: {
            color: colors[2]
        },
        children: [
            {
                name: '诗句',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '《寄子西》'
                            },
                            {
                                name: '《除日》'
                            },
                            {
                                name: '《会真诗三十韵》'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '《渡前溪》'
                            },
                            {
                                name: '《山斋独宿赠晏上人》'
                            },
                            {
                                name: '《送张管书记》'
                            }
                        ]
                    }
                ]
            },
            {
                name: '其他',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '散文'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '成语接龙'
                            },
                            {
                                name: '名言'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '图片',
        itemStyle: {
            color: colors[3]
        },
        children: [
            {
                name: '水果',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '火龙果'
                            },
                            {
                                name: '橙子'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '西瓜'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '葡萄'
                            }
                        ]
                    }
                ]
            },
            {
                name: '动物',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '大象'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '鱼'
                            },
                            {
                                name: '猫'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '狗'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
for (let j = 0; j < data.length; ++j) {
    let level1 = data[j].children;
    for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
            let style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);
            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };
            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;
                    book.label = {
                        color: style.color
                    };
                    let value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }
                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    } else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }
        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}
option = {
    // backgroundColor: bgColor,
    color: colors,
    series: [
        {
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                } else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                rotate: 'radial',
                color: bgColor
            },
            itemStyle: {
                borderColor: bgColor,
                borderWidth: 2
            },
            levels: [
                {},
                {
                    r0: 0,
                    r: 40,
                    label: {
                        rotate: 0
                    }
                },
                {
                    r0: 40,
                    r: 105
                },
                {
                    r0: 115,
                    r: 140,
                    itemStyle: {
                        shadowBlur: 2,
                        shadowColor: colors[2],
                        color: 'transparent'
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: colors[0]
                    }
                },
                {
                    r0: 140,
                    r: 145,
                    itemStyle: {
                        shadowBlur: 80,
                        shadowColor: colors[0]
                    },
                    label: {
                        position: 'outside',
                        textShadowBlur: 5,
                        textShadowColor: '#333'
                    },
                    downplay: {
                        label: {
                            opacity: 0.5
                        }
                    }
                }
            ]
        }
    ]
};
ec_c2.setOption(option);