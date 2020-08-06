import events from './events.js';

export default class Publisher{
    events = {};

    subscribe = (eventName, cBack) => {
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(cBack);
    }

    publish = (eventName, data) => {
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].forEach(func => func(data));
    }

    get methods(){
        return {
            subscribe : this.subscribe,
            publish : this.publish,
            events : events
        };
    }
}