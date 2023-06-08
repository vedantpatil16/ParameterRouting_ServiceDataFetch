import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrService 
{
  public getDetails(_id:number)
  {
    let arr : any[] =[[{"Name" : "Piyush","Salary":2400000, "Age":35},
                    {"Name" : "Vedant","Salary":1200000, "Age":20},
                    {"Name" : "Atharva","Salary":600000, "Age":22}],

                    [{"Name" : "Pranav","Salary":2400000, "Age":35},
                    {"Name" : "Shreyas","Salary":1200000, "Age":20},
                    {"Name" : "Siddhant","Salary":600000, "Age":20}],

                    [{"Name" : "Ayush","Salary":2400000, "Age":35},
                    {"Name" : "Anish","Salary":1200000, "Age":22},
                    {"Name" : "Virat","Salary":600000, "Age":20}],
                    
                    [{"Name" : "Vikrant","Salary":600000, "Age":25},
                    {"Name" : "Rohit","Salary":650000, "Age":20},
                    {"Name" : "Dinesh","Salary":500000, "Age":30}],
                    
                    [{"Name" : "Rakshit","Salary":600000, "Age":20},
                    {"Name" : "Aditya","Salary":800000, "Age":22},
                    {"Name" : "Anvay","Salary":1000000, "Age":23}]]
    return arr[((_id)-1)];
  }
  constructor() { }
}
