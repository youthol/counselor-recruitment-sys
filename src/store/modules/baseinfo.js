const state = {
  genderOptions: [
    {
      label: '男',
      value: '男'
    },
    {
      label: '女',
      value: '女'
    }
  ],
  politicalOptions: [
    {
      label: '中共党员',
      value: '中共党员'
    },
    {
      label: '中共预备党员',
      value: '中共预备党员'
    },
    {
      label: '共青团员',
      value: '共青团员'
    },
    {
      label: '群众',
      value: '群众'
    },
    {
      label: '其他',
      value: '其他'
    }
  ],
  peopleOptions: [
    {
      label: '汉族',
      value: '汉族'
    },
    {
      label: '蒙古族',
      value: '蒙古族'
    },
    {
      label: '回族',
      value: '回族'
    },
    {
      label: '藏族',
      value: '藏族'
    },
    {
      label: '维吾尔族',
      value: '维吾尔族'
    },
    {
      label: '苗族',
      value: '苗族'
    },
    {
      label: '彝族',
      value: '彝族'
    },
    {
      label: '壮族',
      value: '壮族'
    },
    {
      label: '布依族',
      value: '布依族'
    },
    {
      label: '朝鲜族',
      value: '朝鲜族'
    },
    {
      label: '满族',
      value: '满族'
    },
    {
      label: '侗族',
      value: '侗族'
    },
    {
      label: '瑶族',
      value: '瑶族'
    },
    {
      label: '白族',
      value: '白族'
    },
    {
      label: '土家族',
      value: '土家族'
    },
    {
      label: '哈尼族',
      value: '哈尼族'
    },
    {
      label: '哈萨克族',
      value: '哈萨克族'
    },
    {
      label: '傣族',
      value: '傣族'
    },
    {
      label: '黎族',
      value: '黎族'
    },
    {
      label: '傈僳族',
      value: '傈僳族'
    },
    {
      label: '佤族',
      value: '佤族'
    },
    {
      label: '畲族',
      value: '畲族'
    },
    {
      label: '拉祜族',
      value: '拉祜族'
    },
    {
      label: '水族',
      value: '水族'
    },
    {
      label: '东乡族',
      value: '东乡族'
    },
    {
      label: '纳西族',
      value: '纳西族'
    },
    {
      label: '景颇族',
      value: '景颇族'
    },
    {
      label: '柯尔克孜族',
      value: '柯尔克孜族'
    },
    {
      label: '土族',
      value: '土族'
    },
    {
      label: '达斡尔族',
      value: '达斡尔族'
    },
    {
      label: '仫佬族',
      value: '仫佬族'
    },
    {
      label: '羌族',
      value: '羌族'
    },
    {
      label: '布朗族',
      value: '布朗族'
    },
    {
      label: '撒拉族',
      value: '撒拉族'
    },
    {
      label: '毛南族',
      value: '毛南族'
    },
    {
      label: '仡佬族',
      value: '仡佬族'
    },
    {
      label: '锡伯族',
      value: '锡伯族'
    },
    {
      label: '阿昌族',
      value: '阿昌族'
    },
    {
      label: '普米族',
      value: '普米族'
    },
    {
      label: '塔吉克族',
      value: '塔吉克族'
    },
    {
      label: '怒族',
      value: '怒族'
    },
    {
      label: '乌兹别克族',
      value: '乌兹别克族'
    },
    {
      label: '俄罗斯族',
      value: '俄罗斯族'
    },
    {
      label: '鄂温克族',
      value: '鄂温克族'
    },
    {
      label: '德昂族',
      value: '德昂族'
    },
    {
      label: '保安族',
      value: '保安族'
    },
    {
      label: '裕固族',
      value: '裕固族'
    },
    {
      label: '京族',
      value: '京族'
    },
    {
      label: '塔塔尔族',
      value: '塔塔尔族'
    },
    {
      label: '独龙族',
      value: '独龙族'
    },
    {
      label: '鄂伦春族',
      value: '鄂伦春族'
    },
    {
      label: '赫哲族',
      value: '赫哲族'
    },
    {
      label: '门巴族',
      value: '门巴族'
    },
    {
      label: '珞巴族',
      value: '珞巴族'
    },
    {
      label: '基诺族',
      value: '基诺族'
    },
    {
      label: '高山族',
      value: '高山族'
    }
  ],
  marriageOptions: [
    {
      label: '未婚',
      value: '未婚'
    },
    {
      label: '已婚',
      value: '已婚'
    },
    {
      label: '其他',
      value: '其他'
    }
  ],
  educationOptions: [
    {
      label: '博士研究生',
      value: '博士研究生'
    },
    {
      label: '硕士研究生',
      value: '硕士研究生'
    },
    {
      label: '本科',
      value: '本科'
    },
    {
      label: '专科',
      value: '专科'
    },
    {
      label: '其他',
      value: '其他'
    }
  ],
  degreeOptions: [
    {
      label: '无',
      value: '无'
    },
    {
      label: '学士',
      value: '学士'
    },
    {
      label: '硕士',
      value: '硕士'
    },
    {
      label: '博士',
      value: '博士'
    },
    {
      label: '其他',
      value: '其他'
    }
  ],
  jobOptions: [
    {
      label: '岗位1',
      value: '岗位1'
    },
    {
      label: '岗位2',
      value: '岗位2'
    },
    {
      label: '岗位3',
      value: '岗位3'
    }
  ],
  learningTypeOptions: [
    {
      label: '全日制',
      value: '全日制'
    },
    {
      label: '非全日制',
      value: '非全日制'
    }
  ],
  storeBaseinfoMsg: {}
};

const getters = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
