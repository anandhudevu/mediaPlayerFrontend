import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to add video
export const allVideoApi=async(reqbody)=>{
    return await commonAPI("POST",`${serverUrl}/allvideos`,reqbody)
    
}
//api to get all videos
export const getAllVideosApi=async()=>{
    return await commonAPI("GET",`${serverUrl}/allvideos`,'')
}
//api to delete video
export const deleteVideoApi=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/allvideos/${id}`,{})
}
//api to add video to history
export const addVideoHistory=async(reqBody)=>{
    return await commonAPI("POST",`${serverUrl}/history`,reqBody)
}
//api to get all video history
export const getVideoHistoryApi=async()=>{
    return await commonAPI("GET",`${serverUrl}/history`,'')
}
//api to delete a video from history
export const deleteVideoHistoryApi=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}
//api to add category
export const addCategoryApi=async(reqBody)=>{   
    return await commonAPI("POST",`${serverUrl}/category`,reqBody)

}
//api to get all category
export const getAllCategory=async()=>{
    return await commonAPI("GET",`${serverUrl}/category`,'')
}
//api to delete category
export const removeCategoryApi=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/category/${id}`,{})
}
//api to update category
export const updateCategoryApi=async(id,reqBody)=>{
    return await commonAPI("PUT",`${serverUrl}/category/${id}`,reqBody)
}