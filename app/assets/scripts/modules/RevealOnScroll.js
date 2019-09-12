import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js'

export default class revealOnScoll {
    constructor(selector, offset = "85%") {
        this.itemsToReveal = $(selector);
        this.hideInitially();
        this.createWaypoints(offset);
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints(offset) {
        this.itemsToReveal.each(function() {
            let currentElement = this;
            new Waypoint({
                element: currentElement,
                handler: function() {
                    $(currentElement).addClass("reveal-item--is-visible");
                },
                offset: offset
            });
        })
    }
}