import *as ActionTypes from './ActionTypes';

export const addComment = (dishId,rating,auther,comment) =>({
type:ActionTypes.ADD_COMMENT,
payload:{
    dishId:dishId,
    rating:rating,
    auther:auther,
    comment:comment
}
});