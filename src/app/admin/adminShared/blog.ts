/**
 * Created by stefan.trajkovic on 10.5.2017..
 */
export class Blog {
    constructor(
        public title: string,
        public content: string,
        public imgTitle?: string,
        public img?: any,
        public id?: string
    ){}
}