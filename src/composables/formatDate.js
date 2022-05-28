const getDateTime = (time) => {
    const dateTime = new Date(time)
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
        timeZone: 'America/Bogota'
    };
    const TimelineDate = new Intl.DateTimeFormat('es-CO', options).format(dateTime);

    const [date, hour] = TimelineDate.split(',');

    return { date, hour }
}

const useFormatDate = () => {
    return { getDateTime };
}

export default useFormatDate