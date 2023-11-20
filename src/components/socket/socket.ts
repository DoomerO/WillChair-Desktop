import {io} from "socket.io-client";

export const socket = io("http://localhost:3344", {
    autoConnect : false
});