export class Pont {
    liked = false;

    constructor(
        public title: string,
        public where: string,
        public what: string,
        public category: string,
        public price: number,
        public votes: number = 0,
        public imageUrl?: string) {
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
