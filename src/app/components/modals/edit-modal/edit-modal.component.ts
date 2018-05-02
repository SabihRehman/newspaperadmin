import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() editData : {};
  constructor() { }

  ngOnInit() {
  }

}
