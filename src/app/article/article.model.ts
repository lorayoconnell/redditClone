export class Article {
    title: string;
    link: string;
    votes: number;
    role: string;
    admin: boolean;

    constructor(title: string, link: string, role: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.role = role;

        if (this.role == "admin") {
            this.admin = true;
        }
        else
            this.admin = false;

        // console.log("article.model.ts -- this.title: " + this.title + " this.role: " + this.role + " this.admin: " + this.admin);
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}