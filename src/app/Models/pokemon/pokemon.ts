
export class Pokemon{
    constructor(
        public image: string,
        public name : string,
        public type : Array<string>,
        public lvl: number,
        public preevo: string,
        public evo: string,
        public abilities: Array<string>
    ){}
}