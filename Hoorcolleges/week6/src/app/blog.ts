export class Blog
{
    name;
    author;

    constructor(data){
        this.name = data.name;
        this.author = data.author;
    }

    subscribe(){
        console.log('yay a new subscriber, klik even op het belletje');
    }
}