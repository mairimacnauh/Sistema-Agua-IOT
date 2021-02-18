import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-estadistica',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospittalComponent implements OnInit {

  dataHosp: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.dataHosp = [
      {
        image: 'https://randomuser.me/api/portraits/men/30.jpg',
        name: 'Dean Lynch',
        createdBy: '',
        createdDate: '05/06/2020',
        lastModified: '10:00'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/76.jpg',
        name: 'Ralph Barnes',
        createdBy: '',
        createdDate: '05/06/2020',
        lastModified: '10:00'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/38.jpg',
        name: 'Brett Castillo',
        createdBy: '',
        createdDate: '05/06/2020',
        lastModified: '10:00'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Antony Barnes',
        createdBy: '',
        createdDate: '05/06/2020',
        lastModified: '08:35'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/34.jpg',
        name: 'Fernando Barnes',
        createdBy: '',
        createdDate: '05/06/2020',
        lastModified: '10:00'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/36.jpg',
        name: 'Ramiro Barnes',
        createdBy: '',
        createdDate: '05/06/2020',
        lastModified: '10:00'
      },
    ];
  }

}
