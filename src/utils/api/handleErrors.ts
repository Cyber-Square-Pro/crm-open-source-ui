import { toast } from "react-hot-toast";

export const transformErrorResponse = (response : any ) => {
    if(response?.data?.error?.length === 0){
        toast.error(response?.data?.message);
    }
    return response;
}

export const transformNormalErrorResponse = (response : any, toastr: boolean = false ) => {
    if(response?.data?.error?.length === 0 && toastr){
        toast.error(response?.data?.message);
    }
    return response;
}