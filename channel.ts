﻿/// <reference path="excess.ts" />
module excess {
    /**
    * Wraps a WebRTC DataChannel
    */
    export class Channel {

        private dataChannel: RTCDataChannel;

        public onMessage: events.I1ArgsEvent<any> = new events.TypedEvent();
        public onClose: events.I1ArgsEvent<any> = new events.TypedEvent();
        public onError: events.I1ArgsEvent<any> = new events.TypedEvent();
        public onOpen: events.I1ArgsEvent<any> = new events.TypedEvent();
        
        get label() {
            return this.dataChannel.label;
        }

        constructor(rtcDataChannel: RTCDataChannel) {
            this.dataChannel = rtcDataChannel;
            this.attachCallbacks();
        }

        attachCallbacks() {
            this.dataChannel.onmessage = this._onMessage;
            this.dataChannel.onerror = this._onError;
            this.dataChannel.onclose = this._onClose;
            this.dataChannel.onopen = this._onOpen;
        }


        public send(message: any) {
            var msg = JSON.stringify(message);
            this.dataChannel.send(msg);
        }

        /* Callbacks */

        private _onMessage = (event: RTCMessageEvent) => {
            var parsed = JSON.parse(event.data);
            this.onMessage.trigger(parsed);
        }

        private _onError = (event: any) => {
            excess.log("\nCHANNEL ERROR: ", event);
            this.onError.trigger(event);
        } 

        private _onClose = (event: any) => {
            excess.log("\nCHANNEL CLOSE: ", event);
            this.onClose.trigger(event);
        }

        private _onOpen = (event: any) => {
            excess.log("\nCHANNEL OPEN: ", event);
            this.onOpen.trigger(event);
        }








    }


}