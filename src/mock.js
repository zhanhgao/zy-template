let searchList = {
    "msg": "success",
    "code": 0,
    "page": {
        "totalCount": 4,
        "pageSize": 10,
        "totalPage": 1,
        "currPage": 1,
        "list": [{
                "id": 1,
                "custName": "测试公司1",
                "socialCreditUnifiedCode": "123456",
                "registeredCapital": 2,
                "registeredCapitalName": "证书类型2",
                "legalRepresentative": "张三",
                "businessTermStartTime": "2020-05-19 13:00:00",
                "businessTermEndTime": "2030-05-19 13:00:00",
                "registrationAuthority": "注册地址注册地址注册地址注册地址",
                "businessScope": "经营范围经营范围经营范围经营范围经营范围经营范围经营范围",
                "sysUserId": 1,
                "createTime": "2020-05-20 04:09:08",
                "updateTime": "2020-05-20 04:23:33"
            },
            {
                "id": 2,
                "custName": "测试公司2",
                "socialCreditUnifiedCode": "456789",
                "registeredCapital": 1,
                "registeredCapitalName": "证书类型1",
                "legalRepresentative": "李四",
                "businessTermStartTime": "2020-05-29 13:00:00",
                "businessTermEndTime": "2030-05-19 13:00:00",
                "registrationAuthority": "注册地址注册地址注册地址注册地址",
                "businessScope": "经营范围经营范围经营范围经营范围经营范围经营范围经营范围",
                "sysUserId": 1,
                "createTime": "2020-05-20 04:09:08",
                "updateTime": "2020-05-20 04:23:33"
            },
            {
                "id": 3,
                "custName": "测试公司3",
                "socialCreditUnifiedCode": "65455154156",
                "registeredCapital": 2,
                "registeredCapitalName": "证书类型2",
                "legalRepresentative": "王五",
                "businessTermStartTime": "2020-05-22 13:00:00",
                "businessTermEndTime": "2030-05-19 13:00:00",
                "registrationAuthority": "注册地址注册地址注册地址注册地址",
                "businessScope": "经营范围经营范围经营范围经营范围经营范围经营范围经营范围",
                "sysUserId": 1,
                "createTime": "2020-05-20 04:09:08",
                "updateTime": "2020-05-20 04:23:33"
            },
            {
                "id": 4,
                "custName": "测试公司4",
                "socialCreditUnifiedCode": "65456415616456",
                "registeredCapital": 3,
                "registeredCapitalName": "证书类型3",
                "legalRepresentative": "赵六",
                "businessTermStartTime": "2020-05-14 13:00:00",
                "businessTermEndTime": "2030-05-19 13:00:00",
                "registrationAuthority": "注册地址注册地址注册地址注册地址",
                "businessScope": "经营范围经营范围经营范围经营范围经营范围经营范围经营范围",
                "sysUserId": 1,
                "createTime": "2020-05-20 04:09:08",
                "updateTime": "2020-05-20 04:23:33"
            }
        ]
    }
}

let list2={
    "msg": "success",
    "code": 0,
    "page": [
      {
        "id": 1,
        "custId": 1,
        "certificateTypeId": 1,
        "certificateTypeName": "证书类型1",
        "certificateGradeId": 2,
        "certificateGradeName": "证书类型2",
        "evaluateOrganization": "评价机构1",
        "guidanceOrganization": "指导机构1",
        "certificateNo": "123456",
        "issUeDate": "2020-06-09 13:00:00",
        "periodOfValidity": "2021-06-09 13:00:00",
        "createTime": "2020-05-20 04:09:47",
        "updateTime": "2020-05-20 04:20:09"
      },
      {
        "id": 2,
        "custId": 1,
        "certificateTypeId": 2,
        "certificateTypeName": "证书类型2",
        "certificateGradeId": 3,
        "certificateGradeName": "证书类型3",
        "evaluateOrganization": "评价机构1",
        "guidanceOrganization": "指导机构1",
        "certificateNo": "123456",
        "issUeDate": "2020-06-19 13:00:00",
        "periodOfValidity": "2021-06-19 13:00:00",
        "createTime": "2020-05-20 04:09:47",
        "updateTime": "2020-05-20 04:20:18"
      },
      {
        "id": 3,
        "custId": 1,
        "certificateTypeId": 3,
        "certificateTypeName": "证书类型3",
        "certificateGradeId": 4,
        "certificateGradeName": "证书类型4",
        "evaluateOrganization": "评价机构1",
        "guidanceOrganization": "指导机构",
        "certificateNo": "123456",
        "issUeDate": "2020-06-10 13:00:00",
        "periodOfValidity": "2021-06-09 13:00:00",
        "createTime": "2020-05-20 04:09:48",
        "updateTime": "2020-05-20 04:20:18"
      }
    ],
    "cust": {
      "id": 1,
      "custName": "测试公司1",
      "socialCreditUnifiedCode": "123456",
      "registeredCapital": 2,
      "registeredCapitalName": null,
      "legalRepresentative": "张三",
      "businessTermStartTime": "2020-05-19 13:00:00",
      "businessTermEndTime": "2030-05-19 13:00:00",
      "registrationAuthority": "注册地址注册地址注册地址注册地址",
      "businessScope": "经营范围经营范围经营范围经营范围经营范围经营范围经营范围",
      "sysUserId": 1,
      "createTime": "2020-05-20 04:09:08",
      "updateTime": "2020-05-20 04:23:33"
    }
  }

export default{
    searchList,
    list2
}