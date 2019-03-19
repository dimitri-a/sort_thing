let rankingCommercial = 
      {
        'Actual':1,
        'Projected':2,
        'Proforma':3
      }


    let rankingAgribusiness = 
    {
      'Historical':1,
      'Actual':2,
      'Projected':3,
      'Proforma':4
    }
    
export default function sortModel(item1,item2)
{
    console.log('start sortModel function')
    debugger
    if (item1.model ==='Commercial'  && item2.model ==='Commercial') {
    
        if (rankingCommercial[item1.type]> rankingCommercial[item2.type])
        {
            return 1;
        }
        else{
            return -1;
        }
    }

    if (item1.model ==='Agribusiness' && item2.model ==='Agribusiness' ){
        if (rankingAgribusiness[item1.type]> rankingAgribusiness[item2.type])
        {
            return 1;
        }
        else{
            return -1;
        }
    }


   
}

