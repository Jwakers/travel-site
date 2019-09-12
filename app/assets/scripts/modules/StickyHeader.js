import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js'

export default class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.triggerElement = $('.large-hero__title');
        this.createWaypoint();
    }

    createWaypoint() {
        let that = this;
        new Waypoint({
            element: that.triggerElement[0],
            handler: function() {
                that.siteHeader.toggleClass("site-header--dark");
            }
        })
    }
}