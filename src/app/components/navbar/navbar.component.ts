import { Component, OnInit } from '@angular/core';
import { TestnavComponent } from 'src/app/test-components/testnav/testnav.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
