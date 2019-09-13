import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';
import smoothScroll from 'jquery-smooth-scroll';

export default class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.triggerElement = $('.large-hero__title');
        this.createWaypoint();
        this.pageSection = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
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

    createPageSectionWaypoint() {
        var that = this;
        this.pageSection.each(function() {
            var currentEl = this;
            new Waypoint({
                element: currentEl,
                handler: function(direction) {
                    if (direction === "down") {
                        var headerLink = this.element.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(headerLink).addClass('is-current-link');
                    }
                },
                offset: "18%"
            });
            new Waypoint({
                element: currentEl,
                handler: function(direction) {
                    if (direction === "up") {
                        var headerLink = this.element.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(headerLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            })
        })
    }
}