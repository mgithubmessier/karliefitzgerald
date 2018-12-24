import aboutContent from './aboutTemplate';
import educationContent from './educationTemplate';
import experienceContent from './experienceTemplate';

export default function (key) {
    switch(key) {
        case 'education':
            return educationContent();
        case 'experience':
            return experienceContent();
        case 'about':
            return aboutContent();
        default:
            return {};
    }
}