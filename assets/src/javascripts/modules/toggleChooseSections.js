import {getOpenedSection} from "./methods";

export default ($, $$) => {

    let dataID, openedSectionSelector = "";
    let section = {};
    let closeBtn = $('.close-btn');
    let collapseSections = $$('.collapse-section');
    let showingSections = $$('.collapse-section.showing').length;

    window.toggleChooseSections = function (el) {

        if (showingSections) {
            closeBtn.classList.remove('showing');
        }

        collapseOpenedSections(el);

        showTargetSection();

        if (showingSections) {
            closeBtn.classList.add('showing');
        }
    };

    function collapseOpenedSections(el) {
        dataID = el.getAttribute('data-id');
        openedSectionSelector = getOpenedSection(dataID);
        section = $(openedSectionSelector.section);
        for (let i = 0; i < collapseSections.length; i++) {
            if (!(collapseSections[i].id === section.id)) {
                collapseSections[i].classList.remove('showing');
            }
        }
    }

    function showTargetSection() {
        section.classList.toggle('showing');
        showingSections = $$('.collapse-section.showing').length;
    }
}