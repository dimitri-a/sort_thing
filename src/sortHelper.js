function sortStuff(item1,item2)
{
    debugger
    if (item1.model ==='Commercial' ){
        if (item1.rank > item2.rank)
        {
            return 1;
        }
        else{
            return -1;
        }
    }

    if (item1.model ==='Agribusiness' ){
        if (item1.rank > item2.rank)
        {
            return 1;
        }
        else{
            return -1;
        }
    }

}

export default sortStuff