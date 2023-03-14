import {createClient, createMicrophoneAndCameraTracks} from 'agora-rtc-react'

const appId = "a056cc53a7f64261825ef5e2eef4bbb3"
const token = "007eJxTYEj22ixc+799iubamUHWcw6bVvq6P2qqPvuRrebKj5zFPi0KDIkGpmbJyabGieZpZiZGZoYWRqapaaapRqmpaSZJSUnGjY/4UxoCGRk+qjIzMEIhiM/C4JuYmcfAAACDxx/w"

export const config = {
    mode: "rtc",
    codec: "vp8",
    appId,
    token
}
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = "main"
