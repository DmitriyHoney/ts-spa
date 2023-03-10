import Page from '../../core/templates/page'

class SettingsPage extends Page {
    static TextObject = {
        MainTitle: 'SettingsPage',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
        this.container.appendChild(title);
        return this.container;
    }
}

export default SettingsPage;