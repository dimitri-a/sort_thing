import helper from './sortHelper.js'

const mockCommercialModel =[
    {
        "id": 1,
        "businessEntityId": "BE001",
        "financials": {
            "Npbt": 2323,
            "Interest": 123213,
            "Depreciation": 213123,
            "Ebit": 1312321,
            "EbitDa": 123123,
            "Leasing": 123213
        },
        "type": "Proforma",
        "startDate": "2018-06-15T00:00:00.000Z",
        "endDate": "2018-06-15T00:00:00.000Z",
        "model": "Commercial",
        "duration": 12,
        "quality": "Unqualified"
    },
    {
        "id": 2,
        "businessEntityId": "BE002",
        "financials": {
            "Npbt": 2323,
            "Interest": 123213,
            "Depreciation": 213123,
            "Ebit": 1312321,
            "EbitDa": 123123,
            "Leasing": 123213
        },
        "type": "Actual",
        "startDate": "2017-06-15T00:00:00.000Z",
        "endDate": "2017-06-15T00:00:00.000Z",
        "model": "Commercial",
        "duration": 12,
        "quality": "Audited"
    }
  
]
const mockAggribusinessModel =[
    {
        "id": 1,
        "businessEntityId": "BE001",
        "financials": {
            "Npbt": 2323,
            "Interest": 123213,
            "Depreciation": 213123,
            "Ebit": 1312321,
            "EbitDa": 123123,
            "Leasing": 123213
        },
        "type": "Agribusiness",
        "startDate": "2018-06-15T00:00:00.000Z",
        "endDate": "2018-06-15T00:00:00.000Z",
        "model": "Agribusiness",
        "duration": 12,
        "quality": "Unqualified"
    },
    {
        "id": 2,
        "businessEntityId": "BE002",
        "financials": {
            "Npbt": 2323,
            "Interest": 123213,
            "Depreciation": 213123,
            "Ebit": 1312321,
            "EbitDa": 123123,
            "Leasing": 123213
        },
        "type": "Agribusiness",
        "startDate": "2017-06-15T00:00:00.000Z",
        "endDate": "2017-06-15T00:00:00.000Z",
        "model": "Agribusiness",
        "duration": 12,
        "quality": "Audited"
    }
  
]

describe('sort helper testing', () =>{

    it ("should sort comercial first 1 type",()=>{
        console.log(helper)
        let result = mockCommercialModel.sort(helper.sort)

        expect(result[0].id).toBe(2)
        expect(result[1].id).toBe(1)

    })
    xit ("should sort comercial first mixed types",()=>{
        let result = mockAggribusinessModel.sort(helper.sortStuff)

        expect(result[0].id).toBe(1)
        expect(result[1].id).toBe(2)

    })
})
