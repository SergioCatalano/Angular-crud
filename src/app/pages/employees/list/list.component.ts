import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  fakeData = [
    {
      name: 'Sergio',
      lastName: 'Cataldo',
      email: 'correo@random.com',
      startDate: '17/02/2021',
    },
    {
      name: 'Maria',
      lastName: 'Fernandez',
      email: 'otrocorreo@random.com',
      startDate: '12/12/2020',
    },
    {
      name: 'Pepe',
      lastName: 'Gomez',
      email: 'otro@random.com',
      startDate: '10/11/2011',
    },
    {
      name: 'Ermenegildo',
      lastName: 'Lopez',
      email: 'make@random.com',
      startDate: '03/06/1999',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item:any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToSee(item:any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item:any): void {
    alert('Deleted');
  }
}
