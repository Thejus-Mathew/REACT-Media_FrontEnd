import { CommonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";


// upload video
export const uploadVideoAPI = async(video) => {
    return await CommonAPI("POST",`${SERVER_URL}/allVideos`,video)
}


// get all videos
export const getAllUploadedVideosAPI = async() => {
    return await CommonAPI("GET", `${SERVER_URL}/allVideos`, "")
}


// get 1 videos to play
export const getAVideo = async(id) => {
    return await CommonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "")
}

// delete a video
export const deleteVideo = async(id) => {
    return await CommonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// add video history
export const addVideoHistoryAPI = async(video) => {
    return await CommonAPI("POST",`${SERVER_URL}/watchHistory`,video)
}

// get video history
export const getVideoHistoryAPI = async() => {
    return await CommonAPI("GET",`${SERVER_URL}/watchHistory`,"")
}

// delete video history
export const deleteVideoHistoryAPI = async(id) => {
    return await CommonAPI("DELETE",`${SERVER_URL}/watchHistory/${id}`,{})
}



// add category
export const addVideoCategoryAPI = async(category) => {
    return await CommonAPI("POST",`${SERVER_URL}/category`,category)
}


// get category
export const getVideoCategoryAPI = async() => {
    return await CommonAPI("GET",`${SERVER_URL}/category`,"")
}


// delete category
export const deleteVideoCategoryAPI = async(id) => {
    return await CommonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}


//update category
export const updateVideoCategoryAPI = async(id,categorydetails) => {
    return await CommonAPI("PUT",`${SERVER_URL}/category/${id}`,categorydetails)
}