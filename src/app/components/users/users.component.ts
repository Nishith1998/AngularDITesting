import { Component, ElementRef, ViewChild } from '@angular/core';
import contactDetails from '../../MOCK_DATA';
import { Contact } from 'src/app/models/contact';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  contactList: Contact[] = contactDetails;
  currentIndex: number = 30;
  currentPage: number = 0;

  source: any;

  @ViewChild('divContainer') myDiv!: ElementRef;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.source = fromEvent(this.myDiv.nativeElement, 'scroll');
    this.source.pipe(debounceTime(100), distinctUntilChanged()).subscribe((event: any) => {
      // console.log("adsf: ", event);
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
        console.log("this is the end get next records");
        // if(30 * (this.currentPage + 1) <= this.contactList.length - 30)
        this.fetchNextRecords();
      }
    })
  }

  fetchNextRecords() {
    this.currentIndex += 30;
    this.currentPage++;
  }
}
