﻿/// <reference path="event/event.ts" />
/// <reference path="phoenix.d.ts" />
/// <reference path="typings/webrtc/rtcpeerconnection.d.ts" />
module excess {
    export var log   = (...msg) => console.log.apply(console, msg);
    export var debug = (...msg) => console.debug.apply(console, msg);
    export var err = (...msg) => console.error.apply(console, msg);
}

var c: excess.ExcessClient;

window.onload = () => {

   // var id = Math.random().toString(36).substr(2, 2);
   // console.log('id: ', id);
   // c = new excess.ExcessClient("//localhost:4000/excess", id);
   // c.connectToServer().then(
   //     () => {
    //        console.log("Connected to server!");
    //    },
    //    (err) => {
   //         console.error(err);
    //    }
    //);

    

    //c.joinRoom('__debug');
};