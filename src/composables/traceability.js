import { ref } from 'vue';
const error = ref(null)

const getTraceability = async (email = "jorpcolombia@gmail.com", traceId = "11780767") => {
    error.value = null
    try {
        const data = await fetch(`https://api.vueltap.com:8080/api_1.0/Delivery/SearchTraceability/${email
            }/${traceId}`)
        const traceability = await data.json()
        return traceability.response
    } catch (e) {
        error.value = e.message;
    }
}



const useTraceability = () => {
    return { error, getTraceability };
}

export default useTraceability