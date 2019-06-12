import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    toggle =false;
    arr: number[] =[];
    i: number = 0;
    togg(){
        if(this.toggle){ this.toggle = false;}
        else{ this.toggle = true;}
        this.arr.push(this.i);
        this.i++; 
    }

}