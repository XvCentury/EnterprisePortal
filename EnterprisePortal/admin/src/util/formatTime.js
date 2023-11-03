import moment from "moment"

moment.locale('zh-cn')
const formatTime = {
    getTime:(date)=>{
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
}

export default formatTime