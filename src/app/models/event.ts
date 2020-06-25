export class Event {

    ID: number;
    EventName: string;
    Date: Date;
    Description: string;
    Location: string;
    Category: string;
    AmountOfGames: number;
    AdminID: number;
    Contestant:[{
        ID: number;
        Firstname: string;
        Lastname: string;
        Age: number;
        Email: string;
        Phonenumber: string;
    }
    ];
    Game:[{
        gameID: number;
        name: string;
        description: string;
        maxpoints: number;
    }]
    // ID: number;
    // EventName: string;
    // Date: Date;
    // Description: string;
    // Location: string;
    // Category: string;
}
