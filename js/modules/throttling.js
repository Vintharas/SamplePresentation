define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("4- throttling", "throttling", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true })
    ]);

});