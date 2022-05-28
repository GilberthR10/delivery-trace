import { ref } from 'vue';
const error = ref(null)

const getTraceability = async (email, traceId) => {
    error.value = null
    try {
        const data = await fetch(`https://api.vueltap.com:8080/api_1.0/Delivery/SearchTraceability/${email
            }/${traceId}`)
        const { response, status, message } = await data.json()
        return { response, status, message }
    } catch (e) {
        error.value = e.message;
        console.log(error.value);
    }
}



const useTraceability = () => {
    return { error, getTraceability };
}

export default useTraceability