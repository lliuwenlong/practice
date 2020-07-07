class CreateImage {
    imageNode = null;
    constructor (src) {
        this.imageNode  = document.createElement("img");
        document.body.appendChild(this.imageNode);
        this.imageNode.src = src;
    }

    setSrc ( src ){
        this.imgNode.src = src;
    }
}


class ProxyImage {
    imageNode = null;
    img = null;
    src = "";
    constructor (src) {
        console.log(new CreateImage("123123.png"));
        this.img = new CreateImage("123123.png");
        this.src = src;
        this.imageNode = new Image();
        this.imageNode.src = src;
        this.imageNode.onload = this.onLoadImage.bind(this);
    }

    onLoadImage () {
        this.img.src = this.src;
    }
}

console.log(new ProxyImage("123123123.png"))