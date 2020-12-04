import R from 'ramda';


export const getPhonesById = (state,id)=>R.prop(id,state.phone);


export const getPhones = (state,ownProps)=>{
    // const phones = R.map(id=>getPhonesById(state,id),state.PhonesPage.ids);
    // return phones;

    const activeCategoryId = getActiveCategoryId(ownProps);
    // console.log("activeCategoryId " , activeCategoryId);
    const applyCategory = (item)=>{
        // console.log("Item ", item);
        return R.equals(
            activeCategoryId,
            R.prop('categoryId',item)
        );
    };
    const applySearch = (item)=>{
        return R.contains(
            state.PhonesPage.search,
            R.prop('name',item)
        )
    };
    const phones = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)),
        R.map(id=>getPhonesById(state,id))
    )(state.PhonesPage.ids);
    return phones;
};

export const getRenderedPhonesLength = state => R.length(state.PhonesPage.ids);
//Tổng giá tất cả các sản phẩm
export const getTotalBasketPrice = state=>{
    
    const phones = R.map(id=>getPhonesById(state,id),state.Basket);
    // console.log("Phones are " , phones);
    let total = 0;
    return phones.reduce((total,phone)=>{
        return total + phone.price;
    }, total);
    // console.log("Phone total is ", phnTotal);
};
//Tổng số lượng sản phẩm
export const getTotalBasketCount = state=>{
    return state.Basket.length;
};
// lấy loại sp
export const getCategories = (state)=>{
    // console.log(" fething categories from state " ,R.values(state.Categories));
    return R.values(state.Categories);
};
//lấy  sp loại mình muốn ra
export const getActiveCategoryId = ownProps=>{
    // console.log("ownProps " , ownProps);
    return R.path(['params','id'],ownProps);
};

export const getBasketPhonesWithCount = (state)=>{
    const uniqueIds = R.uniq(state.Basket);

    const phoneCount = (id)=>{
        return(
            R.compose(
                R.length,
                R.filter(basketId => R.equals(id,basketId))
            )(state.Basket)
        );
    };
    const phoneWithCount = (phone)=>{
        return R.assoc('count',phoneCount(phone.id),phone);
    };
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map(id => getPhonesById(state,id))
    )(uniqueIds);
    console.log("Phones in basket are ", phones);
    return phones;
};

