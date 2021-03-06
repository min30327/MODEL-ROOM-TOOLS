/**
 * [ColorSelectConfig description]
 * @type {Object}
 */
var ColorSelectConfig = {
regions :
[
	  [
  				{
  					title 	: 'Comfort Natural',
  					source  : 'img/living-natural.jpg',
  					texture : false,
  					top		: false,
  					cupboard: false,
  					shape	: false,
  					state 	: ''

  				},
  				{
  					title 	: 'Medium Mocha',
  					source  : 'img/living-mocha.jpg',
  					texture : false,
  					top 	: false,
  					cupboard: false,
  					shape	: false,
  					state 	: ''

  				},
  				{
  					title 	: 'Graceful Brown',
  					source  : 'img/living-brown.jpg',
  					texture : false,
  					top 	: false,
  					cupboard: false,
  					shape	: false,
  					state 	: ''

  				}
  	],
 	[
 				{
  					title 	: 'Model Room',
  					source  : 'img/kitchen-modelroom.jpg',
  					texture : false,
  					top 	: false,
  					cupboard: false,
  					shape	: false,
  					state 	: ''

  				},
  				{
  					title 	: 'Comfort Natural',
  					source  : 'img/kit_nat_t01_s01.jpg',
  					texture : true,
  					top 	: true,
  					cupboard: true,
  					shape	: true,
  					state 	: '_nat'

  				},
  				{
  					title 	: 'Medium Mocha',
  					source  : 'img/kit_med_t01_s01.jpg',
  					texture : true,
  					top 	: true,
  					cupboard: true,
  					shape	: true,
  					state 	: '_med'

  				},
  				{
  					title 	: 'Graceful Brown',
  					source  : 'img/kit_bro_t01_s01.jpg',
  					texture : true,
  					top 	: true,
  					cupboard: true,
  					shape	: true,
  					state 	: '_bro'

  				}
  		]
	 ],	  
 	textures : [
		{
			title : 'ホワイトウッド',
			source : 'img/texture/door-01.jpg'
		},
		{
			title : 'グレーウッド',
			source : 'img/texture/door-02.jpg'
		},
		{
			title : 'ミディアムウッド',
			source : 'img/texture/door-03.jpg'
		},
		{
			title : 'ダークウッド',
			source : 'img/texture/door-04.jpg'
		},
		{
			title : 'ホワイト',
			source : 'img/texture/door-05.jpg'
		},
		{
			title : 'シルバー',
			source : 'img/texture/door-06.jpg'
		},
		{
			title : 'グレージュ',
			source : 'img/texture/door-07.jpg'
		},
		{
			title : 'ブラウン',
			source : 'img/texture/door-08.jpg'
		}
	],
	tops : [
		{
			title : 'フロスティホワイト',
			source : 'img/texture/top-01.jpg'
		},
		{
			title : 'ビーン',
			source : 'img/texture/top-02.jpg'
		},
		{
			title : 'クラムグレー',
			source : 'img/texture/top-03.jpg'
		}
	]
};
var PlanConfig = 
	{
		floor : 15,
		area : {
			min:55,
			max :90,
			step:5
		},
		types : ['4LDK','3LDK','2LDK'],
		directions : {'south':'南','east':'東'},
		data : [
			{
				plan : 'A',
				min : 3,
				max : 15,
				score : 83.72,
				area : 5,
				type : '4LDK',
				direction : 'south',
				type_name : '4LDK',
				details : 'アルコーブ面積:2.34m²　バルコニー面積:9.28m²　サービスバルコニー面積:1.31m²',
				src : 'img/plan/A.png'
			},
			{
				plan : 'B',
				min : 3,
				max : 15,
				score : 80.51,
				area : 5,
				type : '3LDK',
				direction : 'south',
				type_name : '3LDK',
				details : 'アルコーブ面積:2.51m²　バルコニー面積:10.11m²',
				src : 'img/plan/B.png'
			},
			{
				plan : 'C',
				min : 2,
				max : 15,
				score : 70.55,
				area : 3,
				type : '3LDK',
				direction : 'south',
				type_name : '3LDK+N',
				details : 'アルコーブ面積:2.56m²　バルコニー面積:8.68m²',
				src : 'img/plan/C.png'
			},
			{
				plan : 'D',
				min : 2,
				max : 15,
				score : 69.34,
				area : 2,
				type : '3LDK',
				direction : 'south',
				type_name : '3LDK',
				details : 'アルコーブ面積:2.16m²　バルコニー面積:8.55m²',
				src : 'img/plan/D.png'
			},
			{
				plan : 'E',
				min : 2,
				max : 15,
				score : 75.74,
				area : 4,
				type : '3LDK',
				direction : 'south',
				type_name : '3LDK',
				details : 'アルコーブ面積:2.35m²　バルコニー面積:9.56m²',
				src : 'img/plan/E.png'
			},
			{
				plan : 'F',
				min : 2,
				max : 15,
				score : 63.38,
				area : 1,
				type : '2LDK',
				direction : 'south',
				type_name : '2LDK',
				details : 'アルコーブ面積:2.72m²　バルコニー面積:8.73m²',
				src : 'img/plan/F.png'
			},
			{
				plan : 'G',
				min : 5,
				max : 15,
				score : 87.22,
				area : 6,
				type : '4LDK',
				direction : 'south',
				type_name : '4LDK',
				details : 'アルコーブ面積:3.39m²　バルコニー面積:38.48m²',
				src : 'img/plan/G.png'
			},
			{
				plan : 'H',
				min : 5,
				max : 15,
				score : 64.23,
				area : 1,
				type : '3LDK',
				direction : 'east',
				type_name : '3LDK',
				details : 'アルコーブ面積:2.54m²　バルコニー面積:9.56m²',
				src : 'img/plan/H.png'
			},
			{
				plan : 'I',
				min : 5,
				max : 15,
				score : 56.65,
				area : 0,
				type : '2LDK',
				direction : 'east',
				type_name : '2LDK',
				details : 'アルコーブ面積:2.07m²　バルコニー面積:8.53m²',
				src : 'img/plan/I.png'
			},
			{
				plan : 'J',
				min : 5,
				max : 15,
				score : 67.19,
				area : 2,
				type : '3LDK',
				direction : 'east',
				type_name : '3LDK',
				details : 'アルコーブ面積:1.94m²　バルコニー面積:9.65m²　サービスバルコニー面積:9.60m²',
				src : 'img/plan/J.png'
			}
		],

		rooms: [
			{
				name : 'A',
				rooms : [
					{
						floor : 15,
						no : 1501,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 14,
						no : 1401,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 13,
						no : 1301,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 12,
						no : 1201,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 11,
						no : 1101,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 10,
						no : 1001,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 9,
						no : 901,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 8,
						no : 801,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 7,
						no : 701,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 6,
						no : 601,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 5,
						no : 501,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 4,
						no : 401,
						area : 5,
						type : 0,
						direction : 0
					},
					{
						floor : 3,
						no : 301,
						area : 5,
						type : 0,
						direction : 0
					},
				]
			},
			{
				name : 'B',
				rooms : [
					{
						floor : 15,
						no : 1502,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 14,
						no : 1402,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 13,
						no : 1302,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 12,
						no : 1202,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 11,
						no : 1102,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 10,
						no : 1002,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 9,
						no : 902,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 8,
						no : 802,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 7,
						no : 702,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 6,
						no : 602,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 5,
						no : 502,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 4,
						no : 402,
						area : 5,
						type : 1,
						direction : 0
					},
					{
						floor : 3,
						no : 302,
						area : 5,
						type : 1,
						direction : 0
					},
				]
			},
			{
				name : 'C',
				rooms : [
					{
						floor : 15,
						no : 1503,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 14,
						no : 1403,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 13,
						no : 1303,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 12,
						no : 1203,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 11,
						no : 1103,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 10,
						no : 1003,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 9,
						no : 903,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 8,
						no : 803,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 7,
						no : 703,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 6,
						no : 603,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 5,
						no : 503,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 4,
						no : 403,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 3,
						no : 303,
						area : 3,
						type : 1,
						direction : 0
					},
					{
						floor : 2,
						no : 203,
						area : 3,
						type : 1,
						direction : 0
					},
				]
			},
			{
				name : 'D',
				rooms : [
					{
						floor : 15,
						no : 1504,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 14,
						no : 1404,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 13,
						no : 1304,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 12,
						no : 1204,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 11,
						no : 1104,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 10,
						no : 1004,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 9,
						no : 904,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 8,
						no : 804,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 7,
						no : 704,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 6,
						no : 604,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 5,
						no : 504,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 4,
						no : 404,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 3,
						no : 304,
						area : 2,
						type : 1,
						direction : 0
					},
					{
						floor : 2,
						no : 204,
						area : 2,
						type : 1,
						direction : 0
					},
				]
			},
			{
				name : 'E',
				rooms : [
					{
						floor : 15,
						no : 1505,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 14,
						no : 1405,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 13,
						no : 1305,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 12,
						no : 1205,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 11,
						no : 1105,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 10,
						no : 1005,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 9,
						no : 905,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 8,
						no : 805,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 7,
						no : 705,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 6,
						no : 605,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 5,
						no : 505,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 4,
						no : 405,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 3,
						no : 305,
						area : 4,
						type : 1,
						direction : 0
					},
					{
						floor : 2,
						no : 205,
						area : 4,
						type : 1,
						direction : 0
					},
				]
			},
			{
				name : 'F',
				rooms : [
					{
						floor : 15,
						no : 1506,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 14,
						no : 1406,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 13,
						no : 1306,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 12,
						no : 1206,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 11,
						no : 1106,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 10,
						no : 1006,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 9,
						no : 906,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 8,
						no : 806,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 7,
						no : 706,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 6,
						no : 606,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 5,
						no : 506,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 4,
						no : 406,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 3,
						no : 306,
						area : 1,
						type : 2,
						direction : 0
					},
					{
						floor : 2,
						no : 206,
						area : 1,
						type : 2,
						direction : 0
					},
				]
			},
			{
				name : 'G',
				rooms : [
					{
						floor : 15,
						no : 1507,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 14,
						no : 1407,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 13,
						no : 1307,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 12,
						no : 1207,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 11,
						no : 1107,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 10,
						no : 1007,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 9,
						no : 907,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 8,
						no : 807,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 7,
						no : 707,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 6,
						no : 607,
						area : 6,
						type : 2,
						direction : 0
					},
					{
						floor : 5,
						no : 507,
						area : 6,
						type : 2,
						direction : 0
					}
				]
			},
			{
				name : 'H',
				rooms : [
					{
						floor : 15,
						no : 1508,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 14,
						no : 1408,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 13,
						no : 1308,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 12,
						no : 1208,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 11,
						no : 1108,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 10,
						no : 1008,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 9,
						no : 908,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 8,
						no : 808,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 7,
						no : 708,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 6,
						no : 608,
						area : 1,
						type : 1,
						direction : 1
					},
					{
						floor : 5,
						no : 508,
						area : 1,
						type : 1,
						direction : 1
					}
				]
			},
			{
				name : 'I',
				rooms : [
					{
						floor : 15,
						no : 1509,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 14,
						no : 1409,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 13,
						no : 1309,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 12,
						no : 1209,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 11,
						no : 1109,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 10,
						no : 1009,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 9,
						no : 909,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 8,
						no : 809,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 7,
						no : 709,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 6,
						no : 609,
						area : 0,
						type : 2,
						direction : 1
					},
					{
						floor : 5,
						no : 509,
						area : 0,
						type : 2,
						direction : 1
					}
				]
			},
			{
				name : 'J',
				rooms : [
					{
						floor : 15,
						no : 1510,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 14,
						no : 1410,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 13,
						no : 1310,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 12,
						no : 1210,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 11,
						no : 1110,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 10,
						no : 1010,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 9,
						no : 910,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 8,
						no : 810,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 7,
						no : 710,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 6,
						no : 610,
						area : 2,
						type : 1,
						direction : 1
					},
					{
						floor : 5,
						no : 510,
						area : 2,
						type : 1,
						direction : 1
					}
				]
			}
		]
		
	};
