var job_structureManagement = {
    //结构管理数据
    job_structureManagementTable_data: function(callback){ 
        var code = sessionStorage.getItem("subsection_code"); //code是job_chapters页传过来的教辅作业小章编号
        var res={code:0};
        res.data={code:'121333211113434',codeName:"1.1",name:"有理数的加法",
                  list:[{
                        "netExamPicNo": "",
                        "netExamNo": "1",
                        "paperCode": 1001576820911030,
                        "questionNo": 1,
                        "childNo": 0,
                        "itemCode": 1567505889820000,
                        "apCodes": "111",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "111",
                            "kpId": "2111",
                            "kpName": "字音 字形"
                        }, {
                            "kpCode": "11101",
                            "kpId": "211101",
                            "kpName": "多音字"
                        }],
                        "score": 300,
                        "answer": "C",
                        "isSpecial": 0,
                        "id": "1567505889820000",
                        "category": {
                            "code": "101",
                            "name": "基础知识"
                        },
                        "choices": "",
                        "kpCodes": "111,11101",
                        "remarks": "",
                        "scoreNo": "1"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2111",
                            "apCode": "111",
                            "apName": "识记常用汉字"
                        }],
                        "netExamNo": "2",
                        "paperCode": 1001576820911030,
                        "questionNo": 2,
                        "childNo": 0,
                        "itemCode": 1567505889820001,
                        "apCodes": "111",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143042",
                            "kpId": "2143042",
                            "kpName": "名著写作背景或目的"
                        }],
                        "score": 300,
                        "answer": "D",
                        "isSpecial": 0,
                        "id": "1567505889820001",
                        "category": {
                            "code": "101",
                            "name": "基础知识"
                        },
                        "choices": "",
                        "kpCodes": "143042",
                        "remarks": "",
                        "scoreNo": "2"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2122",
                            "apCode": "122",
                            "apName": "理解文中词句"
                        }],
                        "netExamNo": "3",
                        "paperCode": 1001576820911030,
                        "questionNo": 3,
                        "childNo": 0,
                        "itemCode": 1567505889820002,
                        "apCodes": "122",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143043",
                            "kpId": "2143043",
                            "kpName": "名著内容概括"
                        }],
                        "score": 300,
                        "answer": "B",
                        "isSpecial": 0,
                        "id": "1567505889820002",
                        "category": {
                            "code": "101",
                            "name": "基础知识"
                        },
                        "choices": "",
                        "kpCodes": "143043",
                        "remarks": "",
                        "scoreNo": "3"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2153",
                            "apCode": "153",
                            "apName": "辨析修改病句"
                        }],
                        "netExamNo": "4",
                        "paperCode": 1001576820911030,
                        "questionNo": 4,
                        "childNo": 0,
                        "itemCode": 1567505889820003,
                        "apCodes": "153",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143044",
                            "kpId": "2143044",
                            "kpName": "名著主题思想"
                        }],
                        "score": 300,
                        "answer": "B",
                        "isSpecial": 0,
                        "id": "1567505889820003",
                        "category": {
                            "code": "101",
                            "name": "基础知识"
                        },
                        "choices": "",
                        "kpCodes": "143044",
                        "remarks": "",
                        "scoreNo": "4"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2122",
                            "apCode": "122",
                            "apName": "理解文中词句"
                        }],
                        "netExamNo": "5",
                        "paperCode": 1001576820911030,
                        "questionNo": 5,
                        "childNo": 0,
                        "itemCode": 1567505889820004,
                        "apCodes": "122",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143045",
                            "kpId": "2143045",
                            "kpName": "名著作者的观点与态度"
                        }],
                        "score": 300,
                        "answer": "C",
                        "isSpecial": 0,
                        "id": "1567505889820004",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143045",
                        "remarks": "",
                        "scoreNo": "5"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2124",
                            "apCode": "124",
                            "apName": "理解文言虚词"
                        }],
                        "netExamNo": "6",
                        "paperCode": 1001576820911030,
                        "questionNo": 6,
                        "childNo": 0,
                        "itemCode": 1567505889820005,
                        "apCodes": "124",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143046",
                            "kpId": "2143046",
                            "kpName": "名著文学价值"
                        }],
                        "score": 300,
                        "answer": "B",
                        "isSpecial": 0,
                        "id": "1567505889820005",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143046",
                        "remarks": "",
                        "scoreNo": "6"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2123",
                            "apCode": "123",
                            "apName": "理解不同句式"
                        }],
                        "netExamNo": "7",
                        "paperCode": 1001576820911030,
                        "questionNo": 7,
                        "childNo": 0,
                        "itemCode": 1567505889820006,
                        "apCodes": "123",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143047",
                            "kpId": "2143047",
                            "kpName": "名著艺术特色"
                        }],
                        "score": 300,
                        "answer": "B",
                        "isSpecial": 0,
                        "id": "1567505889820006",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143047",
                        "remarks": "",
                        "scoreNo": "7"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2131",
                            "apCode": "131",
                            "apName": "整合文中信息"
                        }],
                        "netExamNo": "8",
                        "paperCode": 1001576820911030,
                        "questionNo": 8,
                        "childNo": 0,
                        "itemCode": 1567505889820007,
                        "apCodes": "131",
                        "section": "A",
                        "type": {
                            "code": "C",
                            "name": "选择题"
                        },
                        "kps": [{
                            "kpCode": "143048",
                            "kpId": "2143048",
                            "kpName": "名著经典情节"
                        }],
                        "score": 300,
                        "answer": "B",
                        "isSpecial": 0,
                        "id": "1567505889820007",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143048",
                        "remarks": "",
                        "scoreNo": "8"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2112",
                            "apCode": "112",
                            "apName": "背诵名篇名句"
                        }],
                        "netExamNo": "9",
                        "paperCode": 1001576820911030,
                        "questionNo": 9,
                        "childNo": 1,
                        "itemCode": 1567505889820008,
                        "apCodes": "112",
                        "section": "A",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143049",
                            "kpId": "2143049",
                            "kpName": "名著精彩名句"
                        }],
                        "score": 200,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820008",
                        "category": {
                            "code": "104",
                            "name": "默写"
                        },
                        "choices": "",
                        "kpCodes": "143049",
                        "remarks": "",
                        "scoreNo": "9-1"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2112",
                            "apCode": "112",
                            "apName": "背诵名篇名句"
                        }],
                        "netExamNo": "10",
                        "paperCode": 1001576820911030,
                        "questionNo": 9,
                        "childNo": 2,
                        "itemCode": 1567505889820009,
                        "apCodes": "112",
                        "section": "A",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14105",
                            "kpId": "214105",
                            "kpName": "文言虚词"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820009",
                        "category": {
                            "code": "104",
                            "name": "默写"
                        },
                        "choices": "",
                        "kpCodes": "14105",
                        "remarks": "",
                        "scoreNo": "9-2"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2134",
                            "apCode": "134",
                            "apName": "分析作者观点"
                        }],
                        "netExamNo": "11",
                        "paperCode": 1001576820911030,
                        "questionNo": 10,
                        "childNo": 0,
                        "itemCode": 1567505889820010,
                        "apCodes": "134",
                        "section": "A",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14106",
                            "kpId": "214106",
                            "kpName": "判断句式"
                        }],
                        "score": 300,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820010",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "14106",
                        "remarks": "",
                        "scoreNo": "10"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2133",
                            "apCode": "133",
                            "apName": "归纳内容要点"
                        }],
                        "netExamNo": "12",
                        "paperCode": 1001576820911030,
                        "questionNo": 11,
                        "childNo": 0,
                        "itemCode": 1567505889820011,
                        "apCodes": "133",
                        "section": "A",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14107",
                            "kpId": "214107",
                            "kpName": "被动句式"
                        }],
                        "score": 300,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820011",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "14107",
                        "remarks": "",
                        "scoreNo": "11"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2132",
                            "apCode": "132",
                            "apName": "分析文章结构"
                        }],
                        "netExamNo": "13",
                        "paperCode": 1001576820911030,
                        "questionNo": 12,
                        "childNo": 0,
                        "itemCode": 1567505889820012,
                        "apCodes": "132",
                        "section": "A",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14108",
                            "kpId": "214108",
                            "kpName": "倒装句式"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820012",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "14108",
                        "remarks": "",
                        "scoreNo": "12"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2157",
                            "apCode": "157",
                            "apName": "语言表达准确、鲜明、生动、简明、连贯、得体"
                        }, {
                            "apId": "2158",
                            "apCode": "158",
                            "apName": "作文符合题意、思想健康，语言通顺，结构完整"
                        }],
                        "netExamNo": "14",
                        "paperCode": 1001576820911030,
                        "questionNo": 13,
                        "childNo": 0,
                        "itemCode": 1567505889820013,
                        "apCodes": "157,158",
                        "section": "A",
                        "type": {
                            "code": "W",
                            "name": "写作题"
                        },
                        "kps": [{
                            "kpCode": "15201",
                            "kpId": "215201",
                            "kpName": "命题作文"
                        }],
                        "score": 6000,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820013",
                        "category": {
                            "code": "108",
                            "name": "作文"
                        },
                        "choices": "",
                        "kpCodes": "15201",
                        "remarks": "",
                        "scoreNo": "13"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2142",
                            "apCode": "142",
                            "apName": "评价文章的思想内容和作者的观点态度"
                        }],
                        "netExamNo": "15",
                        "paperCode": 1001576820911030,
                        "questionNo": 14,
                        "childNo": 0,
                        "itemCode": 1567505889820014,
                        "apCodes": "142",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14206",
                            "kpId": "214206",
                            "kpName": "诗歌意境鉴赏"
                        }, {
                            "kpCode": "14209",
                            "kpId": "214209",
                            "kpName": "诗歌思想情感"
                        }],
                        "score": 200,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820014",
                        "category": {
                            "code": "103",
                            "name": "古诗歌阅读鉴赏"
                        },
                        "choices": "",
                        "kpCodes": "14206,14209",
                        "remarks": "",
                        "scoreNo": "B1"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2141",
                            "apCode": "141",
                            "apName": "鉴赏文学作品的形象、语言和表达技巧"
                        }],
                        "netExamNo": "16",
                        "paperCode": 1001576820911030,
                        "questionNo": 15,
                        "childNo": 0,
                        "itemCode": 1567505889820015,
                        "apCodes": "141",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "15103",
                            "kpId": "215103",
                            "kpName": "公文类"
                        }],
                        "score": 200,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820015",
                        "category": {
                            "code": "103",
                            "name": "古诗歌阅读鉴赏"
                        },
                        "choices": "",
                        "kpCodes": "15103",
                        "remarks": "",
                        "scoreNo": "B2"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2112",
                            "apCode": "112",
                            "apName": "背诵名篇名句"
                        }],
                        "netExamNo": "17",
                        "paperCode": 1001576820911030,
                        "questionNo": 16,
                        "childNo": 0,
                        "itemCode": 1567505889820016,
                        "apCodes": "112",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "15104",
                            "kpId": "215104",
                            "kpName": "宣传类"
                        }],
                        "score": 200,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820016",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "15104",
                        "remarks": "",
                        "scoreNo": "B3"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2112",
                            "apCode": "112",
                            "apName": "背诵名篇名句"
                        }],
                        "netExamNo": "18",
                        "paperCode": 1001576820911030,
                        "questionNo": 17,
                        "childNo": 1,
                        "itemCode": 1567505889820017,
                        "apCodes": "112",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "15105",
                            "kpId": "215105",
                            "kpName": "告示类"
                        }],
                        "score": 300,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820017",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "15105",
                        "remarks": "",
                        "scoreNo": "B4-1"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2112",
                            "apCode": "112",
                            "apName": "背诵名篇名句"
                        }],
                        "netExamNo": "19",
                        "paperCode": 1001576820911030,
                        "questionNo": 17,
                        "childNo": 2,
                        "itemCode": 1567505889820018,
                        "apCodes": "112",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14224",
                            "kpId": "214224",
                            "kpName": "羁旅诗"
                        }],
                        "score": 300,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820018",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "14224",
                        "remarks": "",
                        "scoreNo": "B4-2"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2141",
                            "apCode": "141",
                            "apName": "鉴赏文学作品的形象、语言和表达技巧"
                        }, {
                            "apId": "2142",
                            "apCode": "142",
                            "apName": "评价文章的思想内容和作者的观点态度"
                        }],
                        "netExamNo": "20",
                        "paperCode": 1001576820911030,
                        "questionNo": 18,
                        "childNo": 0,
                        "itemCode": 1567505889820019,
                        "apCodes": "141,142",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143",
                            "kpId": "2143",
                            "kpName": "名著阅读"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820019",
                        "category": {
                            "code": "102",
                            "name": "文言文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143",
                        "remarks": "",
                        "scoreNo": "B5"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2113",
                            "apCode": "113",
                            "apName": "判断名著情节"
                        }],
                        "netExamNo": "21",
                        "paperCode": 1001576820911030,
                        "questionNo": 19,
                        "childNo": 0,
                        "itemCode": 1567505889820020,
                        "apCodes": "113",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14301",
                            "kpId": "214301",
                            "kpName": "名著人物"
                        }],
                        "score": 200,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820020",
                        "category": {
                            "code": "106",
                            "name": "名著阅读"
                        },
                        "choices": "",
                        "kpCodes": "14301",
                        "remarks": "",
                        "scoreNo": "B6"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2141",
                            "apCode": "141",
                            "apName": "鉴赏文学作品的形象、语言和表达技巧"
                        }],
                        "netExamNo": "22",
                        "paperCode": 1001576820911030,
                        "questionNo": 20,
                        "childNo": 0,
                        "itemCode": 1567505889820021,
                        "apCodes": "141",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14302",
                            "kpId": "214302",
                            "kpName": "名著情节"
                        }],
                        "score": 200,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820021",
                        "category": {
                            "code": "106",
                            "name": "名著阅读"
                        },
                        "choices": "",
                        "kpCodes": "14302",
                        "remarks": "",
                        "scoreNo": "B7"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2133",
                            "apCode": "133",
                            "apName": "归纳内容要点"
                        }],
                        "netExamNo": "23",
                        "paperCode": 1001576820911030,
                        "questionNo": 21,
                        "childNo": 0,
                        "itemCode": 1567505889820022,
                        "apCodes": "133",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14303",
                            "kpId": "214303",
                            "kpName": "名著评价"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820022",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "14303",
                        "remarks": "",
                        "scoreNo": "B8"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2141",
                            "apCode": "141",
                            "apName": "鉴赏文学作品的形象、语言和表达技巧"
                        }],
                        "netExamNo": "24",
                        "paperCode": 1001576820911030,
                        "questionNo": 22,
                        "childNo": 0,
                        "itemCode": 1567505889820023,
                        "apCodes": "141",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "14304",
                            "kpId": "214304",
                            "kpName": "名著综合"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820023",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "14304",
                        "remarks": "",
                        "scoreNo": "B9"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2141",
                            "apCode": "141",
                            "apName": "鉴赏文学作品的形象、语言和表达技巧"
                        }],
                        "netExamNo": "25",
                        "paperCode": 1001576820911030,
                        "questionNo": 23,
                        "childNo": 0,
                        "itemCode": 1567505889820024,
                        "apCodes": "141",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143041",
                            "kpId": "2143041",
                            "kpName": "作家作品"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820024",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143041",
                        "remarks": "",
                        "scoreNo": "B10"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2142",
                            "apCode": "142",
                            "apName": "评价文章的思想内容和作者的观点态度"
                        }],
                        "netExamNo": "26",
                        "paperCode": 1001576820911030,
                        "questionNo": 24,
                        "childNo": 0,
                        "itemCode": 1567505889820025,
                        "apCodes": "142",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143042",
                            "kpId": "2143042",
                            "kpName": "名著写作背景或目的"
                        }],
                        "score": 600,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820025",
                        "category": {
                            "code": "105",
                            "name": "现代文阅读"
                        },
                        "choices": "",
                        "kpCodes": "143042",
                        "remarks": "",
                        "scoreNo": "B11"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2131",
                            "apCode": "131",
                            "apName": "整合文中信息"
                        }, {
                            "apId": "2154",
                            "apCode": "154",
                            "apName": "扩展语句，压缩语段"
                        }],
                        "netExamNo": "27",
                        "paperCode": 1001576820911030,
                        "questionNo": 25,
                        "childNo": 0,
                        "itemCode": 1567505889820026,
                        "apCodes": "131,154",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143043",
                            "kpId": "2143043",
                            "kpName": "名著内容概括"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820026",
                        "category": {
                            "code": "107",
                            "name": "语言运用"
                        },
                        "choices": "",
                        "kpCodes": "143043",
                        "remarks": "",
                        "scoreNo": "B12"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2157",
                            "apCode": "157",
                            "apName": "语言表达准确、鲜明、生动、简明、连贯、得体"
                        }],
                        "netExamNo": "28",
                        "paperCode": 1001576820911030,
                        "questionNo": 26,
                        "childNo": 0,
                        "itemCode": 1567505889820027,
                        "apCodes": "157",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143044",
                            "kpId": "2143044",
                            "kpName": "名著主题思想"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820027",
                        "category": {
                            "code": "107",
                            "name": "语言运用"
                        },
                        "choices": "",
                        "kpCodes": "143044",
                        "remarks": "",
                        "scoreNo": "B13"
                    }, {
                        "netExamPicNo": "",
                        "aps": [{
                            "apId": "2157",
                            "apCode": "157",
                            "apName": "语言表达准确、鲜明、生动、简明、连贯、得体"
                        }],
                        "netExamNo": "29",
                        "paperCode": 1001576820911030,
                        "questionNo": 27,
                        "childNo": 0,
                        "itemCode": 1567505889820028,
                        "apCodes": "157",
                        "section": "B",
                        "type": {
                            "code": "Q",
                            "name": "问答题"
                        },
                        "kps": [{
                            "kpCode": "143045",
                            "kpId": "2143045",
                            "kpName": "名著作者的观点与态度"
                        }],
                        "score": 400,
                        "answer": "",
                        "isSpecial": 0,
                        "id": "1567505889820028",
                        "category": {
                            "code": "107",
                            "name": "语言运用"
                        },
                        "choices": "",
                        "kpCodes": "143045",
                        "remarks": "",
                        "scoreNo": "B14"
                    }]};
        if(res.code == 0)
            callback(res.data);
    },  
    //试题类型数据  
    examType_data: function(callback){
        var res={"code":0,"data":[{"code":"C","name":"选择题","id":"C"},{"code":"F","name":"填空题","id":"F"},{"code":"Q","name":"问答题","id":"Q"},{"code":"S","name":"综合题","id":"S"},{"code":"T","name":"判断题","id":"T"},{"code":"W","name":"写作题","id":"W"}],"message":"请求成功"};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //试题类别数据
    examCategory_data: function(callback){
        var res={"code":0,"data":[{"code":"1001","subject":{"code":"A","name":"信息","id":"A"},"name":"单项选择","id":"1001"},{"code":"1002","subject":{"code":"A","name":"信息","id":"A"},"name":"填空题","id":"1002"},{"code":"1003","subject":{"code":"A","name":"信息","id":"A"},"name":"简答题","id":"1003"},{"code":"1004","subject":{"code":"A","name":"信息","id":"A"},"name":"综合题","id":"1004"},{"code":"101","subject":{"code":"1","name":"语文","id":"1"},"name":"基础知识","id":"101"},{"code":"102","subject":{"code":"1","name":"语文","id":"1"},"name":"文言文阅读","id":"102"},{"code":"103","subject":{"code":"1","name":"语文","id":"1"},"name":"古诗歌阅读鉴赏","id":"103"},{"code":"104","subject":{"code":"1","name":"语文","id":"1"},"name":"默写","id":"104"},{"code":"105","subject":{"code":"1","name":"语文","id":"1"},"name":"现代文阅读","id":"105"},{"code":"106","subject":{"code":"1","name":"语文","id":"1"},"name":"名著阅读","id":"106"},{"code":"107","subject":{"code":"1","name":"语文","id":"1"},"name":"语言运用","id":"107"},{"code":"108","subject":{"code":"1","name":"语文","id":"1"},"name":"作文","id":"108"},{"code":"109","subject":{"code":"1","name":"语文","id":"1"},"name":"选择题","id":"109"},{"code":"1101","subject":{"code":"B","name":"通用","id":"B"},"name":"单项选择","id":"1101"},{"code":"1102","subject":{"code":"B","name":"通用","id":"B"},"name":"填空题","id":"1102"},{"code":"1103","subject":{"code":"B","name":"通用","id":"B"},"name":"简答题","id":"1103"},{"code":"1104","subject":{"code":"B","name":"通用","id":"B"},"name":"综合题","id":"1104"},{"code":"1601","subject":{"code":"G","name":"体育","id":"G"},"name":"单项选择","id":"1601"},{"code":"1602","subject":{"code":"G","name":"体育","id":"G"},"name":"学习态度","id":"1602"},{"code":"1603","subject":{"code":"G","name":"体育","id":"G"},"name":"健康教育知识","id":"1603"},{"code":"1604","subject":{"code":"G","name":"体育","id":"G"},"name":"运动技能","id":"1604"},{"code":"1605","subject":{"code":"G","name":"体育","id":"G"},"name":"体能","id":"1605"},{"code":"1606","subject":{"code":"G","name":"体育","id":"G"},"name":"体育课后作业","id":"1606"},{"code":"1901","subject":{"code":"J","name":"教育学（小学）","id":"J"},"name":"单项选择","id":"1901"},{"code":"1902","subject":{"code":"J","name":"教育学（小学）","id":"J"},"name":"填空题","id":"1902"},{"code":"1903","subject":{"code":"J","name":"教育学（小学）","id":"J"},"name":"简答题","id":"1903"},{"code":"1904","subject":{"code":"J","name":"教育学（小学）","id":"J"},"name":"综合题","id":"1904"},{"code":"1905","subject":{"code":"J","name":"教育学（小学）","id":"J"},"name":"材料解析题","id":"1905"},{"code":"1906","subject":{"code":"J","name":"教育学（小学）","id":"J"},"name":"教学设计题","id":"1906"},{"code":"2001","subject":{"code":"K","name":"教育学（中学）","id":"K"},"name":"单项选择","id":"2001"},{"code":"2002","subject":{"code":"K","name":"教育学（中学）","id":"K"},"name":"填空题","id":"2002"},{"code":"2003","subject":{"code":"K","name":"教育学（中学）","id":"K"},"name":"简答题","id":"2003"},{"code":"2004","subject":{"code":"K","name":"教育学（中学）","id":"K"},"name":"综合题","id":"2004"},{"code":"2005","subject":{"code":"K","name":"教育学（中学）","id":"K"},"name":"材料解析题","id":"2005"},{"code":"2006","subject":{"code":"K","name":"教育学（中学）","id":"K"},"name":"教学设计题","id":"2006"},{"code":"201","subject":{"code":"2","name":"数学","id":"2"},"name":"选择题","id":"201"},{"code":"202","subject":{"code":"2","name":"数学","id":"2"},"name":"填空题","id":"202"},{"code":"203","subject":{"code":"2","name":"数学","id":"2"},"name":"计算题","id":"203"},{"code":"204","subject":{"code":"2","name":"数学","id":"2"},"name":"解答题","id":"204"},{"code":"205","subject":{"code":"2","name":"数学","id":"2"},"name":"判断题","id":"205"},{"code":"206","subject":{"code":"2","name":"数学","id":"2"},"name":"应用题","id":"206"},{"code":"207","subject":{"code":"2","name":"数学","id":"2"},"name":"图表题","id":"207"},{"code":"208","subject":{"code":"2","name":"数学","id":"2"},"name":"证明题","id":"208"},{"code":"209","subject":{"code":"2","name":"数学","id":"2"},"name":"作图题","id":"209"},{"code":"210","subject":{"code":"2","name":"数学","id":"2"},"name":"基础巩固","id":"210"},{"code":"211","subject":{"code":"2","name":"数学","id":"2"},"name":"拓展提升","id":"211"},{"code":"301","subject":{"code":"3","name":"英语","id":"3"},"name":"听力","id":"301"},{"code":"302","subject":{"code":"3","name":"英语","id":"3"},"name":"选择填空","id":"302"},{"code":"303","subject":{"code":"3","name":"英语","id":"3"},"name":"完形填空","id":"303"},{"code":"304","subject":{"code":"3","name":"英语","id":"3"},"name":"阅读理解","id":"304"},{"code":"305","subject":{"code":"3","name":"英语","id":"3"},"name":"补全单词","id":"305"},{"code":"306","subject":{"code":"3","name":"英语","id":"3"},"name":"完成对话","id":"306"},{"code":"307","subject":{"code":"3","name":"英语","id":"3"},"name":"词汇运用","id":"307"},{"code":"308","subject":{"code":"3","name":"英语","id":"3"},"name":"短文填空","id":"308"},{"code":"309","subject":{"code":"3","name":"英语","id":"3"},"name":"阅读表达","id":"309"},{"code":"310","subject":{"code":"3","name":"英语","id":"3"},"name":"短文改错","id":"310"},{"code":"311","subject":{"code":"3","name":"英语","id":"3"},"name":"作文","id":"311"},{"code":"401","subject":{"code":"4","name":"物理","id":"4"},"name":"单项选择","id":"401"},{"code":"402","subject":{"code":"4","name":"物理","id":"4"},"name":"多项选择题","id":"402"},{"code":"403","subject":{"code":"4","name":"物理","id":"4"},"name":"填空题","id":"403"},{"code":"404","subject":{"code":"4","name":"物理","id":"4"},"name":"作图题","id":"404"},{"code":"405","subject":{"code":"4","name":"物理","id":"4"},"name":"计算题","id":"405"},{"code":"406","subject":{"code":"4","name":"物理","id":"4"},"name":"实验与探究","id":"406"},{"code":"407","subject":{"code":"4","name":"物理","id":"4"},"name":"综合题","id":"407"},{"code":"501","subject":{"code":"5","name":"化学","id":"5"},"name":"单项选择","id":"501"},{"code":"502","subject":{"code":"5","name":"化学","id":"5"},"name":"多项选择题","id":"502"},{"code":"503","subject":{"code":"5","name":"化学","id":"5"},"name":"填空题","id":"503"},{"code":"504","subject":{"code":"5","name":"化学","id":"5"},"name":"解答题","id":"504"},{"code":"505","subject":{"code":"5","name":"化学","id":"5"},"name":"实验探究","id":"505"},{"code":"601","subject":{"code":"6","name":"历史","id":"6"},"name":"单项选择","id":"601"},{"code":"602","subject":{"code":"6","name":"历史","id":"6"},"name":"材料解析题","id":"602"},{"code":"603","subject":{"code":"6","name":"历史","id":"6"},"name":"综合探究","id":"603"},{"code":"701","subject":{"code":"7","name":"地理","id":"7"},"name":"单项选择","id":"701"},{"code":"702","subject":{"code":"7","name":"地理","id":"7"},"name":"材料解析题","id":"702"},{"code":"703","subject":{"code":"7","name":"地理","id":"7"},"name":"综合探究","id":"703"},{"code":"704","subject":{"code":"7","name":"地理","id":"7"},"name":"填空题","id":"704"},{"code":"801","subject":{"code":"8","name":"政治","id":"8"},"name":"单项选择","id":"801"},{"code":"802","subject":{"code":"8","name":"政治","id":"8"},"name":"材料解析题","id":"802"},{"code":"803","subject":{"code":"8","name":"政治","id":"8"},"name":"综合探究","id":"803"},{"code":"901","subject":{"code":"9","name":"生物","id":"9"},"name":"单项选择","id":"901"},{"code":"902","subject":{"code":"9","name":"生物","id":"9"},"name":"填空题","id":"902"},{"code":"903","subject":{"code":"9","name":"生物","id":"9"},"name":"简答题","id":"903"}],"message":"请求成功"};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    
    //生成标题和内容
    create_titleMain: function(){
        var self=this;        
        this.job_structureManagementTable_data(function(res){
            $("#title_span").html(res.name);
            $("#id_span").html(res.code);
            $("#title_h").html(res.codeName + res.name);
            self.create_structureManagementTable_table(res.list);
        });
    },
    //创建表格
    create_structureManagementTable_table: function(data){
        var self=this;
        self.examType_data(function(types){
            self.examCategory_data(function(categorys){
                $("#structureManagementTable tbody").html(template('structureManagementTableTemplate',{data,types,categorys}));
            });
        });        
    },
    //试题类型改变时显示/隐藏选项
    on_change_type: function(e){
        var code = $(e).val();
        if(code == 'C'){
            $(e).parent().siblings(".questionTd").children("input").show();
            $(e).parent().siblings(".optionTd").children("input").show();
        }else{
            $(e).parent().siblings(".questionTd").children("input").hide();
            $(e).parent().siblings(".optionTd").children("input").hide();
        }
    },
    //同步结构按钮
    synchronousStructure: function(){
        alert("未设计");
    },
    //导入按钮
    import: function(){
        alert("未设计");
    },
    //导出按钮
    export: function(){
        alert("未设计");
    },
    //删除试卷结构按钮
    delExam: function(){
        alert("未设计");
    },
    //保存试卷结构按钮
    saveExam: function(){
        alert("未设计");
    },
    //关闭按钮
    close: function(){
        Men.load_content('#job_article', 'job_chapters'); //跳转到教辅作业页
    },
    //自动运行
    init: function(){
        this.create_titleMain();
    },
};
job_structureManagement.init();