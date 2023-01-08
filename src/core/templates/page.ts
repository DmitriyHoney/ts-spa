abstract class Page {
    protected container: HTMLElement;
    static TextObject = {};

    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createHeaderTitle(txt: string) {
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = txt;
        return headerTitle;
    }

    render() {
        return this.container;
    }

    clearHTML() {
        this.container.innerHTML = '';
    }
}

export default Page;