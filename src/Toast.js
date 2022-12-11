import { toast } from "react-toastify"

const Notify = (text, type) => {
    if(type === "success") {
        toast.success(text);
    } 
    else {
        toast.error(text);
    }
} 

export default Notify;