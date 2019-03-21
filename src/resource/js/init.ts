export const initData = {
    normal: {
        mock: {
            id: 'id',
            name: 'cname',
            username: 'username',
            tel: 'tel',
            phone: 'phone',
            idCard: 'idCard',
            bankCard: 'bankCard',
            email: 'email',
            qq: 'qq',
            carNum: 'carNum',
            icon: 'icon',
            detailAddress: 'detailAddress',
        },
    },
    page: {
        mock: {
            list: [{ image: 'image', id: 'id' }],
            pageSize: 10,
            totalNum: 23,
            curPage: 3,
        },
    },
    diyPage: {
        mock: {
            list: [{ image: 'image', id: 'id' }],
            pageSize: 10,
            totalNum: { totalNumName: 23 },
            curPage: { curPageName: 3 },
        },
    },
    dataType: {
        mock: {
            string: 'string',
            number: 'number',
            boolean: 'boolean',
            null: 'null',
            obj: { title: 'ctitle', cparagraph: 'cparagraph' },
            list1: ['cname'],
            list2: [{ image: 'image', id: 'id' }],
        },
    },
    mockapi: {
        mock: {
            id: 'id',
        },
    }
}