
export class Logger {
    title = {};
    body = {};
    constructor(title) {

        this.title = {
            body: title || '---',
            color: 'darkgrey',
            size: '1rem'
        };

        this.body = {
            color: '#008f68',
            size: '1rem',
            textShadow: `0 0 5px rgba(0, 0 ,0 , 0.2)`
        };
    }

    setTiltleStyle({color, size}) {
        if(!!color) this.title.color = color;
        if(!!size) this.title.size = size;
    }

    setBodyStyle({color, size, textShadow}) {
        if(!!color) this.body.color = color;
        if(!!size) this.body.size = size;
        if(!!textShadow) this.body.textShadow = textShadow;
    }

    log(body = '') {
        console.log(
            `%c${this.title.body} | %c${body}`,
            `color: ${this.title.color}; 
            font-weight: bold; 
            font-size: ${this.title.size};
            `,
            `color: ${this.body.color}; 
            font-weight: bold; 
            font-size: ${this.body.size};
            text-shadow: ${this.body.textShadow}
            `
        );
    }
}