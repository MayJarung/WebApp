let send_cur_time = () => {
    postMessage(new Date().toString())
}
setInterval(send_cur_time, 1000)