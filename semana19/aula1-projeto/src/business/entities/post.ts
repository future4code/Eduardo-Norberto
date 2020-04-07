export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private creationDate: Date,
        private type: PostType,
        private userId: string
    ) { }

    public getId(): string {
        return this.id
    }

    public getPhoto(): string {
        return this.photo
    }

    public getDescription(): string {
        return this.description
    }

    public getCreationDate(): Date {
        return this.creationDate
    }

    public getType(): PostType {
        return this.type
    }

    public getUserId(): string {
        return this.userId
    }

    public static checkPostType(type: string): PostType {
        switch (type) {
            case "normal":
                return PostType.normal;
            case "event":
                return PostType.event;
            default:
                throw new Error("It's not a post type");
        }
    }
}

export enum PostType {
    normal = "normal",
    event = "event"
}