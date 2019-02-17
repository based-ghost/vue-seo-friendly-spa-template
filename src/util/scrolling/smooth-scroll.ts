import BezierEasing from 'bezier-easing';
import utils from './utils';

const easings = {
    'ease': [0.25, 0.1, 0.25, 1.0],
    'linear': [0.00, 0.0, 1.00, 1.0],
    'ease-in': [0.42, 0.0, 1.00, 1.0],
    'ease-out': [0.00, 0.0, 0.58, 1.0],
    'ease-in-out': [0.42, 0.0, 0.58, 1.0]
};

const abortEvents = [
    'mousedown',
    'wheel',
    'DOMMouseScroll',
    'mousewheel',
    'keyup',
    'touchmove'
];

const defaults = {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
};

export const scroller = () => {
    let element;
    let container;
    let duration;
    let easing;
    let offset;
    let force;
    let cancelable;
    let onStart;
    let onDone;
    let onCancel;
    let x;
    let y;
    let initialX;
    let targetX;
    let initialY;
    let targetY;
    let diffX;
    let diffY;
    let abort;
    let abortEv;
    let abortFn = e => {
        if (!cancelable) return;
        abortEv = e;
        abort = true;
    };
    let easingFn;
    let timeStart;
    let timeElapsed;
    let progress;

    function scrollTop(container) {
        let scrollTop = container.scrollTop;
        if (container.tagName.toLowerCase() === "body") {
            scrollTop = scrollTop || document.documentElement.scrollTop;
        }
        return scrollTop;
    }

    function scrollLeft(container) {
        let scrollLeft = container.scrollLeft;
        if (container.tagName.toLowerCase() === "body") {
            scrollLeft = scrollLeft || document.documentElement.scrollLeft;
        }
        return scrollLeft;
    }

    function step(timestamp) {
        if (abort) {
            return done();
        }

        if (!timeStart) {
            timeStart = timestamp;
        }

        timeElapsed = timestamp - timeStart;
        progress = Math.min(timeElapsed / duration, 1);
        progress = easingFn(progress);

        topLeft(
            container,
            initialY + diffY * progress,
            initialX + diffX * progress
        );

        timeElapsed < duration ? window.requestAnimationFrame(step) : done();
    }

    function done() {
        if (!abort) topLeft(container, targetY, targetX);
        timeStart = false;

        utils.off(container, abortEvents, abortFn);
        if (abort && onCancel) onCancel(abortEv, element);
        if (!abort && onDone) onDone(element);
    }

    function topLeft(element, top, left) {
        if (y) element.scrollTop = top;
        if (x) element.scrollLeft = left;

        if (element.tagName.toLowerCase() === "body") {
            if (y) document.documentElement.scrollTop = top;
            if (x) document.documentElement.scrollLeft = left;
        }
    }

    function scrollTo(target: HTMLElement, _duration: number = defaults.duration, options: any = {}) {
        if (typeof _duration === "number") {
            options.duration = _duration;
        }

        element = target;

        container = utils.$(options.container || defaults.container);
        duration = options.duration || defaults.duration;
        easing = options.easing || defaults.easing;
        offset = options.offset || defaults.offset;

        force = options.hasOwnProperty("force")
            ? options.force !== false
            : defaults.force;

        cancelable = options.hasOwnProperty("cancelable")
            ? options.cancelable !== false
            : defaults.cancelable;

        onStart = options.onStart || defaults.onStart;
        onDone = options.onDone || defaults.onDone;
        onCancel = options.onCancel || defaults.onCancel;
        x = options.x === undefined ? defaults.x : options.x;
        y = options.y === undefined ? defaults.y : options.y;

        var cumulativeOffsetContainer = utils.cumulativeOffset(container);
        var cumulativeOffsetElement = utils.cumulativeOffset(element);

        if (typeof offset === "function") {
            offset = offset();
        }

        initialY = scrollTop(container);
        targetY = cumulativeOffsetElement.top - cumulativeOffsetContainer.top + offset;

        initialX = scrollLeft(container);
        targetX = cumulativeOffsetElement.left - cumulativeOffsetContainer.left + offset;

        abort = false;
        diffY = targetY - initialY;
        diffX = targetX - initialX;

        if (!force) {
            const containerTop = initialY;
            const containerBottom = containerTop + container.offsetHeight;
            const elementTop = targetY;
            const elementBottom = elementTop + element.offsetHeight;
            if (elementTop >= containerTop && elementBottom <= containerBottom) {
                return;
            }
        }

        if (typeof easing === "string") {
            easing = easings[easing] || easings["ease"];
        }

        easingFn = BezierEasing.apply(BezierEasing, easing);

        if (!diffY && !diffX) {
            return;
        }

        if (onStart) {
            onStart(element);
        }

        utils.on(container, abortEvents, abortFn, { passive: true });
        window.requestAnimationFrame(step);

        return () => {
            abortEv = null;
            abort = true;
        };
    }

    return scrollTo;
};

const _scroller = scroller();
export default _scroller;