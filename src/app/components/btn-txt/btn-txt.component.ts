import { Component, OnInit, Input } from "@angular/core";
@Component({
    selector: 'btn-txt',
    templateUrl: './btn-txt.component.html',
    styleUrls: ['./btn-txt.component.css']
})
export class BtnTextComponent implements OnInit {
    
    @Input() btnTxt: string = "";
    @Input() imgFileName: string = "";

    ngOnInit(): void {
        
    }
}