import dayjs from 'dayjs';

function formatDate(timestamp:any) {
    return dayjs(timestamp).format('DD-MMM-YYYY');
}

export const UtilFormatDate={
    formatDate
}