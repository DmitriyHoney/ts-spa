import Page from '../../core/templates/page'

class MainPage extends Page {
    static TextObject = {
        MainTitle: 'MainPage',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        this.container.appendChild(title);
        return this.container;
    }
}

export default MainPage;