import { Injectable } from "@angular/core";

export class Post{
    constructor(public id:number, public title : string, public content: string){
    }
}