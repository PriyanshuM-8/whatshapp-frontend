import axiosInstance from "./urlServices.js";


//  otp send karne krne liye 
export const sendOtp = async (phoneNumber, phoneSuffix, email) => {
    try {
        const response = await axiosInstance.post('/auth/sendotp', { phoneNumber, phoneSuffix, email })
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
}

//  otp verify karne ke liye

export const verifyOtp = async (phoneNumber, phoneSuffix, otp, email) => {
    try {
        const response = await axiosInstance.post('/auth/verifyotp', { phoneNumber, phoneSuffix, otp, email })
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message;

    }
}

// for updated data 
export const updatedUserProfile = async (updateData) => {
    try {
        const response = await axiosInstance.put('/auth/updateprofile', updateData)
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message;

    }
}


// check  user data 

export const checkUserAuth = async () => {
    try {
        const response = await axiosInstance.get('/auth/profilelogin')
        if (response.data.status === "success") {
            return { isAuthentication: true, user: response?.data?.data }
        } else if (response.data.status === 'error') {
            return { isAuthentication: false }
        }
    }

    catch (error) {
        throw error.response ? error.response.data : error.message;

    }
}

// logout user
export const logoutUser = async () => {
    try {
        const response = await axiosInstance.get('/auth/logout')
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message;

    }
}

// 


export const getAllUser = async () => {
    try {
        const response = await axiosInstance.get('/auth/users')
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message;

    }
}

