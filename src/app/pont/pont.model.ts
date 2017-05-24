export class Pont {
    liked = false;

    constructor(
        public title: string,
        public place: string,
        public what: string,
        public category: string,
        public price: number,
        public imageUrl?: string,
        public votes: number = 0,
        public dateAdded: Date = new Date(),
        public user?: any) {
    }

    toggleLike(): boolean {
        this.liked = !this.liked;
        if (this.liked) {
            this.votes++;
            return true;
        } else {
            this.votes--;
            return false;
        }
    }
}
