export default class Hero
{
    public name: String;
    public catchPhrase: String;
    public powers: String[];


    constructor(name: String = null, catchPhrase: String = null){
        this.name = name;
        this.catchPhrase = catchPhrase;
    }

    shout(){
        alert(this.catchPhrase)
    }
}