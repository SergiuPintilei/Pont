export class Pont {
    title: string;
    where: string;
    what: string;
    category: string;
    votes: number;

    constructor(title: string, where: string, what: string, category: string, votes?: number) {
        this.title = title;
        this.where = where;
        this.what = what;
        this.category = category;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes++;
    }

    voteDown(): void {
        this.votes--;
    }
}
