export interface Studio {
     _id: string;
     username: string;
     email: string;
     studio_title: string;
     category: string;
     hourly_rate: number;
     security_deposit: number;
     max_capacity: number;
     location: string;
     image: string;
     amenities: string[];
     details: string;
     createdAt: string;
}
