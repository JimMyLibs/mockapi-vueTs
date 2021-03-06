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
            base64: 'base64',
            detailAddress: 'detailAddress',
            intRange: '1-10',
            floatRange: '1.123-99.123456',
            oneOf: '[1,12,123,1234]',
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
            pageSize: { pageSizeName: 10 },
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
            boolean: 'boolean',
            natural: 'natural',
            integer: 'integer',
            float: 'float',
            character: 'character',
            string: 'string',
            range: 'range',
            date: 'date',
            time: 'time',
            datetime: 'datetime',
            now: 'now',
            image: 'image',
            dataImage: 'dataImage', // 服务器压力太大，暂时返回固定值
            color: 'color',
            hex: 'hex',
            rgb: 'rgb',
            rgba: 'rgba',
            hsl: 'hsl',
            paragraph: 'paragraph',
            sentence: 'sentence',
            word: 'word',
            title: 'title',
            cparagraph: 'cparagraph',
            csentence: 'csentence',
            cword: 'cword',
            ctitle: 'ctitle',
            first: 'first',
            last: 'last',
            name: 'name',
            cfirst: 'cfirst',
            clast: 'clast',
            cname: 'cname',
            url: 'url',
            domain: 'domain',
            protocol: 'protocol',
            tld: 'tld',
            email: 'email',
            ip: 'ip',
            region: 'region',
            province: 'province',
            city: 'city',
            county: 'county',
            zip: 'zip',
            capitalize: 'capitalize',
            upper: 'upper',
            lower: 'lower',
            pick: 'pick',
            shuffle: 'shuffle',
            guid: 'guid',
            id: 'id',
            increment: 'increment',
        },
    }
}