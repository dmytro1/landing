export default ($, $$) => {
    window.toggleChooseSections = function (button) {
        $('.close-btn').classList.add('showing');
        if ($$('.collapse-section.showing').length) {
            $('.close-btn').classList.remove('showing');
        }

        let dataID = button.getAttribute('data-id');
        let section = $('#section-' + dataID);
        let collapseSections = $$('.collapse-section');
        for (let i = 0; i < collapseSections.length; i++) {
            if (!(collapseSections[i].id === section.id)) {
                collapseSections[i].classList.remove('showing');
            }
        }
        section.classList.toggle('showing');
        if ($$('.collapse-section.showing').length) {
            $('.close-btn').classList.add('showing');
        }
    };
}