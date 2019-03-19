import helper from './sortHelper'
import mockData from './data.json'

describe('sort helper testing', () =>{

    it ("should sort comercial first",()=>{
        let result = mockData.sort(helper.sortStuff)

        expect(result[0].id).toBe(1)

    })
})
