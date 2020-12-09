import phones from './mockPhones';
import axios from 'axios'
import mockCategories from './mockCategories';
//Lấy sp
export const fetchPhones = async () =>{
    // return new Promise(resolve =>{
    //     resolve(phones);
    // });
  return(
      axios({
        method:'GET',
        url: 'https://5fb7847b8e07f00016642f0d.mockapi.io/api/phones',
        data: null
    })
    .catch(err =>{
        console.log(err);
    })
  )
    // const {body} = await request.get('http://www.mocky.io/v2/5918b9461200001f1040dbeb');
    // return body.phones;
};
//Load thêm sp
export const loadMore = async ({offset}) => {
    return new Promise((resolve)=>{
        resolve(phones);
    });
};
//Tìm thông tin sp theo id
export const fetchPhoneById = async id=>{
    // return new Promise((resolve,reject)=>{
    //     console.log("Id in api fetchPhones " , id);
    //     const phone = R.find(R.propEq('id',id),phones);
    //     resolve(phone);
    // });
    return(
        axios({
            method:'GET',
            url: `https://5fb7847b8e07f00016642f0d.mockapi.io/api/phones/${id}`,
            data: null
        })
        .catch(err =>{
            console.log(err);
        })
    );
};
// Tìm sp theo loại
export const fetchCategories = async ()=>{
    return new Promise(resolve =>{
        resolve(mockCategories);
    });
}