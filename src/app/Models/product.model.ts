import { Images } from './images.model';
import { Reviews } from './reviews.model';
export class Product {
    ID : number;
    Poster : string;
    CategoryID : number
    Name : string;
    Price : number;
    Desc : string;
    Created_at : Date;
    Udated_at? : Date;
    TagName : string; 
    Note?:number;
    Reviews? : Reviews []; 
    Images? : Images [];
}
